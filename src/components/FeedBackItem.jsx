import {FaTimes, FaEdit} from 'react-icons/fa'
import propTypes from 'prop-types'
import Card from './Shared/card'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'


function FeedBackItem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    //what goes inside useState(which is a function) is what ever you want as a default for this state
    //in the array, we can specify the name and function
    //const [rating, setRating] = useState(7)
    //const [text, setText] = useState('This is an example of feedback item')
    //when ever we want to update the state, we have to call set
   

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick= {() => deleteFeedback(item.id)}className="close">
                <FaTimes color='purple'/>
            </button>
            <button onClick={() => editFeedback(item)}className="edit">
                <FaEdit color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
            
        </Card>
    )
}

export default FeedBackItem


// const handleClick = () => {
//     //setRating(10)
//     //or you can have access to the previouse value by passing it as an arrgument
//     setRating((prev) => {
//         console.log(prev)
//         return prev + 1
//     })
// }
//<button onClick={handleClick}>Click</button>
FeedBackItem.propTypes = {
    item: propTypes.object.isRequired
}