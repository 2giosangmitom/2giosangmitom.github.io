import nodemailer from 'nodemailer';
import { contactSchema } from '#shared/schemas/contact';

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

const headingStyles = `
  color: #007bff;
  margin-top: 0;
`;

const blockquoteStyles = `
  border-left: 4px solid #007bff;
  padding-left: 12px;
  margin: 10px 0;
  color: #555;
  background: #fff;
  border-radius: 4px;
`;

export default defineEventHandler(async (event) => {
  // Validate input
  const result = await readValidatedBody(event, (body) => contactSchema.safeParse(body));
  if (!result.success) {
    throw createError({
      statusCode: 400,
      message: 'Invalid input data'
    });
  }

  const { fullName, email, topic, message } = result.data;

  // Prepare Discord webhook
  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!discordWebhookUrl) {
    throw createError({
      statusCode: 500,
      message: 'Server misconfiguration: Discord Webhook URL missing'
    });
  }

  const embed = {
    title: 'New Contact Form Submission',
    fields: [
      { name: 'Full Name', value: fullName, inline: true },
      { name: 'Email', value: email, inline: true },
      { name: 'Topic', value: topic, inline: false },
      { name: 'Message', value: message || 'No message provided', inline: false }
    ],
    timestamp: new Date().toISOString()
  };

  // Send Discord message
  try {
    const res = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] })
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => '');
      console.error('Discord webhook failed:', errorText || res.statusText);
      throw new Error('Discord webhook failed');
    }
  } catch (err) {
    console.error('Error sending to Discord:', err);
    throw createError({
      statusCode: 502,
      message: 'Failed to notify via Discord'
    });
  }

  // Send confirmation email
  try {
    await transporter.sendMail({
      from: { name: 'Vo Quang Chien', address: 'voquangchien.dev@proton.me' },
      to: email,
      subject: "I've received your message!",
      html: `
        <div style="${baseStyles}">
          <h2 style="${headingStyles}">Thank you for reaching out, ${fullName}!</h2>
          <p>We've received your message about <strong>${topic}</strong>:</p>
          <blockquote style="${blockquoteStyles}">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <p>I'll review your message and get back to you as soon as possible.</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #999; text-align: center;">
            This is an automated confirmation. You don't need to reply to this email.
          </p>
        </div>
      `
    });
  } catch (err) {
    console.error('Error sending email:', err);
    throw createError({
      statusCode: 502,
      message: 'Failed to send confirmation email'
    });
  }

  // Respond with no content (success)
  setResponseStatus(event, 204);
});
