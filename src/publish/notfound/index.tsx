
import React from "react";
// import PageContainer from '../main/PageContainer';
import MainHeader from "layouts/main/MainHeader";
import Button from 'components/buttons/';
function NotFoundContainer() {
	return (
		<div className="fww-root">
			<MainHeader/>
			<div className="error-container">
				<div className="error-conts">
					<i className="ico err404"></i>
					<h1>페이지를 찾을 수 없습니다.</h1>
					<p>
						불편을 드려 죄송합니다.<br />
						요청하신 서비스가 정상 처리 되지 않았습니다.<br />
						보다 정상적인 서비스가 되도록 최선을 다하겠습니다.
					</p>
					<Button color='pri' size="big" href="/main">홈으로 이동</Button>
				</div>
			</div>
			{/* 시스템 점검
			<div className="error-container">
				<div className="error-conts">
				<i className="ico errsys"></i>
					<h1>시스템 점검 안내</h1>
					<p>
						불편을 드려 죄송합니다.<br />
						보다 안정적이고 나은 서비스 제공을 위해 시스템 점검중입니다.<br />
						점검시간 동안 서비스이용이 제한되오니 양해 부탁드립니다.
					</p>
				</div>
			</div>
			 */}
		</div>

	);
}
export default NotFoundContainer;