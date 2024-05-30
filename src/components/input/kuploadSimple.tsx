import React from 'react';
function KuploadSimple() {
	return (
		<div className='filebox'>
			<article className='kupload-simple-ui ui-font-family holder-border standard-font-size kupload-ui-width'>
				<div className='kupload-simple-single-ui' style={{height:'50px'}}>
					<div className='kupload-simple-single-ui-area'>
						<div className='file-info-area file-btn-xonly'>
							<p className='file-info base-font-color'>
								<span className='file-name base-font-size'>화면설계서(사용자페이지)_Ver0.898_20240524</span>
								<span className='file-ext base-font-size'>.pptx</span>
								<span className='file-size file-size-color'>4.7 MB</span>
							</p>
							<span className='file-list-icons'>
								<a className='icon-down icon-hover-color'>
									<svg></svg>
								</a>
							</span>
						</div>
						<div className='file-btn-area'>
							<a href="#" className='kupload-simple-ui-title-area-icon-border kupload-simple-ui-font-size kupload-single-ui-dwbtn'>
								<svg></svg>
							</a>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
}

export default KuploadSimple;