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
					<h1 className="tx tx-hd2">기부영수증 발급 상세</h1>
					<h3 className="section-title mb15">기업 정보</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">기업명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'기업명출력'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사업자번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'000-00-00000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">주소</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'대전유성구 엑스포로1'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">출연 정보</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">출연번호</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'00-000-00000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연사업</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'동반성장'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연신청일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연신청금액(원)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md ta-right w100p'} value={'600,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">기부영수증 발행내역</h3>
					<form className="fo fo-col2 mb" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">기부금영수증발행번호</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'동반-20240411-001'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">기부금발행금액</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md ta-right w100p'} value={'600,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">발급일</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">취소일</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">구분</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'금전'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">코드</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'40'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">재단발행부서</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'상생기금부'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">재단발행담당자</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} />
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
								<UIInput className={'tf tf-md w100p'} value={'000000000000000'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>

					<div className="hz-root hz-right hz-gap5">
						<Button color="pri-o" size="sm" >기부영수증출력</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>

				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;