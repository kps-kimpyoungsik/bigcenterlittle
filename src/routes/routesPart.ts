import React from 'react';
import { LoginLayout } from '../layouts/admin';
import {
	
	test,
	TX,
	BT,
	BD,
	TF,
	CH,
	RD,
	SL,
	TA,
	PG,
	PT,
	TT,
	AL,
	MD,
	ND,
	TB,
	FO,
	SF,
	IB,

} from '../publish/part/';

export type PageRouteProps = {
	path: string;
	component: React.ComponentType<any>;
	layout: React.ComponentType<any>;
};
export const routes: Array<PageRouteProps> = [
	{
		path: '/part/test',
		component: test,
		layout: LoginLayout,
	},	
	{
		path: '/part/TX',
		component: TX,
		layout: LoginLayout,
	},	
	{
		path: '/part/BT',
		component: BT,
		layout: LoginLayout,
	},
	{
		path: '/part/BD',
		component: BD,
		layout: LoginLayout,
	},
	{
		path: '/part/TF',
		component: TF,
		layout: LoginLayout,
	},
	{
		path: '/part/CH',
		component: CH,
		layout: LoginLayout,
	},
	{
		path: '/part/RD',
		component: RD,
		layout: LoginLayout,
	},
	{
		path: '/part/SL',
		component: SL,
		layout: LoginLayout,
	},
	{
		path: '/part/TA',
		component: TA,
		layout: LoginLayout,
	},
	{
		path: '/part/PG',
		component: PG,
		layout: LoginLayout,
	},
	{
		path: '/part/PT',
		component: PT,
		layout: LoginLayout,
	},
	{
		path: '/part/TT',
		component: TT,
		layout: LoginLayout,
	},
	{
		path: '/part/AL',
		component: AL,
		layout: LoginLayout,
	},
	{
		path: '/part/MD',
		component: MD,
		layout: LoginLayout,
	},
	{
		path: '/part/ND',
		component: ND,
		layout: LoginLayout,
	},
	{
		path: '/part/TB',
		component: TB,
		layout: LoginLayout,
	},
	{
		path: '/part/FO',
		component: FO,
		layout: LoginLayout,
	},
	{
		path: '/part/SF',
		component: SF,
		layout: LoginLayout,
	},
	{
		path: '/part/IB',
		component: IB,
		layout: LoginLayout,
	},


];