import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_2000Aside";
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
						<li className=""><a href="">계좌관리</a></li>
						<li className=""><a href="">모계좌조회</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">모계좌조회</h1>

						<form className="sf sf-3col">
							<div className="inner">
							<div className="sf-item">
									<p className="sf-key">계좌번호</p>
									<div className="sf-value">
										<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">128-12345-12345</option>
											</select>
										</div>
									</div>
								</div>								
								<div className="sf-item sf-m-2-4">
									<p className="sf-key">거래일시</p>
									<div className="sf-value">
										<div className="hz-root hz-gap8">
											<div className="hz-item hz-fg hz-root hz-gap5">
												<UIDatePicker className="hz-item"/>
												<span className="hz-item">~</span>
												<UIDatePicker className="hz-item"/>
											</div>
											<div className="hz-item hz-root hz-gap5">
												<button className="bt" data-color="pri-o2" data-size="md" type="button">오늘</button>
												<button className="bt" data-color="pri-o2" data-size="md" type="button">1주일</button>
												<button className="bt" data-color="pri" data-size="md" type="button">1개월</button>
												<button className="bt" data-color="pri-o2" data-size="md" type="button">3개월</button>
												<button className="bt" data-color="pri-o2" data-size="md" type="button">6개월</button>
												<button className="bt" data-color="pri-o2" data-size="md" type="button">1년</button>
											</div>
										</div>
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">거래구분</p>
									<div className="sf-value">
										<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">입금</option>
												<option value="2">출금</option>
											</select>
										</div>
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">금액</p>
									<div className="sf-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={false} />
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">의뢰인/수취인</p>
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
							<div>
								<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
							</div>
							<div className="hz-root hz-gap5">
								<Button color="gray-o" size="sm">다운로드</Button>
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
					</main>
				</div>

		</PageContainer>
	);
}
export default ContentsContainer;