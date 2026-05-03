import React, { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Counter = ({ value, duration = 2, decimals = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const finalValue = parseFloat(value);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = finalValue;
      const increment = end / (duration * 60);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [isInView, finalValue, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default Counter;
