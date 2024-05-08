
import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
function ContentsContainer() {
	const tbAgree = [
		{id:1,text:'위 안내된 내용을 확인하였으며, 안내사항에 동의합니다.',guide:'안내'},
		{id:2,text:'수혜대상자, 지원방식, 금액, 예산항목 등 심사 승인 내용과 달라진 경우, 지급 신청 반려 또는 재심사를 요청 드릴 수 있습니다.',guide:'지급근거'},
		{id:3,text:'중소기업 확인서의 유효기간이 만료된 경우, 투자재원 지급이 불가합니다. *신용평가사 확인서의 경우, 1년 이내 발급분 인정',guide:'지원대상'},
		{id:4,text:'수혜 대상자가 지원 내용에 대하여 출연 기업에게 매입 계산서를 발행하지 않아야 하며, 매출로 계상할 수 없습니다.',guide:'회계처리'},
		{id:5,text:'수혜 대상자(중소기업)에게 직접 투자재원을 지급하는 경우, VAT를 제외한 공급가액만을 지원합니다. *사유: 추후 세금 환급',guide:'회계처리'},
		{id:6,text:'지원대상이 특수관계가 아님을 확인하였습니다.',guide:'지급확인'},
		{id:7,text:'수혜 대상자, 지원방식, 금액, 예산항목 등 심사 승인 내용과 달라진 경우, 지급 신청 반려 또는 재심사를 요청 드릴 수 있습니다.',guide:'지급근거'},
	]
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={2}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">지급정산신청</h1>
					<div className="fund-biz-title">
						제목이 출력됩니다.
					</div>
					<section className="fund-section">
						<h3 className="section-title mb15">지급 정산 신청 안내</h3>
						<div className="fund-biz-preview">
							<p style={{height:"300px"}}></p>{/* [p] 임시 높이값입니다. 삭제후 사용*/}
						</div>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">첨부파일</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table data-type="file">
									<caption></caption>
									<colgroup>
										<col width="90px" />
										<col />
										<col width="230px" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">번호</th>
											<th scope="col">파일이름</th>
											<th scope="col">용량(Byte)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td className="ta-left">첨부한 파일명이 출력됩니다</td>
											<td>33.841</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<form name="" action="" method="" className="biz-agree-list">
							<div className="hz-root hz-gap8 mb15">
								<label htmlFor="ch-all" className="hz-item ip-ch-label ip-ch-18">
									<input id="ch-all" className="ip-ch" type="checkbox" />
									<span className="check"></span> 
									<span className="txt">전체 동의</span>
								</label>
								<p className="tx-msg"><span className="fc-err">(※ 아래 조건을 충족하지 않을 경우, 동반성장 투자재원 지급 신청이 반려될 수 있습니다)</span></p>
							</div>
							<div className="tb tb-narrow">
								<table data-type="file">
									<caption></caption>
									<colgroup>
										<col width="90px" />
										<col />
										<col width="230px" />
									</colgroup>
									<tbody>
										{tbAgree.map((tbAgree, index) => (
											<tr key={index}>
												<td>
													<label htmlFor={"ch-t"+tbAgree.id} className="hz-item ip-ch-label ip-ch-18">
														<input id={"ch-t"+tbAgree.id} className="ip-ch" type="checkbox" />
														<span className="check"></span> 
													</label>
												</td>
												<td className="ta-left">{tbAgree.text}</td>
												<td>{tbAgree.guide}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</form>
					</section>
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="pri" size="md" href="/main/usr_2100/usr_2116">지급정산신청</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;