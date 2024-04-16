import React from 'react';
import { DefaultLayout } from '../layouts/admin';
import {
	admIndexPage,
	admMainPage,

	//alert
	admAlertPage,
	
	// TEST
	adm0000Page,

	// 게시판관리 [4000]
	adm4100Page,
	adm4110Page,
	adm4113Page,
	adm4114Page,
	adm4200Page,
	adm4210Page,
	adm4212Page,
	adm4213Page,
	adm4310Page,
	adm4320Page,
	
	// 게시판관리 [5000]
	adm5100Page,
	adm5110Page,
	adm5120Page,
	adm5130Page,
	adm5210Page,
	adm5211Page,
	adm5212Page,
	adm5213Page,
	adm5310Page,
	adm5311Page,
	adm5312Page,
	adm5313Page,
	adm5320Page,
	adm5321Page,
	adm5323Page,
	adm5324Page,

	// 시스템관리 [6000]
	adm6100Page,
	adm6110Page,
	adm6120Page,
	adm6200Page,
	adm6210Page,
	adm6220Page,
	adm6310Page,
	adm6311Page,
	adm6312Page,
	adm6314Page,
	adm6710Page,
	adm6711Page,
	adm6712Page,
	adm6713Page,

} from '../publish/admin/';

export type PageRouteProps = {
	path: string;
	component: React.ComponentType<any>;
	layout: React.ComponentType<any>;
};
export const routes: Array<PageRouteProps> = [
	{
		path: '/admin/',
		component: admIndexPage,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/home',
		component: admMainPage,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_alert',
		component: admAlertPage,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_4000/adm0000',
		component: adm0000Page,
		layout: DefaultLayout,
	},	
	// 사용자관리 [4000]
	{
		path: '/admin/adm_4000/adm4100',
		component: adm4100Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_4000/adm4110',
		component: adm4110Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_4000/adm4113',
		component: adm4113Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_4000/adm4114',
		component: adm4114Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_4000/adm4200',
		component: adm4200Page,
		layout: DefaultLayout,
	},
{
		path: '/admin/adm_4000/adm4210',
		component: adm4210Page,
		layout: DefaultLayout,
	},	
{
		path: '/admin/adm_4000/adm4212',
		component: adm4212Page,
		layout: DefaultLayout,
	},		
{
		path: '/admin/adm_4000/adm4213',
		component: adm4213Page,
		layout: DefaultLayout,
	},			
	{
		path: '/admin/adm_4000/adm4310',
		component: adm4310Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_4000/adm4320',
		component: adm4320Page,
		layout: DefaultLayout,
	},

	//게시판관리 [5000]
	{
		path: '/admin/adm_5000/adm5100',
		component: adm5100Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_5000/adm5110',
		component: adm5110Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5120',
		component: adm5120Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5130',
		component: adm5130Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5210',
		component: adm5210Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5211',
		component: adm5211Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5212',
		component: adm5212Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5213',
		component: adm5213Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5310',
		component: adm5310Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5311',
		component: adm5311Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5312',
		component: adm5312Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5313',
		component: adm5313Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5320',
		component: adm5320Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5321',
		component: adm5321Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5323',
		component: adm5323Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_5000/adm5324',
		component: adm5324Page,
		layout: DefaultLayout,
	},

	//시스템관리 [6000]
	{
		path: '/admin/adm_6000/adm6100',
		component: adm6100Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6110',
		component: adm6110Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6120',
		component: adm6120Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_6000/adm6200',
		component: adm6200Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_6000/adm6210',
		component: adm6210Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_6000/adm6220',
		component: adm6220Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_6000/adm6310',
		component: adm6310Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_6000/adm6311',
		component: adm6311Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_6000/adm6312',
		component: adm6312Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_6000/adm6314',
		component: adm6314Page,
		layout: DefaultLayout,
	},			
	{
		path: '/admin/adm_6000/adm6710',
		component: adm6710Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6711',
		component: adm6711Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6712',
		component: adm6712Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6713',
		component: adm6713Page,
		layout: DefaultLayout,
	},	
];