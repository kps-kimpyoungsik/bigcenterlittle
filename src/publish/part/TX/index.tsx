import React from "react";
// import { Link } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import PageContainer from '../PageContainer';
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<PageContainer>
			
			<div className="fww-con">
				<main className="fww-main">

					<h1 className="deco-h1">TX(텍스트)</h1>

					
					<h2 className="deco-h2">BIG</h2>
					<UIInput className={'tf tf-big w100p'} value={''} placeholder={'플레이스홀더'} readOnly={false} /> 
					<br/><br/>
					<UIInput className={'tf tf-big w100p'} value={'디폴트'} placeholder={'PH'} readOnly={false} />
					<br/><br/>
					<UIInput className={'tf tf-big tf-error w100p'} value={'에러'} placeholder={'PH'} readOnly={false} />
					<br/><br/>
					<UIInput className={'tf tf-big w100p'} value={'리드온리'} placeholder={'PH'} readOnly={true} />
					

					<br/><br/>
					<h2 className="deco-h2">Medium</h2>
					<UIInput className={'tf tf-md w100p'} value={'디폴트'} placeholder={'PH'} readOnly={false} />
					<br/><br/>
					<UIInput className={'tf tf-md w100p'} value={'리드온리'} placeholder={'PH'} readOnly={true} />

					<br/><br/>
					<h2 className="deco-h2">Small</h2>
					<UIInput className={'tf tf-sm w100p'} value={'디폴트'} placeholder={'PH'} readOnly={false} />
					<br/><br/>
					<UIInput className={'tf tf-sm w100p'} value={'리드온리'} placeholder={'PH'} readOnly={true} />

					<br/><br/>
					<h2 className="deco-h2">Other Type</h2>					
					
					<h3 className="deco-h3">Password</h3>					
					<UIInput type="password" className={'tf tf-md w100p'} value={'1111'} placeholder={''} readOnly={false} />
					
					<br/><br/>
					<h3 className="deco-h3">Number</h3>					
					<UIInput type="number" className={'tf tf-md w100p'} value={'1111'} placeholder={''} readOnly={false} />					


	
				</main>			
			</div>
			
		</PageContainer>
	);
}
export default ContentsContainer;