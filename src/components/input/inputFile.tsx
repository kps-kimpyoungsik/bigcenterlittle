import React from 'react';
export interface UIInputProps {
	id?: string;
	value?: any;
	valueChanged?: (value: any) => void;
	autoFocus?: boolean;
	setFocus?: boolean;
	//full?: boolean;
	readOnly?: boolean;
	disabled?: boolean;
	//className?: string;
	placeholder?: string;
	attrs?: React.InputHTMLAttributes<HTMLInputElement>;
	onKeyEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

UIInput.defaultProps = {
	id: "file",
} as UIInputProps;

function UIInput(props: UIInputProps) {
	const [inputValue, setInputValue] = React.useState<string>(props.value == null ? "" : props.value);
	const attrs: React.InputHTMLAttributes<HTMLInputElement> = { ...props.attrs };
	React.useEffect(() => {
		setInputValue(props.value == null ? "" : props.value);
	}, [props.value]);
	return (
		<div className='filebox w100p'>
			<input type='text' 
				className='tf tf-md' placeholder={props.placeholder}
				defaultValue={inputValue}
			/>
			<label htmlFor={props.id} className="bt" data-color="pri-o2" data-size="md">찾기</label>
			<input
				ref={(element) => props.setFocus === true && element?.focus()}
				type='file'
				id={props.id}
				value={inputValue}
				readOnly={props.readOnly}
				disabled={props.disabled}
				{...attrs}
				onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
					setInputValue(event.target.value);
					if (props.valueChanged == null) {
					return;
					}
					props.valueChanged(String(event.target.value));
				}}
			/>
		</div>
	);
}

export default UIInput;
