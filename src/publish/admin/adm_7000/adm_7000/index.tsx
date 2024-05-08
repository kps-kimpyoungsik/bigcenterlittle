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
	const modaladm7000 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">기금관리</a></li>
						<li className=""><a href="">지급관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">$</h1>

						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}
						<br/><br/>
						<Button color='gray' size="sm" onClick={modaladm7000.open}>adm_7000p 열기</Button> <br /><br />
						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}				

					</main>
				</div>
			{/* modal - 7000 */}
			<ModalPopup
				open={modaladm7000.isShowing}
				title="결재선"
				size="xlg"
				onClose={modaladm7000.close}
			>
				<div className="modal-con">

					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">결재선</p>
								<div className="fo-value">
									
									<div className="hz-root hz-gap8 w400">
										<div className="hz-item hz-fg sl sl-md">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="1">$</option>
											</select>
										</div>
										<Button color="gray-o" size="md">삭제</Button>
									</div>

								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">결재선명</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w400">
										<UIInput className={'tf tf-md w100p'} value={'홍길동 > 이순신 > 신채호 > 장보고 > 강감찬'} placeholder={''} readOnly={false} />
										<Button color="pri-o2" size="md">저장</Button>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">결재선</p>
								<div className="fo-value">
								
									<div className="approval-gen">
										<div className="approval-gen-member">
											<div className="box">
												<div className="hz-root hz-right hz-gap5 mb8">
													<UIInput className={'tf tf-sm w150'} value={''} placeholder={''} readOnly={false} />
													<Button color="pri" size="sm">검색</Button>
												</div>
												<div className="ibsheet">[D] IBSHEET 영역</div>
											</div>
										</div>
										<div className="approval-ctr">
											<button className="bt bt-right-arr" data-color="gray-o" data-size="md" type="button">검토자</button>
											<button className="bt bt-right-arr" data-color="gray-o" data-size="md" type="button">협조자</button>
											<button className="bt bt-right-arr" data-color="gray-o" data-size="md" type="button">감사자</button>
											<button className="bt bt-right-arr" data-color="gray-o" data-size="md" type="button">결재자</button>
										</div>
										<div className="approval-gen-selected">
											<div className="box">
												<div className="hz-root hz-sb hz-bottom mb8">
													<h2 className="hz-item tx tx-bd2">결재순위</h2>
													<div className="hz-item hz-root hz-right hz-gap5">
															<Button color="gray-o" size="sm">삭제 </Button>
															<button className="hz-item bt bt-gray-o bt-up" type="button">위로</button>
															<button className="hz-item bt bt-gray-o bt-up" type="button" disabled>위로</button>
															<button className="hz-item bt bt-gray-o bt-down" type="button">아래로</button>																						
															<button className="hz-item bt bt-gray-o bt-down" type="button" disabled>아래로</button>																						
													</div>																			
												</div>												
											<div className="ibsheet">[D] IBSHEET 영역</div>
											</div>
											<div className="info">
													<p className="info-tit">안내</p>
													<ul className="info-list">
														<li>위에서부터 아래로 결재순서가 진행됩니다.</li>
														<li>최종결재자의 한도금액이 설정되지 않아 결재상신이 안되는 경우는 관리자에게 문의하시기 바랍니다.</li>
													</ul>
											</div>
										</div>
									</div>

								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">내용</p>
								<div className="fo-value">
									<div className="ta h50 w100p">
										<textarea  className="ta-ip" placeholder=""></textarea>
									</div>
								</div>
							</div>														
							
						</div>
					</form>

				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">취소</Button>
						<Button color='pri' size="md">결제상신</Button>
					</div>
				</div>	
			</ModalPopup>				
		</PageContainer>
	);
}
export default ContentsContainer;