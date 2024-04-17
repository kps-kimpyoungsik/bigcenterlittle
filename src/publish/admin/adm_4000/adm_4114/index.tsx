import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_4000Aside";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<ul className="fww-brd">
					<li><Link to="/admin">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">사용자관리</Link></li>
					<li><Link to="#">회원관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">회원정보 수정</h1>
					<div className="fo fo-col2">
						<div className="inner">
							<div className="fo-item req">
								<p className="fo-key">사용자 유형</p>
								<div className="fo-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">회계사</option>
											<option value="2">내부담당자</option>
											<option value="3">부서장</option>
											<option value="4">본부장</option>
											<option selected value="5">시스템</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">사용자ID</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8">
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'admin'} placeholder={'사용자ID'} />
										<Button color="gray-o" size="md">중복 확인</Button>
									</div>
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">사용자명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'관리자'} placeholder={'사용자명'} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">기업명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'[107-82-10445] 대·중소기업·농어업협력재단'} placeholder={'기업명'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">부서</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'부서'} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">직급</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'대리'} placeholder={'직급'} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">휴대폰번호</p>
								<div className="fo-value">
									<UIInput type={'number'} className={'tf tf-md w100p'} value={'010-1111-2222'} placeholder={'-없이 숫자만'} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">이메일</p>
								<div className="fo-value">
									<UIInput type={'email'} className={'tf tf-md w100p'} value={'admin@email.com'} placeholder={'이메일'}  attrs={{pattern:'/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;'}}/>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사무실전화번호</p>
								<div className="fo-value">
									<UIInput type={'number'} className={'tf tf-md w100p'} value={'02-1111-2222'} placeholder={'-없이 숫자만'} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">이메일 인증</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'아니오'} placeholder={'이메일 인증'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">인증일시</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={'인증일시'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">비밀번호오류횟수</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'0'} placeholder={'비밀번호오류횟수'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">사용여부</p>
								<div className="fo-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option selected value="1">예</option>
											<option value="2">아니오</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">등록자</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'관리자'} placeholder={'등록자'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">등록일시</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={'등록일시'} readOnly={true}/>
								</div>
							</div>	
							<div className="fo-item req">
								<p className="fo-key">비밀번호</p>
								<div className="fo-value">
									<UIInput type={'password'} className={'tf tf-md w100p'} value={''} placeholder={'비밀번호'} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">비밀번호확인</p>
								<div className="fo-value">
									<UIInput type={'password'} className={'tf tf-md w100p'} value={''} placeholder={'비밀번호확인'}/>
								</div>
							</div>																																								
						</div> 
					</div>		
				<div className="hz-root hz-right hz-gap5">
						<Button color="gray-o" size="sm">취소</Button>
						<Button color="pri-o" size="sm">저장</Button>
						<Button color="gray-o" size="sm">목록</Button>
					</div>

				</main>

			</div>
		</PageContainer>
	);
}
export default ContentsContainer;