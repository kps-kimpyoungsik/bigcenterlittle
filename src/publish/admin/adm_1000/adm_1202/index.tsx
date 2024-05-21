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
				<Breadcrumb gnbIdx={0} lnbD1Idx={1}  lnbD2Idx={1}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">출연 신청 안내 등록</h1>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item req fo-m-1-3">
								<p className="fo-key">제목</p>
								<div className="fo-value">
								<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req fo-m-1-3">
								<p className="fo-key">내용</p>
								<div className="fo-value">
									<div>[D]에디터 영역</div>			
								</div>
							</div>
							<div className="fo-item fo-m-1-3">
								<p className="fo-key">첨부파일</p>
								<div className="fo-value">
									<div>[D]파일업로드 영역</div>			
								</div>
							</div>
						</div>
					</form>

					<div className="hz-root hz-right hz-gap5 mb10">
						<Button color="pri-o" size="sm" >저장</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>										
					
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;