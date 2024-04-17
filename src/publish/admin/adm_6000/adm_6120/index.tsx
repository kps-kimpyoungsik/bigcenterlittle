import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import Button from 'components/buttons/';
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
						<h1 className="tx tx-hd2">메일 발송</h1>
						<form className="fo fo-col2 mb30" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">메일제목</p>
									<div className="fo-value">
										<input name="" id="" className="tf tf-md w100p" type="text" value="[대·중소기업·농어업혐력재단]동반성장 투자재원 지급신청 수정요청의 건" placeholder="" />
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">발송자 메일 주소</p>
									<div className="fo-value">
										<input name="" id="" className="tf tf-md w100p" type="text" value="sgf@win-win.or.kr" placeholder="" />
									</div>						
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">발송자 이름</p>
									<div className="fo-value">
										<input name="" id="" className="tf tf-md w100p" type="text" value="관리자" placeholder="" />
									</div>						
								</div>		
							</div> 
						</form>					
						<div className="tb-top">
							<div>
								<p className="tx fc-black"></p>총 <em className="fw500">2</em>건
							</div>
							<div className="hz-root hz-gap5">
								<Button color="gray-o" size="sm">- 삭제</Button>
								<Button color="gray-o" size="sm">+ 추가</Button>
							</div>
						</div>
						<div id='sheetDiv mb30'>[D] IBSHEET 영역</div>
						
						<div>[대·중소기업·농어업혐력재단]동반성장 투자재원 지급신청 수정요청의 건 ... (생략)</div>
						
						<div className="hz-root hz-right hz-gap5 mt10">
							<Button color="pri-o" size="sm">저장</Button>
							<Button color="pri-o" size="sm">직접발송</Button>
							<Button color="pri-o" size="sm">목록</Button>
						</div>
					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;