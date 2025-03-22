import { useState } from "react";
import Typewriter from "typewriter-effect";
import { Code, Terminal } from "lucide-react";

const CodeTyper = ({ fileName, code, onComplete, speed = 30 }) => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="max-w-3xl mx-auto my-8 rounded-lg overflow-hidden shadow-xl border border-border whitespace-pre-wrap">
      <div className="bg-card text-card-foreground px-4 py-3 flex justify-between items-center border-b border-border">
        <div className="flex items-center gap-2">
          <Code size={16} className="text-primary" />
          <span className="font-mono text-sm">{fileName}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Terminal size={14} />
          <span>Anantajit JG coding...</span>
        </div>
      </div>
      <div className="p-5 bg-black text-white min-h-[200px] font-mono">
        <Typewriter
          options={{
            delay: speed,
            cursor: "▋",
            deleteSpeed: 0,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(code)
              .callFunction(() => {
                setIsComplete(true)
                if (onComplete) setTimeout(onComplete, 1000)
              })
              .start()
          }}
        />
      </div>
    </div>
  );
};

export default CodeTyper;