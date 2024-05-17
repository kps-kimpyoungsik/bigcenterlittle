
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIInputPW from 'components/input/inputPW';
function ContentsContainer() {
	return (
		<PageContainer>
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">로그인</Link></li>
				</ul>
				<main className="fww-main sign-in-main">
					<div className="sign-in">
						<h4 className="sign-in-title">MEMBERSHIP LOGIN</h4>
						<form className="sign-form" name="" action="" method="">
							<UIInput className={'tf tf-big w100p'} value={''} placeholder={'아이디를 입력하세요'} />
							<UIInputPW className={'tf tf-big w100p'} value={''} placeholder={'비밀번호를 입력하세요'} />
							<div className="mb30">
								<label htmlFor="ch-id" className="hz-item ip-ch-label ip-ch-18">
									<input id="ch-id" className="ip-ch" type="checkbox" />
									<span className="check"></span> 
									<span className="txt">아이디 저장</span>
								</label>
							</div>
							<div className="hz-root hz-center hz-gap10">
								<Button color='pri' size="big">로그인</Button>
							</div>
							<div className="sign-link">
								<Link className="tx tx-link" to="/main/usr_1000/usr_1200">회원가입</Link>
								<Link className="tx tx-link" to="/main/usr_1000/usr_1400">아이디/비밀번호 찾기</Link>
							</div>
						</form>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;