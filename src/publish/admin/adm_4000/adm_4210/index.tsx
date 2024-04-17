import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_4000Aside";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<ul className="fww-brd">
					<li><Link to="/admin">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">사용자관리</Link></li>
					<li><Link to="#">기업관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">기업상세</h1>
					<h2 className="tx tx-hd3">기본정보</h2>
					<div className="fo fo-col2">
						<div className="inner">
							<div className="fo-item"> 
								<p className="fo-key">기업규모</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'대기업'} placeholder={'기업규모'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">업종</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'제조업'} placeholder={'업종'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">법인등록번호</p>
								<div className="fo-value">
									<UIInput type={'number'} className={'tf tf-md w100p'} value={'111122-3333334'} placeholder={'법인등록번호'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item"> 
								<p className="fo-key">사업자등록번호</p>
								<div className="fo-value">
									<UIInput type={'number'} className={'tf tf-md w100p'} value={'123-12-12345'} placeholder={'사업자등록번호'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">기업명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'상생협럭종합관리 주식회사'} placeholder={'기업명'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">대표자명</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={'대표자명'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item"> 
								<p className="fo-key">평가구분</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'동반성장지수'} placeholder={'평가구분'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">평가</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'제조업 - 전기·전자'} placeholder={'평가'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">집단</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'-'} placeholder={'집단'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item"> 
								<p className="fo-key">설립일자</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'2018-06-01(금)'} placeholder={'설립일자'} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">설립형태</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'영리'} placeholder={'설립형태'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">홈페이지</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'http://www.abcd1234page.com/kr/index.do'} placeholder={'홈페이지'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">주소</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'04554 서울특별시 중구 퇴계로 173'} placeholder={'주소'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">계좌번호</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'123-212582-81123'} placeholder={'계좌번호'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">기업로고</p>
								<div className="fo-value">
									<div>File UI 미작업 + small 아이콘</div>
								</div>						
							</div>								
							<div className="fo-item">
								<p className="fo-key">등록자</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'관리자'} placeholder={'등록자'} readOnly={true}/>
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">등록일시</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={'YYY-MM-DD(월)'} placeholder={'등록일시'} readOnly={true}/>
								</div>						
							</div>								
						</div> 
					</div>								
					<h2 className="tx tx-hd3">사업자등록증 이력</h2>
					<div className="tb mb10">
						<table>
							<caption></caption>
							<colgroup>
								<col width="90px" />
								<col width="" />
								<col width="150px" />
								<col width="180px" />
							</colgroup>
							<thead>
								<tr>
									<th>No</th>
									<th>파일명</th>
									<th>등록자</th>
									<th>등록일시</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td className="ta-left">
										사업자 등록증.pdf (57.44 KB)
									</td>
									<td>포탈 기업등록용</td>
									<td>2022-05-23 11:36:06</td>
								</tr>
								<tr>
									<td>2</td>
									<td className="ta-left">
										사업자 등록증 수정본.pdf (56.22 KB)
									</td>
									<td>관리자</td>
									<td>2022-05-23 11:36:06</td>
								</tr>									
							</tbody>
						</table>
					</div>
					<div className="hz-root hz-right hz-gap5">
						<Button color="pri-o" size="sm">사업자등록증 등록/경신</Button>
						<Button color="pri-o" size="sm">수정</Button>
						<Button color="gray-o" size="sm">목록</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;