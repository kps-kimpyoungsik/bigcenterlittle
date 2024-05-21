import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_3000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<Breadcrumb gnbIdx={2} lnbD1Idx={1} />
				<main className="fww-main">
					<h1 className="tx tx-hd2">기부영수증 등록</h1>
					<h3 className="section-title mb15">출연정보</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">출연번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'0000-000000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연기업</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'기업명출력'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연사업</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md ta-right w100p'} value={'동반성장'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연신청일</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연신청금액(원)</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md ta-right w100p'} value={'600,000'} placeholder={''} readOnly={true} />
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
								<UIInput className={'tf tf-md ta-right w100p'} value={'0000000000'} placeholder={''} readOnly={true} />
								</div>
							</div>

						</div>
					</form>
					<h3 className="section-title mb15">출연기업 가상계좌 입금내역</h3>
					<form className="fo fo-col2 mb" name="" action="" method="">
						<div className="inner">
						<div className="fo-item fo-m-1-3">
								<p className="fo-key">기부금 발행 예정금액</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md ta-right w100p'} value={'6,000,000'} placeholder={''} readOnly={true} />
								</div>
							</div>								
							<div className="fo-item">
								<p className="fo-key">발행방법</p>
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
								<p className="fo-key">기부금영수증발행구분</p>
								<div className="fo-value">
									<p className="tx">발행은 사업구분-날짜구분-자동순번으로 채번됩니다.</p>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">발행건수</p>
								<div className="fo-value">
									<div className="sl sl-md w215">
										<select name="" id="" className="">
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
										</select>
									</div>
								</div>
							</div>								
							<div className="fo-item">
								<p className="fo-key">다건으로 발행할 합계금액</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md ta-right w100p'} value={'600,000'} placeholder={''} readOnly={true} />
								</div>
							</div>								
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">금액입력</p>
								<div className="fo-value">
									<div className="hz-root hz-col6 hz-gap8 w100p">
										<UIInput className={'tf tf-md ta-right w100p'} value={'0'} placeholder={''} readOnly={false} />
										<UIInput className={'tf tf-md ta-right w100p'} value={'0'} placeholder={''} readOnly={false} />
										<UIInput className={'tf tf-md ta-right w100p'} value={'0'} placeholder={''} readOnly={false} />
										<UIInput className={'tf tf-md ta-right w100p'} value={'0'} placeholder={''} readOnly={false} />
										<UIInput className={'tf tf-md ta-right w100p'} value={'0'} placeholder={''} readOnly={false} />
										<UIInput className={'tf tf-md ta-right w100p'} value={'0'} placeholder={''} readOnly={false} />
										<UIInput className={'tf tf-md ta-right w100p'} value={'0'} placeholder={''} readOnly={false} />
									</div>
								</div>
							</div>								
						</div>
					</form>
					<div className="ibsheet">[D] IBSHEET 영역</div>
					<div className="hz-root hz-right hz-gap5 mt10">
						<Button color="gray-o" size="sm" >취소</Button>
						<Button color="pri-o" size="sm" >저장</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;