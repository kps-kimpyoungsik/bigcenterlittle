import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from '../../PageContainer';
import LayoutAside from "../adm_4000Aside";
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
function ContentsContainer() {
	return (
		<PageContainer>
			<LayoutAside />
			<div className="fww-con">
				<main className="fww-main">

					<br></br>
					<div className="hz-root hz-gap10">
						<Button >버튼 hz</Button>
						<Button color="pri-o" size="big" hz="">버튼</Button>
						<Button color="pri-o2" size="big" hz="" >버튼</Button>
						<Button color="gray" size="big" hz="" >버튼</Button>
						<Button color="gray-o" size="big" hz="" >버튼</Button>
					</div>

					<br></br>
					<div className="hz-root hz-gap8">
						<Button color="pri" size="md" hz="" >버튼</Button>
						<Button color="pri-o" size="md" hz="" >버튼</Button>
						<Button color="pri-o2" size="md" hz="" >버튼</Button>
						<Button color="gray" size="md" hz="" >버튼</Button>
						<Button color="gray-o" size="md" hz="" >버튼</Button>
					</div>

					<br></br>
					<div className="hz-root hz-gap5">
						<Button color="pri" size="sm" hz="" >버튼</Button>	
						<Button color="pri-o" size="sm" hz="" >버튼</Button>	
						<Button color="pri-o2" size="sm" hz="" >버튼</Button>	
						<Button color="gray" size="sm" hz="" >버튼</Button>	
						<Button color="gray-o" size="sm" hz="" >버튼</Button>	
						<Button color="gray-o" size="sm" leftIcon  hz="">버튼</Button>	
					</div>
				</main>			
			</div>
			
		</PageContainer>
	);
}
export default ContentsContainer;