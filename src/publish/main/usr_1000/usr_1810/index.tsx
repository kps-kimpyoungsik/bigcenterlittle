import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">보안프로그램 설치</Link></li>
				</ul>
				<main className="fww-main" data-layout="usr">
					<div className="curity-program">
						<h1 className="tx tx-hd2">보안프로그램 설치</h1>
						<h3 className="curity-title mb30">고객님의 안전한 서비스를 위해 보안 프로그램을 설치 하셔야 합니다.</h3>
						
						<div className="tb tb-narrow mb20"> {/* [M.20240703] 수정 */}
							<table>
								<caption>보안프로그램 목록</caption>
								<colgroup>
									<col width="230px" />
									<col />
									<col width="230px" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">프로그램명</th>
										<th scope="col">프로그램 설명</th>
										<th scope="col">설치여부</th>
									</tr>
								</thead>
								<tbody>
									
									<tr>
										<td>
											키보드보안<br /><strong>(TouchEnNxKey with E2E)</strong>
										</td>
										<td className="ta-left">
											본 제품은 불법적인 키보드 입력 값을 가로채가려는 시도를 원천적으로 방어할 수 있는 솔루션으로,<br />사용자 컴퓨터의 H/W 레벨에서 키보드가 입력되는 순간부터 입력 값을 암호화여 데이터를 전송하는 솔루션입니다.
										</td>
										<td>
											<Button color='pri' size="sm">설치</Button> 
											{/* 설치된경우 */}
											<Button color='gray' size="sm" disabled>설치됨</Button> 
										</td>
									</tr>
									<tr>
										<td>
											공동인증서 보안<br /><strong>(WIzIN-Delfino G3/G4)</strong>
										</td>
										<td className="ta-left">
											WizIN-Delfino(공동인증 전자서명 프로그램)은 강력한 PKI(공개키 기반) 보안 기술을 적용하여 안전한 금융거래를 이용하실 수 있도록 하는 프로그램입니다.
										</td>
										<td>
											<Button color='pri' size="sm">설치</Button> 
											{/* 설치된경우 */}
											<Button color='gray' size="sm" disabled>설치됨</Button> 
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						{/* [M.20240703] 추가 */}
						<div className="hz-root hz-center mb30">
							<button className="bt" data-color="gray-o" data-size="md"  type="button">새로고침</button>
						</div>						
						{/* [M.20240703] 추가 */}

						<h3 className="section-title mb30"><span className="fc-pri fw500">키보드 보안 (TouchEnNxKey with E2E)</span></h3>
						<ul className="curity-info mb30">
							<li>
								<span className="num">1.</span><strong>입력 값 보호 기능(키로깅 방지)</strong>
								입력 값 보호기능은 자체적으로 개발한 키보드 디바이스 드라이버와 어플리케이션 간의 독자적인 데이터 전송 및 화면 출력기능을 제공하여 키로깅 방지를 제공합니다.
							</li>
							<li>
								<span className="num">2.</span><strong>E2E 연동기능 (구간암호화)</strong>
								E2E 연동기능은 커널레벨에서 암호화 후 PKI 또는 자체 암호화 모듈을 이용하여 데이터를 암호화를 진행하여 서버까지의 모든 구간에 암호화된 데이터를 전송하는 기능을 제공합니다.
							</li>
						</ul>
						<div className="tb tb-narrow mb30">
							<table>
								<caption></caption>
								<colgroup>
									<col />
									<col width="200px" />
									<col width="200px" />
									<col width="200px" />
									<col width="200px" />
									<col width="200px" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">구분</th>
										<th scope="col">Internet Explorer</th>
										<th scope="col">Edge</th>
										<th scope="col">Chrome</th>
										<th scope="col">Safari</th>
										<th scope="col">Firefox</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><strong>Windows</strong><br />XP ~ 11(32bit/64bit)</td>
										<td>9.0이상</td>
										<td>25이상</td>
										<td>38.0이상</td>
										<td>5.1.7이상</td>
										<td>36.0이상</td>
									</tr>
									<tr>
										<td><strong>MAC</strong></td>
										<td>미지원</td>
										<td>미지원</td>
										<td colSpan={3}>가상키패드</td>
									</tr>
									<tr>
										<td><strong>Linux</strong></td>
										<td>미지원</td>
										<td>미지원</td>
										<td colSpan={3}>가상키패드</td>
									</tr>
								</tbody>
							</table>
						</div>
						<ul className="curity-spec mb30">
							<li>CPU : Pentium II이상 / RAM : 64MB이상 / HDD : 10MB 이상의 저장공간</li>
							<li>키보드타입 PS/2 Type : 101key/102key/103key/106key 키보드</li>
							<li>USB Type : 101key</li>
						</ul>
						<h3 className="section-title mb30"><span className="fc-pri fw500">공동인증서 보안 (WIzIN-Delfino G3/G4)</span></h3>
						<ul className="curity-info mb30">
							<li>
								<span className="num">1.</span><strong>사용자 인증</strong>
								사용자 인증에 사용될 공동인증서 제출 및 검증 기능 제공.
							</li>
							<li>
								<span className="num">2.</span><strong>전자서명 수행 및 검증</strong>
								공동인증서를 이용한 전자서명 및 전자서명의 진위와 서명자 확인
							</li>
							<li>
								<span className="num">3.</span><strong>전자봉투</strong>
								공동인증서에 포함된 식별번호를 이용하여 인증서 소유자의 신원확인 지원
							</li>
						</ul>
						<div className="tb tb-narrow mb30">
							<table>
								<caption></caption>
								<colgroup>
									<col />
									<col width="200px" />
									<col width="200px" />
									<col width="200px" />
									<col width="200px" />
									<col width="200px" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">구분</th>
										<th scope="col">Internet Explorer</th>
										<th scope="col">Edge</th>
										<th scope="col">Chrome</th>
										<th scope="col">Safari</th>
										<th scope="col">Firefox</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><strong>Windows</strong><br />XP ~ 11(32bit/64bit)</td>
										<td>지원<br />6.0 이상</td>
										<td>지원</td>
										<td>지원<br />38.0 이상</td>
										<td>지원<br />32.0 이상</td>
										<td>지원<br />5.1.7 이상</td>
									</tr>
									<tr>
										<td><strong>MAC</strong><br />OS X 10.6~ 10.13</td>
										<td>미지원</td>
										<td>미지원</td>
										<td>지원<br />38.0 이상</td>
										<td>지원<br />32.0 이상</td>
										<td>지원<br />5.1.7 이상</td>
									</tr>
									<tr>
										<td><strong>Linux</strong><br />14.04, 16.04, 17.04, 17.10</td>
										<td>미지원</td>
										<td>미지원</td>
										<td>지원<br />38.0 이상</td>
										<td>지원<br />32.0 이상</td>
										<td>미지원</td>
									</tr>
									<tr>
										<td><strong>Linux Fedora</strong><br />22-25</td>
										<td>미지원</td>
										<td>미지원</td>
										<td>지원<br />38.0 이상</td>
										<td>지원<br />32.0 이상</td>
										<td>미지원</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;