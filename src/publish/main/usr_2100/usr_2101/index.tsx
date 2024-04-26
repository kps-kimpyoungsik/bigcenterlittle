
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2100Aside";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
import { Tooltip } from "react-tooltip";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
function ContentsContainer() {
	const sectors1 = [
		'동반성장 문화확산 - 혁신주도형 동반성장','동반성장 문화확산 - 신용카드 영세가맹점 지원사업','통합출연사업','수·위탁기업간 네트워크형 공동사업','공동투자형 기술개발',
		'대·중소 상생형 스마트공장','분사기업(스핀오프) 상생협력 사업','대·중소기업 혁신 파트너십','산업혁신운동','지역사회 동반성장 지원사업','동반성장 투자재원',
		'동반성장 문화확산 - 협력사 ESG 평가지원사업','상생결제제도 운영','성과공유제','기술유출방지시스템','협력이익공유제','상생형 창업·벤처기업 지원사업','대·중소기업 동반진출'
	]
	const sectors2 = [
		'대ㆍ중소기업 간 상생협력 성과의 공평한 배분에 관한 사업','대ㆍ중소기업 간 기술협력 촉진 사업','대ㆍ중소기업 간 인력교류 확대 사업','대ㆍ중소기업 간 환경경영협력 촉진사업',
		'대ㆍ중소기업 간 임금격차 완화 및 일자리 창출 지원사업','상생협력기금의 조성ㆍ운용 및 관리를 위한 경비','중소기업의 생산성 향상을 위한 지원 사업',
		'중소기업의 기술 보호 지원 사업','중소기업 및 벤처기업의 창원 지원 사업','대ㆍ중소기업의 국내외 판로 확대를 위한 공동 협력 사업','대ㆍ중소기업 간 거래 공정화 지원 사업','대ㆍ중소기업 간 동반성장 기반 구축 및 문화 확산에 관한 사업'
	]
	const sectors3 = [
		'농업, 임업 및 어업','제조업','전기, 가스, 증기 및 수도사업','하수 페기물 처리, 원료재생 및 환경복원업','건설업','도매 및 소매업','운수업','숙박 및 음식점업','출판, 영상, 방송통신 및 정보서비스업',
		'금융 및 보험업','부동산업 및 임대업','전문, 과학 및 기술 서비스업','사업시설관리 및 사업지원 서비스업','공공행정, 국방 및 사회보장 행정','교육 서비스업','보건업 및 사회복지 서비스업',
		'예술, 스포츠 및 여가관련 서비스업','협회 및 단체, 수리 및 기타 개인 서비스업','가구 내 고용활동 및 달리 분류되지 않은 자가소비 생산활동','국제 및 외국기관','기타'
	]

	

	const chkeck = [
		{id:1,tx:'경쟁력강화'},{id:2,tx:'소통활성'},{id:3,tx:'공유가치 창출'},{id:4,tx:'제도활성화'},{id:5,tx:'우수한생산성강화'},
		{id:6,tx:'경쟁력강화'},{id:7,tx:'소통활성'},{id:8,tx:'공유가치 창출'},{id:9,tx:'제도활성화'},{id:10,tx:'우수한생산성강화'},
		{id:11,tx:'경쟁력강화'},{id:12,tx:'소통활성'},{id:13,tx:'공유가치 창출'},{id:14,tx:'제도활성화'},{id:15,tx:'우수한생산성강화'}
	]
	const modalusr2102 = useToggleState({});
	const modalusr2103 = useToggleState({});
	const modalusr2104 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">기금운영</Link></li>
					<li><Link to="#">과제현황</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">과제승인신청</h1>
					<div className="hz-root hz-right hz-gap10 mb30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
					</div>
					<section className="fund-section">
						<div className="hz-root hz-gap10 hz-sb mb15">
							<h3 className="section-title">과제 신청 정보</h3>
							<p className="tx-msg"><span className="fc-pri">*</span>&nbsp;필수 입력</p>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										<span className="req">과제명</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip1">도움말</button>
										<Tooltip 
											id="tooltip1"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">출연기업의 지원과제계회 제목을 작성(연도 구분 있을 시 연도 표시)</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'과제명을 입력하세요'} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">과제신청일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD(Day)'} placeholder={''}  readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">
										<span className="req">과제기간</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip2">도움말</button>
										<Tooltip 
											id="tooltip2"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">
												<h6 className="tooltip-title">과제 운영기간(최대 1년), 사업기갑 변경 시 과제변경 신청 필수</h6>
												<span className="fc-pri">(사업기간 내 사업 운영 및 비용 집행)</span> <br />
												모든 제출 증빙자료의 발행일자가 고제 기간 내에 포함될 수 있도록 설정 바랍니다.<br />ex) 견적서, 세금계선서, 이체확인증 등<br />
												<p className="mt5">※ 해당연도 지급 요청 마감은 매년 11월 30일 18:00까지이며 이후 당해연도 내 추가 지급신청 불가.</p>

											</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5 w100p">
											<UIDatePicker className="hz-item"/>
											<span className="hz-item">~</span>
											<UIDatePicker className="hz-item"/>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업명</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												{sectors1.map((sec, idx) =>
													<option key={idx}>{sec}</option>
												)}
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<div className="fo-key">
										<span className="req">기금사용용도</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip3">도움말</button>
										<Tooltip 
											id="tooltip3"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">‘[참고] 상생협력기금 사용용도 분류표＇를 참조하여 해당하는 번호를 기입</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												{sectors2.map((sec, idx) =>
													<option key={idx}>{sec}</option>
												)}
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">지원분야</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">과제분야</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-gap5 mb15">
							<h3 className="section-title">지원내용 및 기대효과</h3>
							<button type="button" className="button-tooltip" data-tooltip-id="tooltip4">도움말</button>
							<Tooltip 
								id="tooltip4"  
								disableStyleInjection={true}
								place={"bottom-start"}
								className="tooltip-conts"
							>
								<div className="msg">지원계획 내용과 지원을 통해 기대되는 효과 기입</div>
							</Tooltip>
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">지원내용 입력</p>
									<div className="fo-value">
										<div className="ta-group w100p">
											<textarea rows={3} className="ta-ip" placeholder="지원내용을 입력하세요(입력 제한 없음)"></textarea>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">기대효과 입력</p>
									<div className="fo-value">
										<div  className="ta-group w100p">
											<textarea rows={3} className="ta-ip" placeholder="기대효과를 입력하세요(입력 제한 없음)"></textarea>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">기대성과 선택</p>
									<div className="fo-value">
										<div className="d-block">
											<div className="chk-group">
												
												{chkeck.map((chkeck) => (
													<div className="chk-items">
														<input type="checkbox" id={'chk-g-'+chkeck.id} />
														<label htmlFor={'chk-g-'+chkeck.id}>{chkeck.tx}</label>
													</div>
												))}
											</div>
											<div className="tx-msg">
												<span className="fc-pri">※ 과제신청 시 기대되는 성과에 대해서 모두 선택해 주세요(필수선택)</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">지원 대상</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<div className="fo-key">
										<span className="req">중소기업 지원 수</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip5">도움말</button>
										<Tooltip 
											id="tooltip5"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">tooltip...</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIInput className={'tf tf-md ta-right w100p'} value={'0'} placeholder={''} />	
											<p className="tx-msg hz-item">개사 (수해 받을 중소기업 수 입력)</p>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">중소기업 외 지원 수</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIInput className={'tf tf-md ta-right w100p'} value={'0'} placeholder={''} />	
											<p className="tx-msg hz-item">개사 (수해 받을 중소기업 수 입력)</p>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<div className="fo-key">
										<span className="req">수행기관</span>
										<button type="button" className="button-tooltip" data-tooltip-id="tooltip6">도움말</button>
										<Tooltip 
											id="tooltip6"  
											disableStyleInjection={true}
											place={"bottom-start"}
											className="tooltip-conts"
										>
											<div className="msg">
												효율적인 사업수행을 위하여 출연기업이 선정한 대행기관(기업)을 의미하며, 협력재단이 수행기관에게 직접 지급하는 경우에만 사업자등록증의 상호명을 기입(수행기관 변경 및 추가 시 사업변경 신청 필수)
											</div>
										</Tooltip>
									</div>
									<div className="fo-value">
										<div className="hz-root hz-gap10 w100p">
											<div className="sl sl-md w556">
												<select>
													<option>수행기관 없음</option>
													<option>수행기관 선택</option>
												</select>
											</div>
											<div className="hz-root hz-gap5 w-auto">
												<UIInput className={'tf tf-md hz-item hz-fg w400'} value={'기업명'} placeholder={''} />
												<Button color='pri-o2' size="md" onClick={modalusr2102.open}>찾기</Button> 
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<div className="hz-root hz-sb mb15">
							<div className="hz-root hz-gap10 hz-item">
								<h3 className="section-title">출연 금액</h3>
								<p className="tx-msg">※ 지원금은 최소 1개 이상을 입력해야 합니다.</p>
							</div>
							<div className="hz-root hz-gap5">
								<Button color='pri-o' size="sm">행추가</Button> 
								<Button color='gray-o' size="sm">행삭제</Button> 
							</div>
						</div>
						<form name="" action="" method="">
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="60px" />
										<col />
										<col />
										<col />
									</colgroup>
									<thead>
										<tr>
											<th>
												<label htmlFor="ch-all" className="hz-item ip-ch-label ip-ch-18">
													<input id="ch-all" className="ip-ch" type="checkbox" />
													<span className="check"></span> 
												</label>
											</th>
											<th scope="col">지원항목</th>
											<th scope="col">산출근거</th>
											<th scope="col">증빙방법</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<label htmlFor="ch-t1" className="hz-item ip-ch-label ip-ch-18">
													<input id="ch-t1" className="ip-ch" type="checkbox" />
													<span className="check"></span> 
												</label>
											</td>
											<td>
												<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'지원항목을 입력하세요(입력수제한없음)'} />
											</td>
											<td>
												<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'산출근거를 입력하세요(입력수제한없음)'} />
											</td>
											<td>
												<UIInput className={'tf tf-md  w100p'} value={''} placeholder={'증빙방법을 입력하세요(입력수제한없음)'} />
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tb-total">
								<div className="tb-total-items">지원 항목별 합계금액(원)</div>
								<div className="tb-total-items">
									<div className="fund-form-items tf-unit">
										<UIInput className={'tf tf-md ta-right'} value={'1,000,000,000'} placeholder={''}  readOnly={true}/>
										<span className="u">원</span>
									</div>
									<p className="tx-msg"><span className="fc-pri">(일억원 한글금액출력)</span></p> 
								</div>
							</div>
						</form>
					</section>
					<section className="fund-section">
						<h3 className="section-title mb15">신청 기업 정보</h3>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">신청기업</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'기업명출력'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">부서명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'부서명출력'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">담당자</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>홍길동</option>
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">이메일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'이메일출력'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">전화번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'전화번호출력'} placeholder={''} />
									</div>
								</div>
							</div>
						</form>
					</section>
					<div className="hz-root hz-right hz-gap10 mt30">
						<Button color="gray-o" size="md">취소</Button>
						<Button color="pri" size="md">저장</Button>
					</div>
				</main>
			</div>
			{/* modal - 수행 기관 찾기 */}
			<ModalPopup
					open={modalusr2102.isShowing}
					title="수행 기관 찾기"
					size="lg"
					onClose={modalusr2102.close}
			>
				<div className="modal-con">
					<div className="modal-tskana">
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">사업자번호</p>
									<div className="fo-value">
										<UIInput type={'number'} className={'tf tf-md w100p'} value={''} placeholder={'숫자만 입력'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'기업명을 입력하세요.'} />	
									</div>
								</div>
							</div>
						</form>

						<Button color="gray-o" size="sm" onClick={() => {modalusr2102.close(); modalusr2104.open()}}>(임시)수행기관 관리</Button>
					</div>
				</div>
				<div className="modal-bottom">
					<Button color="pri-o" size="md" onClick={() => {modalusr2102.close(); modalusr2103.open()}}>수행기관 신규등록</Button>
					<Button color="gray-o" size="md">취소</Button>
					<Button color="pri" size="md">적용</Button>
				</div>
			</ModalPopup>
			{/* modal - 수행기관 신규등록 */}
			<ModalPopup
					open={modalusr2103.isShowing}
					title="수행기관 신규등록"
					size="lg"
					onClose={modalusr2103.close}
			>
				<div className="modal-con">
					<div className="modal-tskana">
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'기업명을 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업자등록번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'숫자만 입력'} />	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">대표자명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'대표자명을 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">설립일자</p>
									<div className="fo-value">
										<UIDatePicker />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">설립형태</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												<option>영리</option>
												<option>비영리 </option>
											</select>
										</div>		
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">기업규모</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												<option>대기업</option>
												<option>공공기관</option>
												<option>중견기업</option>
												<option>중소기업</option>
												<option>기타</option>
											</select>
										</div>	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">업종</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												{sectors3.map((sec, idx) =>
													<option key={idx}>{sec}</option>
												)}
											</select>
										</div>	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">담당자명명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'담당자명을 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item ">
									<p className="fo-key">메일주소</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'메일주소를 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">일반전화번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'일반전화번호를 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">휴대폰번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'일반전화번호를 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">사업자 등록증</p>
									<div className="fo-value">
										File upload...
									</div>
								</div>
							</div>
							
						</form>
					</div>
				</div>
				<div className="modal-bottom">
					<Button color="gray-o" size="md">취소</Button>
					<Button color="pri" size="md">저장</Button>
				</div>
			</ModalPopup>
			{/* modal - 수행기관 관리 */}
			<ModalPopup
					open={modalusr2104.isShowing}
					title="수행기관 관리"
					size="lg"
					onClose={modalusr2104.close}
			>
				<div className="modal-con">
					<div className="modal-tskana">
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'기업명출력'} placeholder={'기업명을 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">사업자등록번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'000-00-00000'} placeholder={'숫자만 입력'} />	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">대표자명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={'대표자명을 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">설립일자</p>
									<div className="fo-value">
										<UIDatePicker />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">설립형태</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												<option>영리</option>
												<option>비영리 </option>
											</select>
										</div>		
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">기업규모</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												<option>대기업</option>
												<option>공공기관</option>
												<option>중견기업</option>
												<option>중소기업</option>
												<option>기타</option>
											</select>
										</div>	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">업종</p>
									<div className="fo-value">
										<div className="sl sl-md w100p">
											<select>
												<option>선택하세요.</option>
												{sectors3.map((sec, idx) =>
													<option key={idx}>{sec}</option>
												)}
											</select>
										</div>	
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">담당자명명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={'담당자명을 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item ">
									<p className="fo-key">메일주소</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'메일주소를 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">일반전화번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'일반전화번호를 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">휴대폰번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'일반전화번호를 입력하세요.'} />	
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">사업자 등록증</p>
									<div className="fo-value">
										File upload...
									</div>
								</div>
							</div>
						</form>
						<section className="fund-section mt30">
							<h3 className="section-title mb15">심사 진행상태</h3>
							<div className="tb tb-narrow">
								<table>
									<caption></caption>
									<colgroup>
										<col width="120px" />
										<col />
										<col width="240px" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">순번</th>
											<th scope="col">등록일시</th>
											<th scope="col">등록자</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>09</td>
											<td>YYYY-MM-DD HH:MM:SS</td>
											<td>홍길동</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="pg mt10">
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
						</section>
					</div>
				</div>
				<div className="modal-bottom">
					<Button color="gray-o" size="md">취소</Button>
					<Button color="pri" size="md">저장</Button>
				</div>
			</ModalPopup>
		</PageContainer>
	);
}
export default ContentsContainer;