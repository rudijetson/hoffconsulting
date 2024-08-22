import React, { useState, useEffect } from 'react';
import { Send, RefreshCw, Calendar, FastForward, Info } from 'lucide-react';

const DemoSection = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [displayedOutput, setDisplayedOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isOutputVisible, setIsOutputVisible] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [currentFact, setCurrentFact] = useState('');

  const aiCapabilities = [
    "Generate a product description",
    "Create a marketing tagline",
    "Suggest process improvements",
    "Draft a business email",
    "Analyze market trends"
  ];

  const aiFactsAndTips = [
    "AI can help businesses reduce operational costs by up to 22%.",
    "81% of IT leaders are currently investing in or planning to invest in AI.",
    "AI-powered chatbots can handle up to 80% of routine customer queries.",
    "AI can increase business productivity by up to 40%.",
    "By 2030, AI is expected to contribute up to $15.7 trillion to the global economy."
  ];

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      setElapsedTime(0);
    }
    return () => clearInterval(timer);
  }, [isLoading]);

  useEffect(() => {
    if (output && typingIndex < output.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedOutput(prevDisplayed => prevDisplayed + output.slice(typingIndex, typingIndex + 5));
        setTypingIndex(prevIndex => Math.min(prevIndex + 5, output.length));
      }, 10);

      return () => clearTimeout(typingTimer);
    } else if (typingIndex >= output.length && !isTypingComplete) {
      setIsTypingComplete(true);
      setShowBooking(true);
    }
  }, [output, typingIndex, isTypingComplete]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowBooking(false);
    setOutput('');
    setDisplayedOutput('');
    setTypingIndex(0);
    setIsTypingComplete(false);
    setIsOutputVisible(true);
    setCurrentFact(aiFactsAndTips[Math.floor(Math.random() * aiFactsAndTips.length)]);
    
    try {
      const response = await fetch('http://localhost:5001/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setOutput(data.result);
    } catch (error) {
      console.error('Error:', error);
      setOutput('An error occurred while processing your request. Please try again.');
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  const handleExampleClick = (example) => {
    setInput(example);
    setShowBooking(false);
    setOutput('');
    setDisplayedOutput('');
    setTypingIndex(0);
    setIsTypingComplete(false);
  };

  const handleBookConsultation = () => {
    window.open('https://calendly.com/heritagehillco', '_blank');
  };

  const handleCompleteTyping = () => {
    setDisplayedOutput(output);
    setTypingIndex(output.length);
    setIsTypingComplete(true);
    setShowBooking(true);
  };

  return (
    <section id="demo" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience AI in Action</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-6 text-gray-600 text-center">See how generative AI can transform your business operations. Try an example or input your own prompt.</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Example Prompts:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {aiCapabilities.map((capability, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(capability)}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200"
                >
                  {capability}
                </button>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your business prompt..."
                className="flex-grow px-4 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors duration-200"
                disabled={isLoading}
              >
                {isLoading ? <RefreshCw className="animate-spin" /> : <Send />}
              </button>
            </div>
          </form>
          
          {isOutputVisible && (
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">AI Output:</h3>
              <div className="bg-gray-100 p-4 rounded-lg mb-4 min-h-[100px] relative">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <RefreshCw className="animate-spin text-blue-500 mb-2" size={24} />
                    <p className="text-gray-500 mb-2">AI is thinking... This may take about 25 seconds.</p>
                    <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(elapsedTime / 25) * 100}%` }}></div>
                    </div>
                    <p className="text-gray-500 mt-2">Elapsed time: {elapsedTime} seconds</p>
                    <div className="mt-4 text-center">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Did you know?</h4>
                      <p className="text-sm text-gray-600">{currentFact}</p>
                    </div>
                  </div>
                ) : displayedOutput ? (
                  <>
                    <p className="text-gray-800 whitespace-pre-wrap">{displayedOutput}</p>
                    {!isTypingComplete && (
                      <button
                        onClick={handleCompleteTyping}
                        className="absolute bottom-2 right-2 text-blue-500 hover:text-blue-600"
                        title="Complete typing"
                      >
                        <FastForward size={20} />
                      </button>
                    )}
                  </>
                ) : (
                  <p className="text-gray-500">Enter a prompt and click 'Send' to see AI-generated content.</p>
                )}
              </div>
              {showBooking && (
                <div className="text-center">
                  <p className="mb-4 text-gray-600">Want to explore how AI can boost your business further?</p>
                  <button
                    onClick={handleBookConsultation}
                    className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 flex items-center justify-center mx-auto"
                  >
                    <Calendar className="mr-2" />
                    Book a Consultation
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;