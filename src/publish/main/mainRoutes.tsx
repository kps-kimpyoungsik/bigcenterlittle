
import React from 'react';
import { Route , Switch} from "react-router-dom";
import DefaultRoute from 'routes/DefaultRoute';
import { PageRouteProps, routes } from 'routes/routesMain';
//import NotFound from "../norfound";
function Main() {
	return (
		<Switch>
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
			{/* <Route path="/*" render={NotFound} /> */}
		</Switch>
		
	);
}
export default Main;