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
					<li><Link to="#">지급관리</Link></li>
					<li><Link to="#">지급신청현황</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">지급 신청 현황</h1>
					
					<form className="sf sf-2col">
						<div className="inner">
							<div className="sf-item sf-m-1-3">
								<p className="sf-key">지급신청기간</p>
								<div className="sf-value">
									<div className="hz-root hz-left hz-gap8">
										<div className="hz-item hz-root hz-gap5">
											<UIDatePicker className="hz-item"/>
											<span className="hz-item">~</span>
											<UIDatePicker className="hz-item"/>
										</div>
										<div className="hz-item hz-root hz-gap5">
											<button className="bt" data-color="pri-o2" data-size="md" type="button">이전1개월</button>
											<button className="bt" data-color="pri-o2" data-size="md" type="button">이전3개월</button>
											<button className="bt" data-color="pri" data-size="md" type="button">이전6개월</button>
											<button className="bt" data-color="pri-o2" data-size="md" type="button">이전12개월</button>
										</div>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">출연사업</p>
								<div className="sf-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">전체</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">진행상태</p>
								<div className="sf-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">전체</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">제출여부</p>
								<div className="sf-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">전체</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">과제명</p>
								<div className="sf-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">전체</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">조회조건</p>
								<div className="sf-value">
									<div className="hz-root hz-gap8">
										<div className="hz-item sl sl-md w120">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">$</option>
											</select>
										</div>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'검색어를 입력하세요.'} readOnly={false} />
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
							<Button color="pri-o" size="sm">결재상신</Button>
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
					<label className="badge badge-22 blue">신청</label>
					<label className="badge badge-22 skyblue">접수증</label>
					<label className="badge badge-22 yellow">수정요청</label>
					<label className="badge badge-22 red">반려</label>
					<label className="badge badge-22 green">최종접수</label>
					<label className="badge badge-22 skyblue">결재중</label>
					<label className="badge badge-22 gray">집행완료</label>

				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;