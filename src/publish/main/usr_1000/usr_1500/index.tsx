
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">마이페이지</Link></li>
					<li><Link to="#">내정보</Link></li>
				</ul>
				<main className="fww-main">
					<div className="mypage">
						<h1 className="tx tx-hd2">내정보</h1>
						<div className="top-guide">
							<div className="information">기업담당자가 변경되는 경우 새로 회원가입 바랍니다. 이름, 핸드폰번호, 이메일 주소는 변경불가합니다.</div>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">소속기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w375'} value={'기업명 출력'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">이름</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w375'} value={'홍길동'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">아이디</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w375'} value={'Idshowing'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">부서</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w375'} value={'부서명'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">직위</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w375'} value={'직위명'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">사무실 전화번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w375'} value={'0200000000'} placeholder={''}/>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">휴대폰번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w375'} value={'010-0000-0000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">이메일주소</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w375'} value={'email@email.com'} placeholder={''} readOnly={true} />
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