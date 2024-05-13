import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import UIDatePicker from "components/datepicker";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	const modaladm1706p = useToggleState({});
	const modaladm1707p = useToggleState({});		
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/admin/">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">기금관리</Link></li>
					<li><Link to="#">통계관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">통계관리</h1>
					<form className="sf sf-2col">
						<div className="inner">
							<div className="sf-item sf-m-1-3">
								<p className="sf-key">과제기간</p>
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
							<div className="sf-item">
								<p className="sf-key">과제명</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'과제명을 입력하세요'} />
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">과제번호</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'과제번호를 입력하세요'} />
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">조회구분</p>
								<div className="sf-value">
									<div className="hz-root hz-gap8">
										<div className="hz-item sl sl-md w120">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="1">$</option>
											</select>
										</div>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'검색어를 입력하세요'} />
									</div>
									
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
							<Button color="pri-o" size="sm">과제등록</Button>
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
						<Button color='gray' size="sm" onClick={modaladm1706p.open}>1706p</Button> <br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1707p.open}>1707p</Button>
						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}	

				</main>
			</div>

		{/* modal - 1706p*/}
		<ModalPopup
				open={modaladm1706p.isShowing}
				title="세부과제등록"
				size="xlg"
				onClose={modaladm1706p.close}
			>
				<div className="modal-con">
					<h3 className="section-title mb15">출연기업 및 과제</h3>
					
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item req">
								<p className="fo-key">출연기업명</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'출연기업 찾기'} readOnly={true} />
										<Button color="pri-o" size="md">출연기업찾기</Button>
										<Button color="gray-o" size="md">삭제</Button>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">기업유형</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">사업구분</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">과제명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'과제명을 입력하세요'} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">과제번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'과제명을 입력하세요'} readOnly={false} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사업년도</p>
								<div className="fo-value">
									<UIDatePicker/>
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">사업비(원)</h3>
					{/*클래스옵션: fo-col2, fo-col3 sf-1row*/}
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">정부보조금</p>
								<div className="fo-value d-block">
									
									<div className="hz-root hz-gap8 w100p mb10">
										<span className="hz-item w50">1차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={''} placeholder={'1차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">2차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={''} placeholder={'2차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">3차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'3차년도 금액 입력'} readOnly={false} />																				
									</div>
									<div className="hz-root hz-gap8 w100p">
										<span className="hz-item w50">4차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={''} placeholder={'4차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">5차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={''} placeholder={'5차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">합계</span>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'0'} placeholder={''} readOnly={true} />
									</div>

								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">
									중소기업<br/>
									자부담금
								</p>
								<div className="fo-value d-block">
									<div className="hz-root hz-gap8 w100p mb10">
										<span className="hz-item w50">1차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={''} placeholder={'1차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">2차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={''} placeholder={'2차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">3차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'3차년도 금액 입력'} readOnly={false} />																				
									</div>
									<div className="hz-root hz-gap8 w100p">
										<span className="hz-item w50">4차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={''} placeholder={'4차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">5차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={''} placeholder={'5차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">합계</span>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'0'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</div>
					</form>

				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="sm">취소</Button>
						<Button color='pri' size="sm">세부과제등록</Button>
					</div>
				</div>	
			</ModalPopup>

		{/* modal - 1707p*/}
		<ModalPopup
				open={modaladm1707p.isShowing}
				title="세부과제수정"
				size="xlg"
				onClose={modaladm1707p.close}
			>
				<div className="modal-con">
					<h3 className="section-title mb15">출연기업 및 과제</h3>
					
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item req">
								<p className="fo-key">출연기업명</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'포스코'} placeholder={'출연기업 찾기'} readOnly={true} />
										<Button color="pri-o" size="md">출연기업찾기</Button>
										<Button color="gray-o" size="md">삭제</Button>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">기업유형</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">사업구분</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">과제명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'소결배기가스과제지원'} placeholder={'과제명을 입력하세요'} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">과제번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'T-00-00000'} placeholder={'과제명을 입력하세요'} readOnly={false} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사업년도</p>
								<div className="fo-value">
									<UIDatePicker/>
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">사업비(원)</h3>
					{/*클래스옵션: fo-col2, fo-col3 sf-1row*/}
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">정부보조금</p>
								<div className="fo-value d-block">
									
									<div className="hz-root hz-gap8 w100p mb10">
										<span className="hz-item w50">1차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={'1,000,000'} placeholder={'1차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">2차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={'0'} placeholder={'2차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">3차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'0'} placeholder={'3차년도 금액 입력'} readOnly={false} />																				
									</div>
									<div className="hz-root hz-gap8 w100p">
										<span className="hz-item w50">4차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={'0'} placeholder={'4차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">5차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={'0'} placeholder={'5차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">합계</span>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'1,000,000'} placeholder={''} readOnly={true} />
									</div>

								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">
									중소기업<br/>
									자부담금
								</p>
								<div className="fo-value d-block">
									<div className="hz-root hz-gap8 w100p mb10">
										<span className="hz-item w50">1차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={'1,000,000'} placeholder={'1차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">2차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={'0'} placeholder={'2차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">3차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'0'} placeholder={'3차년도 금액 입력'} readOnly={false} />																				
									</div>
									<div className="hz-root hz-gap8 w100p">
										<span className="hz-item w50">4차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={'0'} placeholder={'4차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">5차년</span>
										<UIInput className={'hz-item hz-fg tf tf-md mr30'} value={'0'} placeholder={'5차년도 금액 입력'} readOnly={false} />

										<span className="hz-item w50">합계</span>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'0'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</div>
					</form>

				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="sm">취소</Button>
						<Button color='pri' size="sm">수정</Button>
					</div>
				</div>	
			</ModalPopup>

		</PageContainer>
	);
}
export default ContentsContainer;