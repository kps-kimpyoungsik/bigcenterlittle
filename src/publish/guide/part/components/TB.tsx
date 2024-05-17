import React from "react";
import { Link } from 'react-router-dom';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<div>
			<h1 className="deco-h1">TB(테이블)</h1>
			<h2 className="deco-h2">Normal(게시판)</h2>
			<div className="tb">
				<div className="tb-top">
					<div>
						<p className="tx fc-black">총 <em className="fw500">103</em>건</p>
					</div>
					<div className="hz-root hz-gap8">
						<Button color="gray-o" size="md">등록</Button>
						<Button color="gray-o" size="md">다운로드</Button>
						<div className="sl sl-md w120">
							<select>
								<option>20개씩보기</option>
								<option>50개씩보기</option>
								<option>100개씩보기</option>
								<option>200개씩보기</option>
								<option>500개씩보기</option>
								<option>1000개씩보기</option>
							</select>
						</div>
					</div>
				</div>
				<table>
					<caption></caption>
					<colgroup>
						<col width="90px" />
						<col  />
						<col width="120px" />
						<col width="140px" />
						<col width="120px" />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">번호</th>
							<th scope="col">제목</th>
							<th scope="col">작성자</th>
							<th scope="col">등록일</th>
							<th scope="col">조회수</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>110</td>
							<td className="ta-left"><Link to="#" className="tx tx-bd2 tx-link">대·중소기업상생협력기금 운영·관리 규정 안내</Link></td>
							<td>홍길동</td>
							<td>2024-03-31</td>
							<td>1234</td>
						</tr>
						<tr>
							<td>109</td>
							<td className="ta-left"><Link to="#" className="tx tx-bd2 tx-link">대·중소기업상생협력기금 운영·관리 규정 안내</Link></td>
							<td>홍길동</td>
							<td>2024-03-31</td>
							<td>1234</td>
						</tr>
						<tr>
							<td>108</td>
							<td className="ta-left"><Link to="#" className="tx tx-bd2 tx-link">대·중소기업상생협력기금 운영·관리 규정 안내</Link></td>
							<td>홍길동</td>
							<td>2024-03-31</td>
							<td>1234</td>
						</tr>
					</tbody>
				</table>
			</div>
			<br /><br />
			<h2 className="deco-h2">Narrow</h2>
			<div className="tb tb-narrow">
				<table>
					<caption></caption>
					<colgroup>
						<col width="60px" />
						<col width="45%"/>
						<col />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">
								<label htmlFor="ch-all" className="hz-item ip-ch-label ip-ch-18">
									<input id="ch-all" className="ip-ch" type="checkbox" />
									<span className="check"></span> 
								</label>
							</th>
							<th scope="col"><span className="th-req">출연 사업</span></th>
							<th scope="col">출연번호</th>
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
								<div className="sl sl-md w100p">
									<select>
										<option>선택하세요</option>
									</select>
								</div>
							</td>
							<td>
								<UIInput className={'tf tf-md w100p'} value={'000-0000-000'} placeholder={'입력하세요'}  readOnly={true} />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
export default ContentsContainer;