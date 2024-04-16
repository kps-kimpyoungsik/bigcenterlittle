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
						<li className=""><a href="">사용자관리</a></li>
						<li className=""><a href="">사업관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">사업 상세</h1>

						<div className="fo fo-col3 mb10">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">사업코드</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="999" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업명</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="통합출현사업" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업약칭</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="통합출현" placeholder="" />
									</div>
								</div>							
								<div className="fo-item">
									<p className="fo-key">사업시작일</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="2011-01-01(토)" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업종료일</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="2999-12-31(화)" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">지급품의연결여부</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="선택사항" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업용도</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="상생협력기금의 조성 운영 및 관리를 위한 경비" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업용도(소분류)</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="섬광공유제" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">중견기업허용여부</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="아니오" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업종류</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="운영비" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업유형</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="운영비" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업그룹명</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">발급내역</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="기타" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">주담당자</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="관리자" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">부서장</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="강감찬" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제운영</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="아니오" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">운영사업</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="성과공유제" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">비고사항</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">발행키</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="기타" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">등록자</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="관리자" placeholder="" />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">등록일시</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="2020-12-15(화)" placeholder="" />
									</div>
								</div>
						

							</div> 
						</div>						

						<div className="hz-root hz-right hz-gap5">
							<button className="bt bt-sm bt-gray-o" type="button">삭제</button>
							<button className="bt bt-sm bt-pri-o" type="button">수정</button>
							<button className="bt bt-sm bt-gray-o" type="button">목록</button>
						</div>
						
					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;