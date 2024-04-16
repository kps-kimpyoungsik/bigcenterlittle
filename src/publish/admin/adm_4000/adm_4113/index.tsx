import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_4000Aside";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">사용자관리</a></li>
						<li className=""><a href="">회원관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">회원정보 등록</h1>

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
												<option value="5">시스템</option>
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사용자ID</p>
									<div className="fo-value">
										<div className="hz-root hz-gap8">
											<input name="" id="" className="hz-item hz-fg tf tf-md" type="text" value="" placeholder="사용자ID" />
											<button className="hz-item bt bt-md bt-gray-o" type="button">중복 확인</button>
										</div>
									</div>						
								</div>
								<div className="fo-item req">
									<p className="fo-key">사용자명</p>
									<div className="fo-value">
										<input name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="사용자명" />
									</div>						
								</div>
								<div className="fo-item req">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="[107-82-10445] 대·중소기업·농어업협력재단" placeholder="기업명" />
									</div>						
								</div>
								<div className="fo-item req">
									<p className="fo-key">부서</p>
									<div className="fo-value">
										<input name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="부서" />
									</div>						
								</div>
								<div className="fo-item req">
									<p className="fo-key">직급</p>
									<div className="fo-value">
										<input name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="직급" />
									</div>						
								</div>
								<div className="fo-item req">
									<p className="fo-key">휴대폰번호</p>
									<div className="fo-value">
										<input name="" id="" className="tf tf-md w100p" type="number" value="" placeholder="-없이 숫자만" />
									</div>						
								</div>
								<div className="fo-item req">
									<p className="fo-key">이메일</p>
									<div className="fo-value">
										<input name="" id="" className="tf tf-md w100p" type="email" pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*" value="" placeholder="이메일" />
									</div>						
								</div>
								<div className="fo-item">
									<p className="fo-key">사무실전화번호</p>
									<div className="fo-value">
										<input name="" id="" className="tf tf-md w100p" type="number" value="" placeholder="-없이 숫자만" />
									</div>						
								</div>
								<div className="fo-item req">
									<p className="fo-key">사용여부</p>
									<div className="fo-value">
										<div className="sl sl-md">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="1">예</option>
												<option value="2">아니오</option>
											</select>
										</div>
									</div>						
								</div>
								<div className="fo-item req">
									<p className="fo-key">비밀번호</p>
									<div className="fo-value">
										<input name="" id="" className="tf tf-md w100p" type="password" value="" placeholder="비밀번호" />
									</div>						
								</div>
								<div className="fo-item req">
									<p className="fo-key">비밀번호확인</p>
									<div className="fo-value">
										<input name="" id="" className="tf tf-md w100p" type="password" value="" placeholder="비밀번호확인" />
									</div>						
								</div>																																																																								
																							

							</div> 
						</div>		
						<div className="hz-root hz-right hz-gap8 mb25">
							<button className="hz-item bt bt-md bt-pri" type="button">저장</button>
							<button className="hz-item bt bt-md bt-gray-o" type="button">목록</button>
						</div>

					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;