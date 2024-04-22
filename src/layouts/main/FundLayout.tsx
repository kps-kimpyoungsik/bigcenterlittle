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
			</div>
		</div>
	);
}
export default FundLayout;