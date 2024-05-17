import React from "react";
//import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<div>
			<h1 className="deco-h1">FO(폼)</h1>
			<h2 className="deco-h2">2열</h2>
			<form className="fo fo-col2">
				<div className="inner">
					<div className="fo-item req">
						<p className="fo-key">$1(필수)</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="fo-item">
						<p className="fo-key">$2</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="fo-item">
						<p className="fo-key">$3</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="fo-item">
						<p className="fo-key">$4</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="fo-item fo-m-1-3">
						<p className="fo-key">$Merge-1-3</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
				</div>
			</form>
			<br /><br />
			<h2 className="deco-h2">3열</h2>
			<form className="fo fo-col3">
				<div className="inner">
					<div className="fo-item req">
						<p className="fo-key">$1(필수)</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="fo-item">
						<p className="fo-key">$2</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="fo-item">
						<p className="fo-key">$3</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="fo-item fo-m-1-3">
						<p className="fo-key">$Merge-1-3</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="fo-item">
						<p className="fo-key">$5</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="fo-item">
						<p className="fo-key">$6</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					
					<div className="fo-item fo-m-2-4">
						<p className="fo-key">$Merge-2-4</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="fo-item fo-m-1-4">
						<p className="fo-key">$Merge-1-4</p>
						<div className="fo-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
export default ContentsContainer;