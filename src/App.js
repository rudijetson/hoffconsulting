import React, { useEffect, useState } from 'react';
import Resume from './pages/Resume';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('App component mounted');
    setIsLoaded(true);

    return () => {
      console.log('App component will unmount');
    };
  }, []);

  return isLoaded ? <Resume /> : <div>Loading...</div>;
}

export default App;