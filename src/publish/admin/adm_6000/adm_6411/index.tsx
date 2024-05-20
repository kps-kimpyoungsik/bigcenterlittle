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
					<h1 className="tx tx-hd2">코드 상세</h1>
					<form className="fo fo-col3" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">코드그룹</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'ACGB'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">코드그룹 이름</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'계좌그룹'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사용여부</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p ta-center'} value={'사용'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-4">
								<p className="fo-key">코드그룹 설명</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'계좌종류'} placeholder={''} readOnly={true} />
								</div>
							</div>													
							<div className="fo-item fo-m-1-4">
								<p className="fo-key">코드값 목록</p>
								<div className="fo-value">
									<div className="ibsheet">[D] IBSHEET 영역</div>
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