import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_3000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	const modaladm3110 = useToggleState({});	
	const modaladm3120 = useToggleState({});	
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">

					<ul className="fww-brd">
						<li className=""><a href="">홈</a></li>
						<li className=""><a href="">관리자페이지</a></li>
						<li className=""><a href="">공시/발급</a></li>
						<li className=""><a href="">법인세공시</a></li>
					</ul>

					<main className="fww-main">
						<h1 className="tx tx-hd2">법인세 공시</h1>

						<form className="sf  sf-3col">
							<div className="inner">
								<div className="sf-item">
									<p className="sf-key">집행년도</p>
									<div className="sf-value">
										<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">$</option>
											</select>
										</div>
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">사업명</p>
									<div className="sf-value">
									<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">$</option>
											</select>
										</div>
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">기부내용</p>
									<div className="sf-value">
									<div className="sl sl-md w100p">
											<select name="" id="" className="">
												<option value="0">전체</option>
												<option value="1">$</option>
											</select>
										</div>
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">사업자번호</p>
									<div className="sf-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={'-없이 숫자만'} />
									</div>
								</div>
								<div className="sf-item">
									<p className="sf-key">출연기업</p>
									<div className="sf-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={''} />
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-center mb30">
							<button className="bt" data-color="pri" data-size="md"  type="button">조회</button>
						</div>

						<div className="tb-top">
							<div>
								<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
							</div>
							<div className="hz-root hz-gap5">
								<Button color="pri-o" size="sm">출연받은재산사용명세서</Button>
								<Button color="pri-o" size="sm">기부금품지출명세서</Button>
								<Button color="pri-o" size="sm">출연금 사용명세</Button>
								<Button color="gray-o" size="sm">다운로드</Button>
								<div className="sl sl-sm w120">
									<select name="" id="" className="">
										<option value="20">20개씩보기</option>
										<option value="50">50개씩보기</option>
										<option value="100">100개씩보기</option>
										<option value="200">200개씩보기</option>
										<option value="500">500개씩보기</option>
										<option value="1000">1000개씩보기</option>
									</select>
								</div>
							</div>
						</div>
						<div className="ibsheet">[D] IBSHEET 영역</div>

						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}
						<br/><br/>
						<Button color='gray' size="sm" onClick={modaladm3110.open}>adm_3110p 열기</Button> <br /><br />
						<Button color='gray' size="sm" onClick={modaladm3120.open}>adm_3120p 열기</Button> <br /><br />
						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}						

					</main>

				</div>
				{/* modal - 3110 */}	
				<ModalPopup
				open={modaladm3110.isShowing}
				title="연장공문 파일업로드"
				size="mid"
				onClose={modaladm3110.close}
			>
				<div className="modal-con">
					Fileupload...
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='pri' size="md">저장</Button>
					</div>
				</div>	
			</ModalPopup>

				{/* modal - 3120 */}	
				<ModalPopup
				open={modaladm3120.isShowing}
				title="연장공문열람"
				size="mid"
				onClose={modaladm3120.close}
			>
				<div className="modal-con">
					<div className="ibsheet mb30">[D] IBSHEET 영역</div>
					<div>Fileupload...</div>
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">취소</Button>
						<Button color='pri' size="md">저장</Button>
					</div>
				</div>	
			</ModalPopup>			

		</PageContainer>
	);
}
export default ContentsContainer;