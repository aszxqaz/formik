import { Fragment } from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

export default function RadioButtons(props) {
	const { label, name, options, ...rest } = props;
	return (
		<div className="form-control">
			<label>{label}</label>
			<Field name={name} {...rest}>
				{({ field }) => {
					return options.map((option) => (
						<Fragment key={option.key}>
							<input
								type="radio"
								id={option.value}
								{...field}
								value={option.value}
								checked={field.value === option.value}
							/>
							<label htmlFor={option.value}>{option.key}</label>
						</Fragment>
					));
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}
