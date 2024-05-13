import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2000Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
function ManualContainer(): JSX.Element {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={1} lnbIdx={3}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">전용 요청 상세</h1>
					<div className="hz-root hz-right hz-gap10">
						<Button color="pri" size="md">제출</Button>
						<Button color="pri-o2" size="md" href="/main/usr_2000/usr_2012">수정</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="gray-o" size="md" href="/main/usr_2000/usr_2009">목록</Button>
					</div>
					<section className="fund-section">
						<h3 className="section-title mb15">전용 정보</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">출연번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'00-0000-000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">처리 번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'C-0000-00000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전용상태</p>
									<div className="fo-value">
										<label className="badge badge-22 blue">신청</label>
										<label className="badge badge-22 skyblue">접수중</label>
										<label className="badge badge-22 red">반려</label>
										<label className="badge badge-22 gray">승인완료</label>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전용금액(원)</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items tf-unit">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''}  readOnly={true}  />
												<span className="u">원</span>
											</div>
											<div className="tx-msg ml10"><span className="fc-pri">(한글금액원)</span></div>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전용가능잔액</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items tf-unit">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''}  readOnly={true}  />
												<span className="u">원</span>
											</div>
											<div className="tx-msg ml10"><span className="fc-pri">(한글금액원)</span></div>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전용신청일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전용일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">비고사항</p>
									<div className="fo-value">
										<div className="ta-group w100p">
											<textarea className="ta-ip" rows={3} defaultValue={'사용자가 입력한 비고사항이 있으면 출력됩니다.'} />
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="pt">
							<div className="row">
								<div className="col col-5">
									<h3 className="section-title mb15">변경 전 출연 내용</h3>
									<form className="fo fo-col2" name="" action="" method="">
										<div className="inner">
											<div className="fo-item fo-m-1-3">
												<p className="fo-key">출연사업명</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={'창업,밴처기업지원'} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item fo-m-1-3">
												<p className="fo-key">출연금액(원)</p>
												<div className="fo-value">
													<div className="fund-form-group">
														<div className="fund-form-items tf-unit">
															<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''}  readOnly={true}  />
															<span className="u">원</span>
														</div>
														<div className="tx-msg ml10"><span className="fc-pri">(한글금액원)</span></div>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
								<div className="col col-5">
									<h3 className="section-title mb15">변경 후 전용 내용</h3>
									<form className="fo fo-col2" name="" action="" method="">
										<div className="inner">
											<div className="fo-item fo-m-1-3">
												<p className="fo-key">전용사업명</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={'투자재원'} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item fo-m-1-3">
												<p className="fo-key">전용사업명</p>
												<div className="fo-value">
													<div className="fund-form-group">
														<div className="fund-form-items tf-unit">
															<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''}  readOnly={true}  />
															<span className="u">원</span>
														</div>
														<div className="tx-msg ml10"><span className="fc-pri">(한글금액원)</span></div>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
					{/* 
					<section className="fund-section">
						<h3 className="section-title mb15">전용 금액</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="50%"  />
										<col/>
									</colgroup>
									<thead>
										<tr>
											<th scope="col"><span className="th-req">사업명 선택</span></th>
											<th scope="col"><span className="th-req">전용금액(원)</span></th>
										</tr>
									</thead>
									<tbody>
										<tr>
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
					 */}
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<h3 className="section-title hz-item">첨부파일</h3>
							<Button color='gray-o' size="sm">첨부파일수정</Button> 
						</div>
						<form className="fo fo-col2 mb18" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">전용 신청서</div>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">제출이 완료되지 않았습니다. 전자인증을 하시거나 수정 버튼을 선택하고 수정화면에서 파일을 업로드 해주세요</p>
											</div>
											<Button color='pri-o' size="md">전자인증</Button>
										</div>
									</div>
								</div>
								{/* [전자인증 완료] */}
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">전용 신청서</div>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">전용신청서 전자인증을 완료하였습니다.</p>
											</div>
											<Button color='gray-o' size="md">미리보기</Button>
										</div>
									</div>
								</div>
								 {/* [첨부한 파일이 있는 경우]*/}
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">전용 신청서</div>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">전용신청서 파일첨부를 완료하였습니다.</p>
											</div>
											<Button color='gray-o' size="md">미리보기</Button>
										</div>
									</div>
								</div>
							</div>
						</form>
						<p className="tx-msg mt10 mb18"><span className="fc-pri">※ 항목 외 기타 파일들은 아래 파일 첨부를 이용해 주세요.</span></p>
						<div>file upload...</div>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">반려사유</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="90px" />
										<col />
										<col width="230px" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">순번</th>
											<th scope="col">반려사유</th>
											<th scope="col">담당자명</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="ta-center">00</td>
											<td><UIInput className={'tf tf-md w100p'} value={'반려사유가 있으면 출력됨 없으면 출력되지 않음.'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'재단 담당자명'} placeholder={''} readOnly={true} /></td>
										</tr>
										<tr>
											<td colSpan={3}>
												<div className="nd">
													<i className="ic"></i>
													<p className="tx tx-cp2 fc-666">내역이 없습니다.</p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title hz-item mb15">심사 의견</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="90px" />
										<col width="230px" />
										<col width="230px" />
										<col />
										<col width="130px" />
										<col width="230px" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">순번</th>
											<th scope="col">심사진행상태</th>
											<th scope="col">심사일시</th>
											<th scope="col">심사의견</th>
											<th scope="col">담당자명</th>
											<th scope="col">담당자 수정일시</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="ta-center">09</td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'접수중'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf tf-md w100p'} value={'접수되었습니다.'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
										</tr>
										<tr>
											<td className="ta-center">08</td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'승인완료'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf tf-md w100p'} value={'승인이 완료되었습니다.'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
										</tr>
										<tr>
											<td colSpan={6}>
												<div className="nd">
													<i className="ic"></i>
													<p className="tx tx-cp2 fc-666">내역이 없습니다.</p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
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
						<Button color="pri" size="md">제출</Button>
						<Button color="pri-o2" size="md" href="/main/usr_2000/usr_2012">수정</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="gray-o" size="md" href="/main/usr_2000/usr_2009">목록</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ManualContainer;