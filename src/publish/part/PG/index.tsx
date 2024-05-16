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

				<h1 className="deco-h1">PG(페이지네이션)</h1>

				<div className="pg">
					<div className="group">
						<button type="button" className="item first">처음</button>
						<button type="button" className="item prev">이전</button>
					</div>
					<div className="group">
						<button type="button" className="item">1</button>
						<button type="button" className="item active">2</button>
						<button type="button" className="item">3</button>
						<button type="button" className="item">4</button>
						<button type="button" className="item">5</button>
						<button type="button" className="item">99</button>
						<button type="button" className="item">999</button>
						<button type="button" className="item">9999</button>
					</div>
					<div className="group">
						<button type="button" className="item next">다음</button>
						<button type="button" className="item last">끝</button>
					</div>
				</div>


	
				</main>			
			</div>
			
		</PageContainer>
	);
}
export default ContentsContainer;