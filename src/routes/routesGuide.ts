import React from 'react';
import { DefaultLayout } from '../layouts/guide';
import {guideUsr,guideAdm,guidePart} from '../publish/guide/';

export type PageRouteProps = {
	path: string;
	component: React.ComponentType<any>;
	layout: React.ComponentType<any>;
};
export const routes: Array<PageRouteProps> = [
	{
		path: '/guide',
		component: guideUsr,
		layout: DefaultLayout,
	},
	{
		path: '/guide/admin',
		component: guideAdm,
		layout: DefaultLayout,
	},
	{
		path: '/guide/part',
		component: guidePart,
		layout: DefaultLayout,
	}
];