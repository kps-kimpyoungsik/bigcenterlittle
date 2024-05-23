
import React from "react";
import Notfound from 'publish/admin/exceptionpage/404';
function NotFoundContainer() {
	return (
		<div className="fww-root">
			<Notfound />
			{/* 
			404, Syscheck퍼블은 다음 참고 <br/>
			src\publish\admin\exceptionpage\404\index.tsx <br/>
			src\publish\admin\exceptionpage\syscheck\index.tsx 
			*/}
		</div>

	);
}
export default NotFoundContainer;