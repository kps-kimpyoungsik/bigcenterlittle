import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_7000Aside";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">결재함</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">결재함</h1>
					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;