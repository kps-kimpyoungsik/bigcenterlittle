import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_5000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<Breadcrumb gnbIdx={4} lnbD1Idx={3} />
				<main className="fww-main">
					<h1 className="tx tx-hd2">우수사례 등록</h1>
					<form className="fo fo-col2" name="" action="" method="">
						<div className="inner">
							<div className="fo-item fo-m-1-3  req">
								<p className="fo-key">제목</p>
								<div className="fo-value">
									<UIInput  className={'tf tf-md w375'} value={''} placeholder={''} />
								</div>
							</div>
							<div className="fo-item fo-m-1-3  req">
								<p className="fo-key">게시상태</p>
								<div className="fo-value">
									<div className="sl sl-md w375">
										<select name="" id="" className="">
											<option value="0">선택</option>
											<option value="1">보임</option>
											<option value="2">안보임</option>
										</select>
									</div>
								</div>
							</div>							
							
							{/* [M.20240509] 추가 */}
							<div className="fo-item fo-m-1-3">
								<div className="fo-key fdc">
									<span className="req">썸네일</span>
									<span>(pixel: 353 × 280) </span> {/* [M] 사이즈값 추가 */}
								</div>
								<div className="fo-value">
									
								</div>
							</div>						
							{/* //[M.20240509] 추가 */}

							<div className="fo-item fo-m-1-3 ">
								<p className="fo-key">내용</p>
							<div className="fo-value">
								텍스트에어리어...
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

						</div> 
					</form>
					<div className="hz-root hz-right hz-gap5">
						<Button color="pri-o" size="sm">저장</Button>
						<Button color="gray-o" size="sm">목록</Button>
					</div>					
				</main>
			</div>
		</PageContainer>
	);
}
export default ContentsContainer;