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
					


					<p className="tx tx-hd1">
						[HD1] 다람쥐 헌 쳇바퀴에 타고파 The quick brown fox jumps over a(the) lazy dog. 1234567890
					</p>
					
					<hr/>
					<p className="tx tx-hd2">
						[HD2]다람쥐 헌 쳇바퀴에 타고파 The quick brown fox jumps over a(the) lazy dog. 1234567890
					</p>

					<hr/>
					<p className="tx tx-hd3">
						[HD1]다람쥐 헌 쳇바퀴에 타고파 The quick brown fox jumps over a(the) lazy dog. 1234567890
					</p>

					<hr/>
					<p className="tx tx-bd1">
						[BD1]다람쥐 헌 쳇바퀴에 타고파 The quick brown fox jumps over a(the) lazy dog. 1234567890
					</p>

					<hr/>
					<p className="tx tx-bd2">
						[BD2]다람쥐 헌 쳇바퀴에 타고파 The quick brown fox jumps over a(the) lazy dog. 1234567890
					</p>
					<p className="tx tx-bd2">
										
					</p>			
					<a className="tx tx-bd2 tx-link" href="">[BD2 LINK]다람쥐 헌 쳇바퀴에 타고파 The quick brown fox jumps over a(the) lazy dog. 1234567890</a>

					<hr/>
					<p className="tx tx-bd3">
						[BD3]다람쥐 헌 쳇바퀴에 타고파 The quick brown fox jumps over a(the) lazy dog. 1234567890
					</p>

					<hr/>
					<p className="tx tx-bd4">
						[BD4]다람쥐 헌 쳇바퀴에 타고파 The quick brown fox jumps over a(the) lazy dog. 1234567890
					</p>

					<hr/>
					<p className="tx tx-cp1">
						[CP1]다람쥐 헌 쳇바퀴에 타고파 The quick brown fox jumps over a(the) lazy dog. 1234567890
					</p>

					<hr/>
					<p className="tx tx-cp2">
						[CP2]다람쥐 헌 쳇바퀴에 타고파 The quick brown fox jumps over a(the) lazy dog. 1234567890
					</p>			
		
				</main>			
			</div>
			
		</PageContainer>
	);
}
export default ContentsContainer;