//you can distracture props using curly braces or simply call props
//we can also use prop trypes for type checking --> makes oyr App a lilttle more robost
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,

    }
    return (
        <header style={headerStyle}>
           <div className="conatiner">
               <h2>{text}</h2>
           </div>  
        </header>
    )
}
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}
//we can define the proptypes here
Header.propTypes = {
    text: PropTypes.string,
    
}

export default Header
//if props are specified in the App.js, thats where this function will check first
//if not it will check for default props

//we can also use 


//_rfce creates a react function without importing react