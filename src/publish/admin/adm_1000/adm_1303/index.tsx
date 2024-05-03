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
					<h1 className="tx tx-hd2">과제 신청 안내 수정</h1>
					<form className="fo fo-col4" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-5">
								<p className="fo-key">제목</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'2024년도 동반성장 투자재원 출연심사 신청'} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item">
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
							<div className="fo-item">
								<p className="fo-key">과제신청안내년도</p>
								<div className="fo-value">
									<UIDatePicker className="hz-item"/>
								</div>
							</div>							
							<div className="fo-item">
								<p className="fo-key">등록자</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">등록일시</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-5">
								<p className="fo-key">내용</p>
								<div className="fo-value">
									[D] Editor 영역
								</div>
							</div>							
							<div className="fo-item fo-m-1-5">
								<p className="fo-key">첨부파일</p>
								<div className="fo-value">
									<div>[D] fileupload 영역</div>			
								</div>
							</div>								
						</div>
					</form>

					<div className="hz-root hz-right hz-gap5 mt10">
						<Button color="pri-o" size="sm">저장</Button>
						<Button color="gray-o" size="sm">삭제</Button>
						<Button color="gray-o" size="sm">취소</Button>
						<Button color="gray-o" size="sm">목록</Button>
					</div>					
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;