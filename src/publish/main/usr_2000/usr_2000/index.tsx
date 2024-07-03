
import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2000Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	const modaladm2000 = useToggleState({});
	const sectors = [
		'동반성장 투자재원','상생형 창법 밴처기업 지원사업','공동투자형 기술개발','산업혁신운동','대중소 상생형 스마트공장','대중소기업 혁신 파트너십','성과공유제',
		'협력이익공유제','대중소기업 동반진출','동반성장 문화확산-신용카드 영세가맹점 지원사업','동반성장 문화확산-협력시ESG 평가지원사업','동반성장 문화확산-혁신주도형 동반성장',
		'분사기업(스핀오프) 상생협력 사업','상생결제제도 운영','지역사회 동반성장 지원사업','기술유출방지시스템'
	]
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={1} lnbIdx={0}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">출연신청</h1>
					<div className="hz-root hz-right hz-gap10 mb30">
						<Button color="pri" size="md">저장</Button>
						<Button color="gray-o" size="md">목록</Button>
					</div>
					<section className="fund-section">
						<div className="hz-root hz-gap10 hz-sb mb15">
							<h3 className="section-title">출연신청 안내 동의</h3>
							<p className="tx-msg"><span className="fc-pri">*</span>&nbsp;필수 입력</p>
						</div>
						<form className="sf sf-1row" name="" action="" method="">
							<div className="hz-root hz-sb">
								<label htmlFor="ch-1" className="hz-item ip-ch-label ip-ch-18">
									<input id="ch-1" className="ip-ch" type="checkbox" />
									<span className="check"></span> 
									<span className="txt fw400">안내사항을 확인하였으며, 안내사항에 동의합니다(필수)</span>
								</label>
								<Button color="gray-o" size="sm" onClick={modaladm2000.open}>안내사항 보기</Button>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">출연 내용</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item req">
									<p className="fo-key">출연 신청일</p>
									<div className="fo-value">
										<div className="w215">
											<UIDatePicker />
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">기부내용</p>
									<div className="fo-value">
										<div className="sl sl-md w320">
											<select>
												<option>금전</option>
												<option>현물</option>
											</select>
										</div>
									</div>
								</div>
								
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<div className="hz-root hz-gap10 hz-item">
								<h3 className="section-title">출연 금액</h3>
								<p className="tx-msg"><span className="fc-pri">※ 출연금은 최소 1개 이상을 입력해야 합니다.</span></p>
							</div>
							<div className="hz-root hz-gap5">
								<Button color='pri-o' size="sm">행추가</Button> 
								<Button color='gray-o' size="sm">행삭제</Button> 
							</div>
						</div>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="60px" />
										<col />
										<col />
									</colgroup>
									<thead>
										<tr>
											<th>
												<label htmlFor="ch-all" className="hz-item ip-ch-label ip-ch-18">
													<input id="ch-all" className="ip-ch" type="checkbox" />
													<span className="check"></span> 
												</label>
											</th>
											<th scope="col"><span className="th-req">출연 사업</span></th>
											<th scope="col"><span className="th-req">출연 금액</span></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<label htmlFor="ch-t1" className="hz-item ip-ch-label ip-ch-18">
													<input id="ch-t1" className="ip-ch" type="checkbox" />
													<span className="check"></span> 
												</label>
											</td>
											<td>
												<div className="sl sl-md">
													<select>
														<option>선택하세요</option>
														{sectors.map((sec, idx) =>
															<option key={idx}>{sec}</option>
														)}
													</select>
												</div>
											</td>
											<td>
												<div className="fund-form-group">
													<div className="fund-form-items tf-unit">
														<UIInput className={'tf tf-md ta-right'} value={'12,345,000'} placeholder={''}  />
														<span className="u">원</span>
													</div>
													<div className="tx-msg ml10"><span className="fc-pri">(일천이백삼십사만오천 원)</span></div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<label htmlFor="ch-t1" className="hz-item ip-ch-label ip-ch-18">
													<input id="ch-t1" className="ip-ch" type="checkbox" />
													<span className="check"></span> 
												</label>
											</td>
											<td>
												<div className="sl sl-md">
													<select>
														<option>선택하세요</option>
														{sectors.map((sec, idx) =>
															<option key={idx}>{sec}</option>
														)}
													</select>
												</div>
											</td>
											<td>
												<div className="fund-form-group">
													<div className="fund-form-items tf-unit">
														<UIInput className={'tf tf-md ta-right'} value={'0'} placeholder={''}  />
														<span className="u">원</span>
													</div>
													<div className="tx-msg ml10"><span className="fc-pri">(원)</span></div>
												</div>
											</td>
										</tr>										
									</tbody>
								</table>
							</div>
							<div className="tb-total mb15">
								<div className="tb-total-items">
									출연 금액 합계
								</div>
								<div className="tb-total-items">
									<div className="fund-form-items tf-unit">
										<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}  readOnly={true}/>
										<span className="u">원</span>
									</div>
									<p className="tx-msg"><span className="fc-pri">(일억원 한글금액출력)</span></p> 
								</div>
							</div>
							<div className="tx-msg multiline">
								<span className="fc-pri">
									출연신청 후 출연금액을 가상계좌로 입금하시면 출연일자로 확정되며 기부금영수증이 발급됩니다. <br />
									단 가상계좌로 입금 시 다른 일자로 분할해서 입금하시는 경우 취소 후 다시 신청하셔야 합니다. 이점 주의해 주시기 바랍니다.
								</span>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">출연 기업 정보</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'기업명'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">법인사업자번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'0000-00-0000000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업자번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'1234-12-1234567'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">담당자</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>홍길동</option>
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">직급</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'과장'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">부서</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'협력팀'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">이메일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'이메일 출력'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전화번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'전화번호 출력'} placeholder={''} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="pri" size="md">저장</Button>
						<Button color="gray-o" size="md">목록</Button>						
					</div>
				</main>
			</div>
			{/* modal - 안내사항 보기 */}
			<ModalPopup
				open={modaladm2000.isShowing}
				title="안내사항 보기"
				size="mid"
				onClose={modaladm2000.close}
			>
				<div className="modal-con">
					<div className="fww-noti">
						<section className="mb30">
							<h3>출연절차</h3>
							<div className="step">
								<dl>
									<dt>01 출연신청</dt>
									<dd>아래 [출연신청] 버튼 <br/>누른 후 저장 <br/>(출연신청서 첨부 必)</dd>
								</dl>
								<dl>
									<dt>02 상생협력기금출연</dt>
									<dd>기업별 지정 계좌로<br />출연금 입금</dd>
								</dl>
								<dl>
									<dt>03 출연확인</dt>
									<dd>재단에서 출연입금내역<br />확인하여 처리</dd>
								</dl>
								<dl>
									<dt>04 기부금영수증 출력</dt>
									<dd>출연신청번호 <br />클릭하여<br />기부금영수증 출력</dd>
								</dl>
							</div>
							<div className="tx-msg">※ 출연신청 이후 별도 확인 절차는 없으며, 출연상태가 출연상태가 [수납완료]일때 기부금영수증이 발급됩니다. (온라인출력)</div>
						</section>
						<section className="mb30">
							<h3>기금활용사업</h3>
							<ul className="bz">
								<li><span>동반성장<br />투자재원</span></li>
								<li><span>공동투자형<br />기술개발</span></li>
								<li><span>산업혁신<br />운동</span></li>
								<li><span>대·중소 상생형<br />스마트공장</span></li>
								<li><span>대·중소기업<br />혁신파트너</span></li>
								<li><span>대·중소기업<br />동반진출</span></li>
								<li><span>기업자율형<br />상생프로그램</span></li>
								<li><span>성과<br />공유제</span></li>
								<li><span>협력이익<br />공유제</span></li>
								<li><span>협력사ESG<br />평가지원</span></li>
							</ul>
						</section>
						<dl className="guide">
							<dt>유의사항</dt>
							<dd>
								<ul className="list-group">
									<li>
										출연신청 시 활용사업을 지정하여 출연하여야 하면, 수납처리가 완료된 출연금은 신청 시 지정된 사업으로만 지원할 수 있습니다.<br />
										<span className="fc-pri">타 사업으로 지원을 원하는 경우 ‘상생협력기금 운영위원회’의 승인을 받아야 출연금 사업간 전용 후 지원 가능합니다.</span>
									</li>
									<li>
										출연금은 「상속세 및 증여세법」 에따라 출연 일자로 부터 3년 이내 지원 되어야 합니다.<br />
										<span className="fc-pri">3년을 초과하여 출연금 잔액이 남아 있을 경우 증여세가 부과될 수 있습니다.</span>
									</li>
									<li>
										상생협력기금 종합관리시스템 오픈(21.7.21) 이후 출연계좌번호가 가상계좌로 변경되었습니다.<br />
										<span className="fc-pri">(기존) 기업별, 사업별 실물계좌 → (변경) 기업별 가상계좌 반드시 출연신청서 내 계좌번호를 확인하여 출연해 주시기 바랍니다.</span>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
				</div>
				<div className="modal-bottom">
					<Button color="pri" size="md" onClick={modaladm2000.close}>확인</Button>
				</div>
			</ModalPopup>	
		</PageContainer>
	);
}
export default ContentsContainer;