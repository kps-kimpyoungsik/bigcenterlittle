import React ,{useState} from "react";
// import { Link } from 'react-router-dom';
import PageContainer from '../PageContainer';
import TX from './components/TX';
import BT from './components/BT';
import BD from './components/BD';
import TF from './components/TF';
import CH from './components/CH';
import RD from './components/RD';
import SL from './components/SL';
import TA from './components/TA';
import PG from './components/PG';
import ND from './components/ND';
import LD from './components/LD';

import PT from './components/PT';
import TT from './components/TT';
import AL from './components/AL';
import MD from './components/MD';

import TB from './components/TB';
import FO from './components/FO';
import SF from './components/SF';
import FU from './components/FU';
import MT from './components/MT';
function ContentsContainer() {
	const asideInfo =[
		{
			idx:0,
			title:'기초 컴포넌트', 
			conts:[
				{name:"TX (텍스트)", target:"TX"},
				{name:"BT (버튼)", target:"BT"},
				{name:"BD (뱃지)", target:"BD"},
				{name:"TF (텍스트필드)", target:"TF"},
				{name:"CH (체크박스)", target:"CH"},
				{name:"RD (라디오)", target:"RD"},
				{name:"SL (셀렉트)", target:"SL"},
				{name:"TA (텍스트에어리어)", target:"TA"},
				{name:"PG (페이지네이션)", target:"PG"},
				{name:"ND (노 데이터)", target:"ND"},
				{name:"LD (로딩)", target:"LD"},
			]
		},
		{
			idx:1,
			title:'공간 컴포넌트', 
			conts:[
				{name:"PT (공간 분할)", target:"PT"},
				{name:"TT (툴팁)", target:"TT"},
				{name:"AL (알럿트)", target:"AL"},
				{name:"MD (모달)", target:"MD"},
			]
		},
		{
			idx:2,
			title:'특수 컴포넌트', 
			conts:[
				
				{name:"TB (테이블)", target:"TB"},
				{name:"FO (폼)", target:"FO"},
				{name:"SF (검색필터)", target:"SF"},
				{name:"FU (Fileupload)", target:"FU"},
				{name:"MT (MenuTree)", target:"MT"},
			]
		},
	]
	const selectComponent = {
		TX : <TX />, BT : <BT />, BD : <BD />,  TF:<TF />, CH:<CH />, RD:<RD />, SL:<SL />, TA:<TA />, PG:<PG />, ND:<ND />, LD:<LD />,
		PT:<PT />, TT:<TT />, AL:<AL />, MD:<MD />,
		TB:<TB />, FO:<FO />, SF:<SF />, FU:<FU />, MT:<MT />
	}
	const [content, setContent] = useState('TX');
	const handleClickButton = e => {
		const name = e.target.name;
		setContent(name);
	};
	return (
		<PageContainer>
			<div className="guide-part">
				<aside className="aside">
					{asideInfo.map((asideInfo) => (
						<div key={asideInfo.idx}>
							<h2>{asideInfo.title}</h2>
							<ul>
								{asideInfo.conts.map((conts, index) => (
									<li key={index}>
										<button type="button" onClick={handleClickButton} name={conts.target}>{conts.name}</button>
									</li>
								))}
							</ul>
						</div>
						
					))}
				</aside>
				<div className="part-conts">
					{content && selectComponent[content]}
				</div>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;