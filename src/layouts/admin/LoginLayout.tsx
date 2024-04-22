import React from "react";
type DefaultLayoutProps = {
	children: React.ReactNode;
};
function DefaultLayout(props: DefaultLayoutProps) {
	return (
		<div className="fww-root">
			<div className="fww-container">
				{props.children}
			</div>
		</div>
	);
}
export default DefaultLayout;