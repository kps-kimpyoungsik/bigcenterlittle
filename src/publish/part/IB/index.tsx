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

					<div className="deco-noti">
						※ IB의 CSS는 별도의 컴포넌트용CSS없이, ibsheet8_main.css에서 직접 수정.
					</div>
					<h1 className="deco-h1">IB(IBSheet)</h1>
					<div id='sheetDiv'></div>



	
				</main>			
			</div>
			
		</PageContainer>
	);
}
export default ContentsContainer;