import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function GeminiChat() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [chat, setChat] = useState([
    {
      sender: "ai",
      text: "👋 Hi! I'm VoltPath AI. Ask me anything about EV charging stations, charging types, batteries or routes."
    }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat]);

  const askGemini = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setChat((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/gemini",
        {
          message: userMessage,
        }
      );

      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: res.data.reply,
        },
      ]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Gemini AI is currently unavailable.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
          fixed
          bottom-5
          right-5
          h-16
          w-16
          rounded-full
          bg-green-500
          text-3xl
          shadow-xl
          hover:scale-110
          transition
          z-50
          "
        >
          🤖
        </button>
      )}

      {/* Chat Window */}

      {open && (
        <div
          className="
          fixed
          bottom-5
          right-5

          w-[360px]
          max-w-[95vw]

          h-[520px]
          max-h-[85vh]

          bg-slate-900
          rounded-2xl
          shadow-2xl
          border
          border-green-500
          flex
          flex-col
          overflow-hidden
          z-50
          "
        >
          {/* Header */}

          <div className="bg-green-500 text-white p-4 flex justify-between items-center">

            <div>
              <h2 className="font-bold text-lg">
                🤖 VoltPath AI
              </h2>

              <p className="text-xs">
                Online
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-2xl"
            >
              ×
            </button>

          </div>

          {/* Chat */}

          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {chat.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-wrap text-sm ${
                    msg.sender === "user"
                      ? "bg-green-500 text-white"
                      : "bg-slate-800 text-gray-200"
                  }`}
                >
                  {msg.text}
                </div>

              </div>

            ))}

            {loading && (

              <div className="bg-slate-800 inline-block rounded-xl px-4 py-2 text-gray-300">

                Thinking...

              </div>

            )}

            <div ref={bottomRef}></div>

          </div>

          {/* Footer */}

          <div className="border-t border-slate-700 p-4">

            <textarea
              rows={2}
              placeholder="Ask anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  askGemini();
                }
              }}
              className="
              w-full
              rounded-xl
              p-3
              text-black
              resize-none
              outline-none
              "
            />

            <div className="flex gap-3 mt-3">

              <button
                onClick={askGemini}
                disabled={loading}
                className="
                flex-1
                bg-green-500
                hover:bg-green-600
                py-3
                rounded-xl
                font-bold
                "
              >
                {loading ? "Thinking..." : "Send"}
              </button>

              <button
                onClick={() =>
                  setChat([
                    {
                      sender: "ai",
                      text: "👋 Chat cleared. Ask me anything."
                    },
                  ])
                }
                className="
                bg-red-500
                px-4
                rounded-xl
                "
              >
                Clear
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}