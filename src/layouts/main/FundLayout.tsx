import React from "react";
import MainHeader from "./MainHeader";
type FundLayoutProps = {
	children: React.ReactNode;
};
function FundLayout(props: FundLayoutProps) {
	return (
		<div className="fww-root">
			<MainHeader />
			<div className="fww-container">
				{props.children}
				<footer className='fww-adn-footer'>
					Copyright ⓒ 2024 대·중소기업·농어업협력재단. All Rights Reserved.
				</footer>
			</div>
		</div>
	);
}
export default FundLayout;