# 📨 Sender

Essential-js/sender is a minimalistic and ready to use TypeScript package for sending emails.

## Installation

To install Essential-js/sender, run the following command:

```shell
npm i @essential-js/sender
```

## Usage

To use Essential-js/sender in your project, first import the `sender` object, log in with your credentials using the
`login` method and then use the `send` method to send an email. Here's an example:

```typescript
import { sender } from '@essential-js/sender/core';

// Make sure to put your correct credentials.
const credentials = { user: 'your_SMTP_email', pass: 'your_SMTP_email_password' };
const opts = { service: 'gmail', host: 'your_SMTP_host', port: 'your_SMTP_port' }

sender.login(credentials, opts);

const response = await sender.send({
	to: 'example@gmail.com'
	subject: 'your_email_title',
	template: `
		<html>
		<head>
			<style>
				/* Email Styles */
			</style>
		</head>
		<body>
			<h1>Hola {{user}}!</h1>
			    <p>This is a email test.</p>
			    <p>Your age is {{age}}.</p>
		</body>
	</html>
	`,
	data: {
        user: 'TEST 123_EXE',
		age: 38,
	},
});
```
