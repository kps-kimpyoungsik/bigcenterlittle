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
		<div>
			
			<style>{css}</style> {/* Test용 CSS입니다. 실제 개발시 사용금지 */}

			<h1 className="deco-h1">ND(노데이터)</h1>
			<div className="nd">
				<i className="ic"></i>
				<p className="tx tx-cp2 fc-666">데이터가 없습니다.</p>
			</div>
		</div>
	);
}
export default ContentsContainer;