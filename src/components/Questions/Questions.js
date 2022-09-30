import React from 'react'
import './Questions.css';
const Questions = () => {
	return (
		<div>
			<div class="container d-flex  justify-content-center align-items-center">
				<div class="accordion " id="accordionExample">
					<div class="accordion-item ">
						<h2 class="accordion-header" id="headingOne">
						<button class="accordion-button qs-bg text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						How does react work?
						</button>
						</h2>
						<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
							<div class="accordion-body">
								 <p class="text-secondary">ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
								
							</div>
						</div>
					</div>
					<div class="accordion-item my-2 border">
						<h2 class="accordion-header" id="headingTwo">
						<button class="accordion-button collapsed qs-bg text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						Difference between props and state in react?
						</button>
						</h2>
						<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
							<div class="accordion-body">
								<p class="text-secondary">Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
							</div>
						</div>
					</div>
					<div class="accordion-item my-2 border">
						<h2 class="accordion-header" id="headingThree">
						<button class="accordion-button collapsed qs-bg text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						Use of UseEffect in react?
						</button>
						</h2>
						<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
							<div class="accordion-body">
								<p class="text-secondary">By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.The uses of UseEffect are
								 tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc</p>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default Questions