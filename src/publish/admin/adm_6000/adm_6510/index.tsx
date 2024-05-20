import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_6000Aside";
import Breadcrumb from 'layouts/admin/Breadcrumb';
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
				<div className="fww-con">
					<Breadcrumb gnbIdx={5} lnbD1Idx={6} />
					<main className="fww-main">
						<h1 className="tx tx-hd2">풍선도움말</h1>
						<div className="tb-top">
							<div>
								<p className="tx fc-black"></p>총 <em className="fw500">103</em>건
							</div>
							<div className="hz-root hz-gap5">
								<Button color="pri-o" size="sm">저장</Button>
							</div>
						</div>
						<div className="ibsheet">[D] IBSHEET 영역</div>
					</main>
				</div>
		</PageContainer>
	);
}
export default ContentsContainer;