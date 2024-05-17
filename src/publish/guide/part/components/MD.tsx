import React,{useEffect} from "react";
import Button from 'components/buttons/';
import ModalPopup from 'components/modal/';
import useToggleState from 'components/hooks/useToggleState';
function ContentsContainer() {
	const modalEx =useToggleState({});
	useEffect(() => {
		modalEx.setShowing(true);
	},[]);	
	return (
		<div>
			<h1 className="deco-h1">MD (모달)</h1>
			<Button color="gray-o" size="md" onClick={modalEx.open}>팝업버튼</Button>
			{/* modal - 출연금액 선택 */}
			<ModalPopup
				open={modalEx.isShowing}
				title="제목"
				size="mid"
				onClose={modalEx.close}
			>
				<div className="modal-con">
					<div style={{height:"300px"}}>내용</div>
					<div className="modal-bottom">
					<Button color="gray-o" size="md">취소</Button>
					<Button color="pri" size="md">저장</Button>
				</div>
				</div>
			</ModalPopup>	
		</div>
	);
}
export default ContentsContainer;