import React, {useState} from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user1900Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import noImg from 'assets/img/pages/usr_noimg.png';
function ContentsContainer() {
	const [activeIndex, setActiveIndex]=useState(0);
	const tabClickHandler=(index:number)=>{
		setActiveIndex(index);
	};
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={0} lnbIdx={4}/>
				<main className="fww-main" data-layout="usr">
					<h1 className="tx tx-hd2">수요조사</h1>
					<div className="fww-intro">
						<ul className="tab-menu">
							<li className={activeIndex===0 ? "active" : ""} onClick={()=>tabClickHandler(0)}><button type="button">수요조사 내역</button></li>
							<li className={activeIndex===1 ? "active" : ""} onClick={()=>tabClickHandler(1)}><button type="button">지원 내역</button></li>
						</ul>
						<div className={ 'tab-cont' + (activeIndex===0 ? ' active' : '') }>
							<form name="" action="" method="">
								<div className="tb-search-form notice">
									<div className="tb-search-items">
										<label>조회구분</label>
										<div className="sl sl-big">
											<select>
												<option>전체</option>
												<option>모집중</option>
												<option>모집완료</option>
											</select>
										</div>
										<UIInput className={'tf tf-big ml10'} value={''} placeholder={"입력하세요."} />
									</div>
									<div className="tb-search-items">
										<label>상태</label>
										<div className="sl sl-big w218">
											<select>
												<option>전체</option>
												<option>제목</option>
												<option>내용</option>
											</select>
										</div>
										
									</div>
									<Button color="pri" size="big">조회</Button>
								</div>
							</form>
							<ul className="gallery-list">
								<li>
									<Link to="/main/usr_1900/usr_1908" className="gallery-items">
										<div className="thumnails">
											<img src={noImg} alt="no Images" />
										</div>
										<div className="subject">수요조사 제목 출력</div>
										<div className="bottoms">
											<label className="badge blue">모집중</label>
											<span className="date">2024-02-25 ~ 2024-05-21</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="/main/usr_1900/usr_1908" className="gallery-items">
										<div className="thumnails">
											<img src={noImg} alt="no Images" />
										</div>
										<div className="subject">수요조사 제목 출력</div>
										<div className="bottoms">
											<label className="badge gray">모집완료</label>
											<span className="date">2024-02-25 ~ 2024-05-21</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="/main/usr_1900/usr_1908" className="gallery-items">
										<div className="thumnails">
											<img src={noImg} alt="no Images" />
										</div>
										<div className="subject">수요조사 제목 출력</div>
										<div className="bottoms">
											<label className="badge blue">모집중</label>
											<span className="date">2024-02-25 ~ 2024-05-21</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="/main/usr_1900/usr_1908" className="gallery-items">
										<div className="thumnails">
											<img src={noImg} alt="no Images" />
										</div>
										<div className="subject">수요조사 제목 출력</div>
										<div className="bottoms">
											<label className="badge blue">모집중</label>
											<span className="date">2024-02-25 ~ 2024-05-21</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="/main/usr_1900/usr_1908" className="gallery-items">
										<div className="thumnails">
											<img src={noImg} alt="no Images" />
										</div>
										<div className="subject">수요조사 제목 출력</div>
										<div className="bottoms">
											<label className="badge blue">모집중</label>
											<span className="date">2024-02-25 ~ 2024-05-21</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="/main/usr_1900/usr_1908" className="gallery-items">
										<div className="thumnails">
											<img src={noImg} alt="no Images" />
										</div>
										<div className="subject">수요조사 제목 출력수요조사 제목 출력</div>
										<div className="bottoms">
											<label className="badge blue">모집중</label>
											<span className="date">2024-02-25 ~ 2024-05-21</span>
										</div>
									</Link>
								</li>
							</ul>
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
						</div>
						<div className={ 'tab-cont' + (activeIndex===1 ? ' active' : '') }>
							<div className="tb">
								<div className="tb-top">
									<div>
										<p className="tx fc-black">
											총 <em className="fw500 fc-pri">103</em>건의 게시물이 있습니다(<em className="fw500 fc-pri">1/N</em> 페이지)
										</p>
									</div>
								</div>
								<table>
									<caption>게시판 목록</caption>
									<colgroup>
										<col width="90px" />
										<col />
										<col width="120px" />
										<col width="120px" />
										<col width="140px" />
										<col width="120px" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">번호</th>
											<th scope="col">제목</th>
											<th scope="col">상태</th>
											<th scope="col">작성자</th>
											<th scope="col">등록일</th>
											<th scope="col">조회수</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>110</td>
											<td className="ta-left">
												<Link to="/main/usr_1900/usr_1909" className="tx tx-bd2 tx-link">제목이 출력됩니다.</Link>
											</td>
											<td>지원완료</td>
											<td>홍길동</td>
											<td>2024-03-31</td>
											<td>1234</td>
										</tr>
										<tr>
											<td>110</td>
											<td className="ta-left">
												<Link to="/main/usr_1900/usr_1909" className="tx tx-bd2 tx-link">제목이 출력됩니다.</Link>
											</td>
											<td>지원완료</td>
											<td>홍길동</td>
											<td>2024-03-31</td>
											<td>1234</td>
										</tr>
										<tr>
											<td>110</td>
											<td className="ta-left">
												<Link to="/main/usr_1900/usr_1909" className="tx tx-bd2 tx-link">제목이 출력됩니다.</Link>
											</td>
											<td>지원완료</td>
											<td>홍길동</td>
											<td>2024-03-31</td>
											<td>1234</td>
										</tr>
									</tbody>
								</table>
							</div>
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
						</div>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;