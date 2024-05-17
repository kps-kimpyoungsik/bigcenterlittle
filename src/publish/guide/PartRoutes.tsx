import React from 'react';
import { Route} from "react-router-dom";
import DefaultRoute from '../../routes/DefaultRoute';
import { PageRouteProps, routes } from '../../routes/routesGuide';
function Guide() {
	return (
		<Route>
			{routes.map((_item: PageRouteProps, _index: number) => {
				return (
					<DefaultRoute
						exact
						key={_index}
						path={_item.path}
						layout={_item.layout}
						component={_item.component}
					/>
				);
			})}
		</Route>
	);
}
export default Guide;