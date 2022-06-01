import FormInput from 'components/form-input/form-input.component';
import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import './sign-up.scss';

import Button from 'components/button/Button'


const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [FormFields, setFormFields] = useState(defaultFormFields);

	const { displayName, email, password, confirmPassword } = FormFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });

			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('email already in use!Do you want to sign in instead?');
			} else {
				console.log('user creation encountered an error', error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...FormFields, [name]: value });
	};

	console.log(FormFields);
	return (
		<div className="container">
		<h2>Don't have an account?</h2>
			<span>Please, Sign Up with your Email and Password</span>
			<form onSubmit={handleSubmit}>
				{/* -1 */}

				<FormInput
					label="Display Name"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>

				{/* -2 */}

				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				{/* -3 */}

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				{/* -4 */}

				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>

				<Button type="submit" >Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
