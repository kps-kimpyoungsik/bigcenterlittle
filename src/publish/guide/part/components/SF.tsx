import React from "react";
import Button from 'components/buttons/';
import UIInput from 'components/input/input';
function ContentsContainer() {
	return (
		<div>
			<h1 className="deco-h1">SF(서치필터)</h1>
			<h2 className="deco-h2">기본</h2>
			<form className="sf">
				<div className="inner">
					<div className="sf-item">
						<p className="sf-key">$$$$$</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">$$$$$</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">$$$$$</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">$$$$$</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">$$$$$</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">$$$$$</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
				</div>
			</form>
			<div className="hz-root hz-center hz-gap8">
				<Button color="gray-o" size="md">등록</Button>
				<Button color="pri" size="md">조회</Button>
			</div>
			<br /><br />
			<form className="sf">
				<div className="inner">
					<div className="sf-item">
						<p className="sf-key">출연신청기간</p>
						<div className="sf-value">
							<div className="hz-root hz-gap5">
								<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'PH'} />
								<span>~</span>
								<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'PH'} />
							</div>
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">출연기업</p>
						<div className="sf-value">
							<div className="hz-root hz-gap8">
								<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'PH'} />
								<Button color="pri-o" size="md">출연기업 찾기</Button>
								<Button color="gray-o" size="md">삭제</Button>
							</div>
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">출연사업</p>
						<div className="sf-value">
							<div className="sl sl-md w100p">
								<select>
									<option>선택하세요</option>
								</select>
							</div>
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">출연신청기간</p>
						<div className="sf-value">
							<div className="hz-root hz-gap5">
								<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'PH'} />
								<span>~</span>
								<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'PH'} />
							</div>
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">출연기업</p>
						<div className="sf-value">
							<div className="hz-root hz-gap8">
								<UIInput className={'hz-item hz-fg tf tf-md'} value={''} placeholder={'PH'} />
								<Button color="pri-o" size="md">출연기업 찾기</Button>
								<Button color="gray-o" size="md">삭제</Button>
							</div>
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">출연사업</p>
						<div className="sf-value">
							<div className="sl sl-md w100p">
								<select>
									<option>선택하세요</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</form>
			<div className="hz-root hz-center hz-gap8">
				<Button color="gray-o" size="md">등록</Button>
				<Button color="pri" size="md">조회</Button>
			</div>
			<br /><br />
			<h2 className="deco-h2">예외 - 1줄일때는 우측에 버튼</h2>
			<form className="sf sf-1row">
				<div className="inner">
					<div className="sf-item">
						<p className="sf-key">검색어</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'검색어'} />
						</div>
					</div>
				</div>
				<Button color="pri" size="md">조회</Button>
			</form>
			<br /><br />
			<h2 className="deco-h2">병합</h2>
			<form className="sf">
				<div className="inner">
					<div className="sf-item sf-m-1-3">
						<p className="sf-key">1</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">2</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="sf-item sf-m-1-4">
						<p className="sf-key">3</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">4</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="sf-item sf-m-2-4">
						<p className="sf-key">5</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
					<div className="sf-item">
						<p className="sf-key">6</p>
						<div className="sf-value">
							<UIInput className={'tf tf-md w100p'} value={''} placeholder={'PH'} />
						</div>
					</div>
				</div>
			</form>
			<div className="hz-root hz-center hz-gap8">
				<Button color="gray-o" size="md">등록</Button>
				<Button color="pri" size="md">조회</Button>
			</div>
		</div>
	);
}
export default ContentsContainer;