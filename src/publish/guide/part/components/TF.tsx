import React from "react";

import UIInput from 'components/input/input';
import UIInputPW from 'components/input/inputPW';
import UIInputClaer from 'components/input/inputClear';
import UIDatePicker from "components/datepicker";
import UIDatePicker2 from "components/datepicker2";
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

			<br/><br/>
			<h2 className="deco-h2">Clear Button</h2>	
			<UIInputClaer className={'tf tf-md'} value={'입력값이 있을경우'} placeholder={'입력하세요.'}/>							

			<br/><br/>
			<h2 className="deco-h2">DatePicker</h2>	

			<h3 className="deco-h3">Normal</h3>	
			<UIDatePicker />

			<br/>
			<h3 className="deco-h3">Width 조절</h3>	
			<div className="w150"><UIDatePicker /></div>

			<br/><br/>
			<h2 className="deco-h2">DatePicker 2</h2>	

			<h3 className="deco-h3">Normal</h3>	
			<UIDatePicker2 />			

			<br/>
			<h3 className="deco-h3">Width 조절</h3>				
			<div className="w375"><UIDatePicker2 /></div>

			<br/><br/><br/><br/><br/><br/>
			<h2 className="deco-h2">DatePicker 캘린더 영역 미리보기</h2>	
			<div className="datepicker">
				<div className="react-datepicker-wrapper">
						<div className="react-datepicker__input-container">
								<input className="tf tf-md w100p" data-security="off" value="2024-05-29(수)" />
						</div>
				</div>
				<div className="react-datepicker__tab-loop">
						<div className="react-datepicker__tab-loop__start" ></div>
						<div className="react-datepicker-popper" data-placement="bottom" style={{position: 'relative'}}>
								<div style={{display: 'contents'}}>
										<div className="react-datepicker" role="dialog" aria-label="Choose Date" aria-modal="true"><span role="alert" aria-live="polite" className="react-datepicker__aria-live"></span>
												<button type="button" className="react-datepicker__navigation react-datepicker__navigation--previous" aria-label="Previous Month"><span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">Previous Month</span></button>
												<button type="button" className="react-datepicker__navigation react-datepicker__navigation--next react-datepicker__navigation--next--with-today-button"
												aria-label="Next Month"><span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">Next Month</span></button>
												<div className="react-datepicker__month-container">
														<div className="react-datepicker__header ">
																<div className="react-datepicker__current-month">5월 2024</div>
																<div className="react-datepicker__header__dropdown react-datepicker__header__dropdown--scroll"></div>
																<div className="react-datepicker__day-names">
																		<div className="react-datepicker__day-name">일</div>
																		<div className="react-datepicker__day-name">월</div>
																		<div className="react-datepicker__day-name">화</div>
																		<div className="react-datepicker__day-name">수</div>
																		<div className="react-datepicker__day-name">목</div>
																		<div className="react-datepicker__day-name">금</div>
																		<div className="react-datepicker__day-name">토</div>
																</div>
														</div>
														<div className="react-datepicker__month" aria-label="Month May, 2024" role="listbox">
																<div className="react-datepicker__week">
																		<div className="react-datepicker__day react-datepicker__day--028 react-datepicker__day--weekend react-datepicker__day--outside-month"  aria-label="Choose 2024년 4월 28일 일요일" role="option" title="" aria-disabled="false"
																		aria-selected="false">28</div>
																		<div className="react-datepicker__day react-datepicker__day--029 react-datepicker__day--outside-month"  aria-label="Choose 2024년 4월 29일 월요일" role="option" title="" aria-disabled="false" aria-selected="false">29</div>
																		<div className="react-datepicker__day react-datepicker__day--030 react-datepicker__day--outside-month"  aria-label="Choose 2024년 4월 30일 화요일" role="option" title="" aria-disabled="false" aria-selected="false">30</div>
																		<div className="react-datepicker__day react-datepicker__day--001"  aria-label="Choose 2024년 5월 1일 수요일" role="option" title="" aria-disabled="false" aria-selected="false">1</div>
																		<div className="react-datepicker__day react-datepicker__day--002"  aria-label="Choose 2024년 5월 2일 목요일" role="option" title="" aria-disabled="false" aria-selected="false">2</div>
																		<div className="react-datepicker__day react-datepicker__day--003"  aria-label="Choose 2024년 5월 3일 금요일" role="option" title="" aria-disabled="false" aria-selected="false">3</div>
																		<div className="react-datepicker__day react-datepicker__day--004 react-datepicker__day--weekend"  aria-label="Choose 2024년 5월 4일 토요일" role="option" title="" aria-disabled="false" aria-selected="false">4</div>
																</div>
																<div className="react-datepicker__week">
																		<div className="react-datepicker__day react-datepicker__day--005 react-datepicker__day--weekend"  aria-label="Choose 2024년 5월 5일 일요일" role="option" title="" aria-disabled="false" aria-selected="false">5</div>
																		<div className="react-datepicker__day react-datepicker__day--006"  aria-label="Choose 2024년 5월 6일 월요일" role="option" title="" aria-disabled="false" aria-selected="false">6</div>
																		<div className="react-datepicker__day react-datepicker__day--007"  aria-label="Choose 2024년 5월 7일 화요일" role="option" title="" aria-disabled="false" aria-selected="false">7</div>
																		<div className="react-datepicker__day react-datepicker__day--008"  aria-label="Choose 2024년 5월 8일 수요일" role="option" title="" aria-disabled="false" aria-selected="false">8</div>
																		<div className="react-datepicker__day react-datepicker__day--009"  aria-label="Choose 2024년 5월 9일 목요일" role="option" title="" aria-disabled="false" aria-selected="false">9</div>
																		<div className="react-datepicker__day react-datepicker__day--010"  aria-label="Choose 2024년 5월 10일 금요일" role="option" title="" aria-disabled="false" aria-selected="false">10</div>
																		<div className="react-datepicker__day react-datepicker__day--011 react-datepicker__day--weekend"  aria-label="Choose 2024년 5월 11일 토요일" role="option" title="" aria-disabled="false" aria-selected="false">11</div>
																</div>
																<div className="react-datepicker__week">
																		<div className="react-datepicker__day react-datepicker__day--012 react-datepicker__day--weekend"  aria-label="Choose 2024년 5월 12일 일요일" role="option" title="" aria-disabled="false" aria-selected="false">12</div>
																		<div className="react-datepicker__day react-datepicker__day--013"  aria-label="Choose 2024년 5월 13일 월요일" role="option" title="" aria-disabled="false" aria-selected="false">13</div>
																		<div className="react-datepicker__day react-datepicker__day--014"  aria-label="Choose 2024년 5월 14일 화요일" role="option" title="" aria-disabled="false" aria-selected="false">14</div>
																		<div className="react-datepicker__day react-datepicker__day--015"  aria-label="Choose 2024년 5월 15일 수요일" role="option" title="" aria-disabled="false" aria-selected="false">15</div>
																		<div className="react-datepicker__day react-datepicker__day--016"  aria-label="Choose 2024년 5월 16일 목요일" role="option" title="" aria-disabled="false" aria-selected="false">16</div>
																		<div className="react-datepicker__day react-datepicker__day--017"  aria-label="Choose 2024년 5월 17일 금요일" role="option" title="" aria-disabled="false" aria-selected="false">17</div>
																		<div className="react-datepicker__day react-datepicker__day--018 react-datepicker__day--weekend"  aria-label="Choose 2024년 5월 18일 토요일" role="option" title="" aria-disabled="false" aria-selected="false">18</div>
																</div>
																<div className="react-datepicker__week">
																		<div className="react-datepicker__day react-datepicker__day--019 react-datepicker__day--weekend"  aria-label="Choose 2024년 5월 19일 일요일" role="option" title="" aria-disabled="false" aria-selected="false">19</div>
																		<div className="react-datepicker__day react-datepicker__day--020"  aria-label="Choose 2024년 5월 20일 월요일" role="option" title="" aria-disabled="false" aria-selected="false">20</div>
																		<div className="react-datepicker__day react-datepicker__day--021"  aria-label="Choose 2024년 5월 21일 화요일" role="option" title="" aria-disabled="false" aria-selected="false">21</div>
																		<div className="react-datepicker__day react-datepicker__day--022"  aria-label="Choose 2024년 5월 22일 수요일" role="option" title="" aria-disabled="false" aria-selected="false">22</div>
																		<div className="react-datepicker__day react-datepicker__day--023"  aria-label="Choose 2024년 5월 23일 목요일" role="option" title="" aria-disabled="false" aria-selected="false">23</div>
																		<div className="react-datepicker__day react-datepicker__day--024"  aria-label="Choose 2024년 5월 24일 금요일" role="option" title="" aria-disabled="false" aria-selected="false">24</div>
																		<div className="react-datepicker__day react-datepicker__day--025 react-datepicker__day--weekend"  aria-label="Choose 2024년 5월 25일 토요일" role="option" title="" aria-disabled="false" aria-selected="false">25</div>
																</div>
																<div className="react-datepicker__week">
																		<div className="react-datepicker__day react-datepicker__day--026 react-datepicker__day--weekend"  aria-label="Choose 2024년 5월 26일 일요일" role="option" title="" aria-disabled="false" aria-selected="false">26</div>
																		<div className="react-datepicker__day react-datepicker__day--027"  aria-label="Choose 2024년 5월 27일 월요일" role="option" title="" aria-disabled="false" aria-selected="false">27</div>
																		<div className="react-datepicker__day react-datepicker__day--028"  aria-label="Choose 2024년 5월 28일 화요일" role="option" title="" aria-disabled="false" aria-selected="false">28</div>
																		<div className="react-datepicker__day react-datepicker__day--029 react-datepicker__day--selected react-datepicker__day--today"  aria-label="Choose 2024년 5월 29일 수요일" role="option" title="" aria-disabled="false"
																		aria-current="date" aria-selected="true">29</div>
																		<div className="react-datepicker__day react-datepicker__day--030"  aria-label="Choose 2024년 5월 30일 목요일" role="option" title="" aria-disabled="false" aria-selected="false">30</div>
																		<div className="react-datepicker__day react-datepicker__day--031"  aria-label="Choose 2024년 5월 31일 금요일" role="option" title="" aria-disabled="false" aria-selected="false">31</div>
																		<div className="react-datepicker__day react-datepicker__day--001 react-datepicker__day--weekend react-datepicker__day--outside-month"  aria-label="Choose 2024년 6월 1일 토요일" role="option" title="" aria-disabled="false"
																		aria-selected="false">1</div>
																</div>
														</div>
												</div>
												<div className="react-datepicker__today-button">Today</div>
										</div>
								</div>
								<svg fill="currentColor" className="react-datepicker__triangle" aria-hidden="true" width="18" height="16" viewBox="0 0 16 16" >
										<path clip-path="url(#:rm:)" fill="none" stroke-width="3" d="M0,0 H16 L8,8 Q8,8 8,8 Z"></path>
										<path stroke="currentColor" d="M0,0 H16 L8,8 Q8,8 8,8 Z"></path>
										<clipPath id=":rm:">
												<rect x="-1" y="1" width="18" height="16"></rect>
										</clipPath>
								</svg>
						</div>
						<div className="react-datepicker__tab-loop__end" ></div>
				</div>
			</div>			
						

			<br/><br/><br/><br/>
		</div>
	);
}
export default ContentsContainer;