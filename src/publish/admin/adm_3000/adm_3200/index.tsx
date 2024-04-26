import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_3000Aside";
import UIDatePicker from "components/datepicker";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	const modaladm3201 = useToggleState({});	
	const modaladm3202 = useToggleState({});			
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">공시/발급</a></li>
						<li className=""><a href="">기부영수증</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">기부영수증발급 조회</h1>

						<form className="sf sf-3col">
							<div className="inner">
								<div className="sf-item sf-m-1-4">
									<p className="sf-key">발급일자</p>
									<div className="sf-value">
										<div className="hz-root hz-left hz-gap8">
											<div className="hz-item hz-root hz-gap5">
												<UIDatePicker className="hz-item"/>
												<span className="hz-item">~</span>
												<UIDatePicker className="hz-item"/>
											</div>
											<div className="hz-item hz-root hz-gap5">
												<button className="bt" data-color="pri-o2" data-size="md" type="button">당일</button>
												<button className="bt" data-color="pri-o2" data-size="md" type="button">이전1개월</button>
												<button className="bt" data-color="pri" data-size="md" type="button">이전6개월</button>
												<button className="bt" data-color="pri-o2" data-size="md" type="button">이전12개월</button>
											</div>
										</div>
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">출연기업명</p>
									<div className="sf-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} />
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">출연번호</p>
									<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} />
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-center mb30">
							<button className="bt" data-color="pri" data-size="md" type="button">조회</button>
						</div>

						<div className="tb-top">
							<div className="hz-root hz-gap15">
								<div className="hz-item">
									<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
								</div>
							</div>
							<div className="hz-root hz-gap5">
								<Button color="gray-o" size="sm">기부영수증 취소</Button>
								<Button color="gray-o" size="sm">기부영수증 등록</Button>
								<div className="sl sl-sm w120">
									<select name="" id="" className="">
										<option value="20">20개씩보기</option>
										<option value="50">50개씩보기</option>
										<option value="100">100개씩보기</option>
										<option value="200">200개씩보기</option>
										<option value="500">500개씩보기</option>
										<option value="1000">1000개씩보기</option>
									</select>
								</div>
							</div>
						</div>
						<div className="ibsheet">[D] IBSHEET 영역</div>					

						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}
						<br/><br/>
						<Button color='gray' size="sm" onClick={modaladm3201.open}>adm_3201p 열기</Button> <br /><br />
						<Button color='gray' size="sm" onClick={modaladm3202.open}>adm_3202p 열기</Button> <br /><br />
						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}				

					</main>

				</div>

				{/* modal - 3201 */}	
				<ModalPopup
				open={modaladm3201.isShowing}
				title="출연선택"
				size="xlg"
				onClose={modaladm3201.close}
			>
				<div className="modal-con">
					
					{/*클래스옵션: sf-1row, sf-2col*/}
					<form className="sf sf-2col">
						<div className="inner">
							<div className="sf-item sf-m-1-3">
								<p className="sf-key">신청기간</p>
								<div className="sf-value">
									<div className="hz-item hz-root hz-gap5">
											<UIDatePicker className="hz-item"/>
											<span className="hz-item">~</span>
											<UIDatePicker className="hz-item"/>
										</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">출연기업</p>
								<div className="sf-value">
									<div className="hz-root hz-gap8 w100p">
											<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'출연기업을 입력하세요'} readOnly={false} />
											<Button color="gray-o" size="md">찾기</Button>
											<Button color="gray-o" size="md">삭제</Button>
										</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">출연번호</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'출연번호를 입력하세요'} readOnly={false} />
								</div>
							</div>														
						</div>
					</form>
					<div className="hz-root hz-center mb30">
						<button className="bt" data-color="pri" data-size="md"  type="button">조회</button>
					</div>

					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap5">
							<div className="sl sl-sm w120">
								<select name="" id="" className="">
									<option value="20">20개씩보기</option>
									<option value="50">50개씩보기</option>
									<option value="100">100개씩보기</option>
									<option value="200">200개씩보기</option>
									<option value="500">500개씩보기</option>
									<option value="1000">1000개씩보기</option>
								</select>
							</div>
						</div>
					</div>
					<div className="ibsheet">[D] IBSHEET 영역</div>

				</div>
			</ModalPopup>				

				{/* modal - 3202 */}	
				<ModalPopup
				open={modaladm3202.isShowing}
				title="기업검색"
				size="mid"
				onClose={modaladm3202.close}
			>
				<div className="modal-con">
					{/*클래스옵션: sf-1row, sf-2col*/}
					<form className="sf sf-1row sf-2col">
						<div className="inner">
							<div className="sf-item sf-m-1-3">
								<p className="sf-key">기업검색</p>
								<div className="sf-value">
										<div className="hz-root hz-gap10">
											<div className="sl sl-md w150">
												<select name="" id="" className="">
													<option value="1">기업명</option>
													<option value="2">법인사업자번호</option>
													<option value="3">사업자등록번호</option>
												</select>
											</div>
											<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'입력하세요'} />
										</div>
									
								</div>
							</div>
						</div>
						<button className="bt" data-color="pri" data-size="md"  type="button">조회</button>
					</form>
					<div className="hz-root hz-center mb30">
						<button className="bt" data-color="pri" data-size="md"  type="button">조회</button>
					</div>
				</div>
			</ModalPopup>					

		</PageContainer>
	);
}
export default ContentsContainer;