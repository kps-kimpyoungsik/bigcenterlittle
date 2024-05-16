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

					<h1 className="deco-h1">PT (Partition)</h1>
					<h2 className="deco-h2">1분할</h2>
					<div className="pt">
						<div className="row">
							<div className="col col-10"> 10 </div>
						</div>
					</div>
					<h2 className="deco-h2">2분할</h2>
					<div className="pt">
						<div className="row">
							<div className="col col-9"> 9 </div>
							<div className="col col-1"> 1 </div>
						</div>
					</div>
					<div className="pt">
						<div className="row">
							<div className="col col-8"> 8 </div>
							<div className="col col-2"> 2 </div>
						</div>
					</div>
					<div className="pt">
						<div className="row">
							<div className="col col-7"> 7 </div>
							<div className="col col-3"> 3 </div>
						</div>
					</div>
					<div className="pt">
						<div className="row">
							<div className="col col-7"> 6 </div>
							<div className="col col-3"> 4 </div>
						</div>
					</div>
					<div className="pt">
						<div className="row">
							<div className="col col-5"> 5 </div>
							<div className="col col-5"> 5 </div>
						</div>
					</div>
					<h2 className="deco-h2">3분할</h2>
					<div className="pt">
						<div className="row three">
							<div className="col"> 3.33 </div>
							<div className="col"> 3.33 </div>
							<div className="col"> 3.33 </div>
						</div>
					</div>

					<h2 className="deco-h2">etc.</h2>
					<div className="pt">
						<div className="row liquid">
							<div className="col col-auto"> 9 </div>
							<div className="col w390"> 1 </div>
						</div>
					</div>	

	
				</main>			
			</div>
			
		</PageContainer>
	);
}
export default ContentsContainer;