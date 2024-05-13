import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_1000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import UIDatePicker from "components/datepicker";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	const modaladm1601p = useToggleState({});
	const modaladm1602p = useToggleState({});		
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/admin/">홈</Link></li>
					<li><Link to="#">관리자페이지</Link></li>
					<li><Link to="#">기금관리</Link></li>
					<li><Link to="#">성과관리</Link></li>
				</ul>
				<main className="fww-main">
					<h1 className="tx tx-hd2">성과관리 리스트</h1>

					<form className="sf sf-2col">
						<div className="inner">
							<div className="sf-item sf-m-1-3">
								<p className="sf-key">등록일자</p>
								<div className="sf-value">
									<div className="hz-root hz-left hz-gap8">
										<div className="hz-item hz-root hz-gap5">
											<UIDatePicker className="hz-item"/>
											<span className="hz-item">~</span>
											<UIDatePicker className="hz-item"/>
										</div>
										<div className="hz-item hz-root hz-gap5">
											<button className="bt" data-color="pri-o2" data-size="md" type="button">이전3개월</button>
											<button className="bt" data-color="pri-o2" data-size="md" type="button">이전6개월</button>
											<button className="bt" data-color="pri" data-size="md" type="button">이전12개월</button>
											<button className="bt" data-color="pri-o2" data-size="md" type="button">이전24개월</button>
										</div>
									</div>		
								</div>
							</div>
							<div className="sf-item sf-m-1-3">
								<p className="sf-key">지표목</p>
								<div className="sf-value">
									<UIInput className={'tf tf-md w100p'} value={''} placeholder={'지표목을 입력하세요'} />
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
							<Button color="gray-o" size="sm">지표목 삭제</Button>
							<Button color="pri-o" size="sm">지표목 등록</Button>
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

						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}
						<br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1601p.open}>1601p</Button> <br/><br/>
						<Button color='gray' size="sm" onClick={modaladm1602p.open}>1602p</Button>
						{/* 실제 개발시 필요없는 버튼입니다. 삭제해주세요 */}

				</main>
			</div>

		{/* modal - 1601p*/}
		<ModalPopup
				open={modaladm1601p.isShowing}
				title="지표목 등록"
				size="mid"
				onClose={modaladm1601p.close}
			>
				<div className="modal-con">
					<div className="tb-top">
						<div className="hz-root hz-right hz-gap5 w100p">
							<Button color="pri-o" size="sm">행추가</Button>
							<Button color="gray-o" size="sm">행삭제</Button>
						</div>
					</div>
					<div className="ibsheet">[D] IBSHEET 영역</div>
				</div>
				<div className="modal-bottom">
					<div className="hz-root hz-gap8">
						<Button color='gray-o' size="md">취소</Button>
						<Button color='pri' size="md">저장</Button>
					</div>
				</div>	
			</ModalPopup>

		{/* modal - 1602p*/}
		<ModalPopup
				open={modaladm1602p.isShowing}
				title="지표목 수정"
				size="mid"
				onClose={modaladm1602p.close}
			>
				<div className="modal-con">
					<div className="ibsheet">[D] IBSHEET 영역</div>
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