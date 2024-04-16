import React from 'react';
import ReactModal from 'react-modal';

type ModalPopupProps = {
	open: boolean;
	title: string;
	size: 'sm' | 'mid' | 'lg' | 'alert';
	onClose?: () => void;
	children?: React.ReactNode;
};

ModalPopup.defaultProps = {
	open: false,
	title: '',
	size: 'mid',
};

function ModalPopup(props: ModalPopupProps) {
	const { open, title, size, children } = props;
	const handleClose = () => {
		if (props.onClose) {
			props.onClose();
		}
	};
	return (
		<ReactModal isOpen={open} portalClassName={`modal-popup size-${size}`}>
			<div className="modal-popup-header">
				<h1 className="title">{title}</h1>
				<button type="button" className="btn-close" onClick={handleClose}>닫기</button>
			</div>
			<div className="modal-popup-body">{children}</div>
		</ReactModal>
	);
}

export default ModalPopup;
