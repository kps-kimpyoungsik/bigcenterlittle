import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user1900Aside";
import Breadcrumb from 'layouts/main/Breadcrumb';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<Breadcrumb gnbIdx={0} lnbIdx={1}/>
				<main className="fww-main" data-layout="usr">
					<h1 className="tx tx-hd2">투명한기금운영</h1>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;