import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>

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

		</PageContainer>
	);
}
export default ContentsContainer;