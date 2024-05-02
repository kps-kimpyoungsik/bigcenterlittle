
import React from "react";
import { Link } from 'react-router-dom';
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
								<div className="fo-item req">
									<p className="fo-key">출연 신청일</p>
									<div className="fo-value">
										<div className="w320">
											<UIDatePicker />
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
										<col width="480px" />
									</colgroup>
									<thead>
										<tr>
											<th>
												<label htmlFor="ch-all" className="hz-item ip-ch-label ip-ch-18">
													<input id="ch-all" className="ip-ch" type="checkbox" />
													<span className="check"></span> 
												</label>
											</th>
											<th scope="col"><span className="th-req">출연 금액 입력</span></th>
											<th scope="col"><span className="th-req">출연 금액 별 사업명 선택</span></th>
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
												<div className="fund-form-group">
													<div className="fund-form-items tf-unit">
														<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''}  />
														<span className="u">원</span>
													</div>
													<div className="fund-form-items tx-msg ml10"><span className="fc-pri">(일억원 한글금액출력)</span></div>
												</div>
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
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tb-total">
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
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">기업정보</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">사업자번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'1234-12-1234567'} placeholder={''} readOnly={true} />
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
					<p style={{padding:"100px 0",textAlign:"center"}}>안내 내용 수급 필요</p>
				</div>
				<div className="modal-bottom">
					<Button color="pri" size="md">확인</Button>
				</div>
			</ModalPopup>	
		</PageContainer>
	);
}
export default ContentsContainer;