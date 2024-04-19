import React from 'react';
import { DefaultLayout } from '../layouts/main';
import {
	usrMainPage,
	usr1200Page,usr1202Page,usr1204Page,usr1300Page,usr1400Page,usr1402Page,usr1500Page,usr1501Page,usr1502Page,
	usr2300Page,usr2301Page,usr2302Page,usr2303Page,
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
		component: usrMainPage,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1000/usr_1200',
		component: usr1200Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1000/usr_1202',
		component: usr1202Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1000/usr_1204',
		component: usr1204Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1000/usr_1300',
		component: usr1300Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1000/usr_1400',
		component: usr1400Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1000/usr_1402',
		component: usr1402Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1000/usr_1500',
		component: usr1500Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1000/usr_1501',
		component: usr1501Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1000/usr_1502',
		component: usr1502Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_2300/usr_2300',
		component: usr2300Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_2300/usr_2301',
		component: usr2301Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_2300/usr_2302',
		component: usr2302Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_2300/usr_2303',
		component: usr2303Page,
		layout: DefaultLayout,
		exact: true,
	},
];