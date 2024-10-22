import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { marked } from "marked";
import logo from "../../assets/chat-white.png"

function GeminiInReact() {
    const [inputValue, setInputValue] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const genAI = new GoogleGenerativeAI(
        "AIzaSyCEv_d6s01BmLsJQ1nGF-i7NhSxNWoZvTY"
    );

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const getResponseForGivenPrompt = async () => {
        if (!inputValue.trim()) return;
        try {
            setLoading(true);

            setChatHistory((prev) => [
                ...prev,
                { text: inputValue, isUser: true },
            ]);
            setInputValue("");

            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const result = await model.generateContent(inputValue);
            const response = result.response;
            const text = response.text();
            console.log(text);

            setChatHistory((prev) => [...prev, { text, isUser: false }]);
            setLoading(false);
        } catch (error) {
            console.log(error);
            console.log("Something went wrong");
            setLoading(false);
        }
    };

    const EmptyState = () => (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-600 p-5">
            <img src={logo} alt="logo" className="h-auto w-[8em]" />
            <h2 className="text-xl font-bold mb-2 text-[#7e22ce]">
                Selamat datang di ChatBot!
            </h2>
            <p className="text-xs text-[#fff] max-w-md leading-relaxed">
                Mulai percakapan dengan mengirim pesan. Saya siap membantu Anda
                dengan berbagai pertanyaan.
            </p>
        </div>
    );

    return (
        <div className="flex flex-col justify-between h-screen p-5 bg-[#060136] rounded-xl">
            <div className="flex-grow overflow-y-auto p-3 mb-3 flex flex-col">
                {chatHistory.length === 0 ? (
                    <EmptyState />
                ) : (
                    <>
                        {chatHistory.map((message, index) => (
                            <ChatBubble
                                key={index}
                                message={message.text}
                                isUser={message.isUser}
                            />
                        ))}
                    </>
                )}

                {loading && (
                    <div className="flex justify-center m-3">
                        <div className="w-8 h-8 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex gap-3 w-full">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Ask me something you want"
                    className="flex-1 p-3 bg-indigo-800/80 border border-indigo-600 rounded-lg text-base focus:outline-none"
                />
                <button
                    onClick={getResponseForGivenPrompt}
                    className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

const parseMessage = (message) => {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(message)) !== null) {
        if (match.index > lastIndex) {
            parts.push({
                type: "text",
                content: message.slice(lastIndex, match.index),
            });
        }

        parts.push({
            type: "code",
            language: match[1] || "plaintext",
            content: match[2].trim(),
        });

        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < message.length) {
        parts.push({
            type: "text",
            content: message.slice(lastIndex),
        });
    }

    return parts.length > 0 ? parts : [{ type: "text", content: message }];
};

function ChatBubble({ message, isUser }) {
    const messageParts = parseMessage(message);

    return (
        <div className="flex flex-col w-full">
            <div
                className={`max-w-[80%] p-4 rounded-2xl shadow-md mb-3 ${
                    isUser
                        ? "ml-auto rounded-br-none bg-indigo-800/80 border border-indigo-600"
                        : "mr-auto rounded-bl-none bg-indigo-800/80 border border-indigo-600"
                } text-white`}
            >
                {messageParts.map((part, index) => {
                    if (part.type === "code") {
                        return (
                            <div
                                key={index}
                                className="my-2 overflow-hidden rounded-lg bg-gray-900"
                            >
                                <div className="flex justify-between items-center px-3 py-2 bg-gray-800 border-b border-gray-700">
                                    <span className="text-xs uppercase tracking-wider text-gray-300">
                                        {part.language}
                                    </span>
                                    <button
                                        onClick={() =>
                                            navigator.clipboard.writeText(
                                                part.content
                                            )
                                        }
                                        className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
                                    >
                                        Copy
                                    </button>
                                </div>
                                <SyntaxHighlighter
                                    language={part.language}
                                    style={vscDarkPlus}
                                    customStyle={{
                                        margin: "0",
                                        borderRadius: "4px",
                                        fontSize: "14px",
                                    }}
                                >
                                    {part.content}
                                </SyntaxHighlighter>
                            </div>
                        );
                    }
                    return (
                        <div
                            key={index}
                            className="prose prose-invert max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: marked(part.content),
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default GeminiInReact;