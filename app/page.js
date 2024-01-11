'use client';
import { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'


function App() {
  const languagesList = ['Javascript', 'React', 'Flutter', 'PHP', 'Laravel', 'Python', 'Java'];

  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  const handleNextLanguage = () => {
    setCurrentLanguageIndex((prevIndex) =>
      prevIndex === languagesList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevLanguage = () => {
    setCurrentLanguageIndex((prevIndex) =>
      prevIndex === 0 ? languagesList.length - 1 : prevIndex - 1
    );
  };

  return (
    <main>
      <Home
        currentLanguageIndex={currentLanguageIndex}
        handleNextLanguage={handleNextLanguage}
        handlePrevLanguage={handlePrevLanguage}
      />
    </main>
  );
};

export default App;

// Home component (now without state management)
function Home({ currentLanguageIndex, handleNextLanguage, handlePrevLanguage }) {
  const languagesList = ['Javascript', 'React', 'Flutter', 'PHP', 'Laravel', 'Python', 'Java'];

  return (
    <main className={styles.main}>
      <div className={styles.nameHead}>
        <h1>Cameron Angelilli</h1>
        <p>
          Welcome to my resume. I am a 23-year-old programmer looking for a
          junior software development position <br></br> Take a look at my
          resume!
        </p>
      </div>

      <div className={styles.languages}>
        <h3>Here are a few languages and frameworks I have worked with:</h3>
        <div>
          <button onClick={handlePrevLanguage} style={{border: 'none',
                background: 'none',
                padding: 0,
                cursor: 'pointer', // Optional: Add cursor style for better user experience
                outline: 'none',}}>
            <Image 
            src={`/left-arrow.png`}
            width={100}
            height={100}
            >
            </Image>
          </button>
          <Image
            src={`/images/${languagesList[currentLanguageIndex].toLowerCase()}.png`}
            alt={languagesList[currentLanguageIndex]}
            width={100}
            height={100}
          />
          <button onClick={handleNextLanguage} style={{
                border: 'none',
                background: 'none',
                padding: 0,
                cursor: 'pointer', // Optional: Add cursor style for better user experience
                outline: 'none', // Optional: Remove outline on focus
              }}>
            <Image 
            src={`/right-arrow.png`}
            width={100}
            height={100}
            ></Image>
            </button>
        </div>
        <p>{languagesList[currentLanguageIndex]}</p>
      </div>
    </main>
  );
}
