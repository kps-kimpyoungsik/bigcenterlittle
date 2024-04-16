import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_5000Aside";
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">게시판관리</a></li>
						<li className=""><a href="">FAQ 관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">FAQ 상세</h1>
						<div className="fo fo-col2">
							<div className="inner">
							
								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">제목</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w375" type="text" value="[대·중소기업·농어업협력재단] 운영 관리 규정" placeholder="" />
									</div>
								</div>
							
								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">게시상태</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w375" type="text" value="보임" placeholder="" />
									</div>
								</div>
							
								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">내용</p>
								<div className="fo-value">
									<div className="ta ta-readonly w1180">
										<textarea readOnly className="ta-ip" placeholder="">
◈ 회원가입을 완료하기 위해 이메일 인증이 필요합니다.

 - 이메일 인증은 "상생협력기금 종합관리시스템" 사용을 위한 회원가입의 최종 단계 이며 과제신청, 지급신청 등과 관련된 알림 메일 발송에 필요한 부분임을 양지하여주시기 바랍니다.
  * 회원가입시 입력한 이메일로 인증 메일이 발송되오니 확인 후 메일 내 링크를 클릭하시어 인증절차를 완료해주시기 바랍니다.
  * 이메일을 받지 못하신 경우 스팸메일함을 확인하여주시거나 문의처로 연락주시기 바랍니다.
 
◈ 아이디와 비밀번호를 확인해 주세요.
 - "로그인 정보가 일치하지 않습니다." 라는 메세지가 나타나는 경우 아이디와 비밀번호를 다시 확인하시고 입력하여 주시기 바랍니다.


										</textarea>
									</div>
									</div>
								</div>
							
								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">등록자</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md  w375" type="text" value="관리자" placeholder="" />
									</div>
							</div>
							
								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">등록일시</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md  w375" type="text" value="2024-03-19(화)" placeholder="" />
									</div>
								</div>

								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">조회수</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md  w375" type="text" value="3,000" placeholder="" />
									</div>
								</div>

								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">첨부파일</p>
									<div className="fo-value">
										파일업로더
										<div className="hz-root hz-left hz-gap5">
											<Button color="gray-o" size="sm">전체 항목제거</Button>
											<Button color="gray-o" size="sm">다운로드</Button>
										</div>
									</div>
								</div>							

							</div> 
						</div>
			
						<div className="hz-root hz-right hz-gap5">
							<Button color="gray-o" size="sm">삭제</Button>	
							<Button color="pri-o" size="sm">수정</Button>	
							<Button color="gray-o" size="sm">목록</Button>	
						</div>					

					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;