import React from "react";
function ContentsContainer() {
	return (
		<div>
			<h1 className="deco-h1">SL(셀렉트)</h1>
			<div className="sl sl-big">
				<select name="" id="" className="">
					<option value="0">선택/전체</option>
					<option value="1">$</option>
				</select>
			</div>

			<br/>
			<div className="sl sl-big sl-disabled"> {/*[D]disabled*/}
				<select disabled name="" id="" className=""> {/*disabled (디자인가이드는 readonly라 되어있으나, select는readonly가 없다.)*/}
					<option value="0">disabled</option>
					<option value="1">$</option>
				</select>
			</div>			

			<br/>
			<h3 className="deco-h3">Medium</h3>
			<div className="sl sl-md">
				<select name="" id="" className="">
					<option value="0">선택/전체</option>
					<option value="1">$</option>
				</select>
			</div>
			
			<br/>
			<h3 className="deco-h3">Small</h3>
			<div className="sl sl-sm">
				<select name="" id="" className="">
					<option value="0">선택/전체</option>
					<option value="1">$</option>
				</select>
			</div>	
			
		</div>
	);
}
export default ContentsContainer;