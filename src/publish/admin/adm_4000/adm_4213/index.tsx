import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_4000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<Breadcrumb gnbIdx={3} lnbD1Idx={1} />
				<main className="fww-main">
					<h1 className="tx tx-hd2">기업수정</h1>
					<h2 className="tx tx-hd3">기본정보</h2>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item req"> 
								<p className="fo-key">기업규모</p>
								<div className="fo-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">대기업</option>
											<option value="2">공공기관</option>
											<option value="3">중견기업</option>
											<option value="4">중소기업</option>
											<option value="5">기타</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">업종</p>
								<div className="fo-value">
									<div className="sl sl-md">											
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">농업</option>
											<option value="2">임업 및 어업</option>
											<option value="3">광업</option>
											<option value="4">제조업</option>
											<option value="5">전기, 가스, 증기 및 수도사업</option>
											<option value="6">하수 · 폐기물 처리, 원료재생 및 환경복원업</option>
											<option value="7">건설업</option>
											<option value="8">도매 및 소매업</option>
											<option value="9">운수업</option>
											<option value="10">숙박 및 음식점업</option>
											<option value="11">출판, 영상, 방송통신 및 정보서비스업</option>
											<option value="12">금융 및 보험업</option>
											<option value="13">전문, 과학 및 기술 서비스업</option>
											<option value="14">사업시설관리 및 사업지원 서비스업</option>
											<option value="15">공공행정, 국방 및 사업지원 서비스업</option>
											<option value="16">공공행정, 국방 및 사회보장 행정</option>
											<option value="17">교육 서비스업</option>
											<option value="18">보건업 및 사회복지 서비스업</option>
											<option value="19">예술, 스포츠 및 여가관련 서비스업</option>
											<option value="20">협회 및 단데, 수리 및 기타 개인 서비스업</option>
											<option value="21">가구내 고용활동 및 달리 분류되지 않은 자가소비 생산활동</option>
											<option value="22">국제 및 외국기관</option>
											<option value="23">기타</option>
										</select>
									</div>
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">계좌번호</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w100p'} value={'123-12345-11-123'} placeholder={'계좌번호'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item req"> 
								<p className="fo-key">사업자등록번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'123-12-12345'} placeholder={'-없이 숫자만 입력'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">기업명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'대·중소기업·농어업협력재단'} placeholder={'기업명'} />
								</div>						
							</div>
							<div className="fo-item req">
								<p className="fo-key">대표자명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={'대표자명'} />
								</div>						
							</div>
							<div className="fo-item"> 
								<p className="fo-key">평가구분</p>
								<div className="fo-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option selected value="1">동반성장지수</option>
											<option value="2">공공기관평가</option>
											<option value="3">미평가대상</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">평가</p>
								<div className="fo-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">제조업-전기.전자</option>
											<option value="2">제조업-기계.자동차.조선</option>
											<option value="3">제조업-화학.비금속.금속</option>
											<option selected value="4">건설</option>
											<option value="5">식품업</option>
											<option value="6">홈쇼핑업</option>
											<option value="7">도소매</option>
											<option value="8">가맹점업</option>
											<option value="9">백화점.면세점</option>
											<option value="10">통신업</option>
											<option value="11">정보서비스업</option>
											<option value="12">플랫폼사업자</option>
											<option value="13">광고업</option>
											<option value="14">공기업형-선도형</option>
											<option value="15">공기업형 - 일반형</option>
											<option value="16">준정부형 – 선도형(위탁집행형)</option>
											<option value="17">준정부형 – 일반형(기금관리형)</option>
											<option value="18">준정부형 – 일반형(강소형)</option>
											<option value="19">준정부형 – 일반형(기타형)</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">집단</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'집단'} />
								</div>						
							</div>
							<div className="fo-item"> 
								<p className="fo-key">설립일자</p>
								<div className="fo-value">
									<UIDatePicker/>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">설립형태</p>
								<div className="fo-value">
									<div className="sl sl-md">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option selected value="1">영리</option>
											<option value="2">비영리</option>
										</select>
									</div>
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">홈페이지</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'http://www.abcd1234page.com/kr/index.do'} placeholder={'홈페이지'} />
								</div>						
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">주소</p>
								<div className="fo-value">
									<div className="hz-root hz-gap8">
										<UIInput className={'hz-item tf tf-md w120'} value={'12345'} placeholder={'우편번호'} readOnly={true}/>
										<UIInput className={'hz-item tf tf-md hz-fg'} value={'서울특별시 중구 퇴계로 173'} placeholder={'주소'} readOnly={true}/>										
										<Button color="gray-o" size="md">우편번호 찾기</Button>
									</div> 
								</div>						
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">기업로고</p>
								<div className="fo-value">
									<div>File UI 미작업 + small 아이콘</div>
								</div>						
							</div>								
							<div className="fo-item">
								<p className="fo-key">등록자</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'관리자'} placeholder={'등록자'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">등록일시</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYY-MM-DD(월)'} placeholder={'등록일시'} readOnly={true}/>
								</div>		
							</div>
						</div>
					</form>	
					<h2 className="tx tx-hd3">사업자등록증 이력</h2>
					<div className="tb mb10">
						<div className="tb-top">
								<div>
									<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
								</div>
							</div>							
						<table>
							<caption></caption>
							<colgroup>
								<col width="90px" />
								<col />
								<col width="150px" />
								<col width="180px" />
							</colgroup>
							<thead>
								<tr>
									<th>No</th>
									<th>파일명</th>
									<th>등록자</th>
									<th>등록일시</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td className="ta-left">
										사업자 등록증.pdf (57.44 KB)
									</td>
									<td>포탈 기업등록용</td>
									<td>2022-05-23 11:36:06</td>
								</tr>
								<tr>
									<td>2</td>
									<td className="ta-left">
										사업자 등록증 수정본.pdf (56.22 KB)
									</td>
									<td>관리자</td>
									<td>2022-05-23 11:36:06</td>
								</tr>									
							</tbody>
						</table>
					</div>
					<div className="hz-root hz-right hz-gap5">
						<Button color="pri-o" size="sm">저장</Button>
						<Button color="gray-o" size="sm">목록</Button>
					</div>

				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;