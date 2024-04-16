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
						<h1 className="tx tx-hd2">FAQ관리</h1>

						<div className="sf sf-1row">
							<div className="inner">
								<div className="sf-item sf-m-1-3">
									<p className="sf-key">제목</p>
									<div className="sf-value">
										<input name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="제목" />
									</div>						
								</div>							

							</div> 
							<button className="sf-btn bt bt-md bt-pri" type="button">조회</button>
						</div>											

						<div className="tb-top">
							<div>
								<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
							</div>
							<div className="hz-root hz-gap5">
								<button className="bt bt-sm bt-gray-o" type="button">등록</button>
								<button className="bt bt-sm bt-gray-o" type="button">다운로드</button>
								<div className="sl sl-sm w120">
									<select name="" id="" className="">
										<option value="0">20개씩보기</option>
										<option value="0">50개씩보기</option>
										<option value="0">100개씩보기</option>
										<option value="0">200개씩보기</option>
										<option value="0">500개씩보기</option>
										<option value="0">1000개씩보기</option>
									</select>
								</div>									
							</div>
						</div>

						<div id='sheetDiv'>[D] IBSHEET 영역</div>
						<div className="pg">
							<div className="group">
								<button type="button" className="item first">처음</button>
								<button type="button" className="item prev">이전</button>
							</div>
							<div className="group">
								<button type="button" className="item">1</button>
								<button type="button" className="item active">2</button>
								<button type="button" className="item">3</button>
								<button type="button" className="item">4</button>
								<button type="button" className="item">5</button>
								<button type="button" className="item">99</button>
								<button type="button" className="item">999</button>
								<button type="button" className="item">9999</button>
							</div>
							<div className="group">
								<button type="button" className="item next">다음</button>
								<button type="button" className="item last">끝</button>
							</div>
						</div>						

					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;