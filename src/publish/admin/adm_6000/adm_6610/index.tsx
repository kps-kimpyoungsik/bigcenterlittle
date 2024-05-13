import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	const modaladm6611 = useToggleState({});
	const modaladm6612 = useToggleState({});
	const modaladm6613 = useToggleState({});
	const modaladm6614 = useToggleState({});
	const modaladm6615 = useToggleState({});
	const modaladm6616 = useToggleState({});
		
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">시스템관리</a></li>
						<li className=""><a href="">통계목관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">통계목 관리</h1>

						<form className="sf sf-3col">
							<div className="inner">
								<div className="sf-item">
									<p className="sf-key">년도</p>
									<div className="sf-value">
										<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">$</option>
											</select>
										</div>
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">사업</p>
									<div className="sf-value">
									<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">$</option>
											</select>
										</div>
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">계정유형</p>
									<div className="sf-value">
									<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">$</option>
											</select>
										</div>
									</div>
								</div>
								<div className="sf-item sf-m-1-4">
									<p className="sf-key">명칭</p>
									<div className="sf-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={false} />
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-center mb25">
							<button className="bt" data-color="pri" data-size="md" data-hz="" type="button">조회</button>
						</div>

						<div className="tb-top">
							<div>
								<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
							</div>
							<div className="hz-root hz-gap5">
								<Button color="gray-o" size="sm">삭제</Button>
								<Button color="pri-o" size="sm">저장</Button>
								<Button color="pri-o" size="sm">코드등록</Button>
								<Button color="pri-o" size="sm">코드조회</Button>
								<Button color="pri-o" size="sm">사업연결하기</Button>
								<Button color="gray-o" size="sm">양식다운로드</Button>
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

						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}
						<br/><br/>
						<Button color='gray' size="sm" onClick={modaladm6611.open}>adm_6611p 열기</Button> <br /><br />
						<Button color='gray' size="sm" onClick={modaladm6612.open}>adm_6612p 열기</Button> <br /><br />
						<Button color='gray' size="sm" onClick={modaladm6613.open}>adm_6613p 열기</Button> <br /><br />
						<Button color='gray' size="sm" onClick={modaladm6614.open}>adm_6614p 열기</Button> <br /><br />
						<Button color='gray' size="sm" onClick={modaladm6615.open}>adm_6615p 열기(리프레시버튼)</Button> <br /><br />
						<Button color='gray' size="sm" onClick={modaladm6616.open}>adm_6616p 열기</Button> <br /><br />
						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}

					</main>
				</div>

				{/* modal - 6611 */}	
				<ModalPopup
				open={modaladm6611.isShowing}
				title="코드 상세"
				size="sm"
				onClose={modaladm6611.close}
			>
				<div className="modal-con">
					
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">년도</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'2024'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">계정구분</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'통계목'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">코드</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'350-04-11'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">명칭</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'민간자율기획(동반성장몰)'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">출연기업</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'삼성전자'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">비고</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'비고'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>

				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='pri' size="md">수정</Button>
					</div>
				</div>	
			</ModalPopup>

				{/* modal - 6612 */}	
				<ModalPopup
				open={modaladm6612.isShowing}
				title="코드 수정"
				size="sm"
				onClose={modaladm6612.close}
			>
				<div className="modal-con">
				<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">년도</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'2024'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">계정구분</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'통계목'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">코드</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'350-04-11'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">명칭</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'민간자율기획(동반성장몰)'} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">출연기업</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'삼성전자'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">비고</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'비고'} placeholder={''} readOnly={false} />
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">취소</Button>
						<Button color='pri' size="md">저장</Button>
					</div>
				</div>	
			</ModalPopup>

				{/* modal - 6613 */}	
				<ModalPopup
				open={modaladm6613.isShowing}
				title="코드 등록"
				size="sm"
				onClose={modaladm6613.close}
			>
				<div className="modal-con">
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">년도</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">2024</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">계정구분</p>
								<div className="fo-value">
								<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">세부사업</option>
											<option value="1">편성목</option>
											<option value="2">통계목</option>
										</select>
									</div>									
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">코드</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'350-04-11'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">명칭</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'민간자율기획(동반성장몰)'} placeholder={''} readOnly={false} />
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">취소</Button>
						<Button color='pri' size="md">저장</Button>
					</div>
				</div>	
			</ModalPopup>

				{/* modal - 6614 */}	
				<ModalPopup
				open={modaladm6614.isShowing}
				title="통계목 코드조회"
				size="mid"
				onClose={modaladm6614.close}
			>
				<div className="modal-con">
					
					{/*클래스옵션: sf-1row, sf-2col*/}
					<form className="sf sf-3col">
						<div className="inner">
							<div className="sf-item">
								<p className="sf-key">년도</p>
								<div className="sf-value">
									
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">전체</option>
											<option value="1">$</option>
										</select>
									</div>

								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">코드구분</p>
								<div className="sf-value">
								<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">세부사업</option>
											<option value="1">편성목</option>
											<option value="2">통계목</option>
										</select>
									</div>									
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">코드번호</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="sf-item sf-m-1-4">
								<p className="sf-key">코드명</p>
								<div className="sf-value">
								<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={false} />
								</div>
							</div>																					
						</div>
					</form>
					<div className="hz-root hz-center mb25">
						<button className="bt" data-color="pri" data-size="md" data-hz="" type="button">조회</button>
					</div>

					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
					</div>

					<div className="ibsheet">[D] IBSHEET 영역</div>

				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">닫기</Button>
					</div>
				</div>	
			</ModalPopup>

				{/* modal - 6615 */}	
				<ModalPopup
				open={modaladm6615.isShowing}
				title="사업연결하기"
				size="sm"
				onClose={modaladm6615.close}
			>
				<div className="modal-con">
				<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">세부사업</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'24상생협력기금'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">편성목</p>
								<div className="fo-value">
								<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>									
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">통계목</p>
								<div className="fo-value">
								<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>									
								</div>
							</div>							
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">출연기업</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8">
										<UIInput className={'tf tf-md tf-readonly2 w100p'} value={''} readOnly={false} />
										<Button color='gray-o' size="md">찾기</Button>
										<button type="button" className="bt-refresh">리프레시</button>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">비고사항</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'비고사항입니다'} placeholder={''} readOnly={false} />
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">취소</Button>
						<Button color='pri' size="md">저장</Button>
					</div>
				</div>	
			</ModalPopup>

				{/* modal - 6616 */}	
				<ModalPopup
				open={modaladm6616.isShowing}
				title="기업 검색"
				size="lg"
				onClose={modaladm6616.close}
			>
				<div className="modal-con">
					
					<form className="sf sf-1row sf-2col mb30">
						<div className="inner">
							<div className="sf-item">
								<p className="sf-key">사업자등록번호</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} />
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">기업명</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} />
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