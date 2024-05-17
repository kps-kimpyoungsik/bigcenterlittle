import React from "react";
// import { Link } from 'react-router-dom';
function ContentsContainer() {
	return (
		<div>
			<h1 className="deco-h1">RD(라디오)</h1>
			<div className="hz-root hz-gap15">
				<label htmlFor="rd-1-1" className="ip-rd-label">
					<input name="rd-1" id="rd-1-1" className="ip-rd" type="radio" />
					<span className="check"></span>
					<span className="txt">라됴1</span>
				</label>
				<label htmlFor="rd-1-2" className="ip-rd-label">
					<input name="rd-1" id="rd-1-2" className="ip-rd" type="radio" defaultChecked />
					<span className="check"></span>
					<span className="txt">라됴2</span>
				</label>
				<label htmlFor="rd-1-3" className="ip-rd-label">
					<input name="rd-1" id="rd-1-3" className="ip-rd" type="radio" disabled />
					<span className="check"></span>
					<span className="txt">라됴3</span>
				</label>
				<label htmlFor="rd-1-4" className="ip-rd-label">
					<input name="rd-1" id="rd-1-4" className="ip-rd" type="radio" defaultChecked disabled />
					<span className="check"></span>
					<span className="txt">라됴4</span>
				</label>
			</div>
			
		</div>
	);
}
export default ContentsContainer;