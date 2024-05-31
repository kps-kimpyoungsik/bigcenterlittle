import React from "react";
function ContentsContainer() {

	/*Test용 CSS입니다. 실제 개발시 사용금지*/ 
	const css = `
	.nd {
			border: 1px dashed red;
	}
`	
/*// Test용 CSS입니다. 실제 개발시 사용금지*/ 

	return (
		<>
			
				<style>{css}</style> {/* Test용 CSS입니다. 실제 개발시 사용금지 */}

				<h1 className="deco-h1">ND(노데이터)</h1>
				<h2 className="deco-h2">아이콘 있음</h2>
				<div className="nd">
					<i className="ic"></i>
					<p className="tx tx-cp2 fc-666">데이터가 없습니다.</p>
				</div>

				<br/><br/>
				<h2 className="deco-h2">아이콘 없음</h2>
				<div className="nd">
					<p className="tx tx-cp2 fc-666">데이터가 없습니다.</p>
				</div>				
			
		</>
		
	);
}
export default ContentsContainer;