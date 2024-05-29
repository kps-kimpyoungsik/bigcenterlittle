import React from "react";
export interface UIDataTableProps {
	dataList:any[]
	rowNumber?: boolean;
	noDataMessage?: string;
	thead?: React.ReactNode;
	headerVisible?: {
		totalCount?: boolean;
	};
	columns: IDataTableColumn[];
}
UIDataTable.defaultProps = {
	noDataMessage: "데이터가 없습니다.",
} as UIDataTableProps;
function UIDataTable(props: UIDataTableProps) {
	let filteredList = props.dataList;
	const resetTotalRecordCount = props.dataList.length;
	React.useEffect(() => {
		props.dataList.forEach((data) => {
		});
	},[props.dataList]
	);
	return (
		<div className="tb mb10">
			{props.headerVisible?.totalCount === true && 
				<div className="tb-top">
					<p className="tx fc-black">총&nbsp;<em className="fw500">{resetTotalRecordCount}</em>건</p>
				</div>
			}
			<table>
				<colgroup>
					{props.rowNumber && <col width="90px" />}
					{props.columns.map((column, index) => (
						<col key={index} width={column.width} />
					))}
				</colgroup>
				{props.thead != null ? (props.thead) : (
				<thead>
					<tr>
						{props.rowNumber && <th>No</th>}
						{props.columns.map((column, index) => (
						<th key={index}>
							{column.title}
						</th>
						))}
					</tr>
				</thead>
				)}
				<tbody>
					{filteredList.length === 0 && (
						<tr>
							<td colSpan={props.columns.length +(props.rowNumber ? 1 : 0)}> 
								<div className="nd">
									<p className="tx tx-cp2 fc-666">{props.noDataMessage}</p>
								</div>
							</td>
						</tr>
					)}
					{filteredList.map((rowData, index) => {
						 return (
						<tr key={rowData.KEY}>
							{props.rowNumber && <td>{index + 1}</td>}
							{props.columns.map((column, index) => (
								<td key={index} className={(column.align) && 'ta-'+column.align}>
									{typeof column.render=== "function" && column.render(rowData === true)}
								</td>
							))}
						</tr>
						);
					})}	
				</tbody>
			</table>
		</div>
	);
}
export default UIDataTable;

export interface IDataTableColumn {
	title?: string;
	width?: string;
	align?: "left" | "right";
	render?: (rowData: any, readOnly?: boolean) => JSX.Element;
}