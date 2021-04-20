import { useEffect, useState } from "react";
const startTime = new Date("4/23/2021 UTC").getTime();

function Timer() {
  const [time, setTime] = useState(new Date().toUTCString());
  useEffect(() => {
    const timer = setTimeout(() => {
      const timeleft = startTime - new Date().getTime();
      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      setTime({ days, hours, minutes, seconds });
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div
      className="bg-dark shadow-lg mb-3"
      style={{ color: "whitesmoke", fontSize: "30px", textAlign: "center" }}
    >
      {time.days && `${time.days}d `}
      {time.hours && `${time.hours}h `}
      {time.minutes && `${time.minutes}m `}
      {`${time.seconds}s `}
      <span className="ml-2">Until Competition</span>
    </div>
  );
}

export default Timer;
