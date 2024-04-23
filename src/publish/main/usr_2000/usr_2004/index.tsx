
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2000Aside";
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">기금출연</Link></li>
					<li><Link to="#">출연신청</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">출연신청</h1>
					<div className="hz-root hz-right hz-gap10">
						<Button color="pri" size="md">기부금영수증</Button>
						<Button color="gray-o" size="md">삭제</Button>
						<Button color="gray-o" size="md">수정</Button>
						<Button color="gray-o" size="md">목록</Button>
					</div>
					<section className="fund-section">
						<h3 className="section-title mb15">출연 신청 정보</h3>
						<form className="fo fo-col2" name="" action="" method="">
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
									<p className="fo-key">기부내용</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'금전'} placeholder={''} readOnly={true} />
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
									<p className="fo-key">기부금 영수증번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'투자-000000-000'} placeholder={''} readOnly={true} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연금 입금계좌</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIInput className={'hz-item hz-fg tf tf-md'} value={'하나은행 0000-00-000000'} placeholder={''} readOnly={true} />
											<Button color='gray' size="md">가상계좌확인서 발급 안내</Button>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">3년 만기 도래일</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIInput className={'hz-item w120 tf tf-md'} value={'YYYY-MM-DD'} placeholder={''} readOnly={true} />
											<div className="tx-msg">(D-000일)</div>
										</div>
									</div>
								</div>
							</div>
						</form>
						<div className="tx-msg">※ 출연신청 후 별도 승인절차가 없습니다. 위 계좌로 출연예정일에 입금해주시면 됩니다.</div>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">출연금액</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">출연금</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'000,000,000원'} placeholder={''} readOnly={true} />
										<div className="tx-msg"><span className="fc-pri">(일억일백만원 한글금액출력)</span></div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연금액별 출연사업</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'동반성장 투자재원'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">첨부파일</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<div className="fo-key">
										출연신청서
										<div className="tooltip">
											<button type="button" className="button-icon">도움말</button>
											<div className="tooltip-msg">
												출연 신청 시 첨부 서류
												<ul>
													<li>서면 : 출연신청서(서면) 클릭하여 출연신청서 출력 후 직인을 찍고 스캔하여 수정버튼을 클릭하여 이동한 화면에서  출연신청(첨부문서)에 등록 후 저장하셔야 합니다.</li>
													<li>전자인증 : 기업용 공인인증서를 이용하여 출연신청서(전자인증)을 클릭하여 인증을 완료하시면 됩니다.<br />첨부 문서는 없습니다.</li>
												</ul>
											</div>
										</div>
										
									</div>
									<div className="fo-value">
										<div>
											제출이 완료되지 않았습니다. 전자인증을 하시거나 수정 버튼을 선택하고 수정화면에서 파일을 업로드 해주세요
											<Button color='gray' size="md">전자인증</Button>
											<Button color='gray-o' size="md">첨부파일수정</Button>
										</div>
										
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">출연번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'기업명 출력'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
						
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">기업정보</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">법인등록번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'0000-00-0000000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'기업명 출력'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					
					
					


				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;