import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<Breadcrumb gnbIdx={5} lnbD1Idx={1} />
				<main className="fww-main">
					<h1 className="tx tx-hd2">SMS 발송관리</h1>
					<form className="sf" name="" action="" method="">
						<div className="inner">
							<div className="sf-item">
								<p className="sf-key">SMS 발송기간</p>
								<div className="sf-value">
									<div className="hz-item hz-root hz-gap5">
										<UIDatePicker className="hz-item"/>
										<span className="hz-item">~</span>
										<UIDatePicker className="hz-item"/>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">SMS 수신자</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">전체</option>
											<option value="1">외부사용자</option>
											<option value="2">재난담당자</option>
											<option value="3">부서장</option>
											<option value="4">본부장</option>
											<option value="5">시스템</option>
										</select>
									</div>
								</div>						
							</div>
							<div className="sf-item">
								<p className="sf-key">발송 상태</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">전체</option>
											<option value="1">예</option>
											<option value="2">아니오</option>
										</select>
									</div>
								</div>						
							</div>
							<div className="sf-item">
								<p className="sf-key">SMS 제목</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">전체</option>
											<option value="1">예</option>
											<option value="2">아니오</option>
										</select>
									</div>
								</div>						
							</div>
							<div className="sf-item sf-m-2-4">
								<p className="sf-key">SMS 내용</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'검색어 입력'} />
								</div>						
							</div>
						</div> 
					</form>			
					<div className="hz-root hz-center mb25">
						<Button color="pri" size="md">조회</Button>
					</div>									
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root hz-gap8">
							<Button color="pri-o" size="sm">SMS 발송</Button>
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
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;