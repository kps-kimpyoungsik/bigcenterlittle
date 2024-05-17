import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2000Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
import UIDatePicker from "components/datepicker";
import Raonkupload from 'components/input/kupload';
function ManualContainer(): JSX.Element {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={1} lnbIdx={3}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">전용 내용 수정</h1>
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
								<div className="fo-item req">
									<p className="fo-key">전용요청일</p>
									<div className="fo-value">
										<div className="w215">
											<UIDatePicker />
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
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true}  />
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
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true}  />
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
												<div className="sl sl-md w100p">
													<select>
														<option>ESG</option>
													</select>
												</div>
												{/* <UIInput className={'tf tf-md w100p'} value={'문화확산ESG'} placeholder={''} readOnly={true} /> */}
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
						<p className="tx-msg mt10 mb18"><span className="fc-pri">※ 자사별 전용공문을 첨부해 주세요.</span></p>
						{/* FileUpload... */}
						<Raonkupload /> {/* 기능X css 디자인 ☆Fileupload 영역입니다☆ */}
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">기업 정보</h3>
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
						<Button color="gray-o" size="md" href="/main/usr_2000/usr_2009">목록</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ManualContainer;