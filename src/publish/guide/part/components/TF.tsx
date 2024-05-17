import React from "react";

import UIInput from 'components/input/input';
import UIInputPW from 'components/input/inputPW';
function ContentsContainer() {
	return (
		<div>
			<h1 className="deco-h1">TF(텍스트필드)</h1>
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

			<br/><br/>
			<h3 className="deco-h3">Password</h3>					
			<UIInputPW className={'tf tf-md w100p'} value={''} placeholder={'비밀번호를 입력하세요.'}  />	
			
		</div>
	);
}
export default ContentsContainer;