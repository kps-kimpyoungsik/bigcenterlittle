import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	const modaladm6811p = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<Breadcrumb gnbIdx={5} lnbD1Idx={10} />
				<main className="fww-main">
					<h1 className="tx tx-hd2">이상거래감지</h1>
					<form className="sf sf-1row sf-3col">
						<div className="inner">
							<div className="sf-item">
								<p className="sf-key">집행기간</p>
								<div className="sf-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택/전체</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">지급신청번호</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} />
								</div>
							</div>
						</div>
						<button className="bt" data-color="pri" data-size="md"  type="button">조회</button>
					</form>
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap5">
							<Button color="pri-o" size="sm">이상거래감지 설정</Button>	
							<Button color="gray-o" size="sm">다운로드</Button>	
							<div className="sl sl-sm w120">
								<select name="" id="" className="">
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
					<div id='sheetDiv'>[D] IBSHEET 영역</div>
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
					{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}
					<br/><br/>
					<Button color='gray' size="sm" onClick={modaladm6811p.open}>6811p</Button> <br/><br/>
					{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}
				</main>
			</div>
			{/* modal - 6811p*/}
			<ModalPopup
				open={modaladm6811p.isShowing}
				title="이상거래감지 설정"
				size="mid"
				onClose={modaladm6811p.close}
			>
				<div className="modal-con">
					{/*클래스옵션: fo-col2, fo-col3 sf-1row*/}
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">지정시간외 통제</p>
								<div className="fo-value">
									<div className="hz-root hz-gap15">
										<label htmlFor="rd-1-1" className="ip-rd-label">
											<input name="rd-1" id="rd-1-1" className="ip-rd" type="radio"  checked  />
											<span className="check"></span>
											<span className="txt">사용</span>
										</label>
										<label htmlFor="rd-1-2" className="ip-rd-label">
											<input name="rd-1" id="rd-1-2" className="ip-rd" type="radio" />
											<span className="check"></span>
											<span className="txt">미사용</span>
										</label>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">집행통제시간</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8">
										<div className="sl sl-sm w75">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="1">$</option>
											</select>
										</div>
										<span className="hz-item">시</span>
										<div className="sl sl-sm w75">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="1">$</option>
											</select>
										</div>
										<span className="hz-item">분</span>
										<span className="hz-item"> ~ </span>
										<div className="sl sl-sm w75">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="1">$</option>
											</select>
										</div>
										<span className="hz-item">시</span>
										<div className="sl sl-sm w75">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="1">$</option>
											</select>
										</div>
										<span className="hz-item">분</span>
									</div>
								</div>
							</div>
						</div>
					</form>
					<p className="tx tx-alert">통제시간내에 집행이 발생한 경우 이체가 되지 않습니다.</p>
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">취소</Button>
						<Button color='pri' size="md">저장</Button>
					</div>
				</div>	
			</ModalPopup>
		</PageContainer>
	);
}
export default ContentsContainer;