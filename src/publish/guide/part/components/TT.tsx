import React from "react";
import { Tooltip } from 'react-tooltip';
function ContentsContainer() {
	return (
		<div>
		<h1 className="deco-h1">TT(툴팁)</h1>

		<button type="button" className="button-tooltip" data-tooltip-id="tooltip">툴팁</button>
		<Tooltip 
			id="tooltip"  
			disableStyleInjection={true}
			place={"bottom-start"}
			className="tooltip-conts"
			//openOnClick
		>
			<div className="msg">
				<h6 className="tooltip-title">출연 신청 시 첨부 서류</h6>
				<ul className="list-group">
					<li>서면 : 출연신청서(서면) 클릭하여 출연신청서 출력 후 직인을 찍고 스캔하여 수정버튼을 클릭하여 이동한 화면에서 출연신청(첨부문서)에 등록 후 저장하셔야 합니다.</li>
					<li>전자인증 : 기업용 공인인증서를 이용하여 출연신청서(전자인증)을 클릭하여 인증을 완료하시면 됩니다. 첨부 문서는 없습니다.</li>
				</ul>
			</div>
		</Tooltip>		
			
		</div>
	);
}
export default ContentsContainer;