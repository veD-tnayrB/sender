export /*bundle*/ interface IEmail {
	to: string | string[];
	from: string;
	subject: string;
	template: string;
	data: any;
}

export /*bundle*/ class Email {
	to: string | string[];
	from: string;
	subject: string;
	template: string;
	data: any;

	constructor(email: { to: string; from: string; subject: string; template: string; data: any }) {
		this.to = email.to;
		this.from = email.from;
		this.subject = email.subject;
		this.data = email.data;
		this.template = email.template;
	}
}
