import React from 'react';
import { DefaultLayout } from '../layouts/main';
import {
	HomePage,
	NoticePage,
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
		component: HomePage,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/portal/news/noti/',
		component: NoticePage,
		layout: DefaultLayout,
		exact: true,
	}
];