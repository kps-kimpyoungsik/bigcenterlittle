import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_4000Aside";
import UIDatePicker from "components/datepicker";
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/admin/">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">사용자관리</Link></li>
					<li><Link to="#">회원관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">회원관리</h1>
					<div className="sf">
						<div className="inner">
							<div className="sf-item">
								<p className="sf-key">등록일자</p>
								<div className="sf-value">
									<div className="hz-root hz-gap5">
										<UIDatePicker className="hz-item"/>
										<span className="hz-item">~</span>
										<UIDatePicker className="hz-item"/>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">사용자유형</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">전체</option>
											<option value="1">외부사용자</option>
											<option value="2">재난담당자</option>
											<option value="3">부서장</option>
											<option value="4">본부장</option>
											<option value="5">시스템</option>
										</select>
									</div>
								</div>						
							</div>
							<div className="sf-item">
								<p className="sf-key">승인여부</p>
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
							<div className="sf-item">
								<p className="sf-key">사용여부</p>
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
							<div className="sf-item">
								<p className="sf-key">기업명</p>
								<div className="sf-value">
									<input name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="검색어 입력" />
								</div>						
							</div>
							<div className="sf-item">
								<p className="sf-key">사용자명</p>
								<div className="sf-value">
									<input name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="검색어 입력" />
								</div>						
							</div>								

						</div> 
					</div>			
					<div className="hz-root hz-center mb25">
						<Button color="pri" size="md">조회</Button>
					</div>									
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap8">
							<Button color="gray-o" size="sm">등록</Button>
							<Button color="gray-o" size="sm">다운로드</Button>
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