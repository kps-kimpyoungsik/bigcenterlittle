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

			<br/>
			<h3 className="deco-h3">기능버튼과 함께</h3>							
			
			<div className="hz-root hz-gap8">
				<div className="hz-item w375"><UIDatePicker2 /></div>
				<div className="hz-item hz-root hz-gap5">
					<button className="bt" data-color="pri-o2" data-size="md" type="button">이전1개월</button>
					<button className="bt" data-color="pri-o2" data-size="md" type="button">이전3개월</button>
					<button className="bt" data-color="pri" data-size="md" type="button">이전6개월</button>
					<button className="bt" data-color="pri-o2" data-size="md" type="button">이전12개월</button>
				</div>							
			</div>
			
			



			<br/><br/><br/><br/><br/><br/>
			<h2 className="deco-h2">[폐기] DatePicker 캘린더 영역 미리보기</h2>	
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

			<br/><br/><br/><br/><br/><br/>
			<h2 className="deco-h2">DatePicker 캘린더 영역 미리보기 (20240710 NEW)</h2>	
			<div className="datepicker">
				<div className="react-datepicker-wrapper">
						<div className="react-datepicker__input-container">
								<input className="tf tf-md w100p" data-security="off" value="2024-05-29(수)" />
						</div>
				</div>
				<div className="react-datepicker__tab-loop">
						<div className="react-datepicker__tab-loop__start" ></div>
						<div className="react-datepicker-popper" data-placement="bottom" style={{position: 'relative', left: 'autoi', top: 'auto'}}>
							<div style={{display: 'contents'}}>
								<div className="react-datepicker" role="dialog" aria-label="Choose Date" aria-modal="true">
									<span role="alert" aria-live="polite" className="react-datepicker__aria-live"></span>
									<div className="react-datepicker__month-container">
										<div className="react-datepicker__header react-datepicker__header--custom">
											<div style={{margin: '10px', display: 'flex', justifyContent: 'center'}}>
												<button>&lt;</button>
												<select className="tf tf-sm w90">
													<option value="1950">1950년</option>
													<option value="1951">1951년</option>
													<option value="1952">1952년</option>
													<option value="1953">1953년</option>
													<option value="1954">1954년</option>
													<option value="1955">1955년</option>
													<option value="1956">1956년</option>
													<option value="1957">1957년</option>
													<option value="1958">1958년</option>
													<option value="1959">1959년</option>
													<option value="1960">1960년</option>
													<option value="1961">1961년</option>
													<option value="1962">1962년</option>
													<option value="1963">1963년</option>
													<option value="1964">1964년</option>
													<option value="1965">1965년</option>
													<option value="1966">1966년</option>
													<option value="1967">1967년</option>
													<option value="1968">1968년</option>
													<option value="1969">1969년</option>
													<option value="1970">1970년</option>
													<option value="1971">1971년</option>
													<option value="1972">1972년</option>
													<option value="1973">1973년</option>
													<option value="1974">1974년</option>
													<option value="1975">1975년</option>
													<option value="1976">1976년</option>
													<option value="1977">1977년</option>
													<option value="1978">1978년</option>
													<option value="1979">1979년</option>
													<option value="1980">1980년</option>
													<option value="1981">1981년</option>
													<option value="1982">1982년</option>
													<option value="1983">1983년</option>
													<option value="1984">1984년</option>
													<option value="1985">1985년</option>
													<option value="1986">1986년</option>
													<option value="1987">1987년</option>
													<option value="1988">1988년</option>
													<option value="1989">1989년</option>
													<option value="1990">1990년</option>
													<option value="1991">1991년</option>
													<option value="1992">1992년</option>
													<option value="1993">1993년</option>
													<option value="1994">1994년</option>
													<option value="1995">1995년</option>
													<option value="1996">1996년</option>
													<option value="1997">1997년</option>
													<option value="1998">1998년</option>
													<option value="1999">1999년</option>
													<option value="2000">2000년</option>
													<option value="2001">2001년</option>
													<option value="2002">2002년</option>
													<option value="2003">2003년</option>
													<option value="2004">2004년</option>
													<option value="2005">2005년</option>
													<option value="2006">2006년</option>
													<option value="2007">2007년</option>
													<option value="2008">2008년</option>
													<option value="2009">2009년</option>
													<option value="2010">2010년</option>
													<option value="2011">2011년</option>
													<option value="2012">2012년</option>
													<option value="2013">2013년</option>
													<option value="2014">2014년</option>
													<option value="2015">2015년</option>
													<option value="2016">2016년</option>
													<option value="2017">2017년</option>
													<option value="2018">2018년</option>
													<option value="2019">2019년</option>
													<option value="2020">2020년</option>
													<option value="2021">2021년</option>
													<option value="2022">2022년</option>
													<option value="2023">2023년</option>
													<option value="2024">2024년</option>
													<option value="2025">2025년</option>
													<option value="2026">2026년</option>
													<option value="2027">2027년</option>
													<option value="2028">2028년</option>
													<option value="2029">2029년</option>
													<option value="2030">2030년</option>
													<option value="2031">2031년</option>
													<option value="2032">2032년</option>
													<option value="2033">2033년</option>
													<option value="2034">2034년</option>
													<option value="2035">2035년</option>
													<option value="2036">2036년</option>
													<option value="2037">2037년</option>
													<option value="2038">2038년</option>
													<option value="2039">2039년</option>
													<option value="2040">2040년</option>
													<option value="2041">2041년</option>
													<option value="2042">2042년</option>
													<option value="2043">2043년</option>
													<option value="2044">2044년</option>
													<option value="2045">2045년</option>
													<option value="2046">2046년</option>
													<option value="2047">2047년</option>
													<option value="2048">2048년</option>
													<option value="2049">2049년</option>
													<option value="2050">2050년</option>
													<option value="2051">2051년</option>
													<option value="2052">2052년</option>
													<option value="2053">2053년</option>
													<option value="2054">2054년</option>
													<option value="2055">2055년</option>
													<option value="2056">2056년</option>
													<option value="2057">2057년</option>
													<option value="2058">2058년</option>
													<option value="2059">2059년</option>
													<option value="2060">2060년</option>
													<option value="2061">2061년</option>
													<option value="2062">2062년</option>
													<option value="2063">2063년</option>
													<option value="2064">2064년</option>
													<option value="2065">2065년</option>
													<option value="2066">2066년</option>
													<option value="2067">2067년</option>
													<option value="2068">2068년</option>
													<option value="2069">2069년</option>
													<option value="2070">2070년</option>
													<option value="2071">2071년</option>
													<option value="2072">2072년</option>
													<option value="2073">2073년</option>
													<option value="2074">2074년</option>
												</select>
												<select className="tf tf-sm w60">
													<option value="1">1월</option>
													<option value="2">2월</option>
													<option value="3">3월</option>
													<option value="4">4월</option>
													<option value="5">5월</option>
													<option value="6">6월</option>
													<option value="7">7월</option>
													<option value="8">8월</option>
													<option value="9">9월</option>
													<option value="10">10월</option>
													<option value="11">11월</option>
													<option value="12">12월</option>
												</select>
												<button>&gt;</button>
												<div style={{width: '48px'}}></div>
											</div>
											<div className="react-datepicker__day-names">
												<div aria-label="일요일" className="react-datepicker__day-name">일</div>
												<div aria-label="월요일" className="react-datepicker__day-name">월</div>
												<div aria-label="화요일" className="react-datepicker__day-name">화</div>
												<div aria-label="수요일" className="react-datepicker__day-name">수</div>
												<div aria-label="목요일" className="react-datepicker__day-name">목</div>
												<div aria-label="금요일" className="react-datepicker__day-name">금</div>
												<div aria-label="토요일" className="react-datepicker__day-name">토</div>
											</div>
										</div>
										<div className="react-datepicker__month" aria-label="Month 6월, 2024" role="listbox">
											<div className="react-datepicker__week">
												<div className="react-datepicker__day react-datepicker__day--026 react-datepicker__day--weekend react-datepicker__day--outside-month"  aria-label="Choose 2024년 5월 26일 일요일" role="option" title="" aria-disabled="false" aria-selected="false">26</div>
												<div className="react-datepicker__day react-datepicker__day--027 react-datepicker__day--outside-month"  aria-label="Choose 2024년 5월 27일 월요일" role="option" title="" aria-disabled="false" aria-selected="false">27</div>
												<div className="react-datepicker__day react-datepicker__day--028 react-datepicker__day--outside-month"  aria-label="Choose 2024년 5월 28일 화요일" role="option" title="" aria-disabled="false" aria-selected="false">28</div>
												<div className="react-datepicker__day react-datepicker__day--029 react-datepicker__day--outside-month"  aria-label="Choose 2024년 5월 29일 수요일" role="option" title="" aria-disabled="false" aria-selected="false">29</div>
												<div className="react-datepicker__day react-datepicker__day--030 react-datepicker__day--outside-month"  aria-label="Choose 2024년 5월 30일 목요일" role="option" title="" aria-disabled="false" aria-selected="false">30</div>
												<div className="react-datepicker__day react-datepicker__day--031 react-datepicker__day--outside-month"  aria-label="Choose 2024년 5월 31일 금요일" role="option" title="" aria-disabled="false" aria-selected="false">31</div>
												<div className="react-datepicker__day react-datepicker__day--001 react-datepicker__day--weekend"  aria-label="Choose 2024년 6월 1일 토요일" role="option" title="" aria-disabled="false" aria-selected="false">1</div>
											</div>
											<div className="react-datepicker__week">
												<div className="react-datepicker__day react-datepicker__day--002 react-datepicker__day--weekend"  aria-label="Choose 2024년 6월 2일 일요일" role="option" title="" aria-disabled="false" aria-selected="false">2</div>
												<div className="react-datepicker__day react-datepicker__day--003"  aria-label="Choose 2024년 6월 3일 월요일" role="option" title="" aria-disabled="false" aria-selected="false">3</div>
												<div className="react-datepicker__day react-datepicker__day--004"  aria-label="Choose 2024년 6월 4일 화요일" role="option" title="" aria-disabled="false" aria-selected="false">4</div>
												<div className="react-datepicker__day react-datepicker__day--005"  aria-label="Choose 2024년 6월 5일 수요일" role="option" title="" aria-disabled="false" aria-selected="false">5</div>
												<div className="react-datepicker__day react-datepicker__day--006"  aria-label="Choose 2024년 6월 6일 목요일" role="option" title="" aria-disabled="false" aria-selected="false">6</div>
												<div className="react-datepicker__day react-datepicker__day--007"  aria-label="Choose 2024년 6월 7일 금요일" role="option" title="" aria-disabled="false" aria-selected="false">7</div>
												<div className="react-datepicker__day react-datepicker__day--008 react-datepicker__day--weekend"  aria-label="Choose 2024년 6월 8일 토요일" role="option" title="" aria-disabled="false" aria-selected="false">8</div>
											</div>
											<div className="react-datepicker__week">
												<div className="react-datepicker__day react-datepicker__day--009 react-datepicker__day--weekend"  aria-label="Choose 2024년 6월 9일 일요일" role="option" title="" aria-disabled="false" aria-selected="false">9</div>
												<div className="react-datepicker__day react-datepicker__day--010 react-datepicker__day--selected"  aria-label="Choose 2024년 6월 10일 월요일" role="option" title="" aria-disabled="false" aria-selected="true">10</div>
												<div className="react-datepicker__day react-datepicker__day--011"  aria-label="Choose 2024년 6월 11일 화요일" role="option" title="" aria-disabled="false" aria-selected="false">11</div>
												<div className="react-datepicker__day react-datepicker__day--012"  aria-label="Choose 2024년 6월 12일 수요일" role="option" title="" aria-disabled="false" aria-selected="false">12</div>
												<div className="react-datepicker__day react-datepicker__day--013"  aria-label="Choose 2024년 6월 13일 목요일" role="option" title="" aria-disabled="false" aria-selected="false">13</div>
												<div className="react-datepicker__day react-datepicker__day--014"  aria-label="Choose 2024년 6월 14일 금요일" role="option" title="" aria-disabled="false" aria-selected="false">14</div>
												<div className="react-datepicker__day react-datepicker__day--015 react-datepicker__day--weekend"  aria-label="Choose 2024년 6월 15일 토요일" role="option" title="" aria-disabled="false" aria-selected="false">15</div>
											</div>
											<div className="react-datepicker__week">
												<div className="react-datepicker__day react-datepicker__day--016 react-datepicker__day--weekend"  aria-label="Choose 2024년 6월 16일 일요일" role="option" title="" aria-disabled="false" aria-selected="false">16</div>
												<div className="react-datepicker__day react-datepicker__day--017"  aria-label="Choose 2024년 6월 17일 월요일" role="option" title="" aria-disabled="false" aria-selected="false">17</div>
												<div className="react-datepicker__day react-datepicker__day--018"  aria-label="Choose 2024년 6월 18일 화요일" role="option" title="" aria-disabled="false" aria-selected="false">18</div>
												<div className="react-datepicker__day react-datepicker__day--019"  aria-label="Choose 2024년 6월 19일 수요일" role="option" title="" aria-disabled="false" aria-selected="false">19</div>
												<div className="react-datepicker__day react-datepicker__day--020"  aria-label="Choose 2024년 6월 20일 목요일" role="option" title="" aria-disabled="false" aria-selected="false">20</div>
												<div className="react-datepicker__day react-datepicker__day--021"  aria-label="Choose 2024년 6월 21일 금요일" role="option" title="" aria-disabled="false" aria-selected="false">21</div>
												<div className="react-datepicker__day react-datepicker__day--022 react-datepicker__day--weekend"  aria-label="Choose 2024년 6월 22일 토요일" role="option" title="" aria-disabled="false" aria-selected="false">22</div>
											</div>
											<div className="react-datepicker__week">
												<div className="react-datepicker__day react-datepicker__day--023 react-datepicker__day--weekend"  aria-label="Choose 2024년 6월 23일 일요일" role="option" title="" aria-disabled="false" aria-selected="false">23</div>
												<div className="react-datepicker__day react-datepicker__day--024"  aria-label="Choose 2024년 6월 24일 월요일" role="option" title="" aria-disabled="false" aria-selected="false">24</div>
												<div className="react-datepicker__day react-datepicker__day--025"  aria-label="Choose 2024년 6월 25일 화요일" role="option" title="" aria-disabled="false" aria-selected="false">25</div>
												<div className="react-datepicker__day react-datepicker__day--026"  aria-label="Choose 2024년 6월 26일 수요일" role="option" title="" aria-disabled="false" aria-selected="false">26</div>
												<div className="react-datepicker__day react-datepicker__day--027"  aria-label="Choose 2024년 6월 27일 목요일" role="option" title="" aria-disabled="false" aria-selected="false">27</div>
												<div className="react-datepicker__day react-datepicker__day--028"  aria-label="Choose 2024년 6월 28일 금요일" role="option" title="" aria-disabled="false" aria-selected="false">28</div>
												<div className="react-datepicker__day react-datepicker__day--029 react-datepicker__day--weekend"  aria-label="Choose 2024년 6월 29일 토요일" role="option" title="" aria-disabled="false" aria-selected="false">29</div>
											</div>
											<div className="react-datepicker__week">
												<div className="react-datepicker__day react-datepicker__day--030 react-datepicker__day--weekend"  aria-label="Choose 2024년 6월 30일 일요일" role="option" title="" aria-disabled="false" aria-selected="false">30</div>
												<div className="react-datepicker__day react-datepicker__day--001 react-datepicker__day--outside-month"  aria-label="Choose 2024년 7월 1일 월요일" role="option" title="" aria-disabled="false" aria-selected="false">1</div>
												<div className="react-datepicker__day react-datepicker__day--002 react-datepicker__day--outside-month"  aria-label="Choose 2024년 7월 2일 화요일" role="option" title="" aria-disabled="false" aria-selected="false">2</div>
												<div className="react-datepicker__day react-datepicker__day--003 react-datepicker__day--outside-month"  aria-label="Choose 2024년 7월 3일 수요일" role="option" title="" aria-disabled="false" aria-selected="false">3</div>
												<div className="react-datepicker__day react-datepicker__day--004 react-datepicker__day--outside-month"  aria-label="Choose 2024년 7월 4일 목요일" role="option" title="" aria-disabled="false" aria-selected="false">4</div>
												<div className="react-datepicker__day react-datepicker__day--005 react-datepicker__day--outside-month"  aria-label="Choose 2024년 7월 5일 금요일" role="option" title="" aria-disabled="false" aria-selected="false">5</div>
												<div className="react-datepicker__day react-datepicker__day--006 react-datepicker__day--weekend react-datepicker__day--outside-month"  aria-label="Choose 2024년 7월 6일 토요일" role="option" title="" aria-disabled="false" aria-selected="false">6</div>
											</div>
										</div>
									</div>
									<div className="react-datepicker__today-button">오늘</div>
								</div>
							</div>
							<svg fill="currentColor" className="react-datepicker__triangle" aria-hidden="true" width="18" height="16" viewBox="0 0 16 16" style={{position: 'absolute', pointerEvents: 'none', left: '145.5px', bottom: '100%', transform: 'rotate(180deg) translateY(-1px)'}}>
								<path clip-path="url(#:rn:)" fill="none" stroke-width="3" d="M0,0 H16 L8,8 Q8,8 8,8 Z"></path>
								<path stroke="currentColor" d="M0,0 H16 L8,8 Q8,8 8,8 Z"></path>
								<clipPath id=":rn:">
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