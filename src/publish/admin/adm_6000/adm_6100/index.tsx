import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">시스템관리</a></li>
						<li className=""><a href="">메일발송관리</a></li>
					</ul>

				<main className="fww-main">
					<h1 className="tx tx-hd2">메일발송관리</h1>
					<div className="sf">
						<div className="inner">
							<div className="sf-item">
								<p className="sf-key">메일 발송기간</p>
								<div className="sf-value">
									<div className="hz-root hz-gap5">
										<input  name="" id="" className="hz-item hz-fg tf tf-md" type="text" value="" placeholder="YYYY-MM-DD" />
										<span className="hz-item">~</span>
										<input name="" id="" className="hz-item hz-fg tf tf-md" type="text" value="" placeholder="YYYY-MM-DD" />
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">메일 수신자</p>
								<div className="sf-value">
									<input name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="" />
								</div>						
							</div>
							<div className="sf-item">
								<p className="sf-key">발송상태</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">전체</option>
											<option value="1">대기중</option>
											<option value="2">발송중</option>
											<option value="3">발송성공</option>
											<option value="4">발송실패</option>
										</select>
									</div>
								</div>						
							</div>
							<div className="sf-item">
								<p className="sf-key">메일제목</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">전체</option>
											<option value="1">예</option>
											<option value="2">아니오</option>
										</select>
									</div>
								</div>						
							</div>
							<div className="sf-item sf-m-2-4">
								<p className="sf-key">메일내용</p>
								<div className="sf-value">
									<input name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="검색어 입력" />
								</div>						
							</div>						

						</div> 
					</div>			
					<div className="hz-root hz-center mb25">
						<button className="hz-item bt bt-md bt-pri" type="button">조회</button>
					</div>									
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap8">
							<button className="bt bt-sm bt-pri-o" type="button">메일발송</button>
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