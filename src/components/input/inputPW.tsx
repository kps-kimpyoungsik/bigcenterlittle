import React from 'react';
export interface UIInputPWProps {
	value?: any;
	valueChanged?: (value: any) => void;
	autoFocus?: boolean;
	setFocus?: boolean;
	full?: boolean;
	className?: string;
	placeholder?: string;
	attrs?: React.InputHTMLAttributes<HTMLInputElement>;
	onKeyEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function UIInputPW(props: UIInputPWProps) {
	const [inputValue, setInputValue] = React.useState<string>(props.value == null ? "" : props.value);
	const attrs: React.InputHTMLAttributes<HTMLInputElement> = { ...props.attrs };
	React.useEffect(() => {
		setInputValue(props.value == null ? "" : props.value);
	}, [props.value]);
	return (
		<input
		  ref={(element) => props.setFocus === true && element?.focus()}
		  type='password'
		  value={inputValue}
		  className={props.className}
		  placeholder={props.placeholder}
		  {...attrs}
		  onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
			setInputValue(event.target.value);
			if (props.valueChanged == null) {
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
	);
}
export default UIInputPW;
