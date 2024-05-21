
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Button from 'components/buttons/';
import UIInputPW from 'components/input/inputPW';
function ContentsContainer() {
	const [activeIndex, setActiveIndex]=useState(0);
	const tabClickHandler=(index:number)=>{
		setActiveIndex(index);
	};
	return (
		<PageContainer>
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">로그인</Link></li>
				</ul>
				<main className="fww-main find-idpw-main">
					<div className="find-idpw">
						<h1 className="tx tx-hd2">아이디/비밀번호 찾기</h1>
						<ul className="tab-menu">
							<li className={activeIndex===0 ? "active" : ""} onClick={()=>tabClickHandler(0)}><button type="button">아이디찾기</button></li>
							<li className={activeIndex===1 ? "active" : ""} onClick={()=>tabClickHandler(1)}><button type="button">비밀번호찾기</button></li>
						</ul>
						<div className={ 'tab-cont' + (activeIndex===0 ? ' active' : '') }>
							<div className="id-result">
								<p>아이디가 확인되었습니다.<br />로그인 화면으로 이동하여 로그인해주세요.</p>
								<p className="member-id">아이디 : <span className="fc-pri">bigmiddle</span></p>
								
							</div>
							
							<div className="hz-root hz-center hz-gap10">
								<Button color='pri' size="big" href="/main/usr_1000/usr_1300">로그인 하기</Button>
							</div>
						</div>
						<div className={ 'tab-cont' + (activeIndex===1 ? ' active' : '') }>
							<form name="" action="" method="">
								<div className="find-pw">
									<h4 className="mb15">비밀번호 재설정</h4>
									<div className="sub-txt mb30">비밀번호 재설정 후 이용하시기 바랍니다.</div>
									<div className="form-items mb15">
										<label className="mb15">비밀번호</label>
										<UIInputPW className={'tf tf-big w100p'} value={''} placeholder={'비밀번호를 입력하세요'} />
										<p className="tx-msg">※ 영문, 숫자, 특수문자를 혼합으로 8~16자리까지 입력 가능합니다.</p>
									</div>
									<div className="form-items mb40">
										<label className="mb15">비밀번호 확인</label>
										<UIInputPW className={'tf tf-big w100p'} value={''} placeholder={'비밀번호를 입력하세요'} />
									</div>
									<div className="hz-root hz-center hz-gap10">
										<Button color='gray-o' size="big">취소</Button>
										<Button color='pri' size="big">저장</Button>
									</div>
									
								</div>
							</form>
						</div>
					</div>
				</main>
			</div>	
		</PageContainer>
	);
}
export default ContentsContainer;