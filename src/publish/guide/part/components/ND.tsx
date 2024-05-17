import React from "react";
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<div>
			<h1 className="deco-h1">ND(노데이터)</h1>
			<div className="nd">
				<i className="ic"></i>
				<p className="tx tx-cp2 fc-666">데이터가 없습니다.</p>
			</div>
		</div>
	);
}
export default ContentsContainer;