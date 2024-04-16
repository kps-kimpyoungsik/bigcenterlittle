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
						<li className=""><a href="">FAQ관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">FAQ 등록</h1>
						<div className="fo fo-col2">
							<div className="inner">
							
								<div className="fo-item fo-m-1-3  req">
									<p className="fo-key">제목</p>
									<div className="fo-value">
										<input  name="" id="" className="tf tf-md w375" type="text" value="" placeholder="" />
									</div>
								</div>
							
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">게시상태</p>
									<div className="fo-value">
										<div className="sl sl-md w375">
											<select name="" id="" className="">
												<option value="1">보임</option>
												<option value="2">숨김</option>
											</select>
										</div>
									</div>
								</div>
							
								<div className="fo-item fo-m-1-3 ">
									<p className="fo-key">내용</p>
								<div className="fo-value">
									텍스트에어리어...
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

							</div> 
						</div>
			
						<div className="hz-root hz-right hz-gap5">
							<button className="bt bt-sm bt-gray-o" type="button">저장</button>
							<button className="bt bt-sm bt-gray-o" type="button">목록</button>
						</div>					

					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;