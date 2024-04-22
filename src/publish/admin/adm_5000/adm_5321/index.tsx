import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_5000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	const modaladm5322 = useToggleState({});	
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<ul className="fww-brd">
					<li><Link to="/admin/">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">게시판관리</Link></li>
					<li><Link to="#">우수사례관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">우수사례 상세</h1>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">제목</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'[대·중소기업·농어업협력재단] 운영 관리 규정'} placeholder={''} readOnly={true}/>
								</div>
							</div>						
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">게시상태</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'보임'} placeholder={''} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">
									썸네일 <br />
									(pixel: 000 × 000)
								</p>
								<div className="fo-value fs0">
									<img className="w125 h90" src="https://picsum.photos/536/354" alt="" onClick={modaladm5322.open} />
								</div>
							</div>		
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">내용</p>
								<div className="fo-value">
									우수사례 관련 내용이 출력됩니다. <br/>
									편집기로 이미지 삽입한 내용도 함께 출력됩니다. <br/>
									내용은 필수입력 항목입니다. <br/>
									사용자단에 갤러리(앨범) 형식의 게시판으로 리스팅 됩니다. <br/>
									썸네일 이미지도 필수 항목으로 업로드 해야 합니다.
								</div>
							</div>												
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">첨부파일</p>
								<div className="fo-value">
									파일업로더
									<div className="hz-root hz-left hz-gap5">
										<Button color="gray-o" size="sm">파일추가</Button>
										<Button color="gray-o" size="sm">항목제거</Button>
										<Button color="gray-o" size="sm">전체 항목제거</Button>
										<Button color="gray-o" size="sm">다운로드</Button>
									</div>
								</div>
							</div>										
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">조회수</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'1,000'} placeholder={''} readOnly={true}/>
								</div>
							</div>
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">등록자</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'관리자'} placeholder={''} readOnly={true}/>
								</div>
							</div>							
							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">등록일시</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={'2024-03-19(화)'} placeholder={''} readOnly={true}/>
								</div>
							</div>
						</div> 
					</form>
					<div className="hz-root hz-right hz-gap5">
						<Button color="gray-o" size="sm">삭제</Button>
						<Button color="pri-o" size="sm">수정</Button>
						<Button color="gray-o" size="sm">목록</Button>
					</div>					
				</main>
			</div>
			{/* modal - 5322 */}
			<ModalPopup
				open={modaladm5322.isShowing}
				title="미리보기"
				size="mid"
				onClose={modaladm5322.close}
			>
				<div className="modal-con">
					<img className="w100p" src="https://picsum.photos/536/354" alt="" />
				</div>
				<div className="modal-bottom">
					<Button color='pri' size="big">확인</Button>
				</div>	
			</ModalPopup>			
		</PageContainer>
	);
}
export default ContentsContainer;