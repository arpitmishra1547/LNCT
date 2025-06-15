'use client';

import { useState, useEffect } from 'react';
import styles from './AIAssistant.module.css';

const questions = [
  "What's your email address?",
  "What's your name?",
  "How can I help you today?",
];

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, currentQuestionIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newAnswers = {
        ...answers,
        [questions[currentQuestionIndex]]: inputValue,
      };
      setAnswers(newAnswers);
      setInputValue('');
      
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Handle completion - you can add your logic here
        console.log('All questions answered:', newAnswers);
        setIsOpen(false);
        setCurrentQuestionIndex(0);
        setAnswers({});
      }
    }
  };

  return (
    <div className={styles.assistantContainer}>
      {showWelcome && (
        <div className={styles.welcomeBox}>
          <button 
            className={styles.welcomeCloseButton}
            onClick={() => setShowWelcome(false)}
          >
            ×
          </button>
          <div className={styles.welcomeContent}>
            <span className={styles.welcomeIcon}>👋</span>
            <p>Hey! I am Niaa... Your Admission Assistant.</p>
          </div>
        </div>
      )}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerContent}>
              <h3>AI Assistant</h3>
              <div className={styles.statusIndicator}>
                <span className={styles.statusDot}></span>
                Online
              </div>
            </div>
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          <div className={styles.chatContent}>
            {Object.entries(answers).map(([question, answer], index) => (
              <div key={index} className={styles.messageContainer}>
                <div className={styles.question}>
                  <span className={styles.botIcon}>🤖</span>
                  {question}
                </div>
                <div className={styles.answer}>
                  <span className={styles.userIcon}>👤</span>
                  {answer}
                </div>
              </div>
            ))}
            {currentQuestionIndex < questions.length && (
              <div className={styles.currentQuestion}>
                {isTyping ? (
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  <>
                    <span className={styles.botIcon}>🤖</span>
                    {questions[currentQuestionIndex]}
                  </>
                )}
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your answer..."
              className={styles.input}
            />
            <button 
              type="submit" 
              className={styles.sendButton}
              disabled={!inputValue.trim()}
            >
              Send
            </button>
          </form>
        </div>
      )}
      <button
        className={styles.assistantButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
      >
        <span className={styles.assistantIcon}>🤖</span>
      </button>
    </div>
  );
};

export default AIAssistant; 