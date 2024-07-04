import React,{useEffect} from "react";
import Button from 'components/buttons/';
import ModalPopup from 'components/modal/';
import useToggleState from 'components/hooks/useToggleState';
function ContentsContainer() {
	const alertType1 = useToggleState({});
	const alertType2 = useToggleState({});
	const alertType3 = useToggleState({});
	const alertType4 = useToggleState({});  // 20240704 추가
	useEffect(() => {
		// alertType1.setShowing(true);
	},[]);
	return (
		<div>
			<h1 className="deco-h1">AL(알럿트)</h1>
			<div style={{ gap:'10px'}}>
				
				<Button color='gray-o' size="sm" onClick={alertType1.open}>자동로그아웃</Button><br /><br />
				<Button color='gray-o' size="sm" onClick={alertType2.open}>컨펌창</Button><br /><br />
				<Button color='gray-o' size="sm" onClick={alertType3.open}>첨부파일업로드</Button><br /><br />
				<Button color='gray-o' size="sm" onClick={alertType4.open}>Type4. With이미지</Button><br /><br /> {/* 20240704 추가 */}
			</div>
			
			<ModalPopup
				open={alertType1.isShowing}
				title="noTitle"
				size="alert"
				onClose={alertType1.close}
				
			>
				<div className="modal-con">
					<p className="msg">
						<span className="fc-pri">9분 59초</span> 후 자동 로그아웃됩니다.
					</p>
				</div>
				<div className="modal-bottom">
					<Button color='gray-o' size="md">취소</Button>
					<Button color='pri' size="md">확인</Button>
					
				</div>	
			</ModalPopup>
			<ModalPopup
				open={alertType2.isShowing}
				title="noTitle"
				size="alert"
				onClose={alertType2.close}
			>
				<div className="modal-con">
					<p className="msg">
						<span className="fc-pri">*</span> 항목은 필수입력입니다.
					</p>
				</div>
				<div className="modal-bottom">
					<Button color='gray-o' size="md">취소</Button>
					<Button color='pri' size="md">확인</Button>
					
				</div>	
			</ModalPopup>
			<ModalPopup
				open={alertType3.isShowing}
				title="noTitle"
				size="alert"
				onClose={alertType3.close}
			>
				<div className="modal-con">
					<p className="msg">
						png는 허용하지 않는 확장자입니다.<br />
						허용 확장자: <span className="fc-pri">pdf</span>
					</p>
				</div>
				<div className="modal-bottom">
					<Button color='gray-o' size="md">취소</Button>
					<Button color='pri' size="md">확인</Button>
					
				</div>	
			</ModalPopup>

			{/* 20240704 추가 */}
			<ModalPopup
				open={alertType4.isShowing}
				title="noTitle"
				size="alert04"
				onClose={alertType4.close}
			>
				<div className="modal-con">
					<img className="visual" src={require('assets/img/char/char_alert04.png')} alt="" />
					<p className="msg ta-center">
							<span className="d-block fs20 fw500 mb10">불편을 드려 죄송합니다.</span>
							<span className="d-block fc-666">
								일시적 오류가 발생 하였습니다. <br />
								잠시만 기다려주세요.
							</span>
							<br />
							<span className="">
								응답코드 (JEXS0000000) <br />
								응답코드 : 정의 되지 않은 오류가 발생하였습니다.
							</span>
					</p>
				</div>
				<div className="modal-bottom">
					<Button color='pri' size="md">확인</Button>
				</div>	
			</ModalPopup>
			{/* 20240704 추가 */}

		</div>
	);
}
export default ContentsContainer;