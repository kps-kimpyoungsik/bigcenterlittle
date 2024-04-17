import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">시스템관리</a></li>
						<li className=""><a href="">펌뱅킹관리</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">펌뱅킹정보 등록</h1>
						<form className="fo fo-col2">
							<div className="inner">
								<div className="fo-item fo-m-1-3  req">
									<p className="fo-key">사업자번호</p>
									<div className="fo-value">
									<input  name="" id="" className="tf tf-md w375" type="number" value="" placeholder="-없이 숫자만" />
									</div>
								</div>
								<div className="fo-item fo-m-1-3  req">
									<p className="fo-key">사업장</p>
									<div className="fo-value">
										<input  name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="" />
									</div>
								</div>
								<div className="fo-item fo-m-1-3  req">
									<p className="fo-key">펌뱅킹 별칭</p>
									<div className="fo-value">
										<input  name="" id="" className="tf tf-md w100p" type="text" value="" placeholder="" />
									</div>
								</div>
								<div className="fo-item fo-m-1-3  req">
									<p className="fo-key">은행</p>
									<div className="fo-value">
										<div className="sl sl-md w375">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="1">공통</option>
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3  req">
									<p className="fo-key">VAN구분</p>
									<div className="fo-value">
										<div className="sl sl-md w375">
											<select name="" id="" className="">
												<option value="0">선택</option>
												<option value="1">VAN CMS</option>
												<option value="2">VAN  가상계좌</option>
											</select>
										</div>									
									</div>
								</div>
								<div className="fo-item fo-m-1-3  req">
									<p className="fo-key">기관코드</p>
									<div className="fo-value">
										<input  name="" id="" className="tf tf-md w375" type="text" value="" placeholder="" />
									</div>
								</div>
								<div className="fo-item fo-m-1-3  req">
									<p className="fo-key">송신 아이디</p>
									<div className="fo-value">
										<input  name="" id="" className="tf tf-md w375" type="text" value="" placeholder="" />
									</div>
								</div>
								<div className="fo-item fo-m-1-3  req">
									<p className="fo-key">수신 아이디</p>
									<div className="fo-value">
										<input  name="" id="" className="tf tf-md w375" type="text" value="" placeholder="" />
									</div>
								</div>
							</div> 
						</form>
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