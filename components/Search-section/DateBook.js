import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css"
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';

function DateBook() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <div>
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                includeDateIntervals={[
                    { start: subDays(new Date(), 1), end: addDays(new Date(), 120) },
                ]}
                placeholderText="Check in - Check out"
                className='date-picker'
            />
        </div>
    )
}

export default DateBook