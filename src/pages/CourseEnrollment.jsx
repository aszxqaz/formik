import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import FormikControl from '../components/FormikControl';

export default function CourseEnrollment() {
	const formikProps = {
		initialValues: {
			email: '',
			bio: '',
			course: '',
			skillset: [],
			date: null,
		},
		validationSchema: object({
			email: string().email('Wrong format').required('required'),
			bio: string().required('required'),
			course: string().required('required'),
			date: string().required('required').nullable(),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	};
	const courseOptions = [{ value: 'React' }, { value: 'Vue' }, { value: 'Angular' }];
	const skillsetOptions = [{ value: 'HTML' }, { value: 'JS' }, { value: 'CSS' }];
	return (
		<Formik {...formikProps}>
			{(formik) => {
				return (
					<Form>
						<FormikControl control="input" type="email" name="email" label="Email" />
						<FormikControl control="textarea" name="bio" label="Bio" />
						<FormikControl
							control="select"
							name="course"
							label="Course"
							options={courseOptions}
						/>
						<FormikControl
							control="checkbox"
							name="skillset"
							label="Skillset"
							options={skillsetOptions}
						/>
						<FormikControl control="date" name="date" label="Course Date" />
                  <button type="submit">Submit</button>
					</Form>
				);
			}}
		</Formik>
	);
}
