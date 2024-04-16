
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2000Aside";
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">고객지원</Link></li>
					<li><Link to="#">매뉴얼</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">매뉴얼</h1>
					<div className="tb tb-view">
						<div className="tb-view-top">
							<div className="tb-view-title">
								<h3 className="title">대·중소기업상생협력기금 운영 관리 규정</h3>
							</div>
							<ul className="tb-view-info">
								<li>작성자<span className="val">홍길동</span></li>
								<li>등록일<span className="val">2024-03-31</span></li>
								<li>조회수<span className="val">2971</span></li>
							</ul>
						</div>
					</div>
					<div className="tb-view-file">
						<ul>
							<li><i className="ic file">첨부파일</i> <Link to="#">대·중소기업상생협력기금 운영관리 규정.hwp</Link><span>(33,792 Byte)</span></li>
							<li><i className="ic file">첨부파일</i> <Link to="#">대·중소기업상생협력기금 운영관리 규정.hwp</Link><span>(33,792 Byte)</span></li>
						</ul>
					</div>
					<div className="tb-view-cont">
						대·중소기업상생협력기금 운영·관리 규정이 개정되어 다음과 같이 공지합니다.<br />
						붙임. 대·중소기업상생협력기금 운영·관리 규정 개정(안)(본문)
					</div>
					<div className="hz-root hz-center">
						<Button color='gray-o' size="big" href="/main/user_2000/user_2200">목록</Button>
					</div>
					<div className="tb-view-move">
						<ul>
							<li className="disabled"><label className="prev">이전글</label> 이전글이 없습니다.</li>
							<li><label className="next">다음글</label> <Link to="#">2024년도 상생협력기금 일자리창출, 벤처창업 관련 규정안내 공지</Link></li>
						</ul>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;