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
						<h1 className="tx tx-hd2">권한 상세</h1>
						<form className="fo fo-col3" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">권한 코드</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'ROSE_ANONYMOUS'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">권한 이름</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'익명 사용자'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사용여부</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'사용'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-4">
									<p className="fo-key">권한 설명</p>
									<div className="fo-value">
										<div className="ta h200 ta-readonly">
											<textarea readOnly className="ta-ip" placeholder="">
													권한 설명에 대한 내용이 출력됩니다.
													권한 설명에 대한 내용이 출력됩니다.
													권한 설명에 대한 내용이 출력됩니다.
													권한 설명에 대한 내용이 출력됩니다.
											</textarea>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-4">
									<p className="fo-key">사용자별 권한관리 여부</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'아니오'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-right hz-gap5">
							<Button color="gray-o" size="sm" >삭제</Button>
							<Button color="pri-o" size="sm" >수정</Button>
							<Button color="gray-o" size="sm" >목록</Button>
						</div>
					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;