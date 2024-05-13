
import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
import UIInputFile from 'components/input/inputFile';
import Button from 'components/buttons/';
import UIDatePicker from "components/datepicker";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
function ContentsContainer() {
	const modaladm2135 = useToggleState({});
	const modaladm2138 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={4}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">환수신청 정보입력</h1>
					<div className="hz-root hz-right hz-gap10 mb30">
						<Button color="pri" size="md">저장</Button>
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2133">목록</Button>
					</div>
					<section className="fund-section">
						<div className="hz-root hz-gap10 hz-sb mb15">
							<h3 className="section-title">집행 과제</h3>
							<p className="tx-msg"><span className="fc-pri">*</span>&nbsp;필수 입력</p>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item req">
									<p className="fo-key">과제번호</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<UIInput className={'tf tf-md hz-item hz-fg'} value={'T-00-0000'} placeholder={''} />
											<Button color='gray-o' size="md" onClick={modaladm2135.open}>집행과제선택</Button> 
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">지급신청번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'Y-00-0000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">과제명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'과제명이 출력됩니다.'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">환수신청</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<div className="fo-key">환수신청일</div>
									<div className="fo-value">
										<div className="w215">
											<UIDatePicker />
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<div className="fo-key">환수사유</div>
									<div className="fo-value">
										<div className="ta-group w100p">
											<textarea rows={3} className="ta-ip" placeholder="환수사유를 입력하세요" defaultValue="" />
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<h3 className="section-title hz-item">환수기업 및 환수금액 입력</h3>
							<div className="hz-root hz-gap8">
								<Button color='gray-o' size="sm" onClick={modaladm2138.open}>환수기업 내역등록</Button> 
							</div>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							
							<div className="inner">
								<div className="fo-item">
									<div className="fo-key">환수금액 합계</div>
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
								<div className="fo-item">
									<div className="fo-key">환수기업수(개사)</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 ">
											<UIInput className={'tf tf-md ta-right hz-item hz-fg'} value={'0'} placeholder={''}/>	
											<p className="tx-msg hz-item">개사</p>
										</div>
									</div>
								</div>
							</div>
							{/* NO-data */}
							<div className="nd">
								<i className="ic"></i>
								<p className="tx tx-cp2 fc-666">환수기업 내역 등록을 선택하시고 환수기업 및 환수금액을 입력해 주세요.</p>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-gap15 mb15">
							<h3 className="section-title hz-item">첨부파일</h3>
							<p className="tx-msg"><span className="fc-pri">※ 자사 환수신청서를 작성 후 첨부해 주세요.</span></p>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">환수 신청서</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<div className="w100p">
													<UIInputFile placeholder={'파일을 첨부해 주세요.'}/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
						<p className="tx-msg mb15"><span className="fc-pri">※ 항목 외 기타 파일들은 아래 파일 첨부를 이용해 주세요.</span></p>
						<div>file upload...</div>
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
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">직급</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'직급 출력'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">부서</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'부서 출력'} placeholder={''} />
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
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2133">목록</Button>
					</div>
				</main>
			</div>
			{/* modal - 집행과제선택 */}
			<ModalPopup
				open={modaladm2135.isShowing}
				title="집행과제선택"
				size="mid"
				onClose={modaladm2135.close}
			>
				<div className="modal-con">
					<div className="modal-tskana">
						<form className="fo fo-col2 mb15" name="" action="" method="">
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
									<p className="fo-key">과제번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={"과제번호를 입력하세요."} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={"과제명을 입력하세요."} />
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
				</div> 
			</ModalPopup>
			{/* modal - 환수기업 내역등록 */}
			<ModalPopup
				open={modaladm2138.isShowing}
				title="환수기업 내역등록"
				size="mid"
				onClose={modaladm2138.close}
			>
				<div className="modal-con">
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">지원 금액 합계(원)</p>
								<div className="fo-value">
									<div className="tf-unit hz-item w100p">
										<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} />
										<span className="u">원</span>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">환수금액 합계(원)</p>
								<div className="fo-value">
									<div className="tf-unit hz-item w100p">
										<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} />
										<span className="u">원</span>
									</div>
								</div>
							</div>
						</div>
					</form>
					<div className="tb-top">
						<div>
							<p className="tx fc-black">총 <em className="fw500">1103</em>건</p>
						</div>
						<div className="hz-root hz-gap8">
							<div className="sl sl-sm w120">
								<select>
									<option value="0">20개씩보기</option>
									<option value="0">50개씩보기</option>
									<option value="0">100개씩보기</option>
									<option value="0">200개씩보기</option>
									<option value="0">500개씩보기</option>
									<option value="0">1000개씩보기</option>
								</select>
							</div>
						</div>
					</div>
					<div className="ibsheet">
						<p style={{height:"300px"}}>[D] IBSHEET 영역</p>
					</div>
				</div> 
				<div className="modal-bottom">
					<Button color="gray-o" size="md">취소</Button>
					<Button color="pri" size="md">저장</Button>
				</div>
			</ModalPopup>
		</PageContainer>
	);
}
export default ContentsContainer;