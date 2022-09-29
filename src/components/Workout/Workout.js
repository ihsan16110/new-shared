import React from 'react'
import './Workout.css';
const Workout = (props) => {
	const {name, img, age_required, time} = props.workout;

	return (
		<div className="container">
			
			


			<div className="card  ">
		<img src={img} className="card-img-top" alt="..." />
		<div className="card-body  w-100 px-4">
			<h5 className="card-title">{name}</h5>
			<p className="card-text">For Age :{age_required}</p>
			<p className="card-text">Time required :{time}</p>
			
		</div>
		<button className="list-btn btn text-light px-3 py-2" onClick={() => props.handleAddToList(props.workout)}>Add to list</button>
	</div>
</div>
		
	)
}

export default Workout