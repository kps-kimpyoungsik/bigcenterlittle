import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">
					<Breadcrumb gnbIdx={5} lnbD1Idx={1} />
					<main className="fww-main">
						<h1 className="tx tx-hd2">SMS 발송내역 상세</h1>
						<form className="fo fo-col2 mb30" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">SMS 제목</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'[대·중소기업·농어업혐력재단]동반성장 투자재원 지급신청 수정요청의 건'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">발송자 SMS 번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'02-111-11111'} placeholder={''} readOnly={true}/>
									</div>						
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">발송자 이름</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'[대·중소기업상생협력기금종합관리시스템] 과제신청 심사 완료'} placeholder={''} readOnly={true}/>
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
						
						<div className="ta-view h200 mt30">
							[상생협력재단] <em className="fc-err">$NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 심사가 완료되었습니다.
							[상생협력재단] <em className="fc-err">$NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 집행이 완료되었습니다. 지급금액 <em className="fc-err">$###</em>원, 집행일 <em className="fc-err">$YYYY-MM-DD</em>
						</div>
						
						<div className="hz-root hz-right mt10">
							<Button color="gray-o" size="sm">목록</Button>
						</div>							
					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;