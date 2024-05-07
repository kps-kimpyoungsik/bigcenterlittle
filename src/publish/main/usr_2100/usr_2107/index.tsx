import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={1}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">과제현황</h1>
					<div className="hz-root hz-right hz-gap10">
						<Button color="pri" size="md">제출</Button>
						<Button color="pri" size="md">변경심사</Button>
						<Button color="pri" size="md">과제종결</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="pri-o2" size="md" href="/main/usr_2100/usr_2006">수정</Button>
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2105">목록</Button>
					</div>
					<section className="fund-section">
						<h3 className="section-title mb15">과제 신청 정보</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">과제명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'과제명이 출력됩니다.'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제신청번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'T-00-00000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">진행상태</p>
									<div className="fo-value">
										{/* <UIInput className={'tf tf-md w100p'} value={'접수완료'} placeholder={''} readOnly={true} /> */}
										<span className="badge badge-23 blue">신청</span>
										<span className="badge badge-23 green">접수완료</span>
										<span className="badge badge-23 yellow">수정요청</span>
										<span className="badge badge-23 red">반려</span>
										<span className="badge badge-23 gray">심사완료</span>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제신청일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제기간</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day) ~ YYYY-MM-DD(Day) (MM월DD일)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">제출여부</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'예'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전자인증 여부</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'전자인증 / 서면'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제종료여부</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'아니오'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item ">
									<p className="fo-key">과제종료일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'2024-01-31(월)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								{/* 유형 type */}
								<div className="fo-item">
									<p className="fo-key">출연사업</p>
									<div className="fo-value"><UIInput className={'tf tf-md w100p'} value={'[사업분야에서 선택한 분야 출력]'} placeholder={''} readOnly={true} /></div>
								</div>
								<div className="fo-item">
									<p className="fo-key">기금사용용도</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'[중소기업의 생산성 향상을 위한 지원 사업]'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">지원분야</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'[지원분야에서 선택한 분야 출력]'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제분야</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'[과제분야에서 선택한 분야 출력]'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">지원내용 및 기대효과</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">지원내용</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'생산성 향상을 위한 자동화 설비 도입'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">기대효과</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'자동화 설비 도입을 통한 원가절감 및 품질 향상'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">기대성과(정량)</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'[경쟁력 강화] [소통활성] [ 공유가치 창출] [제도활성화]'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">지원대상</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">중소기업 지원 수</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'2 개사'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">중소기업 지원 수</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'2 개사'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">수행기관</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'수행기관 없음'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">지원 항목 별 지원금</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="400px" />
										<col width="400px" />
										<col width="400px" />
										<col />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">지원항목</th>
											<th scope="col">산출근거</th>
											<th scope="col">증빙방법</th>
											<th scope="col">금액(원)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'설비구매비'} placeholder={''} readOnly={true} />
											</td>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'자동화 생산 공정 기계 설비'} placeholder={''} readOnly={true} />
											</td>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'견적서'} placeholder={''} readOnly={true} />
											</td>
											<td>
												<div className="tf-unit d-block ">
													<UIInput className={'tf tf-md w100p ta-right'} value={'000,000,000'} placeholder={''} readOnly={true} />
													<span className="u">원</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
						<div className="tb-total">
							<div className="tb-total-items">지원 항목별 합계금액(원)</div>
							<div className="tb-total-items">
								<div className="fund-form-items tf-unit">
									<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}  readOnly={true}/>
									<span className="u">원</span>
								</div>
								<p className="tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></p> 
							</div>
						</div>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<h3 className="section-title hz-item">첨부파일</h3>
							<Button color='gray-o' size="sm">첨부파일수정</Button> 
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">과제 신청서(필수)</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">제출이 완료되지 않았습니다. 전자인증을 하시거나 수정버튼을 선택하고 수정화면에서 파일을 업로드 해주세요.</p>
											</div>
											<Button color='pri-o' size="md">전자인증</Button>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">과제 신청서(필수)</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">전자인증이 완료되었습니다.</p>
											</div>
											<Button color='gray-o' size="md">미리보기</Button>
										</div>
									</div>
								</div>
								{/*  전자인증 완료시 */}
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">과제 계획서(필수)</p>
									<div className="fo-value">
										<p className="tx-msg">제출이 완료되지 않았습니다. 수정버튼을 선택하고 수정화면에서 파일을 업로드 해주세요.</p>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">수행기관 사업자 등록증 <br />(수행기관 해당시만)</p>
									<div className="fo-value">
										<p className="tx-msg">제출이 완료되지 않았습니다. 수정버튼을 선택하고 수정화면에서 파일을 업로드 해주세요.</p>
									</div>
								</div>
							</div>
						</form>
						<div>file upload...</div>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">변경이력</h3>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col />
										<col width="33%" />
										<col width="33%" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">구분</th>
											<th scope="col">기존</th>
											<th scope="col">증빙방법</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'지원기간 변경'} placeholder={''} readOnly={true} />
											</td>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD(Day) ~ YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
											</td>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD(Day) ~ YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
											</td>
										</tr>
										<tr>
											<td>
												<UIInput className={'tf ta-center tf-md w100p'} value={'기타 변경사유'} placeholder={''} readOnly={true} />
											</td>
											<td className="ta-left" colSpan={2}>
												변경사유가 입력되면 입력된 내용이 출력됩니다.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">내부검토사항</h3>
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
											<th scope="col">내용</th>
											<th scope="col">담당자명</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="ta-center">00</td>
											<td><UIInput className={'tf tf-md w100p'} value={'수정요청한 내용이 있으면 출력됨 없으면 출력되지 않음.'} placeholder={''} readOnly={true} /></td>
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
											<th scope="col">내용</th>
											<th scope="col">담당자명</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="ta-center">00</td>
											<td><UIInput className={'tf tf-md w100p'} value={'반려사유가 있으면 출력됨 없으면 출력되지 않음.'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'등록 담당자명'} placeholder={''} readOnly={true} /></td>
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
						<h3 className="section-title mb15">심사 진행상태</h3>
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
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'접수완료'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf tf-md w100p'} value={'접수되었습니다.'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
										</tr>
										<tr>
											<td className="ta-center">08</td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'접수완료'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf ta-center tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} /></td>
											<td><UIInput className={'tf tf-md w100p'} value={'접수되었습니다.'} placeholder={''} readOnly={true} /></td>
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
										<UIInput className={'tf tf-md w100p'} value={'기업명 출력'} placeholder={''} readOnly={true} />
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
										<UIInput className={'tf tf-md w100p'} value={'0000-00-0000000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">담당자</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">직급</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'대리'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">부서</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'부서명'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">이메일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'id@email.com'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전화번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'02-0000-0000'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="pri" size="md">제출</Button>
						<Button color="pri" size="md">변경심사</Button>
						<Button color="pri" size="md">과제종결</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="pri-o2" size="md" href="/main/usr_2100/usr_2006">수정</Button>
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2105">목록</Button>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;