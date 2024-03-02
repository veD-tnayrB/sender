import * as nodemailer from 'nodemailer';
import { Email } from '../entities/email.entity';

export interface IOptions {
	host?: string;
	port?: number;
	service: string;
}

export class EmailTransport {
	private credentials: any;
	private opts: IOptions;

	login = (credentials: { [key: string]: any }, opts: IOptions) => {
		this.credentials = credentials;
		this.opts = opts;
	};

	send = async (email: Email) => {
		try {
			const transporter = nodemailer.createTransport({
				...this.opts,
				auth: {
					...this.credentials,
				},
				tls: { rejectUnauthorized: false },
			});

			const response = await transporter.sendMail({
				...email.data,
				to: email.to,
				subject: email.subject,
				html: email.template,
			});

			if ('error' in response) throw response;
			return { status: true };
		} catch (error) {
			return { status: false, error };
		}
	};
}
