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
					<div className="hz-root hz-gap10">
						<Button color="pri" size="big">버튼</Button>
						<Button color="pri-o" size="big">버튼</Button>
						<Button color="pri-o2" size="big">버튼</Button>
						<Button color="gray" size="big">버튼</Button>
						<Button color="gray-o" size="big">버튼</Button>
					</div>

					<br />
					<div className="hz-root hz-gap8">
						<Button color="pri" size="md">버튼</Button>
						<Button color="pri-o" size="md">버튼</Button>
						<Button color="pri-o2" size="md">버튼</Button>
						<Button color="gray" size="md">버튼</Button>
						<Button color="gray-o" size="md">버튼</Button>
					</div>

					<br />
					<div className="hz-root hz-gap5">
						<Button color="pri" size="sm">버튼</Button>	
						<Button color="pri-o" size="sm">버튼</Button>	
						<Button color="pri-o2" size="sm">버튼</Button>	
						<Button color="gray" size="sm">버튼</Button>	
						<Button color="gray-o" size="sm">버튼</Button>
						<Button color="gray-o" size="sm">버튼</Button>	
					</div>

					<br />
					<div className="hz-root hz-gap5">
						<Button color="pri" size="tn">버튼</Button>	
						<Button color="pri-o" size="tn">버튼</Button>	
						<Button color="pri-o2" size="tn">버튼</Button>	
						<Button color="gray" size="tn">버튼</Button>	
						<Button color="gray-o" size="tn">버튼</Button>
						<Button color="gray-o" size="tn">버튼</Button>	
					</div>					
					
					<h1 className="deco-h1">BD(뱃지)</h1>
					<br /><br />
					<h2 className="deco-h2">ON (그리드)</h2>
					<label className="badge badge-on">ON</label>

					<br /><br />
					<h2 className="deco-h2">H22(사용자 기금출연)</h2>
					<label className="badge badge-22 blue">뱃지뱃지</label>
					<label className="badge badge-22 purple">뱃지</label>
					<label className="badge badge-22 green">뱃지</label>
					<label className="badge badge-22 yellow">뱃지</label>
					<label className="badge badge-22 red">뱃지</label>
					<label className="badge badge-22 gray">뱃지</label>

					<br /><br />
					<h2 className="deco-h2">H23(관리자 결재함 상세)</h2>
					<label className="badge badge-23 red">뱃지</label>
					<label className="badge badge-23 blue">뱃지</label>
					<label className="badge badge-23 green">뱃지</label>
					<label className="badge badge-23 gray">뱃지</label>

					<br /><br />
					<h2 className="deco-h2">H24(사용자 공지사항 상세페이지)</h2>
					<label className="badge badge-24 red">뱃지</label>

					<br /><br />
					<h2 className="deco-h2">H26(사용자 메인)</h2>
					<label className="badge badge-26 red">뱃지</label>
					<label className="badge badge-26 green">뱃지</label>
					<label className="badge badge-26 yellow">뱃지</label>
					<label className="badge badge-26 gray">뱃지</label>


	
				</main>			
			</div>
			
		</PageContainer>
	);
}
export default ContentsContainer;