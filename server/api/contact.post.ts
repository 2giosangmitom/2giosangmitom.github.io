import nodemailer from 'nodemailer';
import { contactSchema } from '#shared/schemas/contact';
import { google } from 'googleapis';
import type z from 'zod';

type ContactInput = z.infer<typeof contactSchema>;

const baseStyles = `
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const headingStyles = `color: #007bff; margin-top: 0;`;

const blockquoteStyles = `
  border-left: 4px solid #007bff;
  padding-left: 12px;
  margin: 10px 0;
  color: #555;
  background: #fff;
  border-radius: 4px;
`;

function formatDateMDY(date = new Date()) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

// Gmail OAuth2 transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.GMAIL_USER,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH
  }
});

// Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: 'service_account',
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });

async function appendToSheet(values: ContactInput) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: 'Sheet1!A:F',
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [[values.fullName, values.topic, values.message, 'Not replied', formatDateMDY(), values.email]]
    }
  });
}

function buildDiscordEmbed(data: ContactInput) {
  return {
    embeds: [
      {
        title: 'New Contact Form Submission',
        fields: [
          { name: 'Full Name', value: data.fullName, inline: true },
          { name: 'Email', value: data.email, inline: true },
          { name: 'Topic', value: data.topic, inline: false },
          { name: 'Message', value: data.message || 'No message provided', inline: false }
        ],
        timestamp: new Date().toISOString()
      }
    ]
  };
}

function buildConfirmationEmail(data: ContactInput) {
  return {
    from: { name: 'Vo Quang Chien', address: '2giosangmitom@gmail.com' },
    to: data.email,
    subject: "I've received your message!",
    html: `
      <div style="${baseStyles}">
        <h2 style="${headingStyles}">Thank you for reaching out, ${data.fullName}!</h2>
        <p>We've received your message about <strong>${data.topic}</strong>:</p>
        <blockquote style="${blockquoteStyles}">
          ${data.message.replace(/\n/g, '<br>')}
        </blockquote>
        <p>I'll review your message and get back to you as soon as possible.</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #999; text-align: center;">
          This is an automated confirmation. You don't need to reply to this email.
        </p>
      </div>
    `
  };
}

// Main handler
export default defineEventHandler(async (event) => {
  // Validate request body
  const result = await readValidatedBody(event, (body) => contactSchema.safeParse(body));
  if (!result.success) {
    throw createError({ statusCode: 400, message: 'Invalid input data' });
  }
  const data = result.data;

  // Ensure Discord webhook is configured
  if (!process.env.DISCORD_WEBHOOK_URL) {
    throw createError({
      statusCode: 500,
      message: 'Server misconfiguration: Discord Webhook URL missing'
    });
  }

  try {
    // Execute all side effects in parallel
    await Promise.all([
      fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildDiscordEmbed(data))
      }).then((res) => {
        if (!res.ok) throw new Error(`Discord webhook failed: ${res.statusText}`);
      }),
      appendToSheet(data),
      transporter.sendMail(buildConfirmationEmail(data))
    ]);

    setResponseStatus(event, 204);
  } catch (err) {
    console.error('Error processing contact form:', err);
    throw createError({ statusCode: 502, message: 'Failed to process contact form' });
  }
});
