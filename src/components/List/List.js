import React from 'react'
import './List.css';
const List = (props) => {
	const {list} = props;

	let total =0;
	for(const workout of list){
		 total = total + parseFloat(workout.time);

		 
	}
	
	return (
		<div className="list">
			<h5>Exercise Details</h5>
				<div className="d-flex justify-content-between flex-row bg-light rounded p-3 ">
					<div className="time">
						<h5>Exercise time</h5>
					</div>
					<div className="sec">
						<h5 className="text-secondary"> {total} seconds</h5>
					</div>
				</div>
				<div className="d-flex justify-content-between flex-row bg-light rounded p-3 mt-3">
					<div className="time">
						<h5>Break time</h5>
					</div>
					<div className="sec">
						<h5 className="text-secondary"> seconds</h5>
					</div>
				</div>
		</div>
	)
}

export default List