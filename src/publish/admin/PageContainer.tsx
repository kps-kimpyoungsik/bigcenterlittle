import React from 'react';
interface PageContainerProps {
	children: React.ReactNode;
}
export default function PageContainer({ children }: PageContainerProps) {
	return (
		<div className="fww-group-aside-con">
			{children}
		</div>
	);
}