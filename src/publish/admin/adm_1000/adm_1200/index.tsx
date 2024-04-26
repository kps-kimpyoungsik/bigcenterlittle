import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
import UIDatePicker from "components/datepicker";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/admin/">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">기금관리</Link></li>
					<li><Link to="#">출연관리</Link></li>
					<li><Link to="#">출연신청안내관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">출연신청안내관리</h1>
					
					<form className="sf sf-2col">
						<div className="inner">
							<div className="sf-item sf-m-1-3">
								<p className="sf-key">등록일자</p>
								<div className="sf-value">
									<div className="hz-root hz-left hz-gap8">
											<div className="hz-item hz-root hz-gap5">
												<UIDatePicker className="hz-item"/>
												<span className="hz-item">~</span>
												<UIDatePicker className="hz-item"/>
											</div>
											<div className="hz-item hz-root hz-gap5">
												<button className="bt" data-color="pri-o2" data-size="md" type="button">이전3개월</button>
												<button className="bt" data-color="pri-o2" data-size="md" type="button">이전6개월</button>
												<button className="bt" data-color="pri" data-size="md" type="button">이전12개월</button>
												<button className="bt" data-color="pri-o2" data-size="md" type="button">이전24개월</button>
											</div>
										</div>
								</div>
							</div>
							<div className="sf-item sf-m-1-3">
								<p className="sf-key">제목</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} />
								</div>
							</div>
						</div>
					</form>
					<div className="hz-root hz-center mb30">
						<button className="bt" data-color="pri" data-size="md"  type="button">조회</button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;