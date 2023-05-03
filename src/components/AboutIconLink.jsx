import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"

function AboutIconLink() {
	return(
		<div className="about-link">
			<Link to='/about'>
          		<FaQuestion size={30} />
				{/* Or, we can also pass in objects instead of a string
				  <Link 
				  to={{
					pathname: '/about',
					search: '?sort=name',
					hash: '#whatever',
				  }}
				  >
				  <FaQuestion size={30} />

				  </Link>
				
				*/}
			</Link>
		</div>
	)
	
}
export default AboutIconLink