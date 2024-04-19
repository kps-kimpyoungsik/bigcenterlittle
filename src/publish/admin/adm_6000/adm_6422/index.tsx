import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	const modaladm6423 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">시스템관리</a></li>
						<li className=""><a href="">메뉴관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">메뉴 관리</h1>
						<div className="pt">
							<div className="row gap30">
								<div className="col w320"> 
									{/* 왼쪽 */}

									<div className="pannel">
										<div className="pannel-top">
											<div className="hz-root hz-gap10">
											<span className="hz-item tx tx-cp2">사이트</span>
											<div className="hz-item hz-fg sl sl-md">
												<select name="" id="" className="">
													<option value="1" selected>포탈</option>
													<option value="2">관리자</option>
												</select>
											</div>											
										</div>
									</div>
									<div className="pannel-bottom">
												폴더트리 위치
										</div>

									</div>
								</div>
								<div className="col fg"> 
									{/* 오른쪽 */}
									<form className="fo fo-col2 mb30" name="" action="" method="">
										<div className="inner">
											<div className="fo-item fo-m-1-3">
												<p className="fo-key">상위메뉴</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={'기금소식'} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item fo-m-1-3">
												<p className="fo-key">메뉴이름</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={'사업안내'} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item fo-m-1-3">
												<p className="fo-key">메뉴경로</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={'/portal/news/info'} placeholder={''} readOnly={true} />
												</div>
											</div>
											<div className="fo-item fo-m-1-3">
												<p className="fo-key">사용여부</p>
												<div className="fo-value">
													<UIInput className={'tf tf-md w100p'} value={'미사용'} placeholder={''} readOnly={true} />
												</div>
											</div>
										</div>
									</form>

									<div className="ibsheet">[D] IBSHEET 영역</div>
									<div className="hz-root hz-right hz-gap5 mt10">
											<Button color="gray-o" size="sm">삭제</Button>
											<Button color="pri-o" size="sm">수정</Button>
											<Button color="pri-o" size="sm">하위메뉴 추가</Button>
											<Button color="pri-o" size="sm" onClick={modaladm6423.open}>상위메뉴 변경</Button>
											<button className="hz-item bt bt-gray-o bt-up" type="button">위로</button>
											<button className="hz-item bt bt-gray-o bt-up" type="button" disabled>위로</button>
											<button className="hz-item bt bt-gray-o bt-down" type="button">아래로</button>																						
											<button className="hz-item bt bt-gray-o bt-down" type="button" disabled>아래로</button>																						
										</div>


								</div>
							</div>
						</div>						
					</main>

				</div>
				{/* modal - 상위 메뉴 선택 */}
				<ModalPopup
				open={modaladm6423.isShowing}
				title="상위 메뉴 선택"
				size="sm"
				onClose={modaladm6423.close}
			>
				<div className="modal-con">
					폴더트리 위치
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">취소</Button>
						<Button color='pri' size="md">저장</Button>
					</div>
					
				</div>	
			</ModalPopup>

		</PageContainer>
	);
}
export default ContentsContainer;