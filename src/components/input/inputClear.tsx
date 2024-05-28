import React from 'react';
export interface UIInputProps {
	type?: string;
	value?: any;
	valueChanged?: (value: any) => void;
	autoFocus?: boolean;
	setFocus?: boolean;
	full?: boolean;
	readOnly?: boolean;
	disabled?: boolean;
	className?: string;
	placeholder?: string;
	attrs?: React.InputHTMLAttributes<HTMLInputElement>;
	onKeyEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

UIInput.defaultProps = {
	type: "text",
} as UIInputProps;

function UIInput(props: UIInputProps) {
	const [inputValue, setInputValue] = React.useState<string>(props.value == null ? "" : props.value);
	const attrs: React.InputHTMLAttributes<HTMLInputElement> = { ...props.attrs };
	React.useEffect(() => {
		setInputValue(props.value == null ? "" : props.value);
	}, [props.value]);
	return (
		<div className='tf-with-clear '>
			<input
			ref={(element) => props.setFocus === true && element?.focus()}
			type={props.type}
			value={inputValue}
			className={props.className}
			placeholder={props.placeholder}
			readOnly={props.readOnly}
			disabled={props.disabled}
			{...attrs}
			onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
				setInputValue(event.target.value);
				if (props.valueChanged == null) {
				return;
				}
		
				if (props.type === "number" && isNaN(Number(event.target.value))) {
				return;
				}
		
				if (props.type !== "number" || event.target.value === "") {
				props.valueChanged(event.target.value);
				return;
				}
		
				props.valueChanged(String(event.target.value));
			}}
			onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>): void => {
				if (props.onKeyEnter != null && event.key === "Enter") {
				props.onKeyEnter(event);
				}
			}}
			/>
			{inputValue && <button type='button' className='btn-clear' onClick={() => {setInputValue('');}}>reset</button>}
		</div>
	);
}

export default UIInput;
