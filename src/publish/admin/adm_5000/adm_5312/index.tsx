import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_5000Aside";
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">게시판관리</a></li>
						<li className=""><a href="">팝업관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">팝업등록</h1>
						<div className="fo fo-col2">
							<div className="inner">
								
								<div className="fo-item fo-m-1-3  req">
									<p className="fo-key">제목</p>
									<div className="fo-value">
										<input  name="" id="" className="tf tf-md w375" type="text" value="" placeholder="" />
									</div>
								</div>
							
								<div className="fo-item fo-m-1-3  req">
									<p className="fo-key">게시기간</p>
									<div className="fo-value">
										데이트피커
									</div>
								</div>							
							
								<div className="fo-item fo-m-1-3  req">
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
							
								<div className="fo-item  req">
									<p className="fo-key">팝업높이</p>
									<div className="fo-value">
										<input  name="" id="" className="tf tf-md w375" type="text" value="" placeholder="" />
									</div>
								</div>							
								<div className="fo-item  req">
									<p className="fo-key">팝업너비</p>
									<div className="fo-value">
										<input  name="" id="" className="tf tf-md w375" type="text" value="" placeholder="" />
									</div>
								</div>							
								<div className="fo-item  req">
									<p className="fo-key">팝업 상단위치</p>
									<div className="fo-value">
										<input  name="" id="" className="tf tf-md w375" type="text" value="" placeholder="" />
									</div>
								</div>							
								<div className="fo-item  req">
									<p className="fo-key">팝업 좌측위치</p>
									<div className="fo-value">
										<input  name="" id="" className="tf tf-md w375" type="text" value="" placeholder="" />
									</div>
							</div>							
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">이미지 첨부방식</p>
								<div className="fo-value">
									<div className="sl sl-md w375">
										<select name="" id="" className="">
											<option value="1">파일</option>
											<option value="2">링크</option>
										</select>
									</div>
								</div>
							</div>							
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">이미지 URL</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8">
										<input name="" id="" className="tf tf-md hz-item hz-fg" type="text" value="" placeholder="" />
										<Button color="gray-o" size="md">미리보기</Button>											
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">링크 URL</p>
								<div className="fo-value">
									<input  name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="" />
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
						</div>
			
						<div className="hz-root hz-right hz-gap5">
							<Button color="pri-o" size="sm">저장</Button>
							<Button color="gray-o" size="sm">목록</Button>
						</div>					

					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;