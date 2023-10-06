import React, { useState } from 'react';
import { DatePicker } from 'antd';
const Calendar = () => {
  const placement = useState('bottomRight');

    return (
    <div className='calendar'>
        <DatePicker placement={placement} />
    </div>
  );
};
export default Calendar;
