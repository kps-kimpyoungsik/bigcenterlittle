import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user1900Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={0} lnbIdx={1}/>
				<main className="fww-main" data-layout="usr">
					<h1 className="tx tx-hd2">투명한기금운영</h1>
					<div className="fww-operation">
						<h2 className="oper-title">상생협력기금, 투명하게 운영합니다.</h2>
						<ul className="oper-list">
							<li>
								<h3>원칙 하나,</h3>
								<p>
									상생협력기금은 상생협력법상 용도를 지정하여 출연, 사용하도록 명시되어 있습니다.<br />
									상생협력기금을 출연하는 내국법인, 출연받아 실제 집행하는 상생협력재단은 준법정신을 기반으로 사업을 수행하여 대기업과 중소기업의 우수한 상생모델을 만들어 나가도록 하고있습니다. <br />
									또한, 매년 사업계획을 수립하고, 이사회에 승인을 받아 집행하고 있습니다.
								</p>
							</li>
							<li>
								<h3>원칙 둘,</h3>
								<p>
									상생협력기금을 운영하는 대·중소기업농·어업협력재단은 기획재정부에서 지정하는 공익법인입니다. <br />
									공익법인은 「상속세 및 증여세법 제48조」에 따라, 매년 기부모금액 현황과 사용내역을 국세청에 제출하여야 합니다. <br />
									따라서, 모든 모금활동에 있어 관련 법령에 근거하며, 자체적으로는 ERP, 회계시스템을 사용하여 체계적이고 명확하게 상생협력기금을 관리·보고합니다.
								</p>
							</li>
							<li>
								<h3>원칙 셋,</h3>
								<p>
									재단은 회계-예산 계획 및 집행 내역에 대해 내·외부 정기감사를 실시하고 있습니다. <br />
									공직유관단체로 주무부처인 중소벤처기업부 정기감사를 비롯하여 정부 운영 감사를 성실하게 이행하여 책임감 있고, 투명한 운영을 객관적으로 평가/검증 받고 있습니다. <br />
									또한, 상속세 및 증여세법 제52조에 따라 매년 회계정산도 실시하고 있습니다.
								</p>
							</li>
						</ul>
						<div className="oper-graphic">
							<div className="graphic-items">
								<p className="center">
									<span>상생협력기금<br />출연금</span>
									<strong>총 99,999억원</strong>
								</p>
							</div>
							<div className="graphic-items">
								<p className="center">
									<span>상생협력기금<br />집행금</span>
									<strong>총 99,999억원</strong>
								</p>
							</div>
							<div className="graphic-items">
								<p className="center">
									<span>상생협력기금<br />수혜 중소기업</span>
									<strong>총 99,999억원</strong>
								</p>
							</div>
						</div>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;