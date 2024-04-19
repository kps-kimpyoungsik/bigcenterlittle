import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">시스템관리</a></li>
						<li className=""><a href="">명칭관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">명칭 상세</h1>
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
											<UIInput className={'tf tf-md w100p'} value={'Ko_KR'} placeholder={''} readOnly={true} />
										</td>
										<td className="ta-left">
											<UIInput className={'tf tf-md w100p'} value={'지급사업'} placeholder={''} readOnly={true} />
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td className="ta-left">
											<UIInput className={'tf tf-md w100p'} value={'Ko_KR'} placeholder={''} readOnly={true} />
										</td>
										<td className="ta-left">
											<UIInput className={'tf tf-md w100p'} value={'지급사업'} placeholder={''} readOnly={true} />
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td className="ta-left">
											<UIInput className={'tf tf-md w100p'} value={'Ko_KR'} placeholder={''} readOnly={true} />
										</td>
										<td className="ta-left">
											<UIInput className={'tf tf-md w100p'} value={'지급사업'} placeholder={''} readOnly={true} />
										</td>
									</tr>																		
								</tbody>
							</table>
							
						</div>

						<div className="hz-root hz-right hz-gap5 mt10">
								<Button color="pri-o" size="sm">수정</Button>
								<Button color="gray-o" size="sm">목록</Button>
							</div>

					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;