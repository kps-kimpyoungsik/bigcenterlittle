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
				<Breadcrumb gnbIdx={5} lnbD1Idx={5} />
				<main className="fww-main">
					<h1 className="tx tx-hd2">권한 등록</h1>
					<form className="fo fo-col3" name="" action="" method="">
						<div className="inner">
							<div className="fo-item req">
								<p className="fo-key">권한 코드</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">권한 이름</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">사용여부</p>
								<div className="fo-value">
									<div className="hz-root hz-gap15 h36">
										<label htmlFor="rd-use-1" className="ip-rd-label">
											<input name="rd-use" id="rd-use-1" className="ip-rd" type="radio"  />
											<span className="check"></span>
											<span className="txt">사용</span>
										</label>
										<label htmlFor="rd-use-2" className="ip-rd-label">
											<input name="rd-use" id="rd-use-2" className="ip-rd" type="radio" defaultChecked />
											<span className="check"></span>
											<span className="txt">미사용</span>
										</label>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-4">
								<p className="fo-key">권한 설명</p>
								<div className="fo-value">
									<div className="ta h200">
										<textarea className="ta-ip" placeholder=""></textarea>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-4 req">
								<p className="fo-key">사용자별 권한관리 여부</p>
								<div className="fo-value">
									<div className="hz-root hz-gap15 h36">
										<label htmlFor="rd-adm-1" className="ip-rd-label">
											<input name="rd-adm" id="rd-adm-1" className="ip-rd" type="radio" defaultChecked  />
											<span className="check"></span>
											<span className="txt">예</span>
										</label>
										<label htmlFor="rd-adm-2" className="ip-rd-label">
											<input name="rd-adm" id="rd-adm-2" className="ip-rd" type="radio" />
											<span className="check"></span>
											<span className="txt">아니오</span>
										</label>
									</div>
								</div>
							</div>
						</div>
					</form>
					<div className="hz-root hz-right hz-gap5">
						<Button color="gray-o" size="sm" >삭제</Button>
						<Button color="pri-o" size="sm" >수정</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;