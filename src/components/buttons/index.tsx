import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

// Button
export type AbstractButton = {
	href?: string;
	type?: 'button' | 'submit' | 'reset';
	size?: 'sm' | 'md' | 'big';
	hz?: 'item' | 'root' | '';
	//round?: boolean;
	children?: React.ReactNode;
} & Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	'type' | 'size' | 'children'
>;

export type ButtonProps = {
	/** 형태 설정 */
	color?: 'pri' | 'pri-o' | 'pri-o2' | 'gray' | 'gray-o';
	/** 왼쪽에 아이콘 노출 */
	leftIcon?: React.ReactNode | null;
	rightIcon?: React.ReactNode | null;
} & AbstractButton;


function Button(props: ButtonProps, ref: any) {
	const {
		href,
		type = 'button',
		color = 'pri',
		size = 'big',
		hz = '',
		
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
					className="bt"
					to={href}
					data-color={color}
					data-size={size}
					//data-round={round}
					ref={ref}
				>
					{leftIcon && <i className="icon left">{leftIcon}</i>}
					{children}
					{rightIcon && <i className="icon right">{rightIcon}</i>}
				</Link>
			) : (
				<button
					className="bt"
					data-color={color}
					data-size={size}
					data-hz={hz}	
					type={type}
					//data-round={round}
					ref={ref}
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
