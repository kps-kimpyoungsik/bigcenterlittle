import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_7000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">결재함</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">결재함 상세</h1>
						<h3 className="section-title mb15">결재선</h3>
						<div className="mb30">#$</div>

						<h3 className="section-title mb15">결재상신</h3>
						<form className="fo fo-col2 mb30" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">결재상태</p>
									<div className="fo-value">
										<label className="badge badge-23 red">결재대기</label>
										<label className="badge badge-23 blue">결재중</label>
										<label className="badge badge-23 green">전결</label>
										<label className="badge badge-23 red">반려</label>
										<label className="badge badge-23 gray">집행완료</label>

									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">등록자</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">등록일</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'2024-12-12 12:12:12'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">내용</p>
									<div className="fo-value">
										<div className="ta-view ta-view-white w100p">
											지난 주 회의 때 결정된 사항입니다. <br/>
											운영비 항목이 추가되었습니다.
										</div>
									</div>
								</div>
								
								{/* [D] 반려 */}
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">반려사유</p>
									<div className="fo-value">
									<div className="ta-view ta-view-white w100p">
										운영비 항목은 다음년도에 기산되기로 결정되었음 <br />
										볼보그룹코리아인 경우는 다음년도 운영비에 합산하여 계산 할 것
									</div>
									</div>
								</div>
								{/* //[D] 반려 */}

							</div>
						</form>

						<h3 className="section-title mb15">지급신청 정보</h3>
						<form className="fo fo-col2 mb30" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">지급신청번호</p> 
									<div className="fo-value">
										<Link className="tx tx-cp1 tx-link2" to="#">Y-24-0000695</Link>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연기업</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'볼보그룹코리아㈜건설기계'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제명</p>
									<div className="fo-value">
										<Link className="tx tx-cp1 tx-link2" to="#">24년 협력사 포켓_모바일수첩 지원(안)</Link>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제기간</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'2024-01-01 ~ 2024-12-31'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'운영비(상생형 스마트공장)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">기금사용용도</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'대·중소기업 간 상생협력 성과의 공평한 배분에 관한 사업'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">수행기업</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">중소기업</p>
									<div className="fo-value">
									<div className="tf-unit">
										<input name="" id="" className="tf tf-md ta-right" type="text" value="50,000,000" placeholder="" />
										<span className="u">개</span>
									</div>
									{/* <UIInput className={'tf tf-md w100p'} value={'100'} placeholder={''} readOnly={true} /> */}
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">지급신청금액(합계)</p>
									<div className="fo-value">
									<div className="tf-unit">
										<input name="" id="" className="tf tf-md  ta-right" type="text" value="50,000,000" placeholder="" />
										<span className="u">원</span>
									</div>										
									{/* <UIInput className={'tf tf-md w100p'} value={'11,000,000'} placeholder={''} readOnly={true} /> */}
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">지원금 지급방식</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'사후정산'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>

						<h3 className="section-title mb15">기업목록</h3>
					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;