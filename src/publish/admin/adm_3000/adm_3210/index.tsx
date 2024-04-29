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
						<h1 className="tx tx-hd2">기부영수증 등록</h1>
						<h3 className="section-title mb15">출연정보</h3>
						
						<form className="fo fo-col2 mb30" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">출연선택</p>
									<div className="fo-value">
										<div className="hz-root hz-gap8 w100p">
											<UIInput className={'hz-item hz-fg tf tf-md'} value={'기업명출력'} placeholder={''} readOnly={true} />
											<Button color="gray-o" size="md">찾기</Button>
											<Button color="gray-o" size="md">삭제</Button>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연신청번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'00-0000-000000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연신청일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연금액(원)</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">입금은행</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'하나은행'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">계좌번호</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'00-0000-000000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">입금일자</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">입금금액(원)</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md ta-right w100p'} value={'500,000'} placeholder={''} readOnly={true} />
									</div>
								</div>																																																

							</div>
						</form>
						<h3 className="section-title mb15">기부영수증 발행방법</h3>
						<form className="fo fo-col2 mb0" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">선택</p>
									<div className="fo-value">
										
										<div className="hz-root hz-gap8">
											<label htmlFor="rd-1-1" className="ip-rd-label">
												<input name="rd-1" id="rd-1-1" className="ip-rd" type="radio"  />
												<span className="check"></span>
												<span className="txt">단건으로 발행</span>
											</label>
											<label htmlFor="rd-1-2" className="ip-rd-label">
												<input name="rd-1" id="rd-1-2" className="ip-rd" type="radio"  checked />
												<span className="check"></span>
												<span className="txt">다건으로 발행</span>
											</label>
										</div>
										
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">발행 예정 금액(원)</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">발행건수</p>
									<div className="fo-value">
										
										<div className="sl sl-md w218">
											<select name="" id="" className="">
												<option value="1">1</option>
												<option selected value="2">2</option>
											</select>
										</div>

									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">금액 입력</p>
									<div className="fo-value">
										<div className="hz-root hz-gap8 hz-col6 w100p">
											<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000'} placeholder={''} readOnly={false} />
											<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000'} placeholder={''} readOnly={false} />
											<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000'} placeholder={''} readOnly={false} />
											<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000'} placeholder={''} readOnly={false} />
											<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000'} placeholder={''} readOnly={false} />
											<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000'} placeholder={''} readOnly={false} />
											<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000'} placeholder={''} readOnly={false} />
										</div>

									</div>
								</div>
							</div>
						</form>

						<div className="tb-total mb10">
							<div className="tb-total-items">
								분할 발행 합계 금액(원)
							</div>
							<div className="tb-total-items">
								<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000,000'} placeholder={''} readOnly={true} />
							</div>
						</div>

						<div className="hz-root hz-right hz-gap5">
							<Button color="gray-o" size="sm" >취소</Button>
							<Button color="pri-o" size="sm" >등록</Button>
						</div>
					</main>
				</div>
		</PageContainer>
	);
}
export default ContentsContainer;