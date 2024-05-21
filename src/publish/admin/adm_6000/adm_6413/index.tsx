import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<Breadcrumb gnbIdx={5} lnbD1Idx={3} />
				<main className="fww-main">
					<h1 className="tx tx-hd2">코드 등록</h1>
					<form className="fo fo-col3" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">코드그룹</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'ACGB'} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">코드그룹 이름</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'계좌그룹'} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사용여부</p>
								<div className="fo-value">
									<div className="hz-root hz-gap15 h100p">
										<label htmlFor="rd-1-1" className="ip-rd-label">
											<input name="rd-1" id="rd-1-1" className="ip-rd" type="radio"  defaultChecked />
											<span className="check"></span>
											<span className="txt">사용</span>
										</label>
										<label htmlFor="rd-1-2" className="ip-rd-label">
											<input name="rd-1" id="rd-1-2" className="ip-rd" type="radio"  />
											<span className="check"></span>
											<span className="txt">미사용</span>
										</label>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-4">
								<p className="fo-key">코드그룹 설명</p>
								<div className="fo-value d-block"> {/* [M] */} 
									<div className="ta w100p"> {/* [M] */}
										<textarea className="ta-ip" placeholder=""></textarea> 
									</div>
									<p className="tx tx-cp1 mt5">
										<em className="fc-err">12</em> Bytes / 
										<em className="fc-err">2,000</em> Bytes
									</p>
								</div>
							</div>													
							<div className="fo-item fo-m-1-4">
								<p className="fo-key">코드값 목록</p>
								<div className="fo-value d-block"> {/* [M] */} 
									<div className="tb-top">
										<div>
											<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
										</div>
										<div className="hz-root hz-gap5">
											<Button color="gray-o" size="sm">- 삭제</Button>
											<Button color="gray-o" size="sm">+ 추가</Button>
										</div>
									</div>
									<div className="ibsheet">[D] IBSHEET 영역</div>
								</div>
							</div>											

						</div>
					</form>
					<div className="hz-root hz-right hz-gap5">
						<Button color="pri-o" size="sm" >저장</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>
				</main>

			</div>
		</PageContainer>
	);
}
export default ContentsContainer;