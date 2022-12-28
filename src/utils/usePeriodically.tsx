import React, { useCallback, useRef } from "react";

const usePeriodically = (cbDoSomething: () => void) => {
  //I needed this hook, because onLongPress of the Pressable isn't good enough or maybe I )
  //If we dispatch some values, while we hold the button, the new values of the state will be the interrupt function
  //So this is hook mock onLongPress and we can reuse this part for different tasks.

  //we can repeat our logic
  const holdInterval = useRef<ReturnType<typeof setInterval>>();
  //and delay him 
  const holdTimeout = useRef<ReturnType<typeof setTimeout>>();

  const startProcess = useCallback((delay: number, interval: number) => {
    if (typeof holdTimeout.current === 'undefined') {
      holdTimeout.current = setTimeout(() => {
        holdInterval.current = setInterval(cbDoSomething, interval);
      }, delay);
    }
  }, [])

  //Cleaning
  const stopProcess = () => {
    if (holdInterval.current) clearInterval(holdInterval.current);
    if (holdTimeout.current) clearTimeout(holdTimeout.current);
    holdInterval.current = undefined;
    holdTimeout.current = undefined;
  }

  return [startProcess, stopProcess] as [
    startProcess: (delay: number, interval: number) => void,
    stopProcess: () => void
  ];
}

export default usePeriodically;