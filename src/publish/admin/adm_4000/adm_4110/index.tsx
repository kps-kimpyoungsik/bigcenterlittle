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
						<h1 className="tx tx-hd2">회원정보 상세</h1>

						<div className="fo fo-col3 mb10">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">사용자유형</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="시스템" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사용자ID</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="admin" placeholder="" />
									</div>						
								</div>
								<div className="fo-item">
									<p className="fo-key">사용자명</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="관리자" placeholder="" />
									</div>						
								</div>
								<div className="fo-item">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="[111-82-22222]대·중소기업 농·어업협력재단" placeholder="" />
									</div>						
								</div>
								<div className="fo-item">
									<p className="fo-key">이메일</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="admin@email.com" placeholder="" />
									</div>						
								</div>
								<div className="fo-item">
									<p className="fo-key">사무실전화번호</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="02-1111-2344" placeholder="" />
									</div>						
								</div>
								<div className="fo-item">
									<p className="fo-key">이메일 인증</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="예" placeholder="" />
									</div>						
								</div>
								<div className="fo-item">
									<p className="fo-key">인증일시</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="2024-03-15 15:06:23" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">비밀번호오류횟수</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="3" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사용여부</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="아니오" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">등록자</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="시스템" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">등록일시</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="2024-03-15 15:06:23" placeholder="" />
									</div>
								</div>								

							</div> 
						</div>						

						<div className="hz-root hz-right hz-gap5">
							<button className="bt bt-sm bt-gray-o" type="button">비밀번호 오류해제</button>
							<button className="bt bt-sm bt-gray-o" type="button">권한등록</button>
							<button className="bt bt-sm bt-gray-o" type="button">사업지정</button>
							<button className="bt bt-sm bt-gray-o" type="button">임시비밀번호발급</button>
							<button className="bt bt-sm bt-pri-o" type="button">수정</button>
							<button className="bt bt-sm bt-gray-o" type="button">출연기업승인</button>
							<button className="bt bt-sm bt-gray-o" type="button">이메일 인증 재발송</button>
							<button className="bt bt-sm bt-gray-o" type="button">비밀번호 오류해제</button>
							<button className="bt bt-sm bt-gray-o" type="button">목록</button>
						</div>
						
					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;