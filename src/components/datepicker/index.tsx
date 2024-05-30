import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export interface DatePickerBaseProps {
	dateFormat?: string;
	displayFormat?: string;
	displayOnly?: boolean;
	showMonthYearPicker?: boolean;
	showFullMonthYearPicker?: boolean;
	showFourColumnMonthYearPicker?: boolean;
	showYearPicker?: boolean;
}

export interface DatePickerProps extends DatePickerBaseProps {
	value?: Date;
	valueChanged?: (value: Date) => void;
	minDate?: Date;
	maxDate?: Date;
	withoutWrapper?: boolean;
	showToday?: boolean;
	className?: string;
	dateFormat?:string;
}

UIDatePicker.defaultProps = {
	dateFormat : 'yyyy-MM-dd(eee)'
} as DatePickerBaseProps;

// DatePicker
function UIDatePicker(props: DatePickerProps) {
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
	//const [date] = React.useState(props.value)
	const datePickerRef = React.useRef<any>();;
	const picker: React.ReactElement = (
		<div className="datepicker">
			<DatePicker
				ref={datePickerRef}
				dateFormat={props.dateFormat}
				minDate={props.minDate}
				maxDate={props.maxDate}
				selected={selectedDate}
				//selected={date}
				onChange={(date) => setSelectedDate(date)}
			/>
			{/* <button className="bt-calander" type="button" onClick={() => datePickerRef.current.setOpen(true)}>
				<i className="ic ic-calandar"></i>
			</button> */}
		</div>
	);
	return picker;
}

export default UIDatePicker;
