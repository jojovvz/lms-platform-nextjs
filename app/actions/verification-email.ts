import VerificationEmail from "@/emails/verification-email";
import { transporter } from "@/lib/nodemailer";
import { render } from "@react-email/render";

export const sendVerificationEmail = async (email: string, token: string) => {

  const emailHtml = await render(VerificationEmail({ token }));

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email",
    html: emailHtml,
  });
};