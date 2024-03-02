import { sender } from '@essential-js/sender/core';

const emailTemplate = `<!DOCTYPE html>
<html>
<body>
<p style="color: {{textColor}}; font-size: 1.1rem;"> {{regards}}&nbsp;{{name}}</p>

<p style="color: {{textColor}}; font-size: 1.1rem;">{{info}}</p>

<a href="{{urlGo}}" style="font-size: 1.1rem;">{{go}}</a>

<p style="color: {{textColor}}; font-size: 1.1rem;">{{additional}}</p>

<p style="color: {{textColor}}; font-size: 1.1rem;">{{kindRegards}}</p>
<p style="color: {{textColor}}; font-size: 1.1rem;">{{company}}</p>
</body>
</html>
`;

export /*actions*/ /*bundle*/
class UserProvider {
	#sender: sender;
	constructor() {
		this.#sender = sender;
		const credentials = {
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			user: process.env.SMTP_EMAIL,
			pass: process.env.SMTP_PASSWORD,
		};
		const opts = {
			host: process.env.SMTP_HOST,
			service: 'gmail',
			port: process.env.SMTP_PORT,
		};
		this.#sender.login(credentials, opts);
	}

	sendEmail(params: { email: string; names: string }) {
		return this.#sender.send({
			to: params.email,
			subject: `Welcome ${params.names}`,
			template: emailTemplate,
			data: {
				regards: 'Estimado/a',
				info: 'Esto es una prueba de envio de email:',
				textColor: '#000',
				go: 'Si le das estaras ayudando a la comunidad de discapacitados que aman programar',
				urlGo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs`,
				kindRegards: 'Atentamente',
				company: 'Un discapacitado que le gusta programar fuera del trabajo',
				additional:
					'Si te llego este email significa que eres un discapacitado o que el/la discapacitado/a que estaba testeando puso mal el email de pruebas y que el email que salio fue justamente el tuyo, locuras, en caso de que haya sido asi disfrutalo, este tipo de coincidencias no se dan, vive un dia a la vez, ama a tu familia y sobretodo hazte a ti mismo/a orgulloso/a de tus logros, cada dia cuenta.',
				name: `${params.names}`,
			},
		});
	}
}
