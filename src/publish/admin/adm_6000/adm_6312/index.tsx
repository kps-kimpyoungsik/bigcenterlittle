import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import UIDatePicker from "components/datepicker";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	const modaladm6313 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">시스템관리</a></li>
						<li className=""><a href="">사업관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">사업 등록</h1>

						<form className="fo fo-col3" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">사업코드</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업명</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} readOnly={false} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업약칭</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} readOnly={false} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업시작일</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIDatePicker className="hz-item"/>
											<span className="hz-item">~</span>
											<UIDatePicker className="hz-item"/>
										</div>	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업종료일</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
												<UIDatePicker className="hz-item"/>
												<span className="hz-item">~</span>
												<UIDatePicker className="hz-item"/>
											</div>	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">지급품의연결여부</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="0">아니오</option>
												<option value="0">품의연결</option>
												<option value="0">선택사항</option>
											</select>
										</div>										
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업용도</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">선택</option>
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업용도(소분류)</p>
									<div className="fo-value">
									<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">선택</option>
											</select>
										</div>										
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">중견기업허용여부</p>
									<div className="fo-value">
									<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="1">예</option>
												<option value="2">아니오</option>
											</select>
										</div>										
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업종류</p>
									<div className="fo-value">
									<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">선택</option>
											</select>
										</div>										
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업유형</p>
									<div className="fo-value">
									<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">선택</option>
											</select>
										</div>										
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업그룹명</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} readOnly={false} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">발급내역</p>
									<div className="fo-value">
									<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">선택</option>
											</select>
										</div>										
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">주담당자</p>
									<div className="fo-value">
										<div className="hz-root hz-gap8">
										<UIInput className={'tf tf-md tf-readonly2 w100p'} value={'홍길동'} readOnly={true} />
										<Button color='gray-o' size="md" onClick={modaladm6313.open}>찾기</Button>
										<Button color="gray-o" size="md">리프레시</Button>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">부서장</p>
									<div className="fo-value">
										<div className="hz-root hz-gap8">
											<UIInput className={'tf tf-md tf-readonly2 w100p'} value={'홍길동'} readOnly={true} />
											<Button color='gray-o' size="md" onClick={modaladm6313.open}>찾기</Button>
											<Button color="gray-o" size="md">리프레시</Button>
											</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">과제운영</p>
									<div className="fo-value">
									<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="1">예</option>
												<option value="2">아니오</option>
											</select>
										</div>										
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">운영사업</p>
									<div className="fo-value">
									<div className="sl sl-md w100p" data-state="disabled">
											<select name="" id="" className="" disabled>
												<option value="0">선택</option>
												<option value="1">예</option>
												<option value="2">아니오</option>
											</select>
										</div>										
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">비고사항</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} readOnly={false} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">발행키</p>
									<div className="fo-value">
									<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">선택</option>
											</select>
										</div>										
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">등록자</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'관리자'} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">등록일시</p>
									<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} readOnly={true}/>
									</div>
								</div>

							</div> 
						</form>
						
						<div className="hz-root hz-right hz-gap5">
							<Button color='pri-o' size="sm" >저장</Button>
							<Button color='gray-o' size="sm" >목록</Button>
						</div>

						<div className="hz-root hz-gap10">
						</div>
						
					</main>

				</div>
				{/* modal - 사용자검색 */}
				<ModalPopup
					open={modaladm6313.isShowing}
					title="사용자검색"
					size="mid"
					onClose={modaladm6313.close}
				>
					<div className="modal-con">
						<form className="sf sf-1row sf-2col mb30">
							<div className="inner">
								<div className="sf-item">
									<p className="sf-key">사용자유형</p>
									<div className="sf-value">
										<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">내부사용자</option>
											</select>
										</div>
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">이름</p>
									<div className="sf-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'검색어 입력'} />
									</div>
								</div>
							</div>
							<button className="bt" data-color="pri" data-size="md" data-hz="" type="button">조회</button>
						</form>

						<div className="tb-top">
							<div>
								<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
							</div>
							<div className="hz-root hz-gap5">
								<div className="sl sl-sm w120">
									<select name="" id="" className="">
										<option value="20">20개씩보기</option>
										<option value="50">50개씩보기</option>
										<option value="100">100개씩보기</option>
										<option value="200">200개씩보기</option>
										<option value="500">500개씩보기</option>
										<option value="1000">1000개씩보기</option>
									</select>
								</div>
							</div>
						</div>

						<div className="ibsheet">[D] IBSHEET 영역</div>

					</div>
				</ModalPopup>								
		</PageContainer>
	);
}
export default ContentsContainer;