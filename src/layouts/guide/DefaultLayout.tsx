import React from "react";
import GuideHeader from "./guideHeader";
import "assets/styles/_guide.css"
type DefaultLayoutProps = {
	children: React.ReactNode;
};
function DefaultLayout(props: DefaultLayoutProps) {
	return (
		<>
			<GuideHeader />
			<div className="stk-main">
				{props.children}
			</div>
		</>
	);
}
export default DefaultLayout;