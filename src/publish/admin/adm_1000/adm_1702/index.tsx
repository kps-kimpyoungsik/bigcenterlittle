import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import UIDatePicker from "components/datepicker";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIInputFile from 'components/input/inputFile';
function ContentsContainer() {	
	return (		
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={0} lnbD1Idx={6}  lnbD2Idx={1}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">수요조사 안내문 등록</h1>
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3 req">
								<p className="fo-key">제목</p>
								<div className="fo-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} readOnly={false} />
								</div>
							</div>
							<div className="fo-item req">
								<p className="fo-key">모집기간</p>
								<div className="fo-value">
									<div className="hz-root hz-gap5">
										<UIDatePicker className="hz-item"/>
										<span className="hz-item">~</span>
										<UIDatePicker className="hz-item"/>
									</div>
								</div>
							</div>
							<div className="fo-item">
								<p className="fo-key">모집상태</p>
								<div className="fo-value">
									<div className="sl sl-md w100p">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">$</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</form>

					<h3 className="section-title mb15">내용등록</h3>
					<div className="mb10">[D]Editor 영역</div>
					{/*클래스옵션: fo-col2, fo-col3 sf-1row*/}
					<form className="fo fo-col2 mb30" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3 req">
								 
								<div className="fo-value">
									<div className="hz-root hz-gap8 w100p">
										<UIInputFile placeholder={'이미지 파일을 첨부해 주세요(jpg, gif, png 파일)'} id={'file01'} />
										<Button color="gray-o" size="md">삭제</Button>
									</div>

									{/* TypeFile 
									<div className="filebox w100p">
										<UIInput className={'tf tf-md'} value={''} placeholder={'이미지 파일을 첨부해 주세요(jpg, gif, png 파일)'} readOnly={false} />
										<label htmlFor="file" className="bt" data-color="pri-o2" data-size="md">파일찾기</label>
										<input type="file" id="file" />
									</div>
									*/}

								</div>
							</div>
						</div>
					</form>
					<div className="hz-root hz-right hz-gap5">
						<Button color="pri-o" size="sm" >저장</Button>
						<Button color="gray-o" size="sm" >목록</Button>
					</div>

					<h3 className="section-title mb15">첨부파일</h3>
					<div>[D]K-Upload 영역</div>

					<div className="hz-root hz-right hz-gap5">
						<Button color="gray-o" size="sm" >취소</Button>
						<Button color="pri" size="sm" >저장</Button>
					</div>

				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;