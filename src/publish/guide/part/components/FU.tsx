import React from "react";
import Raonkupload from 'components/input/kupload';
import RaonkuploadSimple from 'components/input/kuploadSimple';
import "assets/styles/_kupload_test.css"

function ContentsContainer() {
	return (
		<div className='fww-con'>
			<h1 className="deco-h1">FileUpload</h1>
			<h2 className="deco-h2">다건 처리</h2>
			{/* FileUpload... */}
			<Raonkupload /> {/* 기능X css 디자인 ☆Fileupload 영역입니다☆ */}
			<p style={{font:"13px", color:"#666",marginTop:"5px"}}>※ 기능X 디자인 css (test.css)</p>
			<br />
			<br />
			<h2 className="deco-h2">단건 처리</h2>
			<RaonkuploadSimple />
		</div>
	);
}
export default ContentsContainer;