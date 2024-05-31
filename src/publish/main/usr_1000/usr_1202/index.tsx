
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIInputPW from 'components/input/inputPW';
import useToggleState from 'components/hooks/useToggleState';
import UIDatePicker from "components/datepicker";
import ModalPopup from 'components/modal/';
import Raonkupload from 'components/input/kupload';
function ContentsContainer() {
	const modaladm1202 = useToggleState({});
	const modaladm1205 = useToggleState({});
	const sectors = [
		'농업, 임업 및 어업', '광업', '제조업', '전기·가스 증기 및 수도사업', '하수 · 폐기물 처리, 원료재생 및 환경복원업', '건설업', '도매 및 소매업', '운수업', 
		'숙박 및 음식점업', '출판, 영상, 방송통신 및 정보서비스업',  '금융 및 보험업','부동산업 및 임대업',	'전문, 과학 및 기술 서비스업',	'공공행정, 국방 및 사회보장 행정',
		'교육 서비스업', '보건업 및 사회복지 서비스업', '예술, 스포츠 및 여가관련 서비스업','협회 및 단체, 수리 및 기타 개인 서비스업',	
		'가구내 고용활동 및 달리 분류되지 않은 자가소비 생산활동','국제 및 외국기관','기타'
	];
	return (
		<PageContainer>
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">회원가입</Link></li>
				</ul>
				<main className="fww-main" data-layout="usr">
					<div className="member-join">
						<h1 className="tx tx-hd2">회원가입</h1>
						<ul className="join-step">
							<li className="pass">STEP 1. 약관동의 및 인증</li>
							<li className="active">STEP 2. 회원정보 입력</li>
							<li>STEP 3. 가입완료</li>
						</ul>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">이름</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w375'} value={'홍길동'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">직위</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w375'} value={''} placeholder={'직위를 입력하세요'} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">부서</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w375'} value={''} placeholder={'부서를 입력하세요.'} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">아이디</p>
									<div className="fo-value">
										<div className="hz-root hz-gap8">
											<div className="hz-root hz-gap8 w375">
												<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'아이디를 입력 후 중복확인을 눌러주세요'} />
												<Button color='gray-o' size="md">중복확인</Button>
											</div>
											<span className="tx-msg">ID는 영문자로 시작하는 4~15자 영문자 또는 숫자이어야 합니다.</span>
										</div>
										
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">비밀번호</p>
									<div className="fo-value">
										<div className="hz-root hz-gap8">
											<UIInputPW className={'tf tf-md w375'} value={''} placeholder={'비밀번호를 입력하세요'} />
											<span className="tx-msg">4~12자의 영문, 숫자 조합으로 입력해 주세요.</span>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">비밀번호 확인</p>
									<div className="fo-value">
										<div className="hz-root hz-gap8">
											<UIInputPW className={'tf tf-md w375'} value={''} placeholder={'비밀번호를 다시 한번 더 입력하세요'} />
											<span className="tx-msg">4~12자의 영문, 숫자 조합으로 입력해 주세요.</span>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">사무실 전화</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w375">
											<div className="sl sl-md">
												<select>
													<option>02</option>
												</select>
											</div>
											<span>-</span>
											<UIInput className={'hz-item hz-fg tf tf-md'} value={'000'} placeholder={''} />
											<span>-</span>
											<UIInput className={'hz-item hz-fg tf tf-md'} value={'0000'} placeholder={''} />
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">핸드폰번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w375'} value={'010-0000-0000'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">이메일</p>
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
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">기업명</p>
									<div className="fo-value d-block">
										<div className="hz-root hz-gap8">
											<UIInput className={'tf tf-md w400'} value={'(주)신세계동대구복합환승센터'} placeholder={'기업명을 찾기 후 선택하세요'} readOnly={true}/>
											<Button color='pri-o2' size="md" onClick={modaladm1202.open}>찾기</Button>
											<Button color='gray-o' size="md">삭제</Button>
											<Button color='gray' size="md" onClick={modaladm1205.open}>기업등록</Button>
										</div>
										<p className="tx-msg mt8"><span className="fc-pri">*소속 기업 정보가 없을 경우, 재단 담당자에게 기업 등록 요청 후 회원가입을 진행 바랍니다.</span></p>
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-center hz-gap10">
							<Button color='gray-o' size="big">취소</Button>
							<Button color='pri' size="big" href="/main/usr_1000/usr_1204">저장</Button>
						</div>
					</div>
				</main>
			</div>
			{/* modal - 기업검색 */}
			<ModalPopup
				open={modaladm1202.isShowing}
				title="기업검색"
				size="mid"
				onClose={modaladm1202.close}
			>
				<div className="modal-con">
					<div className="tb-search-form bd mb30">
						<div className="hz-root hz-center hz-gap8">
							<div className="hz-item sl sl-md">
								<select>
									<option>기업명</option>
									<option>법인사업자번호</option>
								</select>
							</div>
							<UIInput className={'hz-item tf tf-md'} value={''} placeholder={"입력하세요."} />
							<Button color="pri" size="md">조회</Button>
						</div>
					</div>
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap8">
							<div className="sl sl-sm w120">
								<select name="" id="" className="">
									<option>50개씩보기</option>
								</select>
							</div>									
						</div>
					</div>
					<div className="ibsheet">
						<p style={{height:"300px"}}>[D] IBSHEET 영역</p>
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
						</div>
						<div className="group">
							<button type="button" className="item next">다음</button>
							<button type="button" className="item last">끝</button>
						</div>
					</div>
				</div>
			</ModalPopup>
			<ModalPopup
				open={modaladm1205.isShowing}
				title="기업등록"
				size="xlg"
				onClose={modaladm1205.close}
			>
				<div className="modal-con">
					<div className="tx tx-cp2 ta-right mb8"><span className="fc-pri">*</span>&nbsp;필수 입력</div>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item req">
								<p className="fo-key">기업명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'기업명을 입력하세요.'}/>
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">대표자명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'대표자명을 입력하세요.'} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">업종</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select>
											<option>선택</option>
											{sectors.map((sec, idx) =>
												<option key={idx}>{sec}</option>
											)}
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">설립일자</p>
								<div className="fo-value">
									<div className="w100p">
										<UIDatePicker />
									</div>
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">설립형태</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select>
											<option>선택</option>
											<option>영리</option>
											<option>비영리</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">기업규모</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select>
											<option>선택</option>
											<option>대기업</option>
											<option>공공기관</option>
											<option>중견기업</option>
											<option>중소기업</option>
											<option>기타</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">법인등록번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'법인등록번호를 입력하세요(‘-’생략)'} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사업자등록번호</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'사업자등록번호를 입력하세요(‘-’생략)'} />
										<Button color="gray-o" size="md">중복확인</Button>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">주소</p>
								<div className="fo-value">
									<div className="address w100p">
										<div className="hz-root hz-gap8 w280">
											<UIInput className={'hz-item hz-fg tf tf-md'} value={'00000'} placeholder={''} disabled={true} />
											<Button color='gray-o' size="md">주소찾기</Button>
										</div>
										<UIInput className={'tf tf-md w100p mt8'} value={''} placeholder={''} disabled={true} />
										<UIInput className={'tf tf-md w100p mt8'} value={''} placeholder={'상세주소 입력'}/>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">홈페이지</p>
								<div className="fo-value">
									<div className="w100p">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'홈페이지 주소를 입력하세요'} />
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">사업자등록증</p>
								<div className="fo-value">
									<div className="w100p">
										{/* FileUpload... */}
										<Raonkupload /> {/* 기능X css 디자인 ☆Fileupload 영역입니다☆ */}
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">기업로고</p>
								<div className="fo-value">
									fileupload...
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="modal-bottom">
					<Button color="gray-o" size="md">취소</Button>
					<Button color="pri" size="md">저장</Button>
				</div>
			</ModalPopup>			
		</PageContainer>
	);
}
export default ContentsContainer;