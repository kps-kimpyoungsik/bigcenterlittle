import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>

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

		</PageContainer>
	);
}
export default ContentsContainer;