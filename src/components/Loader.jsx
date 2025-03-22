import { useEffect } from "react";

const Loader = ({ duration, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete()
    }, duration * 1000)

    return () => clearTimeout(timer)
  }, [duration, onComplete]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary/80"
        style={{
          width: "0%",
          animation: `loadingAnimation ${duration}s ease-in-out forwards`,
        }}
      />
    </div>
  );
};

export default Loader;