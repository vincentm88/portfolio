import * as React from 'react';
import { useState, useEffect } from 'react';

interface Props {
  words: any,
}

function getTypingSpeed() {
  let speed = (Math.random() * (650 - 150) + 150);
  return speed;
}

function TypeText(props: Props) {
  const { words } = props;
  const [text, setText] = useState('');
  const [wordCounter, setWordCounter] = useState(0);
  const [letterCounter, setLetterCounter] = useState(0);
  const [backspace, setBackspace] = useState(false)
  const [delaySpeed, setDelaySpeed] = useState(getTypingSpeed())

  useEffect(() => {
    const interval = setInterval(() => {


      if (wordCounter < words.length) {
        let segment = words[wordCounter].split("");
        //moving forward
        if (letterCounter < segment.length && !backspace) {
          setDelaySpeed(getTypingSpeed());
          setText(prev => prev + segment[letterCounter])
          setLetterCounter(letterCounter + 1);
        } else if (letterCounter === segment.length && backspace === false) {
          setLetterCounter(0);
          setBackspace(true);
          setDelaySpeed(100);
        }
        //moving backward
        if (letterCounter < segment.length && backspace && wordCounter < words.length - 1) {
          setText(text.slice(0, -1));
          setLetterCounter(letterCounter + 1);
        } else if (letterCounter < segment.length && backspace && wordCounter < words.length) {
          setLetterCounter(segment.length);
        } else if (letterCounter === segment.length && backspace) {
          setLetterCounter(0);
          setBackspace(false);
          setWordCounter(wordCounter + 1);
        }

      } else {
        clearInterval(interval);
      }






    }, delaySpeed);
    return () => clearInterval(interval);
  }, [wordCounter, letterCounter, words]);




  return (
    <>
      {text}
    </>



  )
}

export default TypeText


