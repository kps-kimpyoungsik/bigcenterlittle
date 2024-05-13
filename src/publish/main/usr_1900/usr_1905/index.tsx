import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user1900Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIInputFile from 'components/input/inputFile';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={0} lnbIdx={4}/>
				<main className="fww-main" data-layout="usr">
					<h1 className="tx tx-hd2">수요조사 지원</h1>
					<section className="fund-section">
						<div className="hz-root hz-gap10 hz-sb mb15">
							<h3 className="section-title">첨부파일</h3>
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
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'기업명을 입력하세요.'} />
									</div>
								</div>
								
								<div className="fo-item req">
									<p className="fo-key">담당자명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'담당자명을 입력하세요'} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">직함</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'직함을 입력하세요'} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">연락처</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'연락처를 입력하세요(- 생략)'} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">휴대폰번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'휴대폰번호를 입력하세요(- 생략)'} />
									</div>
								</div>
								<div className="fo-item  fo-m-1-3 req">
									<p className="fo-key">이메일주소</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w565">
											<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'메일계정 입력'} />	
											<span>@</span>
											<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'메일주소 입력'} />	
											<div className="hz-item hz-fg sl sl-md">
												<select>
													<option>직접입력</option>
												</select>
											</div>
										</div>
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
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'신청제목을 입력하세요.'} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">상생협력기금 사용여부</p>
									<div className="fo-value">
										<div className="hz-root hz-gap15">
											<label htmlFor="ch-1" className="hz-item ip-ch-label ip-ch-18">
												<input id="ch-1" className="ip-ch" type="checkbox" />
												<span className="check"></span> 
												<span className="txt">사용</span>
											</label>
											<label htmlFor="ch-2" className="hz-item ip-ch-label ip-ch-18">
												<input id="ch-2" className="ip-ch" type="checkbox" />
												<span className="check"></span> 
												<span className="txt">미사용</span>
											</label>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">금액입력(원)</p>
									<div className="fo-value">
										<div className="fund-form-items tf-unit">
											<UIInput className={'tf tf-md ta-right'} value={''} placeholder={'상생협력기금으로 사용할 금액을 입력하세요.'}  />
											<span className="u">원</span>
										</div>
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
											<div className="fund-form-items mr30">
												<div className="w100p">
													<UIInputFile placeholder={'파일을 첨부해 주세요.'}/>
												</div>
											</div>
											<Button color='gray-o' size="md">양식 다운로드</Button>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">추가서류1</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items mr30">
												<div className="w100p">
													<UIInputFile placeholder={'파일을 첨부해 주세요.'}/>
												</div>
											</div>
											<Button color='gray-o' size="md">양식 다운로드</Button>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">추가서류2</p>
									<div className="fo-value">
										<div className="fund-form-group">
											<div className="fund-form-items mr30">
												<div className="w100p">
													<UIInputFile placeholder={'파일을 첨부해 주세요.'}/>
												</div>
											</div>
											<Button color='gray-o' size="md">양식 다운로드</Button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<div className="fww-signature">
						<span>$제목$공고문을 확인하고, 위와 같이 신청서를 제출합니다.</span>
						<strong>대·중소기업·농어업협력재단 사무총장 귀하</strong>
					</div>
					<div className="hz-root hz-center hz-gap10">
						<Button color="gray-o" size="big">취소</Button>
						<Button color="pri" size="big">저장</Button>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;