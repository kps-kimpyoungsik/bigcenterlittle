import React from "react";
import MainFooter from './AdminFooter';
import MainHeader from "./AdminHeader";
type DefaultLayoutProps = {
	children: React.ReactNode;
};
function DefaultLayout(props: DefaultLayoutProps) {
	return (
		<div className="fww-root">
			<MainHeader />
			<div className="fww-container fww-dashborad">
				{props.children}
				<MainFooter />
			</div>
		</div>
	);
}
export default DefaultLayout;