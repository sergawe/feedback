import Card from '../components/Shared/card'
import { Link } from "react-router-dom"

function AboutPage () {
	return <Card>
			<div className="about">
				<h1>About thi spage</h1>
				<p>Ths is a paragraph explaining such and such</p>
				<p>Version:1.0.0</p>
				<p>
					<Link to="/">Back to home</Link>
				</p>
			</div>
		</Card>
	
}

export default AboutPage