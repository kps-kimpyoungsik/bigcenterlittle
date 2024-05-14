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

					<h1 className="deco-h1">BT(버튼)</h1>
					<h2 className="deco-h2">BIG</h2>
					<div className="hz-root hz-gap10">
						<Button color="pri" size="big">버튼</Button>
						<Button color="pri-o" size="big">버튼</Button>
						<Button color="pri-o2" size="big">버튼</Button>
						<Button color="gray" size="big">버튼</Button>
						<Button color="gray-o" size="big">버튼</Button>
					</div>

					<br /><br />
					<h2 className="deco-h2">Medium</h2>
					<div className="hz-root hz-gap8">
						<Button color="pri" size="md">버튼</Button>
						<Button color="pri-o" size="md">버튼</Button>
						<Button color="pri-o2" size="md">버튼</Button>
						<Button color="gray" size="md">버튼</Button>
						<Button color="gray-o" size="md">버튼</Button>
					</div>

					<br /><br />
					<h2 className="deco-h2">Small</h2>
					<div className="hz-root hz-gap5">
						<Button color="pri" size="sm">버튼</Button>	
						<Button color="pri-o" size="sm">버튼</Button>	
						<Button color="pri-o2" size="sm">버튼</Button>	
						<Button color="gray" size="sm">버튼</Button>	
						<Button color="gray-o" size="sm">버튼</Button>
						<Button color="gray-o" size="sm">버튼</Button>	
					</div>

					<br /><br />
					<h2 className="deco-h2">Tiny</h2>
					<div className="hz-root hz-gap5">
						<Button color="pri" size="tn">버튼</Button>	
						<Button color="pri-o" size="tn">버튼</Button>	
						<Button color="pri-o2" size="tn">버튼</Button>	
						<Button color="gray" size="tn">버튼</Button>	
						<Button color="gray-o" size="tn">버튼</Button>
						<Button color="gray-o" size="tn">버튼</Button>	
					</div>					
	
				</main>			
			</div>
			
		</PageContainer>
	);
}
export default ContentsContainer;