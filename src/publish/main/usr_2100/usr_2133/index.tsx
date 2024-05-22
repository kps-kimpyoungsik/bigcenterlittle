
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import UIInput from 'components/input/input';
import Button from 'components/buttons/';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={4}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">환수신청</h1>
					<form className="sf sf-fund" name="" action="" method="">
						<div className="inner">
							<div className="sf-item sf-m-1-3">
								<p className="sf-key">신청기간</p>
								<div className="sf-value">
									<div className="fund-datepicker">
										<div className="hz-root hz-gap5">
											<UIDatePicker className="hz-item"/>
											<span className="hz-item">~</span>
											<UIDatePicker className="hz-item"/>
										</div>
										<div className="hz-root hz-gap5">
											<Button color="pri-o2" size="md">이전 3개월</Button>
											<Button color="pri" size="md">이전 6개월</Button>
											<Button color="pri-o2" size="md">이전 12개월</Button>
											<Button color="pri-o2" size="md">이전 24개월</Button>
										</div>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">진행상태</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select>
											<option>전체</option>
											<option>신청</option>
											<option>접수중</option>
											<option>수정요청</option>
											<option>최종접수</option>
											<option>환수완료</option>
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">환수완료여부</p>
								<div className="sf-value">
									<div className="sl sl-md">
										<select>
											<option value="">전체</option>
											<option value="">완료</option>
											<option value="">미완료</option>
										</select>
									</div>
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">과제명</p>
								<div className="sf-value">
									<UIInput type={'number'} className={'tf tf-md w100p'} value={''} placeholder={'과제명을 입력하세요.'} />
								</div>
							</div>
							<div className="sf-item">
								<p className="sf-key">담당자명</p>
								<div className="sf-value">
									<UIInput type={'number'} className={'tf tf-md w100p'} value={''} placeholder={'담당자명을 입력하세요.'} />	
								</div>
							</div>
						</div>
					</form>
					<div className="hz-root hz-center mb25">
						<Button color="pri" size="md">조회</Button>
					</div>
					{/* NO-data */}
					<div className="nd">
						<i className="ic"></i>
						<p className="tx tx-cp2 fc-666">조회된 내역이 없습니다.</p>
					</div>
					<div className="tb-top">
						<div>
							<p className="tx fc-black">총 <em className="fw500">1103</em>건</p>
						</div>
						<div className="hz-root hz-gap5">
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
							[D] IBSHEET 영역<br /><br />
							<Link to="/main/usr_2100/usr_2137" style={{color:"#333", padding:"5px", textDecoration:"underline"}}>[임시] 상세페이지 이동</Link>
						</p>
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
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="pri" size="md" href="/main/usr_2100/usr_2136">환수신청</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;