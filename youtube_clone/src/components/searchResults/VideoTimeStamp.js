import React, { useState, useEffect } from "react";

const VideoTimeStamp = ({ utcTimeStamp }) => {
  const [timeStamp, setTimeStamp] = useState(null);

  useEffect(() => {
    calculateYearsTimeStamp();
  }, [utcTimeStamp]);

  const calculateYearsTimeStamp = () => {
    try {
      // Convert UTC timestamp to Date object
      const utcDate = new Date(utcTimeStamp);

      const today = new Date();

      // Calculate the difference in years from today
      const timeDifference = today - utcDate;

      // Calculate years, months, weeks, and days
      const yearsAgo = Math.floor(
        timeDifference / (365.25 * 24 * 60 * 60 * 1000)
      );
      const monthsAgo = Math.floor(
        timeDifference / (30.44 * 24 * 60 * 60 * 1000)
      );
      const weeksAgo = Math.floor(timeDifference / (7 * 24 * 60 * 60 * 1000));
      const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

      // Determine the appropriate time unit
      if (yearsAgo >= 1) {
        setTimeStamp(`${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`);
      } else if (monthsAgo >= 1) {
        setTimeStamp(
          `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`
        );
      } else if (weeksAgo >= 1) {
        setTimeStamp(`${weeksAgo} ${weeksAgo === 1 ? "week" : "weeks"} ago`);
      } else if (daysAgo >= 1) {
        setTimeStamp(`${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`);
      } else {
        setTimeStamp("Today");
      }
    } catch (error) {
      return null;
    }
  };

  return (
    <div>
      <p> {timeStamp} </p>
    </div>
  );
};

export default VideoTimeStamp;
