import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_4000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	const modaladm4111 = useToggleState({});
	const modaladm4112 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<ul className="fww-brd">
					<li><Link to="/admin">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">사용자관리</Link></li>
					<li><Link to="#">회원관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">회원정보 상세</h1>
					<div className="fo fo-col3 mb10">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">사용자유형</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'시스템'} placeholder={"검색어 입력"} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사용자ID</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="admin" placeholder="" />
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">사용자명</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="관리자" placeholder="" />
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">기업명</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="[111-82-22222]대·중소기업 농·어업협력재단" placeholder="" />
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">이메일</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="admin@email.com" placeholder="" />
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">사무실전화번호</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="02-1111-2344" placeholder="" />
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">이메일 인증</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="예" placeholder="" />
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">인증일시</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="2024-03-15 15:06:23" placeholder="" />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">비밀번호오류횟수</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="3" placeholder="" />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사용여부</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="아니오" placeholder="" />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">등록자</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="시스템" placeholder="" />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">등록일시</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="2024-03-15 15:06:23" placeholder="" />
								</div>
							</div>								
						</div> 
					</div>						
					<div className="hz-root hz-right hz-gap5">
						<Button color='gray-o' size="sm" >비밀번호 오류해제</Button>
						<Button color='gray-o' size="sm" onClick={modaladm4111.open}>권한등록</Button>
						<Button color='gray-o' size="sm" onClick={modaladm4112.open}>사업지정</Button>
						<Button color='gray-o' size="sm" >임시비밀번호발급</Button>
						<Button color='pri-o' size="sm" >수정</Button>
						<Button color='gray-o' size="sm" >출연기업승인</Button>
						<Button color='gray-o' size="sm" >이메일 인증 재발송</Button>
						<Button color='gray-o' size="sm" >비밀번호 오류해제</Button>
						<Button color='gray-o' size="sm" href="/admin/adm_4000/adm4100">목록</Button>
					</div>
				</main>
			</div>
			{/* modal - 권한등록 */}
			<ModalPopup
				open={modaladm4111.isShowing}
				title="권한등록"
				size="mid"
				onClose={modaladm4111.close}
			>
				<div className="modal-con">
					<div className="tb">
							<table>
								<caption></caption>
								<colgroup>
									<col width="50px" />
									<col width="50px" />
									<col width="" />
								</colgroup>
								<thead>
									<tr>
										<th>번호</th>
										<th>선택</th>
										<th>권한</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="ta-cetner">1</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-1" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-1" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-left">승인된 출연기업 사용자</td>
									</tr>
									<tr>
										<td className="ta-cetner">2</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-2" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-2" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-left">회계사</td>
									</tr>
									<tr>
										<td className="ta-cetner">3</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-3" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-3" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-left">재단담당자</td>
									</tr>
									<tr>
										<td className="ta-cetner">4</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-4" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-4" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-left">부서장</td>
									</tr>
									<tr>
										<td className="ta-cetner">5</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-5" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-5" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-left">본부장</td>
									</tr>
									<tr>
										<td className="ta-cetner">6</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-6" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-6" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-left">시스템관리자</td>
									</tr>
								</tbody></table>
							
						</div>
				</div>
				<div className="modal-bottom">
					<Button color='pri' size="big">권한지정</Button>
				</div>	
			</ModalPopup>
			{/* modal - 사업지정 */}
			<ModalPopup
				open={modaladm4112.isShowing}
				title="사업지정"
				size="mid"
				onClose={modaladm4112.close}
			>
				<div className="modal-con">
						<div className="tb">
							<table>
								<caption></caption>
								<colgroup>
									<col width="50px" />
									<col width="50px" />
									<col width="50px" />
									<col width="" />
								</colgroup>
								<thead>
									<tr>
										<th>번호</th>
										<th>선택</th>
										<th>기본</th>
										<th>사업명</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="ta-cetner">1</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-1" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-1" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-1" className="ip-rd-label">
												<input name="rd-default" id="rd-default-1" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">투자재원</td>
									</tr>
									<tr>
										<td className="ta-cetner">2</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-2" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-2" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-2" className="ip-rd-label">
												<input name="rd-default" id="rd-default-2" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">창업·벤처기업지원</td>
									</tr>
									<tr>
										<td className="ta-cetner">3</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-3" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-3" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-3" className="ip-rd-label">
												<input name="rd-default" id="rd-default-3" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">공동투자형 기술개발</td>
									</tr>									
									<tr>
										<td className="ta-cetner">4</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-4" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-4" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-4" className="ip-rd-label">
												<input name="rd-default" id="rd-default-4" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">산업혁신운동</td>
									</tr>
									<tr>
										<td className="ta-cetner">5</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-5" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-5" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-5" className="ip-rd-label">
												<input name="rd-default" id="rd-default-5" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">상생형 스마트 공장</td>
									</tr>
									<tr>
										<td className="ta-cetner">6</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-6" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-6" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-6" className="ip-rd-label">
												<input name="rd-default" id="rd-default-6" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">파트너십</td>
									</tr>
									<tr>
										<td className="ta-cetner">7</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-7" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-7" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-7" className="ip-rd-label">
												<input name="rd-default" id="rd-default-7" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">성과공유제</td>
									</tr>
									<tr>
										<td className="ta-cetner">8</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-8" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-8" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-8" className="ip-rd-label">
												<input name="rd-default" id="rd-default-8" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">협력이익공유제</td>
									</tr>
									<tr>
										<td className="ta-cetner">9</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-9" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-9" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-9" className="ip-rd-label">
												<input name="rd-default" id="rd-default-9" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">동반진출 지원사업</td>
									</tr>
									<tr>
										<td className="ta-cetner">10</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-10" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-10" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-10" className="ip-rd-label">
												<input name="rd-default" id="rd-default-10" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">문화확산-신용카드</td>
									</tr>
									<tr>
										<td className="ta-cetner">11</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-11" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-11" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-11" className="ip-rd-label">
												<input name="rd-default" id="rd-default-11" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">문화확산-ESG</td>
									</tr>
									<tr>
										<td className="ta-cetner">12</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-12" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-12" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-12" className="ip-rd-label">
												<input name="rd-default" id="rd-default-12" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">문화확산-동반성장</td>
									</tr>
									<tr>
										<td className="ta-cetner">13</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-1" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-13" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-13" className="ip-rd-label">
												<input name="rd-default" id="rd-default-13" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">분사기업(스핀오프) 상생협력 사업</td>
									</tr>
									<tr>
										<td className="ta-cetner">$</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-14" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-14" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-14" className="ip-rd-label">
												<input name="rd-default" id="rd-default-14" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">상생결제</td>
									</tr>
									<tr>
										<td className="ta-cetner">15</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-15" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-15" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-15" className="ip-rd-label">
												<input name="rd-default" id="rd-default-15" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">지역사회</td>
									</tr>
									<tr>
										<td className="ta-cetner">16</td>
										<td className="ta-cetner">
											<label htmlFor="ch-auth-16" className="hz-item ip-ch-label ip-ch-18">
												<input name="ch-auth" id="ch-auth-16" className="ip-ch" type="checkbox" value="" />
												<span className="check"></span> 
											</label>
										</td>
										<td className="ta-cetner">
											<label htmlFor="rd-default-16" className="ip-rd-label">
												<input name="rd-default" id="rd-default-16" className="ip-rd" type="radio" value="" />
												<span className="check"></span>
											</label>
										</td>										
										<td className="ta-left">통합출연</td>
									</tr>
								</tbody></table>
							
						</div>
				</div>
				<div className="modal-bottom">
					<Button color='pri' size="big">사업지정</Button>
				</div>	
			</ModalPopup>
		</PageContainer>
	);
}
export default ContentsContainer;