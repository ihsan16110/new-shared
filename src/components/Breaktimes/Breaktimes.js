import React from 'react'

import {useState} from 'react';

const Breaktimes = () => {
	const breaktimes = [10,20,30,40]
	const [time, setTime] = useState([]);
	const handleBreakTime = (event) =>{
	const newTime  = event.target.innerText ;
	setTime(newTime);

}
	return (
		<div>
			<h5>Add A Break</h5>
				<div className=" bg-light rounded p-4 ">
					<div class="row  pt-2">
					{/*{
						breaktimes.map(breaktime => <Breaktime
						 breaktime={breaktime}
						 handleBreakTime={handleBreakTime}
						 ></Breaktime>)
					}
						*/}

						{
						breaktimes.map(breaktime => <Breaktime
						 
						 handleBreakTime={handleBreakTime}
						 ></Breaktime>)
					}
						
					</div>
				</div>
		</div>
	)
}

const Breaktime = (props) => {

return (
<div>
	<div class="col-lg-3 col-6">
		<span  onClick={(event) => props.handleBreakTime(event)}>10</span>
	</div>
	
</div>
)
}

export default Breaktimes