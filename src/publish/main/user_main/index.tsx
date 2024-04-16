import React from "react";
//import { Link } from 'react-router-dom';
import PageContainer from '../PageContainer';
import useToggleState from 'components/hooks/useToggleState';
import ModalPopup from 'components/modal/';
import Button from 'components/buttons/';
function HomeContainer(){
	const modalConnectWallet = useToggleState({});
	return (
		<PageContainer>
			<div className='fww-con'>
				home
				
			</div>
		</PageContainer>
	);
}
export default HomeContainer;