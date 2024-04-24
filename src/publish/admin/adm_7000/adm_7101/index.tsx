import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_7000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	const modaladm7103 = useToggleState({});
	const modaladm7102 = useToggleState({});	
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">결재함</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">결재함 상세</h1>
						<h3 className="section-title mb15">결재선</h3>

						<ol className="approval-process mb30">
							<li className="item">
								<div className="role">검토자</div>
								<div className="do">
									<p className="stamp">결재</p>
									<p className="date">2024-09-24 23:23:59</p>
								</div>
								<div className="who">유관순 차장</div>
							</li>
							<li className="item">
								<div className="role">검토자</div>
								<div className="do">
									<p className="stamp">결재</p>
									<p className="date">2024-09-24 23:23:59</p>
								</div>
								<div className="who">이순신 차장</div>
							</li>
							<li className="item active"> {/* [D]본인 순서 왔을때: .active */}
								<div className="role">검토자</div>
								<div className="do">
									{/* <p className="stamp">결재</p> */}
									{/* <p className="date">2024-09-24 23:23:59</p> */}
								</div>
								<div className="who">이순신2 차장</div>
							</li>
							<li className="item">
								<div className="role">검토자</div>
								<div className="do">
									{/* <p className="stamp">결재</p> */}
									{/* <p className="date">2024-09-24 23:23:59</p> */}
								</div>
								<div className="who">이순신2 차장</div>
							</li>
							<li className="item">
								<div className="role">협조자</div>
								<div className="do">
									{/* <p className="stamp">결재</p> */}
									{/* <p className="date">2024-09-24 23:23:59</p> */}
								</div>
								<div className="who">이순신2 차장</div>
							</li>
							<li className="item">
								<div className="role">감사자</div>
								<div className="do">
									{/* <p className="stamp">결재</p> */}
									{/* <p className="date">2024-09-24 23:23:59</p> */}
								</div>
								<div className="who">이순신2 차장</div>
							</li>														
							<li className="item">
								<div className="role">결재자</div>
								<div className="do">
									{/* <p className="stamp">결재</p> */}
									{/* <p className="date">2024-09-24 23:23:59</p> */}
								</div>
								<div className="who">강감찬 본부장</div>
							</li>							
						</ol>

						<h3 className="section-title mb15">결재상신</h3>
						<form className="fo fo-col2 mb30" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">결재상태</p>
									<div className="fo-value">
										<label className="badge badge-23 red">결재대기</label>
										<label className="badge badge-23 blue">결재중</label>
										<label className="badge badge-23 green">전결</label>
										<label className="badge badge-23 red">반려</label>
										<label className="badge badge-23 gray">집행완료</label>

									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">등록자</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">등록일</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'2024-12-12 12:12:12'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">내용</p>
									<div className="fo-value">
										<div className="ta-view ta-view-white w100p">
											지난 주 회의 때 결정된 사항입니다. <br/>
											운영비 항목이 추가되었습니다.
										</div>
									</div>
								</div>
								
								{/* [D] 반려 */}
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">반려사유</p>
									<div className="fo-value">
									<div className="ta-view ta-view-white w100p">
										운영비 항목은 다음년도에 기산되기로 결정되었음 <br />
										볼보그룹코리아인 경우는 다음년도 운영비에 합산하여 계산 할 것
									</div>
									</div>
								</div>
								{/* //[D] 반려 */}

							</div>
						</form>

						<h3 className="section-title mb15">지급신청 정보</h3>
						<form className="fo fo-col2 mb30" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">지급신청번호</p> 
									<div className="fo-value">
										<Link className="tx tx-cp1 tx-link2" to="#">Y-24-0000695</Link>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연기업</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'볼보그룹코리아㈜건설기계'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제명</p>
									<div className="fo-value">
										<Link className="tx tx-cp1 tx-link2" to="#">24년 협력사 포켓_모바일수첩 지원(안)</Link>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제기간</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'2024-01-01 ~ 2024-12-31'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'운영비(상생형 스마트공장)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">기금사용용도</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'대·중소기업 간 상생협력 성과의 공평한 배분에 관한 사업'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">수행기업</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">중소기업</p>
									<div className="fo-value">

										<div className="hz-root hz-right w100p">
											<div className="hz-item tf-unit">
												<input readOnly name="" id="" className="tf tf-md ta-right" type="text" value="50,000,000" placeholder="" />
												<span className="u">개</span>
											</div>
										</div>

									
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">지급신청금액(합계)</p>
									<div className="fo-value">

										<div className="hz-root hz-right w100p">
											<div className="hz-item tf-unit">
													<input readOnly name="" id="" className="tf tf-md ta-right" type="text" value="50,000,000" placeholder="" />
													<span className="u">개</span>
											</div>										
										</div>							
									
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">지원금 지급방식</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'사후정산'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>

						<h3 className="section-title mb15">기업목록</h3>
						<div className="tb-top">
							<div className="hz-root hz-gap15">
								<div className="hz-item">
									<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
								</div>
								<div className="hz-item">
									<em className="fc-black">지급신청금액 합계</em> <span className="price">1,000,000,000</span>원  &nbsp;&nbsp;&nbsp;
									<em className="fc-black">지원금액 합계</em> <span className="price">90,000,000</span>원  &nbsp;&nbsp;&nbsp;
									<em className="fc-black">미집행금액(합계)</em> <span className="price fc-err">10,000,000</span>원 
								</div>
								
							</div>
							<div className="hz-root hz-gap5">
								<button className="bt bt-sm bt-gray-o" type="button">다운로드</button>							
							</div>
						</div>
						<div className="ibsheet">[D] IBSHEET 영역</div>
						<div className="hz-root hz-right hz-gap5 mt10">
							<Button color="gray-o" size="sm" >반려</Button>
							<Button color="pri-o" size="sm" >결재</Button>
							<Button color="gray-o" size="sm" >목록</Button>
						</div>

						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}
						<br/><br/>
						<Button color='gray' size="sm" onClick={modaladm7103.open}>adm_7103p 열기</Button> <br /><br />
						<Button color='gray' size="sm" onClick={modaladm7102.open}>adm_7102p 열기</Button> <br /><br />
						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}						

					</main>
				</div>

				{/* modal - 7103 */}	
				<ModalPopup
				open={modaladm7103.isShowing}
				title="반려사유"
				size="mid"
				onClose={modaladm7103.close}
			>
				<div className="modal-con">

					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">지급신청번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'Y-24-0000695'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">반려사유</p>
								<div className="fo-value">
									<div className="ta w100p h100 ta-readonly">
										<textarea readOnly className="ta-ip" placeholder="">
											운영비 항목은 다음년도에 기산되기로 결정되었음.
											볼보그룹코리아인 경우는 다음년도 운영비에 합산하여 계산 할 것
										</textarea>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">취소</Button>
						<Button color='pri' size="md">반려</Button>
					</div>
				</div>	
			</ModalPopup>

				{/* modal - 7102 */}	
				<ModalPopup
				open={modaladm7102 .isShowing}
				title="이체실행"
				size="lg"
				onClose={modaladm7102 .close}
			>
				<div className="modal-con">
					
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">출금계좌</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'122-123456-12345'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">잔액</p>
								<div className="fo-value">
									<div className="hz-root hz-right w100p">
										<div className="hz-item tf-unit">
											<input readOnly name="" id="" className="tf tf-md ta-right" type="text" value="50,000,000" placeholder="" />
											<span className="u">원</span>
										</div>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">과제명</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'파트너사 작업환경 개선 지원'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">과제신청금액</p>
								<div className="fo-value">
									<div className="hz-root hz-right w100p">
										<div className="hz-item tf-unit">
											<input readOnly name="" id="" className="tf tf-md ta-right" type="text" value="50,000,000" placeholder="" />
											<span className="u">원</span>
										</div>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">지원기업수</p>
								<div className="fo-value">
									<div className="hz-root hz-right w100p">
										<div className="hz-item tf-unit">
											<input readOnly name="" id="" className="tf tf-md ta-right" type="text" value="50,000,000" placeholder="" />
											<span className="u">개</span>
										</div>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">집행금액(합계)</p>
								<div className="fo-value">
									<div className="hz-root hz-right w100p">
										<div className="hz-item tf-unit">
											<input readOnly name="" id="" className="tf tf-md ta-right" type="text" value="50,000,000" placeholder="" />
											<span className="u">원</span>
										</div>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">비밀번호</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w245'} value={''} placeholder={''} readOnly={false} type="password" />
								<p className="tx tx-alert ml10">비밀번호가 일치하지 않습니다.</p>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">취소</Button>
						<Button color='pri' size="md">이체실행</Button>
					</div>
				</div>	
			</ModalPopup>			

		</PageContainer>
	);
}
export default ContentsContainer;