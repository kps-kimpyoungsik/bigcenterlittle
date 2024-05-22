import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	const modaladm1211 = useToggleState({});
	const modaladm1214 = useToggleState({});	
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={0} lnbD1Idx={1}  lnbD2Idx={3}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">전용 상세</h1>
					<h3 className="section-title mb15">전용 정보</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
						<div className="fo-item">
							<p className="fo-key">출연번호</p>
							<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'00-0000-000'} placeholder={''} readOnly={true} />
							</div>
						</div>
						<div className="fo-item">
							<p className="fo-key">출연일자</p>
							<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
							</div>
						</div>
						<div className="fo-item">
							<p className="fo-key">처리번호</p>
							<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'000-0000-000'} placeholder={''} readOnly={true} />
							</div>
						</div>
						<div className="fo-item">
							<p className="fo-key">전용상태</p>
							<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'신청'} placeholder={''} readOnly={true} />
							</div>
						</div>
						<div className="fo-item">
							<p className="fo-key">전용금액(원)</p>
							<div className="fo-value">
								<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000'} placeholder={''} readOnly={true} />
							</div>
						</div>
						<div className="fo-item">
							<p className="fo-key">전용가능잔액</p>
							<div className="fo-value">
								<UIInput className={'tf tf-md ta-right w100p'} value={'1,000,000'} placeholder={''} readOnly={true} />
							</div>
						</div>
						<div className="fo-item">
							<p className="fo-key">전용신청일</p>
							<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
							</div>
						</div>
						<div className="fo-item">
							<p className="fo-key">전용일자</p>
							<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''} readOnly={true} />
							</div>
						</div>
						<div className="fo-item fo-m-1-3">
							<p className="fo-key">비고사항</p>
							<div className="fo-value">
								<div className="ta-view h200 w100p">
									[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 심사가 완료되었습니다.
									[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 집행이 완료되었습니다. 지급금액 <em className="fc-err">$###</em>원, 집행일 <em className="fc-err">YYYY-MM-DD</em>
								</div>
							</div>
						</div>
						</div>
					</form>

					<div className="pt mb30">
						<div className="row">
							<div className="col col-5">
								<div className="mr30">
									<h3 className="section-title mb15">변경 전 출연 내용</h3>
									<div className="tb tb-narrow">
										<table>
											<caption></caption>
											<colgroup>
												<col width="200px" />
												<col width="" />
											</colgroup>
											<thead>
												<tr>
													<th>출연사업명</th>
													<th>출연금액(원)</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>창업, 벤처기업지원</td>
													<td>5,000,000</td>
												</tr>
											</tbody>
										</table>
									</div>		
								</div>
							</div>
							<div className="col col-5">
								<div className="ml30">
									<h3 className="section-title mb15">변경 후 전용 내용</h3>
									<div className="tb tb-narrow">
										<table>
											<caption></caption>
											<colgroup>
												<col width="200px" />
												<col width="" />
											</colgroup>
											<thead>
												<tr>
													<th>출연사업명</th>
													<th>출연금액(원)</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>창업, 벤처기업지원</td>
													<td>5,000,000</td>
												</tr>
											</tbody>
										</table>
									</div>			
								</div>
							
							</div>
						</div>
					</div>

					<h3 className="section-title mb15">첨부파일</h3>
					<div className="mb30">[D]Fileupload</div>

					<h3 className="section-title mb15">반려 사유 내역</h3>
					<div className="tb tb-narrow mb30">
						<table>
							<caption></caption>
							<colgroup>
								<col width="80px" />
								<col width="" />
								<col width="200px" />
							</colgroup>
							<thead>
								<tr>
									<th>순번</th>
									<th>반려사유</th>
									<th>담당자명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>반려사유가 있으면 출력됨 없으면 출력되지 않음.</td>
									<td>강감찬</td>
								</tr>
							</tbody>
						</table>
					</div>								

					<div className="tb tb-narrow mb30">
						<table>
							<caption></caption>
							<colgroup>
								<col width="80px" />
								<col width="" />
								<col width="200px" />
							</colgroup>
							<thead>
								<tr>
									<th>순번</th>
									<th>반려사유</th>
									<th>담당자명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td colSpan={3}>
										<div className="nd">
											{/* <i className="ic"></i> */} {/* [M.20240522]삭제 */}
											<p className="tx tx-cp2 fc-666">내역이 없습니다.</p>
										</div>		
									</td>
								</tr>
							</tbody>
						</table>
					</div>					

					<h3 className="section-title mb15">심사의견</h3>
					<div className="tb tb-narrow mb30">
						<table>
							<caption></caption>
							<colgroup>
								<col width="80px" />
								<col width="200px" />
								<col width="200px" />
								<col width="" />
								<col width="200px" />
								<col width="200px" />
							</colgroup>
							<thead>
								<tr>
									<th>순번</th>
									<th>심사진행상태</th>
									<th>심사일시</th>
									<th>심사의견</th>
									<th>담당자명</th>
									<th>담당자 수정일시</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>접수</td>
									<td>YYYY-MM-DD HH:MM:SS</td>
									<td>접수되었습니다.</td>
									<td>강감찬</td>
									<td>YYYY-MM-DD HH:MM:SS</td>
								</tr>
							</tbody>
						</table>
					</div>				

					<div className="tb tb-narrow mb30">
						<table>
							<caption></caption>
							<colgroup>
								<col width="80px" />
								<col width="200px" />
								<col width="200px" />
								<col width="" />
								<col width="200px" />
								<col width="200px" />
							</colgroup>
							<thead>
								<tr>
									<th>순번</th>
									<th>심사진행상태</th>
									<th>심사일시</th>
									<th>심사의견</th>
									<th>담당자명</th>
									<th>담당자 수정일시</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td colSpan={6}>
										<div className="nd">
											{/* <i className="ic"></i> */} {/* [M.20240522]삭제 */}
											<p className="tx tx-cp2 fc-666">내역이 없습니다.</p>
										</div>												
									</td>
								</tr>
							</tbody>
						</table>
					</div>														

					<h3 className="section-title mb15">신청 기업 정보</h3>
					
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">기업명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'기업명 출력'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">법인사업자번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'123456-1234567'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사업자번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'123-12-12345'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">담당자</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">직위</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'직위명'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">부서</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'부서명'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">이메일</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'emailname@email.com'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">전화번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'021231234'} placeholder={''} readOnly={true} />

								</div>
							</div>
						</div>
					</form>
					<div className="hz-root hz-right hz-gap5">
						<Button color="gray-o" size="sm" >반려</Button>
						<Button color="gray-o" size="sm" >접수</Button>
						<Button color="pri-o" size="sm" >저장</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>

						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}
						<br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1211.open}>1211p</Button> <br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1214.open}>1214p</Button>
						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}

				</main>
			</div>
			
		{/* modal - 1211*/}
		<ModalPopup
				open={modaladm1211.isShowing}
				title="반려 사유 입력"
				size="mid"
				onClose={modaladm1211.close}
			>
				<div className="modal-con">
					<div className="ta h200">
						<textarea className="ta-ip" placeholder="반려사유를 입력하세요"></textarea>
					</div>
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">취소</Button>
						<Button color='pri' size="md">저장</Button>
					</div>
				</div>	
			</ModalPopup>

		{/* modal - 1214 */}
		<ModalPopup
				open={modaladm1214.isShowing}
				title="기업검색"
				size="mid"
				onClose={modaladm1214.close}
			>
				<div className="modal-con">
					
					<form className="sf sf-1row sf-2col">
						<div className="inner">
							<div className="sf-item sf-m-1-3">
								<p className="sf-key">기업검색</p>
								<div className="sf-value">
									<div className="hz-root hz-gap10">
										<div className="sl sl-md w120">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="1">$</option>
											</select>
										</div>
										<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={''} />
									</div>
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