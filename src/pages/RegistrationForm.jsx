import { Form, Formik } from 'formik';
import { object, ref, string } from 'yup';
import FormikControl from '../components/FormikControl';

export default function RegistrationForm() {
	const options = [
		{ key: 'Email', value: 'emailmoc' },
		{ key: 'Telephone', value: 'telephonemoc' },
	];
	const formikOptions = {
		initialValues: {
			email: '',
			password: '',
			confirmPassword: '',
			modeOfContact: '',
			phone: '',
		},
		validationSchema: object({
			email: string().email('Invalid email format').required('Email required'),
			password: string().required('Password required'),
			confirmPassword: string()
				.oneOf([ref('password'), ''], 'Password must match')
				.required('Password required'),
			modeOfContact: string().required('Mode of contact required'),
			phone: string().when('modeOfContact', {
				is: 'telephonemoc',
				then: string().required('Phone is required when telephone MOC chosen'),
			}),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	};
	return (
		<Formik {...formikOptions}>
			{(formik) => {
				return (
					<Form>
						<FormikControl control="input" type="email" name="email" label="Email" />
						<FormikControl
							control="input"
							type="password"
							name="password"
							label="Password"
						/>
						<FormikControl
							control="input"
							type="password"
							name="confirmPassword"
							label="Confirm password"
						/>
						<FormikControl
							control="radio"
							label="Mode of contact"
							name="modeOfContact"
							options={options}
						/>
						{formik.values.modeOfContact === 'telephonemoc' && (
							<FormikControl
								control="input"
								type="text"
								label="Phone number"
								name="phone"
							/>
						)}
						<button type="submit" disabled={!formik.isValid}>Submit</button>
					</Form>
				);
			}}
		</Formik>
	);
}
