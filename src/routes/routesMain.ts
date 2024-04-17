import React from 'react';
import { DefaultLayout } from '../layouts/main';
import {
	userMainPage,
	user2300Page, 
	} from '../publish/main/';

export type PageRouteProps = {
	path: string;
	component: React.ComponentType<any>;
	layout: React.ComponentType<any>;
	exact?: boolean;
};
export const routes: Array<PageRouteProps> = [
	{
		path: '/main/',
		component: userMainPage,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_2300/usr_2300',
		component: user2300Page,
		layout: DefaultLayout,
		exact: true,
	},
];