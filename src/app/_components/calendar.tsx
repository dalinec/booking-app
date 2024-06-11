"use client";

import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import { add, format } from "date-fns";

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

const Calendar = () => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });

  const getTimes = () => {
    if (!date.justDate) return;
    const { justDate } = date;
    const beggining = add(justDate, { hours: 9 });
    const end = add(justDate, { hours: 17 });
    const interval = 30; //minutes

    const times = [];
    for (let i = beggining; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {date.justDate ? (
        <div className="flex gap-4">
          {times?.map((time, i) => {
            return (
              <div className="rounded-md bg-gray-100 p-2" key={`time-${i}`}>
                <button
                  type="button"
                  onClick={() =>
                    setDate((prev) => ({ ...prev, dateTime: time }))
                  }
                >
                  {format(time, "kk:mm")}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          className="REACT-CALENDAR p-2"
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      )}
    </div>
  );
};

export default Calendar;
