
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
import Raonkupload from 'components/input/kupload';
function ContentsContainer() {
	const modaladm2007 = useToggleState({});
	const modaladm2007_1 = useToggleState({});
	const sectors = [
		'구매조건부신제품개발사업(공동R&D)','대·중소기업 혁신파트너십지원사업','대 중소 상생형 스마트공장','대·중소기업 해외동반진출 지원사업','동반성장몰_복지포인트 지원사업',
		'성과공유제 확산 사업','상생형 창업·벤처기업 지원사업','민간자율 기획사업','협력사 ESG 지원사업','동반성장 문화확산','동반성장 협력사 PR챌린지','지역사회 동반성장 지원사업',
		'신용카드 영세가맹점 지원사업','대·중소기업 안전보건 상생협력','기술유출 방지시스템','상생협력기금조성·운영 관리 경비','기타 오입금(잘못 출연된 기금의 반환과제용'
	]
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={1} lnbIdx={2}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">전용신청</h1>
					<div className="hz-root hz-right hz-gap10 mb30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
					</div>
					<section className="fund-section">
						<div className="hz-root hz-gap10 hz-sb mb15">
							<h3 className="section-title">전용신청 안내동의</h3>
							<p className="tx-msg"><span className="fc-pri">*</span>&nbsp;필수 입력</p>
						</div>
						<form className="sf sf-1row" name="" action="" method="">
							<div className="hz-root hz-sb">
								<label htmlFor="ch-1" className="hz-item ip-ch-label ip-ch-18">
									<input id="ch-1" className="ip-ch" type="checkbox" />
									<span className="check"></span> 
									<span className="txt fw400">안내사항을 확인하였으며, 안내사항에 동의합니다(필수)</span>
								</label>
								<Button color="gray-o" size="sm" onClick={modaladm2007.open}>안내사항 보기</Button>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">전용 신청 일자</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item req">
									<p className="fo-key">전용요청일</p>
									<div className="fo-value">
										<div className="w215">
											<UIDatePicker />
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">출연 번호 선택</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<UIInput className={'tf tf-md hz-item hz-fg'} value={'00-00-00000'} placeholder={''} readOnly={true} />
											<Button color="gray-o" size="md" onClick={modaladm2007_1.open}>출연사업선택</Button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">출연 내용</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">출연사업</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'동반성장투자재원'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연금액</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items tf-unit">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''}  />
												<span className="u">원</span>
											</div>
											<div className="tx-msg ml10"><span className="fc-pri">(한글금액원)</span></div>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전용가능잔액(원)</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items tf-unit">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''}  />
												<span className="u">원</span>
											</div>
											<div className="tx-msg ml10"><span className="fc-pri">(한글금액원)</span></div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<div className="hz-root hz-gap10 hz-item">
								<h3 className="section-title">전용 요청 금액</h3>
								<p className="tx-msg"><span className="fc-pri">※ 최소 1개 이상을 입력해야 합니다.</span></p>
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
											<th scope="col"><span className="th-req">사업명 선택</span></th>
											<th scope="col"><span className="th-req">전용금액(원)</span></th>
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
														<option>선택</option>
														{sectors.map((sec, idx) =>
															<option key={idx}>{sec}</option>
														)}
													</select>
												</div>
											</td>
											<td>
												<div className="fund-form-group">
													<div className="fund-form-items tf-unit">
														<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''}  />
														<span className="u">원</span>
													</div>
													<div className="tx-msg ml10"><span className="fc-pri">(한글금액원)</span></div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tb-total">
								<div className="tb-total-items">전용 금액 합계</div>
								<div className="tb-total-items">
									<div className="fund-form-items tf-unit">
										<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}  readOnly={true}/>
										<span className="u">원</span>
									</div>
									<p className="tx-msg"><span className="fc-pri">(일억원 한글금액출력)</span></p> 
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">비고사항</h3>
						<form name="" action="" method="">
							<div className="ta-group w100p">
								<textarea className="ta-ip" rows={3} defaultValue={''} placeholder={''}/>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">파일첨부</h3>
						{/* FileUpload... */}
						<Raonkupload /> {/* 기능X css 디자인 ☆Fileupload 영역입니다☆ */}
						<p className="tx-msg mt10"><span className="fc-pri">※ 자사별 전용공문을 첨부해 주세요.</span></p>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">기업정보</h3>
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
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
					</div>
				</main>
			</div>
			{/* modal - 전용신청 안내사항 */}
			<ModalPopup
				open={modaladm2007.isShowing}
				title="전용신청 안내사항"
				size="mid"
				onClose={modaladm2007.close}
			>
				<div className="modal-con">
					<div className="fww-noti">
						<section className="mb30">
							<h3>전용신청절차</h3>
							<div className="step fund">
								<dl>
									<dt>01 출연선택</dt>
									<dd>전용이 가능한 <br />출연사업을 선택</dd>
								</dl>
								<dl>
									<dt>02 전용신청</dt>
									<dd>전용할 사업과 <br />전용금액을 입력</dd>
								</dl>
								<dl>
									<dt>03 전용공문</dt>
									<dd>전용공문을 첨부</dd>
								</dl>
								<dl>
									<dt>04 전용신청완료</dt>
									<dd>모든 신청정보를 <br />입력 후 제출</dd>
								</dl>
							</div>
						</section>
						<dl className="guide mb15">
							<dt>유의사항</dt>
							<dd>
								<ul className="list-group">
									<li>전용신청 시 출연사업을 지정하여 전용신청을 해야 합니다.</li>
									<li>전용가능금액 한도 내에서 신청이 가능합니다.</li>
									<li>전용신청 시 자사별 전용공문을 첨부해야 제출할 수 있습니다.</li>
								</ul>
							</dd>
						</dl>
						<div className="tx-msg"><span className="fc-pri">※ 전용공문은 재단에서 별도로 제공하고 있지 않습니다. 자사에서 구비중인전용공문을 준비해 주세요.</span></div>
					</div>
				</div>
				<div className="modal-bottom">
					<Button color="pri" size="md" onClick={modaladm2007.close}>확인</Button>
				</div>
			</ModalPopup>
			{/* modal - 전용 처리할 출연 선택 */}
			<ModalPopup
				open={modaladm2007_1.isShowing}
				title="전용 처리할 출연 선택"
				size="lg"
				onClose={modaladm2007_1.close}
			>
				<div className="modal-con">
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-item fo-m-1-3">
								<p className="fo-key">신청기간</p>
								<div className="fo-value">
									<div className="hz-root hz-gap5">
										<UIDatePicker className="hz-item"/>
										<span className="hz-item">~</span>
										<UIDatePicker className="hz-item"/>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={"출연번호를 입력하세요."} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연사업명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={"출연사업명을 입력하세요."} />
								</div>
							</div>
						</div>
					</form>
					<div className="hz-root hz-center mb30">
						<Button color="pri" size="md">조회</Button>
					</div>
					<div className="ibsheet">
						<p style={{height:"300px"}}>[D] IBSHEET 영역</p>
					</div>
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
				</div>
				<div className="modal-bottom">
					<Button color="pri" size="md" onClick={modaladm2007_1.close}>확인</Button>
				</div>
			</ModalPopup>
		</PageContainer>
	);
}
export default ContentsContainer;