import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_4000Aside";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<ul className="fww-brd">
					<li><Link to="/admin">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">사용자관리</Link></li>
					<li><Link to="#">한도금액통제</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">최종결재자 한도금액 수정</h1>
					<div className="pt">
						<div className="row">
							<div className="col col-5 por mr30">
								<div className="hz-root hz-right hz-gap5 mt5 mb18">
									<UIInput  className={'hz-item tf tf-sm w215'} value={''} placeholder={'검색'} />
									<Button color="pri" size="sm">검색</Button>	
								</div>
								<div className='ibsheet'>[D] IBSHEET 영역</div>
								<div className="adm_4320_btn_in_out">
									<button className="btn-out">삭제</button>
									<button className="btn-in">추가</button>
								</div>
							</div>
							<div className="col col-5 ml30">
								<div className="hz-root hz-sb hz-bottom mb10">
									<h2 className="hz-item tx tx-hd3 mt0 mb12">최종결재자 한도금액</h2>
									<div className="hz-item hz-root hz-right hz-gap5">
										<Button color="gray-o" size="sm">결재자 삭제 </Button>
										<button className="hz-item bt-up" type="button">아래로</button>
										<button className="hz-item bt-down" type="button">위로</button>
									</div>																			
								</div>
								<div className='ibsheet'>[D] IBSHEET 영역</div>
								<div className="hz-root hz-right hz-gap5 mt10">
									<Button color="pri-o" size="sm">저장</Button>
									<Button color="gray-o" size="sm">목록</Button>
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