import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    },

});

export const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER
}


transporter.verify()
    .then(() => console.log("Nodemailer is ready to send emails!"))
    .catch((err) => console.error("Nodemailer setup failed:", err));
