import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<Breadcrumb gnbIdx={5} lnbD1Idx={2} />

					<main className="fww-main">
						<h1 className="tx tx-hd2">사업 상세</h1>

						<form className="fo fo-col3 mb10" name="" action="" method="">
							<div className="inner">
								<div className="fo-item">
									<p className="fo-key">사업코드</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'999'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'통합출현사업'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업약칭</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'통합출현'} placeholder={''} readOnly={true}/>
									</div>
								</div>							
								<div className="fo-item">
									<p className="fo-key">사업시작일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'2011-01-01(토)'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업종료일</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">지급품의연결여부</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'선택사항'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업용도</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'상생협력기금의 조성 운영 및 관리를 위한 경비'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업용도(소분류)</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'섬광공유제'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">중견기업허용여부</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'아니오'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업종류</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'운영비'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업유형</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'운영비'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">사업그룹명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">발급내역</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'기타'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">주담당자</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'관리자'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">부서장</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'강감찬'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제운영</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'아니오'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">운영사업</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'성과공유제'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">비고사항</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">발행키</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'기타'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">등록자</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'관리자'} placeholder={''} readOnly={true}/>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">등록일시</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={'2020-12-15(화)'} placeholder={''} readOnly={true}/>
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
		</PageContainer>
	);
}
export default ContentsContainer;