import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2000Aside";
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
import UIDatePicker from "components/datepicker";
function ManualContainer(): JSX.Element {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">기금출연</Link></li>
					<li><Link to="#">전용현황</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">전용현황</h1>
					<div className="hz-root hz-right hz-gap10">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
						<Button color="gray-o" size="md" href="/main/usr_2000/usr_2009">목록</Button>
					</div>
					<section className="fund-section">
						<h3 className="section-title mb15">전용 요청 내용</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">처리 번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'C-0000-00000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">처리구분</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'전용'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전용일자</p>
									<div className="fo-value">
										<UIDatePicker />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">처리자</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} />
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
									<p className="fo-key">출연번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'000000000000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연일자</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'동반성장투자재원'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연금액(원)</p>
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
										<col width="750px" />
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
												<UIInput className={'tf tf-md w100p'} value={'문화확산ESG'} placeholder={''} readOnly={true} />
											</td>
											<td>
												<div className="fund-form-group">
													<div className="fund-form-items tf-unit d-block">
														<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''}  />
														<span className="u">원</span>
													</div>
													<div className="fund-form-items tx-msg ml10"><span className="fc-pri">(한글금액원)</span></div>
												</div>
											</td>
											
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tb-total">
								<div className="tb-total-items">
									전용 금액 합계
								</div>
								<div className="tb-total-items">
									<div className="fund-form-items tf-unit">
										<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}  readOnly={true}/>
										<span className="u">원</span>
									</div>
									<p className="tx-msg"><span className="fc-pri">(한글금액원)</span></p> 
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">첨부 파일</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">전용 신청서</div>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">전용신청서 전자인증을 완료하였습니다.</p>
											</div>
											<Button color='pri-o' size="md">미리보기</Button>
										</div>
									</div>
								</div>
							</div>
						</form>
						<p className="tx-msg mt10 mb18"><span className="fc-pri">※ 항목 외 기타 파일들은 아래 파일 첨부를 이용해 주세요.</span></p>
						<div>file upload...</div>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">기업 정보</h3>
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
										<UIInput className={'tf tf-md w100p'} value={'기업명 출력'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
						<Button color="gray-o" size="md" href="/main/usr_2000/usr_2009">목록</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ManualContainer;