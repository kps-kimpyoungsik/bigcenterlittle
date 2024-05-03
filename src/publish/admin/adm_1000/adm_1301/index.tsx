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
					<h1 className="tx tx-hd2">과제 신청 안내 상세</h1>

					<form className="fo fo-col4" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-5">
								<p className="fo-key">제목</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'2024년도 동반성장 투자재원 출연심사 신청'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사업구분</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'민간자율'} placeholder={''} readOnly={true} />
								</div>
							</div>							
							<div className="fo-item">
								<p className="fo-key">과제신청안내년도</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'2024'} placeholder={''} readOnly={true} />
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
									<div className="ta-view h200 w100p">
										[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 심사가 완료되었습니다.
										[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 집행이 완료되었습니다. 지급금액 <em className="fc-err">$###</em>원, 집행일 <em className="fc-err">YYYY-MM-DD</em>
									</div>								
								</div>
							</div>							
							<div className="fo-item fo-m-1-5">
								<p className="fo-key">첨부파일</p>
								<div className="fo-value">
									<div>[D]fileupload UI</div>			
								</div>
							</div>								
						</div>
					</form>

					<div className="hz-root hz-right hz-gap5 mt10">
						<Button color="gray-o" size="sm">삭제</Button>
						<Button color="pri-o" size="sm">수정</Button>
						<Button color="gray-o" size="sm">목록</Button>
					</div>

				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;