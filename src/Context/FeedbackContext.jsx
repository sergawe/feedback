import { createContext, useState } from "react";

const FeedbackContext = createContext()

/* We have to create a provider and wrap our components inside the provider.  
our const will take in children since we are wrapping up our componenets
*/

export const FeedbackProvider = ({children}) => {
	const [feedback, setFeedback] = useState([
		{
			id:1,
			text: 'this item is from context 1',
			rating: 10
		},
		{
			id:2,
			text: 'this item is from context 2',
			rating: 9
		},
		{
			id:3,
			text: 'this item is from context 3',
			rating: 8
		}
	])
    const [feedbackEdit, setFeedbackEdit] = useState({
		item:{},
		edit: false
	})

	const addFeedback = (newFeedback) => {
        setFeedback([newFeedback,...feedback])

    }
	//Delete feedback
	const deleteFeedback = (id) => {
        if (window.confirm('Are you sure')) {

            setFeedback(feedback.filter((item) => item.id !== id))

        }
    }
	//Update feedback item
	const updateFeedback =  (id, upItem) => {
		setFeedback(feedback.map((item) => (item.id === id ? {
			...item, ...upItem
		} : item))
		)
	}



    //Set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true
		})
	}


	/* we can return the feedbackContext provider, which in this case children thats passed
	gives access to all our component.
	Any function we want to pass in fgoes in to value{} as an object.
	We also have to pass feedback in to the component that needs it
	*/
	return <FeedbackContext.Provider 
		value={{
			feedback,
			deleteFeedback,
			addFeedback,
			editFeedback,
			feedbackEdit,
			updateFeedback, 

		}}
	>
		{children}
	</FeedbackContext.Provider>

}

export default FeedbackContext