
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">기금운영</Link></li>
					<li><Link to="#">과제현황</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">과제승인신청</h1>
					<div className="hz-root hz-right hz-gap10 mb30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
					</div>
					<section className="fund-section">
						<div className="hz-root hz-gap10 hz-sb mb15">
							<h3 className="section-title">과제 신청 정보</h3>
							<p className="tx-msg"><span className="fc-pri">*</span>&nbsp;필수 입력</p>
						</div>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">지원내용 및 기대효과</h3>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">지원 대상</h3>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-gap10 hz-item">
							<h3 className="section-title">출연 금액</h3>
							<p className="tx-msg"><span className="fc-pri">※ 지원금은 최소 1개 이상을 입력해야 합니다.</span></p>
						</div>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">신청 기업 정보</h3>
					</section>
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;