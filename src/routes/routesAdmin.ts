import React from 'react';
import { DefaultLayout } from '../layouts/admin';
import { LoginLayout } from '../layouts/admin';
import {
	admIndexPage,
	admMainPage,

	//alert
	admAlertPage,
	
	// TEST
	adm0000Page,

	// 로그인 [login]
	admloginPage,

	// 마이페이지[mypage]
	admmypagePage,

	// 기금관리 [1000]
	adm1100Page,
	// adm1101Page,
	adm1200Page,
	adm1201Page,
	adm1202Page,
	adm1203Page,
	// adm1204Page,
	adm1205Page,
	adm1206Page,
	// adm1208Page,
	// adm1209Page,
	// adm1210Page,
	// adm1211Page,
	adm1212Page,
	adm1213Page,

	adm1300Page,
	adm1301Page,
	adm1302Page,
	adm1303Page,
	// adm1304Page,
	adm1305Page,
	adm1306Page,
	adm1308Page,
	// adm1309Page,
	// adm1310Page,
	// adm1311Page,
	// adm1312Page,
	// adm1313Page,
	// adm1314Page,
	adm1400Page,
	adm1401Page,
	adm1402Page,
	adm1403Page,
	// adm1404Page,
	adm1405Page,
	adm1406Page,
	// adm1407Page,
	// adm1408Page,
	// adm1409Page,
	// adm1410Page,
	// adm1411Page,
	// adm1412Page,
	// adm1414Page,
	// adm1415Page,
	// adm1413Page,
	adm1500Page,
	adm1501Page,
	// adm1502Page,
	// adm1503Page,
	// adm1504Page,
	// adm1505Page,
	// adm1509Page,
	// adm1511Page,
	// adm1514Page,
	// adm1515Page,
	adm1600Page,
	// adm1601Page,
	adm1700Page,
	adm1701Page,
	adm1702Page,
	// adm1703Page,
	adm1704Page,
	adm1705Page,
	adm1706Page,

	// 계좌관리 [2000]
	adm2100Page,
	adm2200Page,
	
	// 공시/발급 [3000]
	adm3100Page,
	adm3200Page,	
	adm3300Page,
	adm3301Page,	
	adm3302Page,

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
	adm6410Page,
	adm6411Page,
	adm6412Page,
	adm6413Page,
	adm6421Page,
	adm6422Page,
	adm6424Page,
	adm6431Page,
	adm6432Page,
	adm6433Page,
	adm6434Page,
	adm6510Page,
	adm6520Page,
	adm6521Page,
	adm6522Page,
	adm6610Page,
	adm6710Page,
	adm6711Page,
	adm6712Page,
	adm6713Page,
	adm6810Page,

	// 결재함 [7000]
	adm7000Page,
	adm7100Page,
	adm7101Page,

	// 보고서 [8000]
	adm8100Page,
	adm8200Page,

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
	// 로그인 [login]
	{
		// path: '/admin/adm_login/admlogin',
		path: '/admin/adm_login',
		component: admloginPage,
		layout: LoginLayout,
	},
	// 마이페이지 [mypage]
	{
		// path: '/admin/adm_mypage/admmypage',
		path: '/admin/adm_mypage',
		component: admmypagePage,
		layout: DefaultLayout,
	},
	// 기금관리 [1000]
	{
		path: '/admin/adm_1000/adm1100',
		component: adm1100Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1200',
		component: adm1200Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1201',
		component: adm1201Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1202',
		component: adm1202Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1203',
		component: adm1203Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1205',
		component: adm1205Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1206',
		component: adm1206Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1212',
		component: adm1212Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1213',
		component: adm1213Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1300',
		component: adm1300Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1301',
		component: adm1301Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1302',
		component: adm1302Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1303',
		component: adm1303Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1305',
		component: adm1305Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1306',
		component: adm1306Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_1000/adm1308',
		component: adm1308Page,
		layout: DefaultLayout,
	},		
	/*
	{
		path: '/admin/adm_1000/adm1305',
		component: adm1305Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_1000/adm1306',
		component: adm1306Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_1000/adm1307',
		component: adm1307Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_1000/adm1308',
		component: adm1308Page,
		layout: DefaultLayout,
	},		
	*/
	{
		path: '/admin/adm_1000/adm1400',
		component: adm1400Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_1000/adm1401',
		component: adm1401Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_1000/adm1402',
		component: adm1402Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_1000/adm1403',
		component: adm1403Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_1000/adm1405',
		component: adm1405Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_1000/adm1406',
		component: adm1406Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_1000/adm1410',
		component: adm1401Page,
		layout: DefaultLayout,
	},								
	{
		path: '/admin/adm_1000/adm1500',
		component: adm1500Page,
		layout: DefaultLayout,
	},					
	{
		path: '/admin/adm_1000/adm1501',
		component: adm1501Page,
		layout: DefaultLayout,
	},					
	/*
	{
		path: '/admin/adm_1000/adm1502',
		component: adm1502Page,
		layout: DefaultLayout,
	},						
	*/
	{
		path: '/admin/adm_1000/adm1600',
		component: adm1600Page,
		layout: DefaultLayout,
	},						
	{
		path: '/admin/adm_1000/adm1700',
		component: adm1700Page,
		layout: DefaultLayout,
	},					
	{
		path: '/admin/adm_1000/adm1701',
		component: adm1701Page,
		layout: DefaultLayout,
	},					
	{
		path: '/admin/adm_1000/adm1702',
		component: adm1702Page,
		layout: DefaultLayout,
	},
	/*
	{
		path: '/admin/adm_1000/adm1703',
		component: adm1703Page,
		layout: DefaultLayout,
	},	
	*/
	{
		path: '/admin/adm_1000/adm1704',
		component: adm1704Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_1000/adm1705',
		component: adm1705Page,
		layout: DefaultLayout,
	},	
	{
		path: '/admin/adm_1000/adm1706',
		component: adm1706Page,
		layout: DefaultLayout,
	},	

	// 계좌관리 [2000]
	{
		path: '/admin/adm_2000/adm2100',
		component: adm2100Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_2000/adm2200',
		component: adm2200Page,
		layout: DefaultLayout,
	},	

	// 공시/발급 [3000]
	{
		path: '/admin/adm_3000/adm3100',
		component: adm3100Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_3000/adm3200',
		component: adm3200Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_3000/adm3300',
		component: adm3300Page,
		layout: DefaultLayout,
	},			
	{
		path: '/admin/adm_3000/adm3301',
		component: adm3301Page,
		layout: DefaultLayout,
	},		
	{
		path: '/admin/adm_3000/adm3302',
		component: adm3302Page,
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
		path: '/admin/adm_6000/adm6410',
		component: adm6410Page,
		layout: DefaultLayout,
	},				
	{
		path: '/admin/adm_6000/adm6411',
		component: adm6411Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6412',
		component: adm6412Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6413',
		component: adm6413Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6421',
		component: adm6421Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6422',
		component: adm6422Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6424',
		component: adm6424Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6431',
		component: adm6431Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6432',
		component: adm6432Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6433',
		component: adm6433Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6434',
		component: adm6434Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6510',
		component: adm6510Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6520',
		component: adm6520Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6521',
		component: adm6521Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6522',
		component: adm6522Page,
		layout: DefaultLayout,
	},
	{
		path: '/admin/adm_6000/adm6610',
		component: adm6610Page,
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
	{
		path: '/admin/adm_6000/adm6810',
		component: adm6810Page,
		layout: DefaultLayout,
	},	

//결재함 [7000]
{
	path: '/admin/adm_7000/adm7000',
	component: adm7000Page,
	layout: DefaultLayout,
},
{
	path: '/admin/adm_7000/adm7100',
	component: adm7100Page,
	layout: DefaultLayout,
},
{
	path: '/admin/adm_7000/adm7101',
	component: adm7101Page,
	layout: DefaultLayout,
},

//보고서 [8000]
{
	path: '/admin/adm_8000/adm8100',
	component: adm8100Page,
	layout: DefaultLayout,
},
{
	path: '/admin/adm_8000/adm8200',
	component: adm8200Page,
	layout: DefaultLayout,
},

];