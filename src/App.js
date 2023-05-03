//props can be passed in to a component to make it dynamic
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import FeedBackList from './components/feedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './Context/FeedbackContext';



function App() { 
    

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedBackList />
                            

                        </>
                    }>

                        
                    </Route>
                
                    <Route path='/about'  element={<AboutPage />}/>
                    </Routes>
                    <AboutIconLink />

                </div>
            </Router>
        </FeedbackProvider>
    
    )   
    

}
export default App


//before JSX, to do the same we were suppose to import react and do the follwing

// import React from 'react'
// function App() {
//     return React.createElement(
//         'div',
//         { className: 'container'},
//         React.createElement('h1', {}, 'My App')
//     )
// }
//no need to do that anymore 