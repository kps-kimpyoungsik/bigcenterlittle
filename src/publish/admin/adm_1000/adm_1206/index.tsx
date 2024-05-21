import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={0} lnbD1Idx={1}  lnbD2Idx={2}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">출연 상세 </h1>
					<h3 className="section-title mb15">사업 출연 정보</h3>
					
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">출연번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'000-0000-000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연상태</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'신청'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연사업</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'동반성장 투자재원'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연 신청일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연 일자</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연 예정일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">기부금영수증번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'투자'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">기부금영수증번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'투자-000000-000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">전자인증 여부</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'전자인증 / 서면'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">기부내용</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'금전'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">계좌번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'하나은행 0000-00-000000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">3년 만기도래일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD (D-000일)'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연신청금액(원)</p>
								<div className="fo-value">
									<div className="hz-root hz-right hz-gap8 w100p">
										<UIInput className={'hz-item tf tf-md'} value={'000,000,000'} placeholder={''} readOnly={true} />
										<span className="hz-item tx fc-pri">(일억일백만원)</span>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연금액(원)</p>
								<div className="fo-value">
									<div className="hz-root hz-right hz-gap8 w100p">
										<UIInput className={'hz-item tf tf-md'} value={'000,000,000'} placeholder={''} readOnly={true} />
										<span className="hz-item tx fc-pri">(일억일백만원)</span>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">지원금액(원)</p>
								<div className="fo-value">
									<div className="hz-root hz-right hz-gap8 w100p">
										<UIInput className={'hz-item tf tf-md'} value={'000,000,000'} placeholder={''} readOnly={true} />
										<span className="hz-item tx fc-pri">(일억일백만원)</span>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">전용금액(원)</p>
								<div className="fo-value">
									<div className="hz-root hz-right hz-gap8 w100p">
										<UIInput className={'hz-item tf tf-md'} value={'000,000,000'} placeholder={''} readOnly={true} />
										<span className="hz-item tx fc-pri">(일억일백만원)</span>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">지원잔액(원)</p>
								<div className="fo-value">
									<div className="hz-root hz-right hz-gap8 w100p">
										<UIInput className={'hz-item tf tf-md'} value={'000,000,000'} placeholder={''} readOnly={true} />
										<span className="hz-item tx fc-pri">(일억일백만원)</span>
									</div>
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">첨부파일</h3>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">출연신청서</p>
								<div className="fo-value">
									<p className="tx tx-cp1">출연신청서 제출이 완료되지 않았습니다.</p>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">출연신청서</p>
								<div className="fo-value">
									<div className="hz-root hz-sb hz-gap8 w100p">
										<p className="hz-item tx tx-cp1">출연신청서 전자인증을 완료하였습니다.</p>
										<Button color="gray-o" size="md" >다운로드</Button>
									</div>

								</div>
							</div>							
						</div>
					</form>
					<div className="mb30">[D]Fileupload UI</div>					

					<h3 className="section-title mb15">출연 기업 정보</h3>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">기업명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'기업명 출력'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">법인사업자번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'0000-00-0000000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사업자번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'0000-00-0000000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">출연신청자</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">직급</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'직급 출력'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">부서</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'부서 출력'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">이메일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'이메일 출력'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">전화번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'전화번호 출력'} placeholder={''} readOnly={true} />
								</div>
							</div>																																																																																																														
						</div>
					</form>					
					<div className="hz-root hz-right hz-gap5">
						<Button color="pri-o" size="sm" >기부영수증 출력</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>

				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;