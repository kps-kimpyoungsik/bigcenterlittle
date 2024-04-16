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
						<Button color="pri" size="big">버튼</Button>
						<Button color="pri-o" size="big">버튼</Button>
						<Button color="pri-o2" size="big">버튼</Button>
						<Button color="gray" size="big">버튼</Button>
						<Button color="gray-o" size="big">버튼</Button>
					</div>

					<br></br>
					<div className="hz-root hz-gap8">
						<Button color="pri" size="md">버튼</Button>
						<Button color="pri-o" size="md">버튼</Button>
						<Button color="pri-o2" size="md">버튼</Button>
						<Button color="gray" size="md">버튼</Button>
						<Button color="gray-o" size="md">버튼</Button>
					</div>

					<br></br>
					<div className="hz-root hz-gap5">
						<Button color="pri" size="sm">버튼</Button>	
						<Button color="pri-o" size="sm">버튼</Button>	
						<Button color="pri-o2" size="sm">버튼</Button>	
						<Button color="gray" size="sm">버튼</Button>	
						<Button color="gray-o" size="sm">버튼</Button>
						<Button color="gray-o" size="sm">버튼</Button>	
					</div>
				</main>			
			</div>
			
		</PageContainer>
	);
}
export default ContentsContainer;