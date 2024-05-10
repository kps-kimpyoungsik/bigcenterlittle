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
									<p className="sf-key">출연기업</p>
									<div className="sf-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'기업명을 입력하세요.'} />
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">출연번호</p>
									<div className="sf-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'출연번호를 입력하세요("-"생략)'} />
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">기부영수증번호</p>
									<div className="sf-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'기부영수증번호를 입력하세요("-"생략)'} />
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">발급상태</p>
									<div className="sf-value">
										<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">선택/전체</option>
												<option value="1">$</option>
											</select>
										</div>
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">출연사업</p>
									<div className="sf-value">
										<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">선택/전체</option>
												<option value="1">$</option>
											</select>
										</div>
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">담당부서</p>
									<div className="sf-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'담당부서를 입력하세요.'} />
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

						<div className="hz-root hz-gap5 mt10">
								<div className="sl sl-sm w120">
									<select name="" id="" className="">
										<option value="0">전체</option>
										<option value="1">발급</option>
										<option value="2">미발급</option>
										<option value="3">재발급</option>
									</select>
								</div>
							</div>						

					</main>

				</div>

		</PageContainer>
	);
}
export default ContentsContainer;