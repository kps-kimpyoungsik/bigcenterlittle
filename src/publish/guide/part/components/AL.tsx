import React from "react";
import Button from 'components/buttons/';
import ModalPopup from 'components/modal/';
import useToggleState from 'components/hooks/useToggleState';
function ContentsContainer() {
	const alertType1 = useToggleState({showing:true});
	const alertType2 = useToggleState({});
	const alertType3 = useToggleState({});
	return (
		<div>
			<h1 className="deco-h1">AL(알럿트)</h1>
			<div style={{ gap:'10px'}}>
				<Button color='gray-o' size="sm" onClick={alertType1.open}>자동로그아웃</Button><br /><br />
				<Button color='gray-o' size="sm" onClick={alertType2.open}>컨펌창</Button><br /><br />
				<Button color='gray-o' size="sm" onClick={alertType3.open}>첨부파일업로드</Button><br /><br />
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
		</div>
	);
}
export default ContentsContainer;