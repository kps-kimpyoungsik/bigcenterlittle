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
					<li><Link to="#">수요조사모집현황</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">수요조사 모집 내역</h1>

					<h3 className="section-title mb15">모집내용</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">제목</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'입력했던 제목이 출력됩니다.'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">지원일시</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">모집상태</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'모집중'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">신청기업명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'수요조사에 지원한 기업명 출력'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">담당자명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'담당자명'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">직함</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'직함출력'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">휴대폰번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'01000000000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">연락처</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'01000000000'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">이메일주소</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'abcde@gmail.com'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">상생협력기금 사용여부</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'사용'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">금액(원)</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'$'} placeholder={''} readOnly={true} />
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">붙임파일</h3>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">필수서류</p>
								<div className="fo-value">
									<div className="hz-root  hz-gap8 w100p">
										<UIInput className={'hz-item hz-fg tf tf-md'} value={'$'} placeholder={''} readOnly={true} />	
										<Button color="gray-o" size="md">미리보기</Button>
									</div>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">추가서류1</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'$'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">추가서류2</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'$'} placeholder={''} readOnly={true} />
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