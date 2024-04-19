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
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">시스템관리</a></li>
						<li className=""><a href="">권한관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">권한 관리</h1>
						
						<form className="sf sf-1row sf-3col mb30">
							<div className="inner">
								<div className="sf-item">
									<p className="sf-key">권한 코드</p>
									<div className="sf-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} />
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">권한 이름</p>
									<div className="sf-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} />
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">사용 여부</p>
									<div className="sf-value">
										<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">사용</option>
												<option value="2">미사용</option>
											</select>
										</div>
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
								<Button color="pri-o" size="sm">등록</Button>
								<Button color="gray-o" size="sm">다운로드</Button>
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

					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;