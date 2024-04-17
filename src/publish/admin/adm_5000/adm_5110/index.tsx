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
					<h1 className="tx tx-hd2">공지사항 상세</h1>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">구분</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'기금전체'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">제목</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'[대·중소기업·농어업협력재단] 운영 관리 규정'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">게시상태</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'보임'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">내용</p>
							<div className="fo-value">
								<div className="ta ta-readonly w1180">
									<textarea readOnly className="ta-ip" placeholder="">
대·중소기업상생협력기금 운영·관리 규정이 개정되어 다음과 같이 공지합니다.
붙임. 대·중소기업상생협력기금 운영·관리 규정 개정(안)(본문)
									</textarea>
								</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">등록자</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'관리자'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">등록일시</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'2024-03-19(화)'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">조회수</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'3,000'} readOnly={true}/>
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
					</form>
					<div className="hz-root hz-right hz-gap5">
						<Button color="gray-o" size="sm">저장</Button>
						<Button color="pri-o" size="sm">수정</Button>
						<Button color="gray-o" size="sm">목록</Button>
					</div>					
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;