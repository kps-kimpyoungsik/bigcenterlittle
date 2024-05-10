import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_8000Aside";
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
					<li><Link to="#">보고서</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">누적 현황통계</h1>
					<div className="hz-root hz-sb mb10">
						<h3 className="section-title">연도별 현황(누적)</h3>
						<div className="hz-item hz-root hz-gap5">
							<Button color="gray-o" size="sm">접기</Button>
							<Button color="gray-o" size="sm">펼치기</Button>
							<Button color="gray-o" size="sm">다운로드</Button>
						</div>
					</div>
					<div className="ibsheet mb40">[D] IBSHEET 영역</div>
					

					<div className="pt">
						<div className="row">
							<div className="col col-5 mr15">
								<div className="hz-root hz-sb mb10">
									<h3 className="section-title">상위출연 민간기업</h3>
									<div className="hz-item hz-root hz-gap5">
										<Button color="gray-o" size="sm">접기</Button>
										<Button color="gray-o" size="sm">펼치기</Button>
									</div>
								</div>
								<div className="ibsheet mb40">[D] IBSHEET 영역</div>
							</div>
							<div className="col col-5 ml15">
								<div className="hz-root hz-sb mb10">
									<h3 className="section-title">상위출연 공공기관</h3>
									<div className="hz-item hz-root hz-gap5">
										<Button color="gray-o" size="sm">접기</Button>
										<Button color="gray-o" size="sm">펼치기</Button>
									</div>
								</div>		
								<div className="ibsheet mb40">[D] IBSHEET 영역</div>						
							</div>
						</div>
					</div>					

					<div className="hz-root hz-sb mb10">
						<h3 className="section-title">출연사업별 현황(누적)</h3>
						<div className="hz-item hz-root hz-gap5">
							<Button color="gray-o" size="sm">접기</Button>
							<Button color="gray-o" size="sm">펼치기</Button>
							<Button color="gray-o" size="sm">다운로드</Button>
						</div>
					</div>			
					<div className="ibsheet mb40">[D] IBSHEET 영역</div>		

					<div className="pt">
						<div className="row">
							<div className="col col-5 mr15">
								<div className="hz-root hz-sb mb10">
									<h3 className="section-title">기금사용용도(상생법)</h3>
									<div className="hz-item hz-root hz-gap5">
										<Button color="gray-o" size="sm">접기</Button>
										<Button color="gray-o" size="sm">펼치기</Button>
									</div>
								</div>			
								<div className="ibsheet mb40">[D] IBSHEET 영역</div>								
							</div>
							<div className="col col-5 ml15">
								<div className="hz-root hz-sb mb10">
									<h3 className="section-title">사업분야</h3>
									<div className="hz-item hz-root hz-gap5">
										<Button color="gray-o" size="sm">접기</Button>
										<Button color="gray-o" size="sm">펼치기</Button>
									</div>
								</div>			
								<div className="ibsheet mb40">[D] IBSHEET 영역</div>							
							</div>
						</div>
					</div>					

					<div className="hz-root hz-sb mb10">
						<h3 className="section-title">주요성과</h3>
					</div>		
					<div className="ibsheet mb40">[D] IBSHEET 영역</div>

				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;