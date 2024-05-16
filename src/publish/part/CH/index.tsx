import React from "react";
// import { Link } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import PageContainer from '../PageContainer';
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			
			<div className="fww-con">
				<main className="fww-main">

					<h1 className="deco-h1">CH(체크박스)</h1>

					<div className="hz-root hz-gap15">
						<label htmlFor="ch-1-1" className="hz-item ip-ch-label ip-ch-18">
							<input name="ch-1" id="ch-1-1" className="ip-ch" type="checkbox" />
							<span className="check"></span> 
							<span className="txt">첵박1</span>
						</label>
						<label htmlFor="ch-1-2" className="hz-item ip-ch-label ip-ch-18">
							<input name="ch-1" id="ch-1-2" className="ip-ch" type="checkbox" defaultChecked />
							<span className="check"></span> 
							<span className="txt">첵박2</span>
						</label>
						<label htmlFor="ch-1-3" className="hz-item ip-ch-label ip-ch-18">
							<input name="ch-1" id="ch-1-3" className="ip-ch" type="checkbox" disabled />
							<span className="check"></span> 
							<span className="txt">첵박3</span>
						</label>
						<label htmlFor="ch-1-4" className="hz-item ip-ch-label ip-ch-18">
							<input name="ch-1" id="ch-1-4" className="ip-ch" type="checkbox" defaultChecked disabled />
							<span className="check"></span> 
							<span className="txt">첵박4</span>
						</label>
					</div>

	
				</main>			
			</div>
			
		</PageContainer>
	);
}
export default ContentsContainer;