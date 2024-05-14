import React from 'react';
import { DefaultLayout } from '../layouts/admin';
import {
	
	testPage,

} from '../publish/part/';

export type PageRouteProps = {
	path: string;
	component: React.ComponentType<any>;
	layout: React.ComponentType<any>;
};
export const routes: Array<PageRouteProps> = [
	{
		path: '/part/test',
		component: testPage,
		layout: DefaultLayout,
	},	


];