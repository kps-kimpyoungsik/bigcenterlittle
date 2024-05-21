import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
// import LayoutAside from "../adm_2000Aside";
import logo from 'assets/img/logo/logo_login.svg';
import character from 'assets/img/char/char_login.svg';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			{/* <LayoutAside /> */}

			<div className="adm-login-wrap">
				<div className="adm-login">
					<div className="img-area">
						<img src={character} alt=""  className="char" />
					</div>
					<div className="form-area">
						<div className="inner">
							<img src={logo} alt="대·중소기업 상생협력기금 종합시스템"  className="w190 mb50" />
							<p className="tit">ADMIN LOGIN</p>
							<UIInput className={'tf tf-big w100p'} value={''} placeholder={'아이디를 입력하세요'} readOnly={false} />
							<UIInput type="password" className={'tf tf-big w100p'} value={''} placeholder={'비밀번호를 입력하세요'} readOnly={false} />
							<p className="tx tx-alert">아이디를 입력해 주세요.</p>
							{/* <p className="tx tx-alert">비밀번호를 입력해 주세요.</p> */}
							{/* <p className="tx tx-alert">로그인정보가 일치하지 않습니다.</p> */}
							{/* <p className="tx tx-alert">비밀번호 5회이상 일치하지 않아 잠겼습니다.</p> */}
							<Button color="pri" size="big">로그인</Button>
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