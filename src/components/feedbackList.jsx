import { useContext } from 'react'
import FeedbackItem from './FeedBackItem'
import FeedbackContext from '../Context/FeedbackContext'


function FeedbackList() {
    /* we can extract what we want from feedbackContext using useContext
    we can get anything that listed in values, which is in the feedbackProvider function 
    */
    const {feedback} = useContext(FeedbackContext)


    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    
    return <div className="feedback-list"> 
      {feedback.map((item) =>(
          <FeedbackItem 
          key={item.id} 
          item={item} 
          />
      ))}
      
    </div>
    
}


export default FeedbackList
