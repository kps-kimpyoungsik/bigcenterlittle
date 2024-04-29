
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	const sectors = [
		'농업, 임업 및 어업', '광업', '제조업', '전기·가스 증기 및 수도사업', '하수 · 폐기물 처리, 원료재생 및 환경복원업', '건설업', '도매 및 소매업', '운수업', 
		'숙박 및 음식점업', '출판, 영상, 방송통신 및 정보서비스업',  '금융 및 보험업','부동산업 및 임대업',	'전문, 과학 및 기술 서비스업',	'공공행정, 국방 및 사회보장 행정',
		'교육 서비스업', '보건업 및 사회복지 서비스업', '예술, 스포츠 및 여가관련 서비스업','협회 및 단체, 수리 및 기타 개인 서비스업',	
		'가구내 고용활동 및 달리 분류되지 않은 자가소비 생산활동','국제 및 외국기관','기타'
	];
	return (
		<PageContainer>
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">마이페이지</Link></li>
					<li><Link to="#">내기업정보</Link></li>
				</ul>
				<main className="fww-main" data-layout="usr">
					<div className="mypage">
						<h1 className="tx tx-hd2">내기업정보</h1>
						<div className="top-guide">
							<span className="fc-pri">*</span>&nbsp;필수 입력
						</div>
						<form className="fo fo-col2" name="" action="" method="">
							<div className="inner">
								<div className="fo-item req">
									<p className="fo-key">기업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'기업명 출력'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">대표자명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''} />
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">업종</p>
									<div className="fo-value">
										<div className="sl sl-md">
											<select>
												<option value="">업종</option>
												{sectors.map((sec, idx) =>
													<option key={idx}>{sec}</option>
												)}
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">설립일자</p>
									<div className="fo-value">
										<div className="w100p">
											<UIDatePicker />
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">설립형태</p>
									<div className="fo-value">
										<div className="sl sl-md">
											<select>
												<option>영리</option>
												<option>비영리</option>
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item req">
									<p className="fo-key">기업규모</p>
									<div className="fo-value">
										<div className="sl sl-md">
											<select>
												<option>대기업</option>
												<option>공공기관</option>
												<option>중견기업</option>
												<option>중소기업</option>
												<option>기타</option>
											</select>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">법인등록번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'0000-00-0000000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업자등록번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'000-00-00000'} placeholder={''} readOnly={true} />
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">아이디</p>
									<div className="fo-value">
										<div className="w-half">
											<UIInput className={'tf tf-md w100p'} value={'Idshowing'} placeholder={''} readOnly={true} />
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">주소</p>
									<div className="fo-value">
										<div className="address">
											<div className="hz-root hz-gap8">
												<UIInput className={'hz-item hz-fg tf tf-md'} value={'00000'} placeholder={''} disabled={true} />
												<Button color='gray-o' size="md">주소찾기</Button>
											</div>
											<UIInput className={'tf tf-md w100p mt8'} value={'서울특별시 중구 퇴계로 173'} placeholder={''} disabled={true} />
											<UIInput className={'tf tf-md w100p mt8'} value={'남산스퀘어빌딩 7층'} placeholder={''}/>
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3">
									<p className="fo-key">홈페이지</p>
									<div className="fo-value">
										<div className="w-half">
											<UIInput className={'tf tf-md w100p'} value={'www.win-win.or.kr'} placeholder={''} />
										</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">사업자등록증</p>
									<div className="fo-value">
										<div>file upload...</div>
									</div>
								</div>
								<div className="fo-item fo-m-1-3 req">
									<p className="fo-key">기업로고</p>
									<div className="fo-value">
										<div>file upload...</div>
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-center hz-gap10">
							<Button color='gray-o' size="big">취소</Button>
							<Button color='pri' size="big" href="/main/usr_1000/usr_1204">저장</Button>
						</div>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;