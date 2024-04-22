import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
// import UIDatePicker from "components/datepicker";
// import Button from 'components/buttons/';
// import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/admin/">홈</Link></li>
					<li><Link to="#">기금관리</Link></li>
					<li><Link to="#">통합정보조회</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">통합정보조회</h1>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;