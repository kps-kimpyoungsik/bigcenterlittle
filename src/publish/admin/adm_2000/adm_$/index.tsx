import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_2000Aside";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">계좌관리</a></li>
						<li className=""><a href="">$</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">$</h1>
					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;