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
				<Breadcrumb gnbIdx={5} lnbD1Idx={0} />
				<main className="fww-main">
					<h1 className="tx tx-hd2">메일 발송</h1>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">메일제목</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'[대·중소기업·농어업혐력재단]동반성장 투자재원 지급신청 수정요청의 건'} placeholder={''} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">발송자 메일 주소</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'sgf@win-win.or.kr'} placeholder={''} />
								</div>						
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">발송자 이름</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'관리자'} placeholder={''} />
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
						<Button color="gray-o" size="sm">목록</Button> {/* [M.20240522] */}
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;