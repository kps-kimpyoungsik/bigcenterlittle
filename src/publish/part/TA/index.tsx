import React from "react";
// import { Link } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import PageContainer from '../PageContainer';
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			
			<div className="fww-con">
				<main className="fww-main">

					<h1 className="deco-h1">TA(텍스트에어리어)</h1>
					<div className="ta">
						<textarea className="ta-ip" placeholder="PH"></textarea>
					</div>

					{/*
					<br/><br/>				
					<div className="ta gray h200 readonly"> 
						<textarea readOnly={true} className="ta-ip" placeholder="PH">리드온리</textarea>
					</div>
					*/}

					<br/><br/>
					<div className="ta-view h200 mt30">
						[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 심사가 완료되었습니다.
						[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 집행이 완료되었습니다. 지급금액 <em className="fc-err">$###</em>원, 집행일 <em className="fc-err">YYYY-MM-DD</em>
					</div>											
		
				</main>			
			</div>
			
		</PageContainer>
	);
}
export default ContentsContainer;