import { useEffect, useRef, useState } from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import PrimayBtn from "../Button/Button";

const Hero = () => {
  const [countDays, setDays] = useState(0);
  const [countHours, setHours] = useState(0);
  const [countMinutes, setMinutes] = useState(0);
  const [countSeconds, setSeconds] = useState(0);
  const [timerEnded, setTimerEnded] = useState(false);

  const intervalRef = useRef(null);

  const startTimer = () => {
    // Create the event date in Indian Standard Time
    const eventDate = new Date('December 8, 2024 00:00:00 GMT+06:00');

    // Calculate the end of countdown (3 days after event start)
    const countdownEndDate = new Date(eventDate);
    countdownEndDate.setDate(eventDate.getDate() + 3);

    intervalRef.current = setInterval(() => {
      // Get current time
      const now = new Date();

      // Calculate distance to countdown end
      const distance = countdownEndDate.getTime() - now.getTime();

      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state
      if (distance < 0) {
        // Timer has ended
        clearInterval(intervalRef.current);
        setTimerEnded(true);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    // Start the timer when component mounts
    startTimer();

    // Cleanup interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          <h1 className={classes.heading}>VYOMA 2K4</h1>
          <h4 className={classes.caption}>Explore the Infinite Ever Expanding Space</h4>
          <p className={classes.date}>December 10th, 2024</p>
        </div>

        {!timerEnded ? (
          <div className={classes.countdownbox}>
            <div className={classes.countdown}>
              <p>{countDays}</p>
              <p>
                <small>Days</small>
              </p>
            </div>

            <span className={classes.column}>:</span>

            <div className={classes.countdown}>
              <p>{countHours}</p>
              <p>Hours</p>
            </div>

            <span className={classes.column}>:</span>

            <div className={classes.countdown}>
              <p>{countMinutes}</p>
              <p>Min</p>
            </div>

            <span className={classes.column}>:</span>
            <div className={classes.countdown}>
              <p>{countSeconds}</p>
              <p>Sec</p>
            </div>
          </div>
        ) : (
          <div className={classes.countdownbox}>
            <p>Countdown Ended!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;