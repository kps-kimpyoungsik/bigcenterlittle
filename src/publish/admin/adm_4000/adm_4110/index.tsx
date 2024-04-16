import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_4000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
function ContentsContainer() {
	const modaladm4111 = useToggleState({});
	const modaladm4112 = useToggleState({});
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<ul className="fww-brd">
					<li className=""><Link to="/admin">홈</Link></li>
					<li className=""><Link to="#">관리자페이지</Link></li>
					<li className=""><Link to="#">사용자관리</Link></li>
					<li className=""><Link to="#">회원관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">회원정보 상세</h1>
					<div className="fo fo-col3 mb10">
						<div className="inner">
							<div className="fo-item">
								<p className="fo-key">사용자유형</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="시스템" placeholder="" />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사용자ID</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="admin" placeholder="" />
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">사용자명</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="관리자" placeholder="" />
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">기업명</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="[111-82-22222]대·중소기업 농·어업협력재단" placeholder="" />
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">이메일</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="admin@email.com" placeholder="" />
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">사무실전화번호</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="02-1111-2344" placeholder="" />
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">이메일 인증</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="예" placeholder="" />
								</div>						
							</div>
							<div className="fo-item">
								<p className="fo-key">인증일시</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="2024-03-15 15:06:23" placeholder="" />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">비밀번호오류횟수</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="3" placeholder="" />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">사용여부</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="아니오" placeholder="" />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">등록자</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="시스템" placeholder="" />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">등록일시</p>
								<div className="fo-value">
									<input readOnly name="" id="" className="tf tf-md w100p" type="text" value="2024-03-15 15:06:23" placeholder="" />
								</div>
							</div>								
						</div> 
					</div>						
					<div className="hz-root hz-right hz-gap5">
						<Button color='gray-o' size="sm" >비밀번호 오류해제</Button>
						<Button color='gray-o' size="sm" onClick={modaladm4111.open}>권한등록</Button>
						<Button color='gray-o' size="sm" onClick={modaladm4112.open}>사업지정</Button>
						<Button color='gray-o' size="sm" >임시비밀번호발급</Button>
						<Button color='pri-o' size="sm" >수정</Button>
						<Button color='gray-o' size="sm" >출연기업승인</Button>
						<Button color='gray-o' size="sm" >이메일 인증 재발송</Button>
						<Button color='gray-o' size="sm" >비밀번호 오류해제</Button>
						<Button color='gray-o' size="sm" >목록</Button>
					</div>
				</main>
			</div>
			{/* mdaol - 권한등록 */}
			<ModalPopup
				open={modaladm4111.isShowing}
				title="권한등록"
				size="mid"
				onClose={modaladm4111.close}
			>
				<div className="modal-con">
					권한등록
				</div>
				<div className="modal-bottom">
					<Button color='pri' size="big">권한지정</Button>
				</div>	
			</ModalPopup>
			{/* mdaol - 사업지정 */}
			<ModalPopup
				open={modaladm4112.isShowing}
				title="사업지정"
				size="mid"
				onClose={modaladm4112.close}
			>
				<div className="modal-con">
					사업지정
				</div>
				<div className="modal-bottom">
					<Button color='pri' size="big">사업지정</Button>
				</div>	
			</ModalPopup>
		</PageContainer>
	);
}
export default ContentsContainer;