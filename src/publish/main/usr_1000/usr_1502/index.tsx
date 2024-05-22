
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user1000Aside";
import Button from 'components/buttons/';
import UIInputPW from 'components/input/inputPW';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="/main/usr_1000/usr_1500">마이페이지</Link></li>
					<li><Link to="#">비밀번호 수정</Link></li>
				</ul>
				<main className="fww-main" data-layout="usr">
					<div className="mypage pw-edit">
						<h1 className="tx tx-hd2">비밀번호 수정</h1>
						<div className="sub-tx">비밀번호를 새롭게 설정해 주세요.</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">사용중이던 비밀번호를 입력</p>
									<div className="fo-value">
										<UIInputPW className={'tf tf-md w385'} value={''} placeholder={'비밀번호를 입력하세요'} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">비밀번호를 한번 더 입력</p>
									<div className="fo-value">
										<UIInputPW className={'tf tf-md w385'} value={''} placeholder={'비밀번호를 한번 더 입력하세요.'} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">새로운 비밀번호를 입력</p>
									<div className="fo-value">
										<div>
											<UIInputPW className={'tf tf-md w385'} value={''} placeholder={'새로운 비밀번호를 입력하세요.'} />
											<p className="tx-msg mt8">* 영문, 숫자, 특수문자를 혼합으로 8~16자리까지 입력 가능합니다.</p>
										</div>
										
										
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-center hz-gap10">
							<Button color='gray-o' size="big">취소</Button>
							<Button color='pri' size="big" href="/main/usr_1000/usr_1204">저장</Button>
						</div>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;