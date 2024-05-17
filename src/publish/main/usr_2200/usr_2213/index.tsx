
import React,{useEffect} from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user2200Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
import ModalPopup from 'components/modal/';
import useToggleState from 'components/hooks/useToggleState';
import UIDatePicker from "components/datepicker";
function ContentsContainer() {
	const modalusr2213 = useToggleState({});
	useEffect(() => {
		modalusr2213.setShowing(true);
	},[]);
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={3} lnbIdx={2}/>
				<main className="fww-main">
					<h1 className="tx tx-hd2">통합정보조회</h1>
				</main>
			</div>
			{/* modal - 과제 선택 */}
			<ModalPopup
				open={modalusr2213.isShowing}
				title="과제 선택"
				size="mid"
				onClose={modalusr2213.close}
			>
				<div className="modal-con">
					<div className="modal-tskana">
						<form className="fo fo-col2 mb15" name="" action="" method="">
							<div className="inner">
								<div className="fo-item fo-item fo-m-1-3">
									<p className="fo-key">신청기간</p>
									<div className="fo-value">
										<div className="hz-root hz-gap5">
											<UIDatePicker className="hz-item"/>
											<span className="hz-item">~</span>
											<UIDatePicker className="hz-item"/>
										</div>
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제번호</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={"과제번호를 입력하세요."} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">과제명</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={"과제명을 입력하세요."} />
									</div>
								</div>
								<div className="fo-item">
									<p className="fo-key">신청자</p>
									<div className="fo-value">
										<UIInput className={'tf tf-md w100p'} value={''} placeholder={"신청자명을 입력하세요."} />
									</div>
								</div>
							</div>
						</form>
						<div className="hz-root hz-center mb30">
							<Button color="pri" size="md">조회</Button>
						</div>
						<div className="ibsheet">
							<p style={{height:"300px"}}>[D] IBSHEET 영역</p>
						</div>
						<div className="pg">
							<div className="group">
								<button type="button" className="item first">처음</button>
								<button type="button" className="item prev">이전</button>
							</div>
							<div className="group">
								<button type="button" className="item">1</button>
								<button type="button" className="item active">2</button>
								<button type="button" className="item">3</button>
								<button type="button" className="item">4</button>
								<button type="button" className="item">5</button>
								<button type="button" className="item">99</button>
								<button type="button" className="item">999</button>
								<button type="button" className="item">9999</button>
							</div>
							<div className="group">
								<button type="button" className="item next">다음</button>
								<button type="button" className="item last">끝</button>
							</div>
						</div>
					</div>
				</div>
			</ModalPopup>
		</PageContainer>
	);
}
export default ContentsContainer;