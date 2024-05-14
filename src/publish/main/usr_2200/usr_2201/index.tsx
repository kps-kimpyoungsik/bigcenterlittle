import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2200Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={3} lnbIdx={1}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">입출금내역조회</h1>
					<form className="sf sf-2col sf-fund" name="" action="" method="">
						<div className="inner">
							<div className="sf-item sf-m-1-3">
								<p className="sf-key">거래일</p>
								<div className="sf-value">
									<div className="fund-datepicker">
										<div className="hz-root hz-gap5">
											<UIDatePicker className="hz-item w180"/>
											<span className="hz-item">~</span>
											<UIDatePicker className="hz-item w180"/>
										</div>
										<div className="hz-root hz-gap5">
											<Button color="pri-o2" size="md">이전 3개월</Button>
											<Button color="pri" size="md">이전 6개월</Button>
											<Button color="pri-o2" size="md">이전 12개월</Button>
											<Button color="pri-o2" size="md">이전 24개월</Button>
										</div>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">계좌구분</p>
								<div className="sf-value">
									<div className="hz-root hz-gap5">
										<div className="sl sl-md w180">
											<select>
												<option value="">전체</option>
												<option value="">출연계좌</option>
												<option value="">환수계좌</option>
											</select>
										</div>
										<UIInput className={'tf tf-md hz-item hz-fg'} value={''} placeholder={''} disabled={true} />
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">거래구분</p>
								<div className="sf-value">
									<div className="hz-root hz-gap15">
										<label htmlFor="rd-1-1" className="ip-rd-label">
											<input name="rd-1" id="rd-1-1" className="ip-rd" type="radio" defaultChecked/>
											<span className="check"></span>
											<span className="txt">전체</span>
										</label>
										<label htmlFor="rd-1-2" className="ip-rd-label">
											<input name="rd-1" id="rd-1-2" className="ip-rd" type="radio" />
											<span className="check"></span>
											<span className="txt">입금</span>
										</label>
										<label htmlFor="rd-1-3" className="ip-rd-label">
											<input name="rd-1" id="rd-1-3" className="ip-rd" type="radio" />
											<span className="check"></span>
											<span className="txt">출금</span>
										</label>
									</div>
								</div>
							</div>
						</div>
					</form>
					<div className="hz-root hz-center mb25">
						<Button color="pri" size="md">조회</Button>
					</div>
					{/* NO-data */}
					<div className="nd">
						<i className="ic"></i>
						<p className="tx tx-cp2 fc-666 ta-center">조회된 내역이 없습니다.<br />다른 선택을 이용해 주세요.</p>
					</div>
					<div className="tb-top">
						<div className="hz-root hz-center">
							<p className="tx fc-black">총 <em className="fw500">1103</em>건</p>
							<div className="price-summary">
								<div className="items">
									<label className="fc-err">입금액</label><strong className="price">3,000,000,000,000</strong>원
								</div>
								<span className="sign">-</span>
								<div className="items">
									<label className="fc-pri">출금액</label><strong className="price">2,000,000,000,000</strong>원
								</div>
								<span className="sign">+</span>
								<div className="items">
									<label className="fc-err">환수액</label><strong className="price">2,000,000</strong>원
								</div>
								<span className="sign">=</span>
								<div className="items">
									<label className="total">총 잔액</label><strong className="price">1,000,000,000,000</strong>원
								</div>
							</div>
						</div>
						<div className="hz-root hz-gap8">
							<Button color="gray-o" size="sm">다운로드</Button>
							<div className="sl sl-sm w120">
								<select>
									<option value="0">20개씩보기</option>
									<option value="0">50개씩보기</option>
									<option value="0">100개씩보기</option>
									<option value="0">200개씩보기</option>
									<option value="0">500개씩보기</option>
									<option value="0">1000개씩보기</option>
								</select>
							</div>									
						</div>
					</div>
					<div className="ibsheet">
						<p style={{height:"300px", background:"#f4f4f4"}}>
							[D] IBSHEET 영역<br /><br />
						</p>
					</div>
					<div className="pg">
						<div className="group">
							<button type="button" className="item first">처음</button>
							<button type="button" className="item prev">이전</button>
						</div>
						<div className="group">
							<button type="button" className="item">1</button>
							<button type="button" className="item active">2</button>
							<button type="button" className="item">3</button>
							<button type="button" className="item">4</button>
							<button type="button" className="item">5</button>
							<button type="button" className="item">99</button>
							<button type="button" className="item">999</button>
							<button type="button" className="item">9999</button>
						</div>
						<div className="group">
							<button type="button" className="item next">다음</button>
							<button type="button" className="item last">끝</button>
						</div>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;