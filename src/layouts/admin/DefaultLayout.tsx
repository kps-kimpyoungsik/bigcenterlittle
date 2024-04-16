import React from "react";
//import MainFooter from './AdminFooter';
import MainHeader from "./AdminHeader";
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
		</div>
	);
}
export default DefaultLayout;