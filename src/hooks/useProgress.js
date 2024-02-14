import { useState, useEffect } from "react";

const useProgress = (state) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationId;
    let startTime;
    let initialProgress = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      initialProgress = (elapsedTime / 3000) * 100;

      if (initialProgress <= 100) {
        setProgress(Math.floor(initialProgress));
        animationId = requestAnimationFrame(animate);
      } else {
        setProgress(100);
      }
    };

    if (state.index >= 0 && state.identifier !== null) {
      animationId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationId);
  }, [state.index, state.identifier]);

  return { progress };
};

export default useProgress;
