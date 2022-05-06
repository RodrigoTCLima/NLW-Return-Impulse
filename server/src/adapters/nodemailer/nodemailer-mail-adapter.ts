import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8a22ddd5aa4ba5",
      pass: "9d0ec8a981841f"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
        transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Rodrigo Lima <rodrigotiagocl@gmail.com>",
            subject: subject,
            html: body
        });
    }
}
