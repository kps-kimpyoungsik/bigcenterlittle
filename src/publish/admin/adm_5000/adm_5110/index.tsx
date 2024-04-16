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
						<li className=""><a href="">공지사항</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">공지사항 상세</h1>
						<div className="fo fo-col2">
							<div className="inner">
								
								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">구분</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w375" type="text" value="기금전체" placeholder="" />
									</div>
								</div>
							
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
대·중소기업상생협력기금 운영·관리 규정이 개정되어 다음과 같이 공지합니다.
붙임. 대·중소기업상생협력기금 운영·관리 규정 개정(안)(본문)

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
											<Button color="gray-o" size="sm">파일추가</Button>
											<Button color="gray-o" size="sm">항목제거</Button>
											<Button color="gray-o" size="sm">전체 항목제거</Button>
											<Button color="gray-o" size="sm">다운로드</Button>
										</div>
									</div>
								</div>							

							</div> 
						</div>
			
						<div className="hz-root hz-right hz-gap5">
							<Button color="gray-o" size="sm">저장</Button>
							<Button color="pri-o" size="sm">수정</Button>
							<Button color="gray-o" size="sm">목록</Button>
							{/* <button className="bt bt-sm bt-gray-o" type="button">저장</button> */}
							{/* <button className="bt bt-sm bt-pri-o" type="button">수정</button> */}
							{/* <button className="bt bt-sm bt-gray-o" type="button">목록</button> */}
						</div>					

					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;