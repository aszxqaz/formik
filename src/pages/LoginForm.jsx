import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import FormikControl from '../components/FormikControl';

export default function LoginForm() {
	const initialValues = {
		email: '',
		password: '',
	};
	const validationSchema = object({
		email: string().email('Invalid email').required('Email required'),
		password: string().required('Password required'),
	});
	const onSubmit = (values) => {
		console.log(values);
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			validateOnBlur={false}>
			{(formik) => (
				<Form>
					<FormikControl control="input" type="email" name="email" label="Email" />
					<FormikControl
						control="input"
						type="password"
						name="password"
						label="Password"
					/>
					<button type="submit" disabled={!(formik.isValid && formik.dirty)}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
}
