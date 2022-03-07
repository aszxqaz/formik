import { Fragment } from 'react';
import { Field } from 'formik';

export default function CheckboxGroup(props) {
	const { name, label, options, ...rest } = props;
	return (
		<div className="form-control">
			<label>{label}</label>
			<Field name={name} {...rest}>
				{({ field }) =>
					options.map((option, index) => (
						<Fragment key={name + index.toString()}>
							<input
								type="checkbox"
								id={option.value}
								{...field}
								value={option.value}
								checked={field.value.includes(option.value)}
							/>
							<label htmlFor={option.value}>{option.value}</label>
						</Fragment>
					))
				}
			</Field>
		</div>
	);
}
