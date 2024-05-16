
import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2000Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
//import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
//import { Popover } from "react-tiny-popover";
import Virtual from 'assets/img/pages/usr_virtual.svg';
import Raonkupload from 'components/input/kupload';
function ContentsContainer() {
	const modaladm2004 = useToggleState({});
	//const [isPopoverOpen, setIsPopoverOpen] = useState(false);
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={1} lnbIdx={1}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">출연현황</h1>
					<div className="hz-root hz-right hz-gap10">
						<Button color="pri" size="md">기부금영수증</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="pri-o2" size="md" href="/main/usr_2000/usr_2006">수정</Button>
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
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연사업</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'동반성장 투자재원'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연 신청일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연 일자</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">기부금 영수증번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전자인증 여부</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'전자인증 / 서면'} placeholder={''} readOnly={true} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">기부내용</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'금전'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연금 입금계좌</p>
									<div className="fo-value">
										<div className="hz-root hz-sb w100p">
											<UIInput className={'w215 hz-fg tf tf-md'} value={'하나은행 0000-00-000000'} placeholder={''} readOnly={true} />
											<div className="hz-item">
												<Button color='pri-o' size="md" onClick={modaladm2004.open}>가상계좌확인서 발급 안내</Button>
											</div>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">3년 만기 도래일</p>
									<div className="fo-value">
										<div className="hz-root hz-left hz-gap5">
											<UIInput className={'tf tf-md'} value={'YYYY-MM-DD'} placeholder={''} readOnly={true} />
											<div className="hz-item tx-msg">(D-000일)</div>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연신청금액(원)</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<div className="tf-unit hz-item hz-fg">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true} />
												<span className="u">원</span>
											</div>
											<div className="hz-item tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></div>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연금액(원)</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<div className="tf-unit hz-item hz-fg">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true} />
												<span className="u">원</span>
											</div>
											<div className="hz-item tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></div>
										</div>
									</div>
								</div>
							</div>
						</form>
						<div className="tx-msg"><span className="fc-pri">※ 출연신청 후 별도 승인절차가 없습니다. 위 계좌로 입금해주시면 됩니다. 단 출연금을 한번에 입금하지 않고 분할해서 입금하시는 경우 입금일자가 서로 다르면 취소하고 다시 신청해야 합니다.</span></div>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">출연금액</h3>
						<form className="fo fo-col2 mb0" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">출연금</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<div className="tf-unit hz-item hz-fg">
												<UIInput className={'tf tf-md ta-right'} value={'000,000,000'} placeholder={''} readOnly={true} />
												<span className="u">원</span>
											</div>
											<div className="hz-item tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></div>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연금액별 출연사업</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'동반성장 투자재원'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
						<div className="tb-total">
							<div className="tb-total-items">
								출연 금액 합계
							</div>
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
						<form className="fo fo-col2 mb18" name="" action="" method="">
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
										{/* [popover - 이전]
										<Popover
											containerStyle={{marginLeft: "5px"}}
											isOpen={isPopoverOpen}
											positions={['right']}
											reposition={false}
											onClickOutside={() => setIsPopoverOpen(false)} 
											content={({ position }) => (
												<div className="popover-conts">
													
													<button type="button" className="popover-closed" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>창닫기</button>
												</div>
											)}
										>
											<button type="button" className="popover-toggle" onClick={() => setIsPopoverOpen(!isPopoverOpen)}></button>
										</Popover>
										 */}
									</div>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">제출이 완료되지 않았습니다. 전자인증을 하시거나 수정 버튼을 선택하고 수정화면에서 파일을 업로드 해주세요.</p>
											</div>
											<Button color='pri-o' size="md">전자인증</Button>
										</div>
									</div>
								</div>
								{/* 전자인증한 상태 */}
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										<span>출연신청서</span>&nbsp;
									</div>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<p className="tx-msg">출연신청서 전자인증을 완료하였습니다.</p>
											</div>
											<Button color='gray-o' size="md">미리보기</Button>
										</div>
									</div>
								</div>
								{/* 첨부한 파일이 있는 경우 */}
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										<span>출연신청서</span>&nbsp;
									</div>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<UIInput className={'tf tf-md w100p'} value={'파일명.확장자(0,000kb)'} placeholder={''} readOnly={true} />
											</div>
											<Button color='gray-o' size="md">미리보기</Button>
										</div>
									</div>
								</div>
							</div>
						</form>
						<Raonkupload /> {/* 기능X css 디자인  */}
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
						<Button color="pri" size="md">기부금영수증</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="pri-o2" size="md" href="/main/usr_2000/usr_2006">수정</Button>
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
					<div className="virtual-account">
						<h3 className="mb15">가상계좌란?</h3>
						<p className="mb30">대중소기업 협력재단이 하나은행으로부터 가상계좌를 발급받아 출연기업에게 부여하고, 출연금이 개별 가상계좌에 입금되면 실시간 (또는 지정된 시각)으로 대중소기업 상생협력기금 모계좌에 자동으로 이체해드리는 서비스입니다.</p>
						<h3 className="mb15">서비스 흐름</h3>
						<div className="mb30">
							<img src={Virtual} alt="서비스 흐름" />
						</div>
						<h3 className="mb15">안내 문의</h3>
						<ul className="list-group">
							<li>기금담당 : 홍길동</li>
							<li>전화번호 : 02-368-8700</li>
						</ul>
					</div>
				</div>
				<div className="modal-bottom">
					<Button color="pri" size="md">확인</Button>
				</div>
			</ModalPopup>	
		</PageContainer>
	);
}
export default ContentsContainer;