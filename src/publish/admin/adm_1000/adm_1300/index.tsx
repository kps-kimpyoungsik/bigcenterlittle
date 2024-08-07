import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import UIDatePicker from "components/datepicker";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={0} lnbD1Idx={2}  lnbD2Idx={1}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">과제신청안내관리</h1>

					<form className="sf sf-1row sf-3col mb30"> {/* [M.20240522] */} 
						<div className="inner">
							<div className="sf-item sf-m-1-2"> {/* [M.20240522] */} 
								<p className="sf-key">등록일자</p>
								<div className="sf-value">
									<div className="hz-root hz-left hz-gap8">
										<div className="hz-item hz-root hz-gap5"> 
											<div className="hz-item w130"><UIDatePicker /></div> {/* [M.20240522] */} 
											<span className="hz-item">~</span>
											<div className="hz-item w130"><UIDatePicker /></div> {/* [M.20240522] */} 
										</div>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">제목</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'제목을 입력하세요'} readOnly={false} />
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">사업구분</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>																			
						</div>
						<button className="bt" data-color="pri" data-size="md"  type="button">조회</button> {/* [M.20240522] */} 
					</form>

					{/* [M.20240522]삭제 */} 
					{/*
					<div className="hz-root hz-center mb30">
						<button className="bt" data-color="pri" data-size="md"  type="button">조회</button>
					</div>
					*/}

					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap5">
							<Button color="pri-o" size="sm">등록</Button>
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