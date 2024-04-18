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



						
						
					</main>

				</div>
				{/* modal - 사용자검색 */}
				<ModalPopup
					open={modaladm6313.isShowing}
					title="$"
					size="mid"
					onClose={modaladm6313.close}
				>
					<div className="modal-con">
						...
					</div>
					<div className="modal-bottom">
						<Button color='pri' size="big">$</Button>
					</div>	
				</ModalPopup>								
		</PageContainer>
	);
}
export default ContentsContainer;