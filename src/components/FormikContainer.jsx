import { Form, Formik } from 'formik';
import { array, date, object, string } from 'yup';
import FormikControl from './FormikControl';

export default function FormikContainer() {
	const dropdownOptions = [
		{ key: 'Select an option', value: '' },
		{ key: 'Option 1', value: 'option1' },
		{ key: 'Option 2', value: 'option2' },
		{ key: 'Option 3', value: 'option3' },
	];
	const radioOptions = [
		{ key: 'Option 1', value: 'rOption1' },
		{ key: 'Option 2', value: 'rOption2' },
		{ key: 'Option 3', value: 'rOption3' },
	];
	const checkboxOptions = [
		{ key: 'Option 1', value: 'cOption1' },
		{ key: 'Option 2', value: 'cOption2' },
		{ key: 'Option 3', value: 'cOption3' },
	];
	const initialValues = {
		email: '',
		description: '',
		selectOption: '',
		radioOption: '',
		checkboxOption: [],
		birthDate: null,
	};
	const validationSchema = object({
		email: string().email('Wrong format of email').required('Email is required.'),
		description: string().required('Description required'),
		selectOption: string().required('Select option is required'),
		radioOption: string().required('Radio option required'),
		checkboxOption: array().required('Checkbox required'),
		birthDate: date().required('Date required').nullable(),
	});
	const onSubmit = (values) => {
		console.log(values);
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{(formik) => {
				console.log('Formik renders...');
				return (
					<Form>
						<FormikControl
							control="input"
							type="text"
							name="email"
							label="Email address"
						/>
						<FormikControl control="textarea" label="Description" name="description" />
						<FormikControl
							control="select"
							label="Select a topic"
							name="selectOption"
							options={dropdownOptions}
						/>
						<FormikControl
							control="radio"
							label="Radio topic"
							name="radioOption"
							options={radioOptions}
						/>
						<FormikControl
							control="checkbox"
							label="Checkbox Topics"
							name="checkboxOption"
							options={checkboxOptions}
						/>
						<FormikControl control="date" label="Pick a date" name="birthDate" />
						<button type="submit">Submit</button>
					</Form>
				);
			}}
		</Formik>
	);
}
