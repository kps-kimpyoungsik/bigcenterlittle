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
					<li><Link to="#">출연관리</Link></li>
					<li><Link to="#">출연신청안내관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">출연 신청 안내 상세</h1>

					<div className="hz-root hz-right hz-gap5 mb10">
						<Button color="gray-o" size="sm" >삭제</Button>
						<Button color="pri-o" size="sm" >수정</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>					
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">출연신청구분</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'사업출연'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">제목</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'2024년도 동반성장 투자재원 출연심사 신청'} placeholder={''} readOnly={true} />
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
								<UIInput className={'tf tf-md w100p'} value={'등록일시'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>

					<div className="ta-view h200 mt30">
						[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 심사가 완료되었습니다.
						[상생협력재단] <em className="fc-err">NAME(기업명)</em>-과제번호 <em className="fc-err">$####</em>의 집행이 완료되었습니다. 지급금액 <em className="fc-err">$###</em>원, 집행일 <em className="fc-err">YYYY-MM-DD</em>
					</div>

					fileupload...

				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;