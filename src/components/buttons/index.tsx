import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

// Button
export type AbstractButton = {
	href?: string;
	type?: 'button' | 'submit' | 'reset';
	size?: 'sm' | 'md' | 'big' | 'xl';
	//round?: boolean;
	children?: React.ReactNode;
} & Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	'type' | 'size' | 'children'
>;

export type ButtonProps = {
	/** 형태 설정 */
	appearance?: 'primary' | 'primary-outline' | 'primary-teritary' | 'secondary' | 'secondary-outline';
	/** 왼쪽에 아이콘 노출 */
	leftIcon?: React.ReactNode | null;
	rightIcon?: React.ReactNode | null;
} & AbstractButton;


function Button(props: ButtonProps, ref: any) {
	const {
		href,
		type = 'button',
		appearance = 'primary',
		size = 'l',
		//round = false,
		children,
		leftIcon,
		rightIcon,
		...otherProps
	} = props;

	return (
		<>
			{href ? (
				<Link
					to={href}
					data-appearance={appearance}
					data-size={size}
					//data-round={round}
					ref={ref}
					className="buttons"
				>
					{leftIcon && <i className="icon left">{leftIcon}</i>}
					{children}
					{rightIcon && <i className="icon right">{rightIcon}</i>}
				</Link>
			) : (
				<button
					type={type}
					data-intent={appearance}
					data-size={size}
					//data-round={round}
					ref={ref}
					className="buttons"
					{...otherProps}
				>
					{leftIcon && <i className="icon left">{leftIcon}</i>}
					{children}
					{rightIcon && <i className="icon right">{rightIcon}</i>}
				</button>
			)}
		</>
	);
}

export default forwardRef(Button);
