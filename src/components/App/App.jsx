import { useState, useEffect } from 'react'
import css from './App.module.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'

const getInitFeedback = () => {
  const initFeedback = window.localStorage.getItem("feedback-data")
  return ((initFeedback !== null) ? JSON.parse(initFeedback) : { good: 0, neutral: 0, bad: 0 })
};

export default function App() {

  const [feedback, setFeedback] = useState(getInitFeedback());

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const isFeedback = (totalFeedback > 0)

  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setFeedback({ ...feedback,
            good: feedback.good + 1})
        break;
    
      case "bad":
        setFeedback({ ...feedback,
            bad: feedback.bad + 1})
        break;
      
      case "neutral":
        setFeedback({ ...feedback,
            neutral: feedback.neutral + 1})
        break;
      
       case "reset":
        setFeedback({
          good: 0,
          neutral: 0,
          bad: 0
        })
        break;
    }
  };

  useEffect(() => {
window.localStorage.setItem("feedback-data",JSON.stringify(feedback))
  }, [feedback])


  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} isFeedback={isFeedback} />
      {(isFeedback) ?
        <Feedback feedback={feedback} totalFeedback={totalFeedback} /> 
        : <Notification>No feedback yet</Notification>}
    </>
  )
}


