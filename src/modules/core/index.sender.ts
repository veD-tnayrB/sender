import { IEmail } from './entities/email.entity';
import { EmailTransport } from './helpers/email.transport';
import { TemplateProcessor } from './helpers/template.processor';

export class Sender {
	#emailTransport: EmailTransport = new EmailTransport();
	#templateProcessor: TemplateProcessor = new TemplateProcessor();

	login = (credentials: { [key: string]: any }, opts: any) => {
		return this.#emailTransport.login(credentials, opts);
	};

	send = async (email: IEmail) => {
		try {
			const template = this.#templateProcessor.compile(email.template, email.data);
			const response = await this.#emailTransport.send({ ...email, template });
			if ('status' in response && !response.status) throw response.error;

			return { status: true };
		} catch (error) {
			return { status: false, error };
		}
	};
}

export /*bundle*/ const sender = new Sender();
