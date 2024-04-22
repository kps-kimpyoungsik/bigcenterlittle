import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
// import LayoutAside from "../adm_2000Aside";
import logo from 'assets/img/logo/logo_login.svg';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			{/* <LayoutAside /> */}

			<div className="adm-login-wrap">
				<div className="adm-login">
					<div className="img-area"></div>
					<div className="form-area">
						<div className="inner">
							<img src={logo} alt="대·중소기업 상생협력기금 종합시스템"  className="w190" />
							<p className="tit tx fs12 fc-pri">ADMIN LOGIN</p>
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={false} />
							<UIInput type="password" className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={false} />
							<p className="login-alert">아이디를 입력해 주세요.</p>
							<p className="login-alert">비밀번호를 입력해 주세요.</p>
							<p className="login-alert">로그인정보가 일치하지 않습니다.</p>
							<p className="login-alert">비밀번호 5회이상 일치하지 않아 잠겼습니다.</p>
							<Button color="pri" size="md">로그인</Button>
						</div>
						
					</div>
				</div>
				<div className="adm-login-footer">
				Copyright ⓒ 2024 대·중소기업·농어업협력재단. All Rights Reserved.
				</div>
			</div>

		</PageContainer>
	);
}
export default ContentsContainer;