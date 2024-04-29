import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../user1900Aside";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className='fww-con'>
				<ul className="fww-brd">
					<li><Link to="/main/">홈</Link></li>
					<li><Link to="#">상생협력기금안내</Link></li>
					<li><Link to="#">우수사례</Link></li>
				</ul>
				<main className="fww-main" data-layout="usr">
					<h1 className="tx tx-hd2">우수사례</h1>
					<div className="fww-intro">
						<div className="tb-search-form">
							<div className="tb-search-items">
								<div className="sl sl-big">
									<select>
										<option>전체</option>
										<option>제목</option>
										<option>내용</option>
									</select>
								</div>
								<UIInput className={'tf tf-big ml10'} value={''} placeholder={"입력하세요."} />
							</div>
							<Button color="pri" size="big">검색</Button>
						</div>
						<ul className="gallery-list">
							<li>
								<Link to="#" className="gallery-items">
									<div className="thumnails">
										<img src="https://fund.win-win.or.kr/common/ui/main/images/layout/visual_01.png" alt="thumnails" />
									</div>
									<div className="subject">우수사례 제목이 출력됩니다.</div>
								</Link>
							</li>
							<li>
								<Link to="#" className="gallery-items">
									<div className="thumnails">
										<img src="https://fund.win-win.or.kr/common/ui/main/images/layout/visual_02.png" alt="thumnails" />
									</div>
									<div className="subject">농·어촌상생협력기금</div>
								</Link>
							</li>
							<li>
								<Link to="#" className="gallery-items">
									<div className="thumnails">
										<img src="https://fund.win-win.or.kr/common/ui/main/images/layout/visual_03.png" alt="thumnails" />
									</div>
									<div className="subject">기업자율형 상생프로그램</div>
								</Link>
							</li>
							<li>
								<Link to="#" className="gallery-items">
									<div className="thumnails">
										
									</div>
									<div className="subject">대·중소기업 동반진출</div>
								</Link>
							</li>
							<li>
								<Link to="#" className="gallery-items">
									<div className="thumnails">
										
									</div>
									<div className="subject">농·어촌상생협력기금</div>
								</Link>
							</li>
							<li>
								<Link to="#" className="gallery-items">
									<div className="thumnails">
										
									</div>
									<div className="subject">공통투자형 기술개발</div>
								</Link>
							</li>
						</ul>
						<div className="pg">
							<div className="group">
								<button type="button" className="item first">처음</button>
								<button type="button" className="item prev">이전</button>
							</div>
							<div className="group">
								<button type="button" className="item">1</button>
								<button type="button" className="item active">2</button>
								<button type="button" className="item">3</button>
								<button type="button" className="item">4</button>
								<button type="button" className="item">5</button>
								<button type="button" className="item">99</button>
								<button type="button" className="item">999</button>
								<button type="button" className="item">9999</button>
							</div>
							<div className="group">
								<button type="button" className="item next">다음</button>
								<button type="button" className="item last">끝</button>
							</div>
						</div>
					</div>
				</main>
			</div>			
		</PageContainer>
	);
}
export default ContentsContainer;