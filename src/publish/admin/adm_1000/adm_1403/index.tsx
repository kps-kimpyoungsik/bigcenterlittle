import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={0} lnbD1Idx={3}  lnbD2Idx={1}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">지급 신청 안내 수정</h1>
					<div className="hz-root hz-right hz-gap5 mb10">
						<Button color="pri-o" size="sm" >저장</Button>
						<Button color="gray-o" size="sm" >삭제</Button>
						<Button color="gray-o" size="sm" >취소</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>					
					<form className="fo fo-col4" name="" action="" method="">
						<div className="inner">
							<div className="fo-item req">
								<p className="fo-key">지급신청안내년도</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'2024'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-2-5 req">
								<p className="fo-key">제목</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'2024년도 동반성장 투자재원 지급심사 신청'} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">등록자</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'홍길동'} placeholder={''} readOnly={true} />
								</div>
							</div>
							<div className="fo-item fo-m-2-5">
								<p className="fo-key">등록일시</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={'YYYY-MM-DD HH:MM:SS'} placeholder={''} readOnly={true} />
								</div>
							</div>							
							<div className="fo-item fo-m-1-5 req">
								<p className="fo-key">내용</p>
								<div className="fo-value">
									[D]Editor 영역
								</div>
							</div>
							<div className="fo-item fo-m-1-5">
								<p className="fo-key">첨부파일</p>
								<div className="fo-value">
									[D]K-Upload 영역
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