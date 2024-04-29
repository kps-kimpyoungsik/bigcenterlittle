import React from 'react';
import { DefaultLayout } from '../layouts/main';
import { FundLayout } from '../layouts/main';
import {
	usrMainPage,
	usr1200Page,usr1202Page,usr1204Page,usr1300Page,usr1400Page,usr1402Page,
	usr1500Page,usr1501Page,usr1502Page,usr1600Page,usr1700Page,usr1800Page,usr1810Page,
	usr1900Page,usr1901Page,usr1902Page,usr1903Page,usr1904Page,
	usr2000Page,usr2002Page,usr2004Page,usr2006Page,usr2007Page,usr2009Page,usr2011Page,usr2012Page,
	usr2100Page,usr2101Page,usr2105Page,usr2107Page,usr2108Page,
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
		path: '/main/usr_1000/usr_1600',
		component: usr1600Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1000/usr_1700',
		component: usr1700Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1000/usr_1800',
		component: usr1800Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1000/usr_1810',
		component: usr1810Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1900/usr_1900',
		component: usr1900Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1900/usr_1901',
		component: usr1901Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1900/usr_1902',
		component: usr1902Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1900/usr_1903',
		component: usr1903Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_1900/usr_1904',
		component: usr1904Page,
		layout: DefaultLayout,
		exact: true,
	},
	{
		path: '/main/usr_2000/usr_2000',
		component: usr2000Page,
		layout: FundLayout,
		exact: true,
	},
	{
		path: '/main/usr_2000/usr_2002',
		component: usr2002Page,
		layout: FundLayout,
		exact: true,
	},
	{
		path: '/main/usr_2000/usr_2004',
		component: usr2004Page,
		layout: FundLayout,
		exact: true,
	},
	{
		path: '/main/usr_2000/usr_2006',
		component: usr2006Page,
		layout: FundLayout,
		exact: true,
	},
	{
		path: '/main/usr_2000/usr_2007',
		component: usr2007Page,
		layout: FundLayout,
		exact: true,
	},
	{
		path: '/main/usr_2000/usr_2009',
		component: usr2009Page,
		layout: FundLayout,
		exact: true,
	},
	{
		path: '/main/usr_2000/usr_2011',
		component: usr2011Page,
		layout: FundLayout,
		exact: true,
	},
	{
		path: '/main/usr_2000/usr_2012',
		component: usr2012Page,
		layout: FundLayout,
		exact: true,
	},
	{
		path: '/main/usr_2100/usr_2100',
		component: usr2100Page,
		layout: FundLayout,
		exact: true,
	},
	{
		path: '/main/usr_2100/usr_2101',
		component: usr2101Page,
		layout: FundLayout,
		exact: true,
	},
	{
		path: '/main/usr_2100/usr_2105',
		component: usr2105Page,
		layout: FundLayout,
		exact: true,
	},
	{
		path: '/main/usr_2100/usr_2107',
		component: usr2107Page,
		layout: FundLayout,
		exact: true,
	},
	{
		path: '/main/usr_2100/usr_2108',
		component: usr2108Page,
		layout: FundLayout,
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