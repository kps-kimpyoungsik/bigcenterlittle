import React from "react";
import Raonkupload from 'components/input/kupload';
function ContentsContainer() {
	return (
		<div className='fww-con'>
			<h1 className="deco-h1">FileUpload</h1>
			
			{/* FileUpload... */}
			<Raonkupload /> {/* 기능X css 디자인 ☆Fileupload 영역입니다☆ */}
			<br />
			<p style={{font:"13px", color:"#666"}}>※ 기능X 디자인 css (test.css)</p>
		</div>
	);
}
export default ContentsContainer;