import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

export type DefaultRouteProps = {
	component: React.ComponentType<any>;
	layout: React.ComponentType<any>;
	theme?: any;
} & RouteProps;

function DefaultRoute(props:DefaultRouteProps) {
	const { component: Component, layout: Layout, ...rest } = props;
	return(
		<Route {...rest}
			render={ routeProps => (
				<Layout>
					<Component {...routeProps} />
				</Layout>
			)}
		/>
	);
}
export default DefaultRoute;