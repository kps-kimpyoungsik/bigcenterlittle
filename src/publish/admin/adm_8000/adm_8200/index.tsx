import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_8000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import UIDatePicker from "components/datepicker";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	const modaladm8210p = useToggleState({});
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
					<h1 className="tx tx-hd2">연도별 현황통계</h1>

				<form className="sf sf-1row sf-2col mb30">
					<div className="inner">
						<div className="sf-item">
							<p className="sf-key">년도</p>
							<div className="sf-value">
								<div className="sl sl-md w120">
									<select name="" id="" className="">
										<option value="0">선택</option>
										<option value="1">$</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<button className="bt" data-color="pri" data-size="md"  type="button">조회</button>
				</form>

					<div className="hz-root hz-sb mb10">
						<h3 className="section-title">분기별 현황</h3>
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

						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}
						<br/><br/>
						<Button color='gray' size="sm" onClick={modaladm8210p.open}>8210p</Button> <br/><br/>
						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}							

				</main>
			</div>

		{/* modal - 8210p*/}
		<ModalPopup
				open={modaladm8210p.isShowing}
				title="출연기업수"
				size="mid"
				onClose={modaladm8210p.close}
			>
				<div className="modal-con">
					<form className="sf sf-1row sf-2col mb30">
						<div className="inner">
							<div className="sf-item">
								<p className="sf-key">년도</p>
								<div className="sf-value">
									<div className="sl sl-md w120">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<button className="bt" data-color="pri" data-size="md"  type="button">조회</button>
					</form>					

					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
					</div>

					<div className="ibsheet">[D] IBSHEET 영역</div>
					
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="sm">닫기</Button>
					</div>
				</div>	
			</ModalPopup>

		</PageContainer>
	);
}
export default ContentsContainer;