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
						<li className=""><a href="">팝업관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">팝업 상세</h1>
						<div className="fo fo-col2">
							<div className="inner">
								

							
								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">제목</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w375" type="text" value="[대·중소기업·농어업협력재단] 운영 관리 규정" placeholder="" />
									</div>
								</div>
							
								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">게시기간</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w375" type="text" value="2024-03-20(수) ~ 2025-03-20(수)" placeholder="" />
									</div>
								</div>							
							
								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">게시상태</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w375" type="text" value="보임" placeholder="" />
									</div>
								</div>
							
								<div className="fo-item ">
									<p className="fo-key">팝업높이</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w375" type="text" value="450" placeholder="" />
									</div>
								</div>
							
								<div className="fo-item">
									<p className="fo-key">팝업 너비</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w375" type="text" value="450" placeholder="" />
									</div>
								</div>
							
								<div className="fo-item">
									<p className="fo-key">팝업 상단위치</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w375" type="text" value="500" placeholder="" />
									</div>
								</div>
							
								<div className="fo-item">
									<p className="fo-key">팝업 좌측위치</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w375" type="text" value="800" placeholder="" />
									</div>
								</div>							
							
								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">링크 URL</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w375" type="text" value="?" placeholder="" />
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
							<Button color="pri-o" size="sm">저장</Button>
							<Button color="pri-o" size="sm">수정</Button>
							<Button color="gray-o" size="sm">목록</Button>
						</div>					

					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;