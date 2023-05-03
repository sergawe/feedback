import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'


function FeedbackStats () {
	const {feedback} = useContext(FeedbackContext)
	//calculate ratings average
	let average = feedback.reduce((acc, cur) => {
		return acc + cur.rating

	}, 0) / feedback.length
	//turn it to one decimal and remove if any zero 
	average = average.toFixed(1).replace(/[.,]0$/, '')
	
	return (
	    <div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>

		</div>
	)
	
}



export default FeedbackStats
