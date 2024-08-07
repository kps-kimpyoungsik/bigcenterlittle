import React,{useEffect} from "react";
import PageContainer from '../PageContainer';
function ContentsContainer() {
	const info = {
        "title": "대·중소기업 상생협력기금 종합관리시스템 퍼블리싱",
        "url_first": "http://localhost:",
        "url_port": "3000",
        "table_head": ['PID','D1','D2','D3','D4','D5','D6','날짜','진행','메모'],
		/*예외 URL 추가*/
        "url_exception": [
			{ 
			"pid": "usr_1100",
			"alternative_url": "" 
			},
			{ 
			"pid": "admlogin",
			"alternative_url": "login" 
			}, 
		],
		"ia" : [
			{
				"d1": "HOME",
				"d1id": "usr_1000",
				"page": [
					["usr_1100", "HOME", "홈", "-", "-", "-", "-", "2024.04.19", "state3", "04.22 디자인작업완료 / 추후 디자인 변경예정"],
					["usr_1200", "HOME", "회원가입", "회원가입 약관동의", "-", "-", "-", "2024.04.19", "state3", ""],
					["usr_1201p", "HOME", "회원가입", "인증수단 선택 창", "-", "-", "-", "2024.04.19", "state3", "화면은 없음, 기존 모듈창 활용"],
					["usr_1202", "HOME", "회원가입", "회원가입 정보입력", "-", "-", "-", "2024.04.19", "state3", "1203p 포함"],
					["usr_1203p", "HOME", "회원가입", "기업검색 팝업", "-", "-", "-", "2024.04.19", "state3", "-"],
					["usr_1204", "HOME", "회원가입", "회원가입 완료", "-", "-", "-", "2024.04.19", "state3", "-"],
					["usr_1300", "HOME", "로그인", "-", "-", "-", "-", "2024.04.19", "state3", "-"],
					["usr_1400", "HOME", "아이디/비밀번호 찾기", "아이디 찾기 탭", "-", "-", "-", "2024.04.19", "state3", "usr_1403 tab포함 "],
					["usr_1401p", "HOME", "아이디/비밀번호 찾기", "인증수단 선택 창", "-", "-", "-", "2024.04.19", "state3", "화면은 없음, 기존 모듈창 활용"],
					["usr_1402", "HOME", "아이디/비밀번호 찾기", "아이디 찾기 결과", "-", "-", "-", "2024.04.19", "state3", "-"],
					["usr_1403", "HOME", "아이디/비밀번호 찾기", "비밀번호 찾기 탭", "-", "-", "-", "2024.04.19", "state3", "-"],
					["usr_1500", "HOME", "마이페이지", "내정보", "-", "-", "-", "2024.04.19", "state3", "-"],
					["usr_1501", "HOME", "마이페이지", "내기업정보", "-", "-", "-", "2024.04.19", "state3", "-"],
					["usr_1502", "HOME", "마이페이지", "비밀번호 수정", "-", "-", "-", "2024.04.19", "state3", "-"],
					["usr_1503", "HOME", "마이페이지", "회원탈퇴", "-", "-", "-", "2024.05.22", "state3", "-"],
					["usr_1600", "HOME", "개인정보처리방침", "", "-", "-", "-", "2024.04.22", "state3", "컨텐츠 최신 업데이트 필요"],
					["usr_1700", "HOME", "이용약관", "", "-", "-", "-", "2024.04.22", "state3", "컨텐츠 최신 업데이트 필요"],
					["usr_1800", "HOME", "이메일무단수집거부", "", "-", "-", "-", "2024.04.22", "state3", "컨텐츠 최신 업데이트 필요"],
					["usr_1810", "HOME", "보안프로그램 설치", "", "-", "-", "-", "2024.04.25", "state3", ""],
				]
				},
				{
				"d1": "상생협력기금 안내",
				"d1id": "usr_1900",
				"page": [
					["usr_1900", "제도소개", "-", "-", "-", "-", "-", "2024.04.30", "state3", "-"],
					["usr_1901", "투명한기금운영", "-", "-", "-", "-", "-", "2024.05.08", "state3", "디자인수급 후 작업완료"],
					["usr_1902", "기관안내", "-", "-", "-", "-", "-", "2024.04.30", "state3", "-"],
					["usr_1903", "우수사례", "-", "-", "-", "-", "-", "2024.04.30", "state3", "-"],
					["usr_1906", "우수사례", "우수사례 상세", "-", "-", "-", "-", "2024.04.30", "state3", "-"],
					["usr_1904", "수요조사", "수요조사 신청목록", "-", "-", "-", "-", "2024.04.30", "state3", "usr_1907 tab포함"],
					["usr_1907", "수요조사", "수요조사 지원내역 목록", "-", "-", "-", "-", "2024.04.30", "state3", "-"],
					["usr_1908", "수요조사", "수요조사 상세", "-", "-", "-", "-", "2024.04.30", "state3", "-"],
					["usr_1905", "수요조사", "수요조사 등록", "-", "-", "-", "-", "2024.04.30", "state3", "-"],
					["usr_1909", "수요조사", "수요조사 지원내용", "-", "-", "-", "-", "2024.04.30", "state3", "-"],
					["usr_1910", "수요조사", "수요조사 지원 내용 수정", "-", "-", "-", "-", "2024.04.30", "state3", "-"],
				] 
				},
				{
				"d1": "기금출연",
				"d1id": "usr_2000",
				"page": [
					["usr_2000", "출연신청", "출연신청 정보 입력", "-", "-", "-", "-", "2024.04.26", "state3", "2001p포함"],
					["usr_2001p", "출연신청", "안내사항 보기창", "-", "-", "-", "-", "2024.05.08", "state3", "디자인수급 작업완료"],
					["usr_2002", "출연현황", "출연현황 목록 - 목록 없음", "-", "-", "-", "-", "2024.04.26", "state3", "2003포함"],
					["usr_2003", "출연현황", "출연현황 목록", "-", "-", "-", "-", "2024.04.26", "state3", ""],
					["usr_2004", "출연현황", "출연 상세 - 전자인증 전", "-", "-", "-", "-", "2024.04.26", "state3", "2005p포함"],
					["usr_2005p", "출연현황", "가상 계좌 발급 안내창", "-", "-", "-", "-", "2024.04.26", "state3", "컨텐츠 최신 업데이트 필요"],
					["usr_2006", "출연현황", "출연 내용 수정", "-", "-", "-", "-", "2024.04.26", "state3", "-"],
					["usr_2007", "전용신청", "전용 신청정보 입력", "-", "-", "-", "-", "2024.04.26", "state3", "2008p포함"],
					["usr_2008p", "전용신청", "출연 번호 선택창", "-", "-", "-", "-", "2024.04.26", "state3", "-"],
					["usr_2009", "전용현황", "전용현황 목록 - 목록없음", "-", "-", "-", "-", "2024.04.26", "state3", "2010포함"],
					["usr_2010", "전용현황", "전용현황 목록", "-", "-", "-", "-", "2024.04.26", "state3", "-"],
					["usr_2011", "전용현황", "전용 요청 상세", "-", "-", "-", "-", "2024.04.26", "state3", "-"],
					["usr_2012", "전용현황", "전용 요청 내용 수정", "-", "-", "-", "-", "2024.04.26", "state3", "-"],
				] 
				},          
				{
				"d1": "기금운영",
				"d1id": "usr_2100",
				"page": [
					["usr_2100", "기금운영", "과제승인신청", "과제 신청 약관 동의", "-", "-", "-", "2024.05.09", "state3", "-"],
					["usr_2101", "기금운영", "과제승인신청", "과제 신청 정보 입력", "-", "-", "-", "2024.05.09", "state3", "2102p, 2103p,2104p포함"],
					["usr_2102p", "기금운영", "과제승인신청", "수행기관 찾기 팝업", "-", "-", "-", "22024.05.09", "state3", "-"],
					["usr_2103p", "기금운영", "과제승인신청", "수행기관 신규 등록 팝업", "-", "-", "-", "2024.05.09", "state3", "-"],
					["usr_2104p", "기금운영", "과제승인신청", "수행기관 관리 팝업", "-", "-", "-", "22024.05.09", "state3", "-"],
					["usr_2105", "기금운영", "과제현황", "과제 현황 목록", "-", "-", "-", "2024.05.09", "state3", "-"],
					//["usr_2106", "기금운영", "과제현황", "과제 현황 목록", "-", "-", "-", "2024.$$.$$", "state1", "-"],
					["usr_2107", "기금운영", "과제현황", "과제 상세", "-", "-", "-", "2024.05.09", "state3", "-"],
					["usr_2108", "기금운영", "과제현황", "과제 내용 수정", "-", "-", "-", "2024.05.09", "state3", "-"],
					// ["usr_2109", "기금운영", "과제현황", "상생기금외 지원 내역", "상생기금외 지원 내역 목록 - 목록 없음", "-", "-", "2024.$$.$$", "state1", "-"],
					// ["usr_2110", "기금운영", "과제현황", "상생기금외 지원 내역", "상생기금외 지원 내역 목록", "-", "-", "2024.$$.$$", "state1", "-"],
					// ["usr_2111", "기금운영", "과제현황", "상생기금외 지원 내역", "상생기금외 지원 내용", "-", "-", "2024.$$.$$", "state1", "-"],
					// ["usr_2112", "기금운영", "과제현황", "상생기금외 지원 내역", "상생기금외 지원 내역 등록", "-", "-", "2024.$$.$$", "state1", "-"],
					// ["usr_2113p", "기금운영", "과제현황", "상생기금외 지원 내역", "과제 선택창", "-", "-", "2024.$$.$$", "state1", "-"],
					["usr_2114", "기금운영", "지급정산신청", "지급신청 약관 동의", "-", "-", "-", "2024.05.09", "state3", "-"],
					["usr_2115", "기금운영", "지급정산신청", "수행 과제 선택창", "-", "-", "-", "2024.05.09", "state3", "popup"],
					["usr_2116", "기금운영", "지급정산신청", "지급신청 목록", "-", "-", "-", "2024.05.09", "state3", "-"],
					// ["usr_2117", "기금운영", "지급정산신청", "지급신청 - 수행기업이 없는 경우", "-", "-", "-", "2024.$$.$$", "state1", "-"],
					// ["usr_2118", "기금운영", "지급정산신청", "지급신청 - 수행기업이 있는 경우", "-", "-", "-", "2024.$$.$$", "state1", "-"],
					["usr_2119", "기금운영", "지급정산신청", "지급 신청 정보 입력", "-", "-", "-", "2024.05.09", "state3", "2121p, 2122p포함"],
					//["usr_2120p", "기금운영", "지급정산신청", "지원기업 목록 수정창", "-", "-", "-", "2024.$$.$$", "state1", "-"],
					["usr_2121p", "기금운영", "지급정산신청", "지원기업 목록 수정창 - 수행기업이 있는 경우", "-", "-", "-", "2024.05.09", "state3", "-"],
					["usr_2122p", "기금운영", "지급정산신청", "수행 기업 목록 수정 창", "-", "-", "-", "2024.05.09", "state3", "-"],
					["usr_2123", "기금운영", "지급현황", "지급현황 - 목록없음", "-", "-", "-", "2024.05.10", "state3", "2124포함"],
					//["usr_2124", "기금운영", "지급현황", "지급현황 목록", "-", "-", "-", "2024.05.09", "state1", "-"],
					["usr_2125", "기금운영", "지급현황", "지급 상세", "-", "-", "-", "2024.05.10", "state3", "2126p, 2127p포함"],
					["usr_2126p", "기금운영", "지급현황", "지원기업 목록", "-", "-", "-", "2024.05.10", "state3", "-"],
					["usr_2127p", "기금운영", "지급현황", "수행기업 목록", "-", "-", "-", "2024.05.10", "state3", "-"],
					//["usr_2128p", "기금운영", "지급현황", "지원기업 목록 - 수행기업이 있는 경우", "-", "-", "-", "2024.$$.$$", "state1", "-"],
					["usr_2129", "기금운영", "지급현황", "지급내용 수정", "-", "-", "-", "2024.05.10", "state3", "-"],
					// ["usr_2120p", "기금운영", "지급현황", "지원기업 목록 수정창", "-", "-", "-", "2024.$$.$$", "state1", "-"],
					// ["usr_2121p", "기금운영", "지급현황", "지원기업 목록 수정창 - 수행기업이 있는 경우", "-", "-", "-", "2024.$$.$$", "state1", "-"],
					// ["usr_2122p", "기금운영", "지급현황", "수행기업 목록 수정창", "-", "-", "-", "2024.$$.$$", "state1", "-"],
					// ["usr_2133", "기금운영", "환수신청", "환수신청 목록 - 목록없음", "-", "-", "-", "2024.$$.$$", "state1", "-"],
					["usr_2133", "기금운영", "환수신청", "환수신청 목록", "-", "-", "-", "2024.05.10", "state3", "-"],
					["usr_2135p", "기금운영", "환수신청", "지급과제찾기창", "-", "-", "-", "2024.05.10", "state3", "-"],
					["usr_2136", "기금운영", "환수신청", "환수신청·정보입력", "-", "-", "-", "2024.05.10", "state3", "2135p, 2138p포함"],
					["usr_2138p", "기금운영", "환수신청", "환수기업 내역등록창", "-", "-", "-", "2024.05.10", "state3", "-"],
					["usr_2137", "기금운영", "환수신청", "환수신청 내용", "-", "-", "-", "2024.05.10", "state3", "-"],
					["usr_2138", "기금운영", "환수신청", "환수신청 수정", "-", "-", "-", "2024.05.10", "state3", "-"],
				] 
				},          
				{
				"d1": "통합정보조회",
				"d1id": "usr_2200",
				"page": [
					["usr_2200", "통합정보조회", "통합정보조회", "-", "-", "-", "-", "2024.05.14", "state3", "-"],
					["usr_2201", "통합정보조회", "입출금내역조회", "-", "-", "-", "-", "2024.05.14", "state3", "-"],
					["usr_2202", "통합정보조회", "기부금영수증 조회", "-", "-", "-", "-", "2024.05.14", "state3", "-"],
					["usr_2209", "통합정보조회", "통계관리", "-", "-", "-", "-", "2024.05.14", "state3", "-"],
					["usr_2213", "통합정보조회", "과제 선택", "-", "-", "-", "-", "2024.05.14", "state3", "popup"],
				] 
				},          
				{
				"d1": "고객지원",
				"d1id": "usr_2300",
				"page": [
					["usr_2300", "고객지원", "안내사항", "안내사항 목록", "-", "-", "-", "2024.04.12", "state3", "-"],
					["usr_2301", "고객지원", "안내사항", "안내사항 상세", "-", "-", "-", "2024.04.12", "state3", "-"],
					["usr_2302", "고객지원", "자주묻는질문", "자주묻는 질문 목록", "-", "-", "-", "2024.04.12", "state3", "-"],
					["usr_2303", "고객지원", "자주묻는질문", "자주묻는 질문 상세", "-", "-", "-", "2024.04.12", "state3", "-"],
				] 
			},
		]
	}
	
	useEffect(() => { 
		return () => {
			let root = document.querySelector('.skt-usr');
			const table_base = '';
			if (root !== null) {
				for (let i = 0; i < info.ia.length; i++) {
					//카테고리수만큼...(i)
					root.insertAdjacentHTML('beforeend', '<h2>'+info.ia[i].d1+'</h2>'); //제목
					let tb = document.createElement('table'); //테이블
					root.appendChild(tb);
					
					/*Thead------------------------------------------------------------------------*/
					let tb_h = document.createElement('thead');
					tb.appendChild(tb_h);
					let tb_h_tr = document.createElement('tr');
					tb_h.appendChild(tb_h_tr);
					for (let ii = 0; ii < info.table_head.length; ii++) {
					tb_h_tr.insertAdjacentHTML('beforeend', '<th>'+info.table_head[ii]+'</th>');
					}
					/*//Thead------------------------------------------------------------------------*/
		
					let tb_b = document.createElement('tbody');
					tb.appendChild(tb_b);
					
					for (let j = 0; j < info.ia[i].page.length; j++) {
					//특정 카테고리내 페이지수만큼...(j)
					let tb_b_tr = document.createElement('tr');
					tb_b.appendChild(tb_b_tr);
					
					for (let k = 0; k < info.table_head.length; k++) {
						//칼럼개수만큼...(k)
						let tb_b_tr_tb = document.createElement('td');
						
						if(k === 0){ //링크일경우,
		
						let url = info.url_first+info.url_port+'/'+'main/'+info.ia[i].d1id+'/'+info.ia[i].page[j][k];
		
						for (let l = 0; l < info.url_exception.length; l++) {
							if(info.ia[i].page[j][k] === info.url_exception[l].pid) {
							url = info.url_first+info.url_port+'/'+'main/'+info.url_exception[l].alternative_url;
							}
						}
		
						let state = info.ia[i].page[j][8];
						let linkClass = '';
						switch(state) {
							case 'state1':
							break;
							case 'state2':
							break;
							case 'state3':  
							linkClass = 'p';
							break;
						}
		
						tb_b_tr.insertAdjacentHTML('beforeend', '<td>'+'<a class=\''+linkClass+'\' href=\''+url+'\' target=\'_blank\'>'+info.ia[i].page[j][k]+'</a>'+'</td>');  
						
						}else if(k === 8) { //진행일경우,
						let state = info.ia[i].page[j][k];
						let stateClass = '';
						let stateTxt = '';
						switch(state) {
							case 'state1':
							stateClass = state;
							stateTxt = '작업전';
							break;
							case 'state2':
							stateClass = state;
							stateTxt = '작업중';
							break;
							case 'state3':  
							stateClass = state;
							stateTxt = '완료';
							break;
						}                
						tb_b_tr.insertAdjacentHTML('beforeend', '<td class=\''+stateClass+'\'>'+stateTxt+'</td>');
						
						}else { //나머지,
						tb_b_tr.insertAdjacentHTML('beforeend', '<td>'+info.ia[i].page[j][k]+'</td>');
						}
					}
				}
				}
			
			}
		}

	})
	return (
		<PageContainer>
			<div className="skt-usr skt-tb" ></div>
		</PageContainer>
	);
}
export default ContentsContainer;