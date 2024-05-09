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
					<li><Link to="#">수요조사관리</Link></li>
					<li><Link to="#">수요조사관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">수요조사 안내문 상세</h1>
					
					<form className="fo fo-col3" name="" action="" method="">
						<div className="inner">
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
							<div className="fo-item">
								<p className="fo-key">구분번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'2024-01-001'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">모집기간</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD ~ YYYY-MM-DD'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">상태</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'모집중'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>

					<div className="ta-view h200 mt30">
						[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 심사가 완료되었습니다.
						[상생협력재단] <em className="fc-err">NAME
						(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 집행이 완료되었습니다. 지급금액 <em className="fc-err">$###</em>원, 집행일 <em className="fc-err">YYYY-MM-DD</em>
					</div>

					<div className="info-bottom">
						<p className="desc">
							$제목$ 공고문을 확인하고, 위와 같이 신청서를 제출하였습니다.
						</p>
						<p className="who">
							대·중소기업·농어업협력재단 사무총장 귀하
						</p>
					</div>					

					<h3 className="section-title mb15">첨부파일</h3>
					<div>[D]K-Upload 영역</div>

					<div className="hz-root hz-right hz-gap5">
						<Button color="gray-o" size="sm" >삭제</Button>
						<Button color="pri-o" size="sm" >수정</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>


				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;