import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_mypageAside";
import logo from 'assets/img/logo/logo_login.svg';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/admin/">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">마이페이지</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">내정보 수정</h1>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">기업명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'[107-82-10445] 대·중소기업·농어업협력재단'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">사용자ID</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'admin'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">이름</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'관리자'} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">이메일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'abcde@gmail.com'} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">부서</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'상생기금부'} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">직급</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'대리'} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">휴대폰번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'010-1111-2222'} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사무실전화번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'-없이 숫자만'} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">비밀번호</p>
								<div className="fo-value">
									<UIInput type="password" className={'tf tf-md w100p'} value={'11112222'} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">비밀번호확인</p>
								<div className="fo-value">
									<UIInput type="password" className={'tf tf-md w100p'} value={'11112222'} placeholder={''} readOnly={false} />
								</div>
							</div>
						</div>
					</form>
					<div className="hz-root hz-right hz-gap5">
						<Button color="pri-o" size="sm" >저장</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;