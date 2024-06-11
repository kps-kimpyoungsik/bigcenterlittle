
import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={2} lnbIdx={2}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">지급정산신청</h1>
					
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<h3 className="section-title">지원 기업 정보 입력</h3>
							<div className="hz-root hz-gap5">
								<Button color='pri-o' size="sm">행추가</Button> 
								<Button color='gray-o' size="sm">행삭제</Button> 
								<Button color='pri-o' size="sm">지원기업목록 양식받기</Button> 
								<Button color='gray-o' size="sm">지원기업목록 Upload</Button>
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
						</div>
					</section>

					<section className="fund-section">
						<div className="hz-root hz-sb mb15 hz-right">
							
							<div className="hz-root hz-gap5">
								<Button color='pri-o' size="sm">행추가</Button> 
								<Button color='gray-o' size="sm">행삭제</Button> 
								<Button color='pri-o' size="sm">수행기업목록 양식받기</Button> 
								<Button color='gray-o' size="sm">수행기업목록 Upload</Button>
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
						</div>
					</section>

					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="pri" size="md">예금주조회</Button>
						<Button color="gray-o" size="md">취소</Button>
						<Button color="gray-o" size="md" href="/main/usr_2100/usr_2119">다음</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;