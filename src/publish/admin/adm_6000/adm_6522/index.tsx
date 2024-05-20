import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<Breadcrumb gnbIdx={5} lnbD1Idx={7} />
				<main className="fww-main">
					<h1 className="tx tx-hd2">명칭 수정</h1>
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
					</div>
					<div className="tb tb-narrow"> 
						<table>
							<caption></caption>
							<colgroup>
								<col width="90px" />
								<col width="500px" />
								<col width="" />
							</colgroup>
							<thead>
								<tr>
									<th>번호</th>
									<th>로케일</th>
									<th>명칭내용</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td className="ta-left">
										<UIInput className={'tf tf-md w100p'} value={'Ko_KR'} placeholder={''} readOnly={false} />
									</td>
									<td className="ta-left">
										<UIInput className={'tf tf-md w100p'} value={'지급사업'} placeholder={''} readOnly={false} />
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td className="ta-left">
										<UIInput className={'tf tf-md w100p'} value={'Ko_KR'} placeholder={''} readOnly={false} />
									</td>
									<td className="ta-left">
										<UIInput className={'tf tf-md w100p'} value={'지급사업'} placeholder={''} readOnly={false} />
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td className="ta-left">
										<UIInput className={'tf tf-md w100p'} value={'Ko_KR'} placeholder={''} readOnly={false} />
									</td>
									<td className="ta-left">
										<UIInput className={'tf tf-md w100p'} value={'지급사업'} placeholder={''} readOnly={false} />
									</td>
								</tr>																		
							</tbody>
						</table>
						
					</div>
					<div className="hz-root hz-right hz-gap5 mt10">
						<Button color="gray-o" size="sm">취소</Button>
						<Button color="pri-o" size="sm">저장</Button>
						<Button color="gray-o" size="sm">목록</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;