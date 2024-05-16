import React from 'react';
//import 'assets/styles/raonkupload.min.css'


function kupload() {
	return (
		<div id="RAON_K_UP_wrapper" className='RAON_K_UP_file_upload_bluegray'>
			<div id="RAON_K_UP_content">
				<div className='RAON_K_UP_uploadbox'>
					<div className='RAON_K_UP_uploadbox_tit'>
						<ul>
							<li className='input_chk'>
								<input type='checkbox' id="chk_all_box" title="전체 선택"/>
							</li>
							<li id="header_bar_file_name" className='fname'>파일 이름</li>
							<li id="header_bar_file_size" className='fsize' style={{right:"282px"}}>파일 크기</li>
							<li className="user_header_box">
								<span id="user_header_bar_0" style={{width:"160px"}}>등록일시</span>
								<span id="user_header_bar_1" style={{width:"100px"}}>등록자</span>
							</li>
							<li className='header_rt_type'>&nbsp;</li>
						</ul>
					</div>
					<div className='RAON_K_UP_uploadbox_sec' id="RAON_K_UP_PL_holder" style={{height:"160px"}}>
						<p id="file_temp" className='txt'>
							이곳을 <span>더블클릭</span> 또는 <span>파일을 드래그</span> 하세요.
						</p>
						<div id="RAON_K_UP_file_temp" className='RAON_K_UP_uploadbox_txt'>
							{/*
							<ol id="file_list" className='lst_line_none'></ol> 
							*/}
							<ol id="file_list">
								<li>
									<ul className='border_none'>
										<li className='input_chk'>
											<input type='checkbox' id="input_chk1-1" />
										</li>
										<li className='fname'>
											<img src="https://fund.win-win.or.kr/raonkupload/images/xls.png" alt="xlsx" />
											<span className=' fileNameSelected fileNameSelectionBorder'>★2024_실리콘밸리3기_정산서_롯데벤처스.xlsx</span>
										</li>
										<li className='fsize fileSizeSelected fileSizeSelectionBorderCustom' style={{right:"282px", textAlign:"right"}}>
											<span>59.07 KB</span>
										</li>
										<li className='user_header_box customHeaderSelected customHeaderSelectionBorder'>
											<span style={{width:"160px"}}>2024-05-10 10:42:41 </span>
											<span style={{width:"100px"}}>&nbsp;최두수&nbsp;</span>
										</li>
										
									</ul>
								</li>
								<li>
									<ul className='border_none'>
										<li className='input_chk'>
											<input type='checkbox' id="input_chk1-2" />
										</li>
										<li className='fname'>
											<img src="https://fund.win-win.or.kr/raonkupload/images/xls.png" alt="xlsx" />
											<span className=''>★2024_실리콘밸리3기_정산서_롯데벤처스.xlsx</span>
										</li>
										<li className='fsize' style={{right:"282px", textAlign:"right"}}>
											<span>59.07 KB</span>
										</li>
										<li className='user_header_box '>
											<span style={{width:"160px"}}>2024-05-10 10:42:41 </span>
											<span style={{width:"100px"}}>&nbsp;최두수&nbsp;</span>
										</li>
									</ul>
								</li>
							</ol>
						</div>
					</div>
					<div className='RAON_K_UP_info_area'>
						<ul>
							<li id="basic_file_info" className='basic_file_info'>용량 무제한</li>
							<li className='contents_file_info'>
								<span id="total_num">0</span> 개, 
								<span id="total_size">0 byte</span>
								<span id="file_inserted_text">추가됨</span>
							</li>

						</ul>
					</div>
				</div>
				<div id="RAON_K_UP_uploadbox_btm" className='RAON_K_UP_uploadbox_btm'>
					<ul className='RAON_K_UP_uploadbox_left'>
						<li className='fbutton'>
							<button type='button' id="button_add" className='input_image'>파일추가</button>
							<button type='button' id="button_remove" className='input_image'>항목제거</button>
							<button type='button' id="button_remove_all" className='input_image'>전체 항목제거</button>
							<button type='button' id="button_download" className='input_image'>다운로드</button>
							<button type='button' id="button_download_all" className='input_image'>전체 다운로드</button>
						</li>
					</ul>
				</div>
			</div>
		</div>	
	);
}

export default kupload;
