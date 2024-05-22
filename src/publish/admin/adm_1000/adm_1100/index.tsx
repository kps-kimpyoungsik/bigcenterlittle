import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import UIDatePicker from "components/datepicker"; /* [M.20240522] */
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={0} lnbD1Idx={0} />
				<main className="fww-main">
					<h1 className="tx tx-hd2">통합정보조회</h1>
					<form className="sf sf-3col">
						<div className="inner">
							<div className="sf-item">
								<p className="sf-key">과제년도</p>
								<div className="sf-value">
										<UIDatePicker /> {/* [M.20240522] */} 
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">출연기업</p>
								<div className="sf-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md '} value={''} placeholder={'출연기업 찾기'} readOnly={false} />
										<Button color="pri-o2" size="md">찾기</Button> {/* [M.20240522] */} 
										<Button color="gray-o" size="md">삭제</Button>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">수행기관</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'수행기관명을 입력하세요.'} readOnly={false} /> {/* [M.20240522] */} 
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">담당자</p>
								<div className="sf-value">
									<div className="hz-root hz-gap8 w100p">
										<div className="sl sl-md w120">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">기업담당자</option>
												<option value="2">재판담당자</option>
											</select>
										</div>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'담당자를 입력하세요.'} readOnly={false} />
									</div>
								</div>
							</div>							
							<div className="sf-item">
								<p className="sf-key">과제명</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'과제명을 입력하세요.'} readOnly={false} />
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">과제신청번호</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'과제명신청번호를 입력하세요(숫자만입력)'} readOnly={false} />
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
								<p className="sf-key">조회조건</p>
								<div className="sf-value">
									<div className="hz-root hz-gap8 w100p">
										<div className="sl sl-md w120">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">기대효과</option>
												<option value="2">지원분야</option>
												<option value="3">과제분야</option>
											</select>
										</div>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'담당자를 입력하세요.'} readOnly={false} />
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