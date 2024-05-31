import React from "react";
import { Link, useLocation } from 'react-router-dom';
function ContentsContainer() {

	/*Test용 CSS입니다. 실제 개발시 사용금지*/ 
	const css = `		

`	
/*// Test용 CSS입니다. 실제 개발시 사용금지*/ 

	return (
		<>
				
				<style>{css}</style> {/* Test용 CSS입니다. 실제 개발시 사용금지 */}

				<h1 className="deco-h1">MT(MenuTree)</h1>

				{/* jtree */}
				<p>test\jstree\demo\basic\menutree.html 참고</p>
				{/* //jtree */}
				
		</>
	);
}
export default ContentsContainer;