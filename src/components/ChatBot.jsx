import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaRegPaperPlane, FaUser } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! I am the Hanova Devs Project Advisor. How can I help you today with your web or app development project?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      // Check for OpenAI API key in env
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      
      if (!apiKey || apiKey === 'your_key_here' || apiKey.startsWith('sk-proj-YOUR')) {
        // Fallback simulated response
        setTimeout(() => {
          const fallbackResponse = generateSimulatedResponse(input);
          setMessages(prev => [...prev, { role: 'assistant', text: fallbackResponse }]);
          setIsTyping(false);
        }, 1500);
        return;
      }

      // Real OpenAI API Call
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", // Use gpt-4o-mini for efficiency and cost
          messages: [
            {
              role: "system",
              content: `You are a helpful, professional AI Project Advisor for "Hanova Devs", a premium web and app development agency. 
              The agency provides: Web development (React, Next.js), Mobile apps (React Native, Flutter), SEO, and Social Media Marketing. 
              Our contact is hanovadevs@gmail.com. 
              Provide concise, expert advice to potential clients.`
            },
            {
              role: "user",
              content: input
            }
          ],
          temperature: 0.7,
        })
      });

      const data = await response.json();
      const botText = data.choices?.[0]?.message?.content || "I'm having trouble connecting right now, but I'd love to discuss your project! Please email us at hanovadevs@gmail.com.";
      
      setMessages(prev => [...prev, { role: 'assistant', text: botText }]);
    } catch (error) {
      console.error("OpenAI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "I encountered a technical glitch! Please reach our team directly at hanovadevs@gmail.com." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const generateSimulatedResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('price') || q.includes('cost')) return "Project costs vary based on complexity! Our starter packages begin at $2,500. For a custom quote, I recommend using our contact form or emailing hanovadevs@gmail.com.";
    if (q.includes('time') || q.includes('how long')) return "Typically, we deliver standard websites in 4-6 weeks and complex apps in 8-12 weeks. We follow an agile process to keep things efficient!";
    if (q.includes('react') || q.includes('next')) return "Excellent choices! Next.js is our go-to for high-performance, SEO-friendly web apps. It's a cornerstone of our tech stack.";
    return "That sounds like an interesting project! At Hanova Devs, we specialize in exactly that. Would you like to schedule a discovery call to discuss the technical details?";
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 10000 }}>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              boxShadow: '0 10px 30px rgba(0, 180, 216, 0.4)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaRobot />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.8 }}
            style={{
              width: '350px',
              height: '500px',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '25px',
              boxShadow: 'var(--glass-shadow)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{ 
              padding: '20px', 
              background: 'var(--primary)', 
              color: 'white', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaRobot size={24} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Project Advisor</h4>
                  <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.8 }}>Online | Powered by AI</p>
                </div>
              </div>
              <FaTimes onClick={() => setIsOpen(false)} style={{ cursor: 'pointer' }} />
            </div>

            {/* Messages Area */}
            <div style={{ 
              flex: 1, 
              padding: '20px', 
              overflowY: 'auto', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '15px' 
            }}>
              {messages.map((msg, idx) => (
                <div key={idx} style={{ 
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  padding: '12px 16px',
                  borderRadius: msg.role === 'user' ? '20px 20px 0 20px' : '20px 20px 20px 0',
                  background: msg.role === 'user' ? 'var(--primary)' : 'rgba(0,0,0,0.05)',
                  color: msg.role === 'user' ? 'white' : 'var(--text-primary)',
                  fontSize: '0.9rem',
                  lineHeight: '1.4',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                }}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div style={{ 
                  alignSelf: 'flex-start', 
                  padding: '10px 15px', 
                  borderRadius: '15px', 
                  background: 'rgba(0,0,0,0.05)', 
                  display: 'flex', 
                  gap: '4px' 
                }}>
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div style={{ padding: '20px', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about your project..."
                style={{
                  flex: 1,
                  padding: '10px 15px',
                  borderRadius: '25px',
                  border: '1px solid var(--glass-border)',
                  outline: 'none',
                  fontSize: '0.9rem',
                  background: 'white'
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaRegPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
