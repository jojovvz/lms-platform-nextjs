import PasswordResetEmail from "@/emails/password-reset-email";
import { transporter } from "@/lib/nodemailer";
import { render } from "@react-email/render";

export const passwordResetEmail = async (email: string, token: string) => {

  const emailHtml = await render(PasswordResetEmail({ token }));

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email",
    html: emailHtml,
  });
};