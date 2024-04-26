import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../PageContainer';
// import './index.css';
function ContentsContainer() {
	return (
		<PageContainer>
			<div className="stk-main">
				<h2>사용자관리(adm_4000)</h2>
				<table>
					<thead>
						<tr>
							<th>PID</th>
							<th>D1</th>
							<th>D2</th>
							<th>D3</th>
							<th>D4</th>
							<th>D5</th>
							<th>D6</th>
							<th>날짜</th>
							<th>진행</th>
							<th>메모</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
							<Link to="/admin/adm_4000/adm4100" className="p" target="_blank">adm_4100</Link>
							</td>
							<td>사용자관리</td>
							<td>회원관리</td>
							<td>회원리스트</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>2024.$$.$$</td>
							<td className="state3">완료</td>
							<td>캘린더UI 미작업</td>
						</tr>
						</tbody>
				</table>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;