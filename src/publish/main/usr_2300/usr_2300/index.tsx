
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2300Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={4} lnbIdx={0}/>
				<main className="fww-main" data-layout="usr">
					<h1 className="tx tx-hd2">안내사항</h1>
					<form name="" action="" method="">
						<div className="tb-search-form notice">
							<div className="tb-search-items">
								<label>상태</label>
								<div className="sl sl-big">
									<select>
										<option>전체</option>
										<option>공지사항</option>
										<option>안내자료</option>
										<option>매뉴얼</option>
										<option>투자재원</option>
									</select>
								</div>
							</div>
							<div className="tb-search-items">
								<label>조회구분</label>
								<div className="sl sl-big">
									<select>
										<option>전체</option>
										<option>제목</option>
										<option>내용</option>
									</select>
								</div>
								<UIInput className={'tf tf-big ml10'} value={''} placeholder={"입력하세요."} />
							</div>
							<Button color="pri" size="big">조회</Button>
						</div>
					</form>
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
								<col width="140px" />
								<col />
								<col width="120px" />
								<col width="140px" />
								<col width="120px" />
							</colgroup>
							<thead>
								<tr>
									<th scope="col">번호</th>
									<th scope="col">유형</th>
									<th scope="col">제목</th>
									<th scope="col">작성자</th>
									<th scope="col">등록일</th>
									<th scope="col">조회수</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>110</td>
									<td>공지사항</td>
									<td className="ta-left">
										<Link to="/main/usr_2300/usr_2301" className="tx tx-bd2 tx-link">대·중소기업상생협력기금 운영·관리 규정 안내</Link>
									</td>
									<td>홍길동</td>
									<td>2024-03-31</td>
									<td>1234</td>
								</tr>
								<tr>
									<td>110</td>
									<td>투자재원</td>
									<td className="ta-left">
										<Link to="/main/usr_2300/usr_2301" className="tx tx-bd2 tx-link">대·중소기업상생협력기금 운영·관리 규정 안내</Link>
									</td>
									<td>홍길동</td>
									<td>2024-03-31</td>
									<td>1234</td>
								</tr>
								<tr>
									<td>110</td>
									<td>투자재원</td>
									<td className="ta-left">
										<Link to="/main/usr_2300/usr_2301" className="tx tx-bd2 tx-link">대·중소기업상생협력기금 운영·관리 규정 안내</Link>
									</td>
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
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;