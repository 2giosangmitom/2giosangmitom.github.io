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

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) => contactSchema.safeParse(body));

  if (!result.success) {
    throw createError({
      statusCode: 400,
      message: 'Invalid input',
      data: result.error.issues
    });
  }

  const { fullName, email, topic, message } = result.data;

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

  const labelStyles = `
    font-weight: bold;
  `;

  const blockquoteStyles = `
    border-left: 4px solid #007bff;
    padding-left: 12px;
    margin: 10px 0;
    color: #555;
    background: #fff;
    border-radius: 4px;
  `;

  // Email to me
  await transporter.sendMail({
    from: { name: fullName, address: email },
    to: 'voquangchien.dev@proton.me',
    subject: `New Contact Form Submission: ${topic}`,
    html: `
      <div style="${baseStyles}">
        <h2 style="${headingStyles}">New Contact Form Submission</h2>
        <p><span style="${labelStyles}">Name:</span> ${fullName}</p>
        <p><span style="${labelStyles}">Email:</span> ${email}</p>
        <p><span style="${labelStyles}">Topic:</span> ${topic}</p>
        <p><span style="${labelStyles}">Message:</span></p>
        <blockquote style="${blockquoteStyles}">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #999; text-align: center;">
          This message was sent via your website contact form.
        </p>
      </div>
    `
  });

  // Confirmation email to user
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

  setResponseStatus(event, 204);
});
