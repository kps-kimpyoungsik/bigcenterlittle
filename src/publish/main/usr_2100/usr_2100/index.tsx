
import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
function ContentsContainer() {
	const tbAgree = [
		{id:1,text:'위 안내된 내용을 확인하였으며, 안내사항에 동의합니다.',guide:'안내'},
		{id:2,text:"수혜 대상자는 「중소기업 기본법」 제2조에 해당하는 '중소기업'만 해당합니다. ※중견기업은 지원 불가",guide:'지원대상'},
		{id:3,text:"「법인세법」제2조제12호, 「법인세법 시행령」제2조제5항에 따른 '특수관계인'에 해당하는 수혜 대상자는 지원 할 수 없습니다.",guide:'지원대상'},
		{id:4,text:'지원 내용이 「대·중소기업 상생협력 촉진에 관한 법률」제20조의5 및 동법 시행령 제13조의4에 따른 상생협력기금 사용 용도에 해당하십니까?',guide:'지원대상'},
		{id:5,text:'지원의 결과물(시제품, 지식재산권 등)에 대한 지분율 산정시, 상생협력기금 지원분을 제외하고 산정하십니까?',guide:'지원대상'},
		{id:6,text:'수혜 대상자가 지원 내용에 대하여 출연 기업에게 매입 계산서를 발행하지 않아야 하며, 매출로 계상할 수 없습니다.',guide:'지원대상'},
	]
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={0}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">과제승인신청</h1>
					<div className="fund-biz-title">
						과제 승인 신청 제목이 출력됩니다
					</div>
					<section className="fund-section">
						<h3 className="section-title mb15">신청 안내</h3>
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
							<div className=" mb15">
								<label htmlFor="ch-all" className="hz-item ip-ch-label ip-ch-18">
									<input id="ch-all" className="ip-ch" type="checkbox" />
									<span className="check"></span> 
									<span className="txt">전체 동의</span>
								</label>
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
						<Button color="pri" size="md" href="/main/usr_2100/usr_2101">과제신청</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;