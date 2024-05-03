import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
import UIDatePicker from "components/datepicker";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/admin/">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">기금관리</Link></li>
					<li><Link to="#">과제관리</Link></li>
					<li><Link to="#">과제신청안내관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">과제 신청 안내 등록</h1>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">제목</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'2024년도 동반성장 투자재원 출연심사 신청'} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">사업구분</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">과제신청안내년도</p>
								<div className="fo-value">
									<UIDatePicker className="hz-item"/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">내용</p>
								<div className="fo-value">
									[D]Editor 영역
								</div>
							</div>							
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">첨부파일</p>
								<div className="fo-value">
								[D]Fileupload 영역
								</div>
							</div>							

						</div>
					</form>					
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;