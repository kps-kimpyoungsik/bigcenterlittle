import React from 'react';
import { DefaultLayout } from '../layouts/main';
import {
	userMainPage,
	user1100Page, user1110Page, user1200Page, user1210Page, user1300Page, user1400Page, user1500Page,
	user2100Page, user2110Page, user2200Page, user2210Page, 
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
		path: '/main/user_1000/user_1100',
		component: user1100Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/user_1000/user_1110',
		component: user1110Page,
		layout: DefaultLayout,
		exact: true,
	},	
	{
		path: '/main/user_1000/user_1200',
		component: user1200Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/user_1000/user_1210',
		component: user1210Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/user_1000/user_1300',
		component: user1300Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/user_1000/user_1400',
		component: user1400Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/user_1000/user_1500',
		component: user1500Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/user_2000/user_2100',
		component: user2100Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/user_2000/user_2110',
		component: user2110Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/user_2000/user_2200',
		component: user2200Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/user_2000/user_2210',
		component: user2210Page,
		layout: DefaultLayout,
		exact: true,
	},
];