import { Item } from '@beyond-js/reactive/entities';
import { UserProvider } from 'tests/entities.bridge';
interface IUser {
	names: string;
	email: string;
}

export /*bundle*/ class User extends Item<IUser> {
	protected properties = ['names', 'email'];

	constructor(params: { id: string | undefined } = { id: undefined }) {
		super({
			provider: UserProvider,
			storeName: 'users',
			db: 'tests-sender-db',
			...params,
		});
	}

	sendEmail = async () => {
		try {
			const response = await this.provider.sendEmail({ email: this.email, names: this.names });
			if (!response.status) throw response.error;

			return { status: true };
		} catch (error) {
			return { status: false, error };
		}
	};
}
