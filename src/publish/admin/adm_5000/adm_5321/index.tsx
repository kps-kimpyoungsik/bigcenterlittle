import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_5000Aside";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">게시판관리</a></li>
						<li className=""><a href="">우수사례관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">우수사례 상세</h1>
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
									<p className="fo-key">첨부파일</p>
									<div className="fo-value">
										파일업로더
										<div className="hz-root hz-left hz-gap5">
											<button className="bt bt-sm bt-gray-o" type="button">파일추가</button>
											<button className="bt bt-sm bt-gray-o" type="button">항목제거</button>
											<button className="bt bt-sm bt-gray-o" type="button">전체 항목제거</button>
											<button className="bt bt-sm bt-gray-o" type="button">다운로드</button>
										</div>
									</div>
								</div>										
							

								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">조회수</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md  w375" type="text" value="1,000" placeholder="" />
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

			

							</div> 
						</div>
			
						<div className="hz-root hz-right hz-gap5">
							<button className="bt bt-sm bt-gray-o" type="button">삭제</button>
							<button className="bt bt-sm bt-pri-o" type="button">수정</button>
							<button className="bt bt-sm bt-gray-o" type="button">목록</button>
						</div>					

					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;