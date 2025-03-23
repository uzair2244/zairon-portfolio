import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send } from "lucide-react";

const ChatBotComponent = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    // {
    //   id: 1,
    //   text: "Hi! How can I assist you today?",
    //   sender: "bot"
    // }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true); // Track first visit
  const messagesEndRef = useRef(null);

  // You should store this in an environment variable in a real application
  const GROQ_API_KEY =
    "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";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to call Groq API
  const fetchGroqResponse = async (userMessage) => {
    setIsTyping(true);

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama3-8b-8192",
            messages: [
              {
                role: "system",
                content: `You are the official chat assistant for Zairon Hub, a software development company founded by M Uzair Shahid Rao and Zubair Shahid in 2020, based in Lahore, Pakistan.
  
  Your role is to:
  - Answer user questions with concise information about Zairon Hub.
  - Focus only on the company's services and related topics.
  - If a user asks for project inquiries or more details, guide them to the contact form (https://zairon-portfolio.vercel.app/contact).
  - company email is uzirao17@gmail.com
  - If user ask about something that doesn't relate with out service, tell them we cant assist with that, but keep the response as short as you can.
  - Do NOT provide unrelated answers or guides on how to build websites or perform technical tasks.
  
  Example reply:
  - "Welcome to Zairon Hub! We’re a software development company founded in 2020. How can we assist you today?"`,
              },
              ...messages.map((msg) => ({
                role: msg.sender === "user" ? "user" : "assistant",
                content: msg.text,
              })),
              { role: "user", content: userMessage },
            ],
            temperature: 0.7,
            max_tokens: 500,
          }),
        }
      );

      const data = await response.json();

      if (data.choices && data.choices[0]) {
        const botResponse = {
          id: messages.length + 2,
          text: data.choices[0].message.content,
          sender: "bot",
        };
        setMessages((prev) => [...prev, botResponse]);
      } else {
        throw new Error("Invalid response from Groq API");
      }
    } catch (error) {
      console.error("Error calling Groq API:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: messages.length + 2,
          text: "Sorry, I couldn't process your request. Please try again later.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    const userMessageText = inputValue;
    setInputValue("");

    // Get response from Groq
    await fetchGroqResponse(userMessageText);
  };

  // Function to handle predefined question click
  const handlePredefinedQuestion = async (question) => {
    setFirstVisit(false); // Hide predefined questions after the first interaction
    const newUserMessage = {
      id: messages.length + 1,
      text: question,
      sender: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    await fetchGroqResponse(question);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-4 bg-[#0d1117] shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl w-80 md:w-96 overflow-hidden border border-[#30363d]"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3.5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                {/* <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <MessageCircle size={16} className="text-white" />
                </div> */}
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 flex-shrink-0">
                  <img
                    src="/public/assets/58a9540c-bfbe-4090-b6fa-56d77ced5cc0.png" // Replace with your cute bot avatar URL
                    alt="Bot Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-white font-medium">ZORON</h3>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-all duration-200"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-96 flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 flex-shrink-0">
                        <img
                          src="/public/assets/58a9540c-bfbe-4090-b6fa-56d77ced5cc0.png"
                          alt="Bot Avatar"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] p-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white rounded-tr-none"
                          : "bg-gray-100 text-gray-800 rounded-tl-none"
                      }`}
                    >
                      {message.text.includes(
                        "https://zairon-portfolio.vercel.app/contact"
                      ) ? (
                        <>
                          <p>{message.text}</p>
                          <a
                            href="https://zairon-portfolio.vercel.app/contact"
                            // target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm hover:shadow-md transition-all duration-200"
                          >
                            Contact Us
                          </a>
                        </>
                      ) : (
                        message.text
                      )}
                    </div>
                  </div>
                ))}

                {/* Predefined Questions (display only on first visit) */}
                {firstVisit && !messages.length && (
                  <div className="text-center p-4 space-y-2">
                    <div className="flex flex-wrap justify-center gap-2">
                      {[
                        "What is Zairon Hub?",
                        "Tell me about your services",
                        "How can I contact you?",
                        "What is Zairon Hub's mission?",
                      ].map((question, index) => (
                        <button
                          key={index}
                          className="border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none 
                     hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                          onClick={() => handlePredefinedQuestion(question)}
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 flex-shrink-0">
                      <img
                        src="/public/assets/58a9540c-bfbe-4090-b6fa-56d77ced5cc0.png" // Replace with your cute bot avatar URL
                        alt="Bot Avatar"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[75%]">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            delay: 0,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            delay: 0.2,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            delay: 0.4,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form
                onSubmit={handleSendMessage}
                className="border-t border-gray-200 bg-white p-3 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  className={`
                    bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2.5 rounded-full 
                    transition-all duration-200
                    ${
                      isTyping || inputValue.trim() === ""
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:shadow-md"
                    }
                  `}
                  disabled={isTyping || inputValue.trim() === ""}
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={() => setShowChat(!showChat)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center border border-purple-700/50"
      >
        <MessageCircle size={24} className="text-white" />
      </motion.button>
    </div>
  );
};

export default ChatBotComponent;
