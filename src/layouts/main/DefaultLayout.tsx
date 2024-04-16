import React from "react";
import MainFooter from './MainFooter';
import MainHeader from "./MainHeader";
type DefaultLayoutProps = {
	children: React.ReactNode;
};
function DefaultLayout(props: DefaultLayoutProps) {
	return (
		<div className="fww-root">
			<MainHeader />
			<div className="fww-container">
				{props.children}
			</div>
			<MainFooter />
		</div>
	);
}
export default DefaultLayout;