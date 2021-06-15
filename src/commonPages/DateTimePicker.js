import React from 'react'
import DatePicker from "react-datepicker"

function DateTimePicker(props) {
    const { placeholder = "Date and time", selectedDateTime, isShowTime, onChange } = props
    // const dateTime = new Date(selectedDateTime)       MM/dd/yyyy h:mm aa
    
    return (
        <div>
            <DatePicker placeholderText={placeholder} dateFormat="Pp" className="form-control" selected={selectedDateTime || ''} showTimeSelect={isShowTime} onChange={onChange} />
            {/* null */}
        </div>
    )
}

export default DateTimePicker