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
						<li className=""><a href="">$</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">SMS 발송내역 상세</h1>
						<form className="fo fo-col2 mb30" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">SMS 제목</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="[대·중소기업·농어업혐력재단]동반성장 투자재원 지급신청 수정요청의 건" placeholder="" />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">발송자 SMS 번호</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="02-111-11111" placeholder="" />
									</div>						
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">발송자 이름</p>
									<div className="fo-value">
										<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="[대·중소기업상생협력기금종합관리시스템] 과제신청 심사 완료" placeholder="" />
									</div>						
								</div>		
							</div> 
						</form>					
						<div className="tb-top">
							<div>
								<p className="tx fc-black"></p>총 <em className="fw500">1</em>건
							</div>
						</div>
						<div id='sheetDiv mb30'>[D] IBSHEET 영역</div>
						
						<div>[대·중소기업·농어업혐력재단]동반성장 투자재원 지급신청 수정요청의 건 ... (생략)</div>
						
						<div className="hz-root hz-right mt10">
							<button className="bt bt-sm bt-pri-o" type="button">목록</button>
						</div>							
					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;