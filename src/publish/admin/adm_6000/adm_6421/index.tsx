import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import UIDatePicker from "components/datepicker";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">시스템관리</a></li>
						<li className=""><a href="">메뉴관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">메뉴 관리</h1>
						<div className="pt">
							<div className="row gap30">
								<div className="col w320"> 
									{/* 왼쪽 */}

									<div className="pannel">
										<div className="pannel-top">
											<div className="hz-root hz-gap10">
											<span className="hz-item tx tx-cp2">사이트</span>
											<div className="hz-item hz-fg sl sl-md">
												<select name="" id="" className="">
													<option value="1" selected>포탈</option>
													<option value="2">관리자</option>
												</select>
											</div>											
										</div>
									</div>
									<div className="pannel-bottom">
												폴더트리 위치
										</div>

									</div>
								</div>
								<div className="col fg"> 
									{/* 오른쪽 */}
									<Button color="gray-o" size="md">하위메뉴 추가</Button>

								</div>
							</div>
						</div>						
					</main>

				</div>
		</PageContainer>
	);
}
export default ContentsContainer;