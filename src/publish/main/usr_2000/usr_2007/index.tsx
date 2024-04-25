
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2000Aside";
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	const modaladm2007 = useToggleState({});
	const modaladm2007_1 = useToggleState({});
	const sectors = [
		'동반성장 투자재원','상생형 창법 밴처기업 지원사업','공동투자형 기술개발','산업혁신운동','대중소 상생형 스마트공장','대중소기업 혁신 파트너십','성과공유제',
		'협력이익공유제','대중소기업 동반진출','동반성장 문화확산-신용카드 영세가맹점 지원사업','동반성장 문화확산-협력시ESG 평가지원사업','동반성장 문화확산-혁신주도형 동반성장',
		'분사기업(스핀오프) 상생협력 사업','상생결제제도 운영','지역사회 동반성장 지원사업','기술유출방지시스템'
	]
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">기금출연</Link></li>
					<li><Link to="#">전용신청</Link></li>
				</ul>
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
						<h3 className="section-title mb15">전용 요청일자</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item req">
									<p className="fo-key">요청일</p>
									<div className="fo-value">
										<div className="w320">
											<UIDatePicker />
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">출연 번호 선택</p>
									<div className="fo-value">
										<Button color="gray-o" size="md" onClick={modaladm2007_1.open}>출연사업선택</Button>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">출연 내용</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">사업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'동반성장투자재원'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연 일자</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">기부내용</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'금전'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연금액</p>
									<div className="fo-value">
										<div className="tf-unit w100p">
											<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true} />
											<span className="u">원</span>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">대상금액(원)</p>
									<div className="fo-value">
										<div className="tf-unit w100p">
											<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true} />
											<span className="u">원</span>
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
													<div className="fund-form-items tx-msg ml10"><span className="fc-pri">(일억원 한글금액출력)</span></div>
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
						<h3 className="section-title mb15">기업정보</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">법인등록번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'0000-00-0000000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'기업명'} placeholder={''} readOnly={true} />
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
			{/* modal - 안내사항 보기 */}
			<ModalPopup
				open={modaladm2007.isShowing}
				title="안내사항 보기"
				size="mid"
				onClose={modaladm2007.close}
			>
				<div className="modal-con">
					<p style={{padding:"100px 0",textAlign:"center"}}>안내사항 내용 수급 필요</p>
				</div>
				<div className="modal-bottom">
					<Button color="pri" size="big" onClick={modaladm2007.close}>확인</Button>
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
					<form className="fo fo-col2 mb30" name="" action="" method="">
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
					<Button color="pri" size="big" onClick={modaladm2007_1.close}>확인</Button>
				</div>
			</ModalPopup>
		</PageContainer>
	);
}
export default ContentsContainer;