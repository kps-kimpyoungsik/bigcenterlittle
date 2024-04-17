import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<ul className="fww-brd">
					<li><Link to="/admin/">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">시스템관리</Link></li>
					<li><Link to="#">펌뱅킹관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">펌뱅킹정보 상세</h1>
					<h2 className="tx tx-hd3">기본정보</h2>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">사업자번호</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'123-12-12345'} placeholder={'-없이 숫자만'} readOnly={true}/>
																	</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">사업장</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w100p'} value={'대중소농어업협력재단'} placeholder={''} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">펌뱅킹 별칭</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w100p'} value={'상생협력기금'} placeholder={''} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">은행</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w100p'} value={'하나은행'} placeholder={''} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">VAN구분</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w100p'} value={'VAN가상계좌'} placeholder={''} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">기관코드</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'00001234'} placeholder={''} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">송신 아이디</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'ITCENGROUP'} placeholder={''} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">수신 아이디</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'ITCENGROUP'} placeholder={''} readOnly={true}/>
								</div>
							</div>
						</div> 
					</form>
					<h2 className="tx tx-hd3">모계좌정보</h2>
					<div className="tb-top">
						<div>
							<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
						</div>
						<div className="hz-root">
							<Button color="gray-o" size="md">모계좌 등록</Button>
						</div>
					</div>
					<div className='ibsheet'>[D] IBSHEET 영역</div>
					<div className="pg">
						<div className="group">
							<button type="button" className="item first">처음</button>
							<button type="button" className="item prev">이전</button>
						</div>
						<div className="group">
							<button type="button" className="item">1</button>
							<button type="button" className="item active">2</button>
							<button type="button" className="item">3</button>
							<button type="button" className="item">4</button>
							<button type="button" className="item">5</button>
							<button type="button" className="item">99</button>
							<button type="button" className="item">999</button>
							<button type="button" className="item">9999</button>
						</div>
						<div className="group">
							<button type="button" className="item next">다음</button>
							<button type="button" className="item last">끝</button>
						</div>
					</div>							
					<div className="nd">
						<i className="ic"></i>
						<p className="tx tx-cp2 fc-666">데이터가 없습니다.</p>
					</div>					
					<div className="hz-root hz-right hz-gap5 mt10">
						<Button color="pri-o" size="sm">수정</Button>
						<Button color="gray-o" size="sm">목록</Button>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;