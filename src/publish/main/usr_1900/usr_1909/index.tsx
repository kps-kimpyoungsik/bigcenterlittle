import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user1900Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={0} lnbIdx={4}/>
				<main className="fww-main" data-layout="usr">
					<h1 className="tx tx-hd2">수요조사 지원 내용</h1>
					<section className="fund-section">
						<div className="hz-root hz-gap10 hz-sb mb15">
							<h3 className="section-title">기본 정보</h3>
							<p className="tx-msg"><span className="fc-pri">*</span>&nbsp;필수 입력</p>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item req">
									<p className="fo-key">수요조사지원일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">신청기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'기업명출력'} placeholder={'기업명을 입력하세요.'} readOnly={true}/>
									</div>
								</div>
								
								<div className="fo-item req">
									<p className="fo-key">담당자명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={'담당자명을 입력하세요'} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">직함</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'대리'} placeholder={'직함을 입력하세요'} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">연락처</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'022222222'} placeholder={'연락처를 입력하세요(- 생략)'} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">휴대폰번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'010-0000-0000'} placeholder={'휴대폰번호를 입력하세요(- 생략)'}  readOnly={true}/>
									</div>
								</div>
								<div className="fo-item  fo-m-1-3 req">
									<p className="fo-key">이메일주소</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'mailname@mail.com'} placeholder={''}  readOnly={true}/>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">신청 정보</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="innter">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">신청제목</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'신청제목이 출력됩니다.'} placeholder={'신청제목을 입력하세요.'} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">상생협력기금 사용여부</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'미사용'} placeholder={''} readOnly={true} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">붙임파일</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="innter">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">필수서류</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items">
												<div className="hz-root hz-gap5 w100p mr30">
													<UIInput className={'tf tf-md hz-item grow'} value={'필수서류.xlsx'} placeholder={''} readOnly={true} />
													<div className="hz-root hz-gap5 w120 ">
														{/* 
														<Button color='pri-o2' size="md">찾기</Button>
														<Button color='gray-o' size="md">삭제</Button>
														 */}
													</div>
												</div>
											</div>
											<Button color='gray-o' size="md">미리보기</Button>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">추가서류1</p>
									<div className="fo-value">
										첨부된 서류가 없습니다.
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">추가서류2</p>
									<div className="fo-value">
										첨부된 서류가 없습니다.
									</div>
								</div>
							</div>
						</form>
					</section>
					<div className="fww-signature">
						<span>$제목$공고문을 확인하고, 위와 같이 신청서를 제출하였습니다.</span>
						<strong>대·중소기업·농어업협력재단 사무총장 귀하</strong>
					</div>
					<div className="hz-root hz-center hz-gap10">
						<Button color="pri" size="big" href="/main/usr_1900/usr_1910">수정</Button>
						<Button color="gray-o" size="big" href="/main/usr_1900/usr_1904">목록</Button>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;