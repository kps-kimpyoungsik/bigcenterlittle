import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_5000Aside";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<ul className="fww-brd">
					<li><Link to="/admin/">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">게시판관리</Link></li>
					<li><Link to="#">공지사항</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">공지사항</h1>
					<form className="sf sf-1row" name="" action="" method="">
						<div className="inner">
							<div className="sf-item">
								<p className="sf-key">구분</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">전체</option>
											<option value="1">기금전체</option>
											<option value="2">투자재원</option>
										</select>
									</div>										
								</div>						
							</div>
							<div className="sf-item sf-m-2-4">
								<p className="sf-key">제목</p>
								<div className="sf-value">
									<UIInput  className={'tf tf-md w100p'} value={''} placeholder={'제목'}/>
								</div>						
							</div>							
						</div> 
						<Button color="pri" size="md">조회</Button>
					</form>											
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap5">
							<Button color="pri-o" size="sm">등록</Button>	
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
					<div className='ibsheet'>[D] IBSHEET 영역</div>
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