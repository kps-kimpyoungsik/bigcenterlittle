
import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import ModalPopup from 'components/modal/';
import useToggleState from 'components/hooks/useToggleState';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	const modaladm2116 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={2}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">지급 등록</h1>
					<div className="hz-root hz-right hz-gap10 mb30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="gray-o" size="md">다음</Button>
					</div>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<h3 className="section-title">지원 기업 정보 입력</h3>
							<div className="hz-root hz-gap5">
								<Button color='pri-o' size="sm">행추가</Button> 
								<Button color='gray-o' size="sm">행삭제</Button> 
								<Button color='pri-o' size="sm">지원기업목록 양식받기</Button> 
								<Button color='gray-o' size="sm" onClick={modaladm2116.open}>지원기업목록 Upload</Button>
							</div>
						</div>
						<div className="tb-total mb15">
							<div className="tb-total-items">지원 금액 합계(원)</div>
							<div className="tb-total-items">
								<div className="fund-form-items tf-unit">
									<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}  readOnly={true}/>
									<span className="u">원</span>
								</div>
								<p className="tx-msg"><span className="fc-pri">(1억원 한글금액출력)</span></p> 
							</div>
						</div>
						<div className="tb-top">
							<div>
								<p className="tx fc-black">총 <em className="fw500">1103</em>건</p>
							</div>
							<div className="hz-root hz-gap8">
								<div className="sl sl-sm w120">
									<select>
										<option value="0">20개씩보기</option>
										<option value="0">50개씩보기</option>
										<option value="0">100개씩보기</option>
										<option value="0">200개씩보기</option>
										<option value="0">500개씩보기</option>
										<option value="0">1000개씩보기</option>
									</select>
								</div>
							</div>
						</div>
						<div className="ibsheet">
							<p style={{height:"200px", background:"#f4f4f4"}}>
								[D] IBSHEET 영역<br />
							</p>
							<div className="nd">
								<i className="ic"></i>
								<p className="tx tx-cp2 fc-666">조회된 내역이 없습니다.</p>
							</div>
						</div>
					</section>
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="pri" size="md">예금주조회</Button>
						<Button color="gray-o" size="md">취소</Button>
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2119">다음</Button>
					</div>
				</main>
			</div>
			{/* modal - 수행 과제 선택 */}
			<ModalPopup
				open={modaladm2116.isShowing}
				title="수행 과제 선택"
				size="mid"
				onClose={modaladm2116.close}
			>
				<div className="modal-con">
					<div className="modal-tskana">
						<form className="fo fo-col2 mb15" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-item fo-m-1-3">
									<p className="fo-key">신청기간</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIDatePicker className="hz-item"/>
											<span className="hz-item">~</span>
											<UIDatePicker className="hz-item"/>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={"과제번호를 입력하세요."} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={"과제명을 입력하세요."} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">신청자</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={"신청자명을 입력하세요."} />
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-center mb30">
							<Button color="pri" size="md">조회</Button>
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
								<button type="button" className="item">99</button>
								<button type="button" className="item">999</button>
								<button type="button" className="item">9999</button>
							</div>
							<div className="group">
								<button type="button" className="item next">다음</button>
								<button type="button" className="item last">끝</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal-bottom">
					<Button color="pri" size="md">확인</Button>
				</div>
			</ModalPopup>	
		</PageContainer>
	);
}
export default ContentsContainer;