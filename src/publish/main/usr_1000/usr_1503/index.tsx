
import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user1000Aside";
import Button from 'components/buttons/';
import UIInputPW from 'components/input/inputPW';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="/main/usr_1000/usr_1500">마이페이지</Link></li>
					<li><Link to="#">회원탈퇴</Link></li>
				</ul>
				<main className="fww-main" data-layout="usr">
					<div className="mypage pw-edit">
						<h1 className="tx tx-hd2">회원탈퇴</h1>
						<div className="sub-tx">회원 탈퇴를 하기 전 , 다음 내용을 꼭 확인해 주세요.</div>
						<ul className="withdrawal mb15">
							<li>탈퇴 후, 회원님의 개인정보(핸드폰번호)가 삭제됩니다.<br />(과제관리를 위하여 담당자 성함, 회사전화, 회사이메일주소는 삭제되지 않습니다.)</li>
							<li>탈퇴한 아이디는 재사용 및 복구가 불가능하오니 이점 양지하여 주시기 바랍니다.</li>
						</ul>
						<label htmlFor="chk" className="hz-item ip-ch-label ip-ch-18 mb15">
							<input id="chk" className="ip-ch" type="checkbox" />
							<span className="check"></span> 
							<span className="txt">안내사항을 모두 확인하였으며, 이에 동의합니다.</span>
						</label>
						
						<div className="chk-id">
							아이디 : <span className="fc-pri">idname_showing</span>
						</div>
						<form name="" action="" method="">
							<div className="find-pw mb90" >
								<div className="form-items">
									<label className="mb15">비밀번호 입력</label>
									<UIInputPW className={'tf tf-big w100p'} value={''} placeholder={'비밀번호를 입력하세요'} />
								</div>
							</div>
						</form>
						<div className="hz-root hz-center hz-gap10 mt90">
							<Button color='gray-o' size="big">취소</Button>
							<Button color='pri' size="big">탈퇴</Button>
						</div>
					</div>
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;