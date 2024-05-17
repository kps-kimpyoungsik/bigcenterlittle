
import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2000Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
//import UIInputFile from 'components/input/inputFile';
import Button from 'components/buttons/';
import UIDatePicker from "components/datepicker";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import { Tooltip } from 'react-tooltip';
import Raonkupload from 'components/input/kupload';
function ContentsContainer() {
	const modaladm2004 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={1} lnbIdx={1}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">출연내용 수정</h1>
					<div className="hz-root hz-right hz-gap10">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
						<Button color="gray-o" size="md" href="/main/usr_2000/usr_2002">목록</Button>
					</div>
					<section className="fund-section">
						<h3 className="section-title mb15">출연 신청 정보</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">출연번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'000-0000-000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연상태</p>
									<div className="fo-value">
										<label className="badge badge-22 blue">신청</label>
										<label className="badge badge-22 green">입금확인</label>
										<label className="badge badge-22 gray">수납완료</label>
										{/* <UIInput className={'tf tf-md w100p'} value={'신청'} placeholder={''} readOnly={true} /> */}
									</div>
								</div>
								<div className="fo-item">
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
										<div className="sl sl-md w100p">
											<select>
												<option>금전</option>
												<option>현물</option>
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">출연 사업</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>동반성장 투자재원</option>
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">출연 금액</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<div className="tf-unit hz-item hz-fg">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} />
												<span className="u">원</span>
											</div>
											<div className="hz-item tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					{/* 
					<section className="fund-section">
						<h3 className="section-title mb15">출연금액</h3>
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
													<div className="fund-form-items tf-unit d-block">
														<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''}  />
														<span className="u">원</span>
													</div>
													<div className="fund-form-items tx-msg ml10"><span className="fc-pri">(일억원 한글금액출력))</span></div>
												</div>
											</td>
											<td>
												<div className="sl sl-md">
													<select>
														<option>동반성장 투자재원</option>
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
									<p className="tx-msg"><span className="fc-pri">(일억원)</span></p> 
								</div>
							</div>
						</form>
					</section>
					출연금액삭제 */}
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<h3 className="section-title hz-item">첨부파일</h3>
							<Button color='gray-o' size="sm">첨부파일수정</Button> 
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										<span>출연신청서</span>&nbsp;
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip">툴팁</button>
										<Tooltip 
											id="tooltip"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
											//openOnClick
										>
											<div className="msg">
												<h6 className="tooltip-title">출연 신청 시 첨부 서류</h6>
												<ul className="list-group">
													<li>서면 : 출연신청서(서면) 클릭하여 출연신청서 출력 후 직인을 찍고 스캔하여 수정버튼을 클릭하여 이동한 화면에서 출연신청(첨부문서)에 등록 후 저장하셔야 합니다.</li>
													<li>전자인증 : 기업용 공인인증서를 이용하여 출연신청서(전자인증)을 클릭하여 인증을 완료하시면 됩니다. 첨부 문서는 없습니다.</li>
												</ul>
											</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">출연신청서 전자인증을 완료하였습니다.</p>
											</div>
											<Button color='pri-o' size="md">미리보기</Button>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										출연신청서
									</div>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items mr30">
												{/* <UIInputFile  placeholder={'파일을 첨부해 주세요.'}/> */}
												<div className="hz-root hz-gap8 w100p">
													<UIInput className={'tf tf-md hz-item grow'} value={'사업자등록증.pdf(67.58KB)'} placeholder={'파일을 첨부해 주세요.'} />
													<div className="hz-root hz-gap8 ">
														<Button color='pri-o2' size="md">찾기</Button>
														<Button color='gray-o' size="md">삭제</Button>
													</div>
												</div>
											</div>
											
											<Button color='gray-o' size="md">양식 다운로드</Button>
										</div>
									</div>
								</div>
							</div>
						</form>
						<p className="tx-msg mt10 mb18"><span className="fc-pri">※ 항목 외 기타 파일들은 아래 파일 첨부를 이용해 주세요.</span></p>
						{/* FileUpload... */}
						<Raonkupload /> {/* 기능X css 디자인 ☆Fileupload 영역입니다☆ */}
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
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
						<Button color="gray-o" size="md" href="/main/usr_2000/usr_2002">목록</Button>
					</div>
				</main>
			</div>
			{/* modal - 가상 계좌 발급 안내 */}
			<ModalPopup
				open={modaladm2004.isShowing}
				title="가상 계좌 발급 안내"
				size="mid"
				onClose={modaladm2004.close}
			>
				<div className="modal-con">
					<p style={{padding:"100px 0",textAlign:"center"}}>발급 안내 내용 수급 필요</p>
				</div>
				<div className="modal-bottom">
					<Button color="pri" size="md">확인</Button>
				</div>
			</ModalPopup>	
		</PageContainer>
	);
}
export default ContentsContainer;