import * as Handlebars from 'handlebars';

export class TemplateProcessor {
	compile = (template: string, data: any): string => {
		const compiledTemplate = Handlebars.compile(template);
		return compiledTemplate(data);
	};
}
