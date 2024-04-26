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
					<h1 className="tx tx-hd2">출연 신청 안내 등록</h1>
					<div className="hz-root hz-right hz-gap5 mb10">
						<Button color="pri-o" size="sm" >저장</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>					
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">제목</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={false} />
								</div>
							</div>
						</div>
					</form>

					<div>[D]에디터 영역</div>
					<div>[D]파일업로드 영역</div>
									
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;