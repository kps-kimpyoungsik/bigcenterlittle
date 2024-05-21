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
					<h1 className="tx tx-hd2">기부영수증 상세</h1>
					<h3 className="section-title mb15">출연정보</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">출연번호</p>
								<div className="fo-value">
									0000-00000
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
									<UIInput className={'tf tf-md w100p'} value={'동반성장'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연신청일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YY-MM-DD(Day)'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연신청금액(원)</p>
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
								<p className="fo-key">누적 입금금액</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">입금일자</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md ta-right w100p'} value={'-'} placeholder={''} readOnly={true} />
								</div>
							</div>																																																

						</div>
					</form>
					<h3 className="section-title mb15">출연기업 가상계좌 입금내역</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">기부금발행금액</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md ta-right w100p'} value={'600,000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">발행방법</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'단건으로 발행'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">기부금영수증발행구분</p>
								<div className="fo-value">
									<p className="tx">발행은 사업구분-날짜구분-자동순번으로 채번됩니다.</p>
									<UIInput className={'tf tf-md w100p'} value={'동반-20240411-001'} placeholder={''} readOnly={true} />
									<UIInput className={'tf tf-md tf-str w100p'} value={'동반-20240411-001'} placeholder={''} readOnly={true} /> {/* tf-str 추가 */}
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
						</div>
					</form>						
					<div className="ibsheet">[D] IBSHEET 영역</div>
					<div className="hz-root hz-right hz-gap5">
						<Button color="pri-o" size="sm" >기부영수증등록</Button>
						<Button color="gray-o" size="sm" >기부영수증취소</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;