"use client";
import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const key = interval as keyof TimeLeft;
    if (!timeLeft[key]) {
      return;
    }

    timerComponents.push(
      <div
        key={interval}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "10px",
        }}
      >
        <span
          style={{
            color: "#FF6600",
            fontSize: "2rem",
            lineHeight: "1.2",
            textAlign: "center",
          }}
        >
          {timeLeft[key]}
        </span>
        <span
          style={{
            fontSize: "1rem",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          {interval.toUpperCase()}
        </span>
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "10px",
      }}
    >
      <span
        style={{
          marginBottom: "10px",
          color: "#FFFFFF",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        TWW Early Access
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {timerComponents.length ? timerComponents : <span>Times up!</span>}
      </div>
    </div>
  );
};

export default Countdown;
