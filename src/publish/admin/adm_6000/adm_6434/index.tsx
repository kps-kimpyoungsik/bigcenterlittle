import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">시스템관리</a></li>
						<li className=""><a href="">권한관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">권한 수정</h1>
						<form className="fo fo-col3" name="" action="" method="">
							<div className="inner">
								<div className="fo-item req">
									<p className="fo-key">권한 코드</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'ROLE_ANONYMOUS'} placeholder={''} readOnly={false} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">권한 이름</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'익명 사용자'} placeholder={''} readOnly={false} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사용여부</p>
									<div className="fo-value">
										<div className="hz-root hz-gap15 h36">
											<label htmlFor="rd-use-1" className="ip-rd-label">
												<input name="rd-use" id="rd-use-1" className="ip-rd" type="radio" checked  />
												<span className="check"></span>
												<span className="txt">사용</span>
											</label>
											<label htmlFor="rd-use-2" className="ip-rd-label">
												<input name="rd-use" id="rd-use-2" className="ip-rd" type="radio"  />
												<span className="check"></span>
												<span className="txt">미사용</span>
											</label>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-4">
									<p className="fo-key">권한 설명</p>
									<div className="fo-value">
										<div className="ta h200">
											<textarea className="ta-ip" placeholder="">
												익명사용자
											</textarea>
										</div>
										<p className="tx tx-cp1 mt5">
											<em className="fc-err">12</em> Bytes / 
											<em className="fc-err">2,000</em> Bytes
											</p>

									</div>
								</div>
								<div className="fo-item fo-m-1-4 req">
									<p className="fo-key">사용자별 권한관리 여부</p>
									<div className="fo-value">
										<div className="hz-root hz-gap15 h36">
											<label htmlFor="rd-adm-1" className="ip-rd-label">
												<input name="rd-adm" id="rd-adm-1" className="ip-rd" type="radio"  checked  />
												<span className="check"></span>
												<span className="txt">예</span>
											</label>
											<label htmlFor="rd-adm-2" className="ip-rd-label">
												<input name="rd-adm" id="rd-adm-2" className="ip-rd" type="radio" />
												<span className="check"></span>
												<span className="txt">아니오</span>
											</label>
										</div>
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-right hz-gap5">
							<Button color="gray-o" size="sm" >취소</Button>
							<Button color="pri-o" size="sm" >저장</Button>
							<Button color="gray-o" size="sm" >목록</Button>
						</div>
					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;