
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIInputPW from 'components/input/inputPW';
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
function ContentsContainer() {
	const modaladm1202 = useToggleState({});
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
							<li>STEP 1. 약관동의 및 인증</li>
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
									<div className="fo-value flex-wrap">
										<div className="hz-root hz-gap8 w565">
											<UIInput className={'hz-item hz-fg tf tf-md'} value={'(주)신세계동대구복합환승센터'} placeholder={'기업명을 찾기 후 선택하세요'} />
											<Button color='pri-o' size="md"  onClick={modaladm1202.open}>찾기</Button>
											<Button color='gray-o' size="md">삭제</Button>
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
					<div className="ibsheet">[D] IBSHEET 영역</div>
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
		</PageContainer>
	);
}
export default ContentsContainer;