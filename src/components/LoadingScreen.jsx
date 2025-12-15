import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const fullText = "Hey Welcome to my Official Website👋";
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          setFadeOut(true);

          setTimeout(() => {
            onComplete();
          }, 800);
        }, 500);
      }

    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black text-green-100 flex flex-col items-center justify-center transition-opacity duration-700 
      ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-pulse ml-1">!</span>
      </div>

      <div className="w-[200px] h-0.5 bg-green-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 animate-pulse shadow-[0_0_15px#3b]"></div>
      </div>
    </div>
  );
};
