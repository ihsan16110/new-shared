import React from 'react'
import Workout from '../../components/Workout/Workout';
import List from '../../components/List/List';
import Breaktimes from '../../components/Breaktimes/Breaktimes';
import {useState} from 'react';
import './Workouts.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Workouts = () => {
const workouts = [
{id:1, name:'Dumbale', time:'30s', age_required:'20-25',
img:'https://manofmany.com/wp-content/uploads/2020/07/Best-Dumbbell-Exercises-For-Men.jpg' },
{id:2, name:'Push-Ups', time:'30s', age_required:'20-25',
img:'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Carousel.jpg' },
{id:3, name:'Bicycle Crunch', time:'20s', age_required:'20-25',
img:'https://img.freepik.com/premium-photo/young-man-doing-bicycle-crunch-exercise-white-wall-background_495423-22975.jpg?w=900' },
{id:4, name:'Side Plank', time:'10s', age_required:'20-25',
img:'https://hips.hearstapps.com/hmg-prod/images/side-plank-1549646915.jpg' },
{id:5, name:'Glute bridge', time:'20s', age_required:'20-25',
img:'https://wp-test-dev.s3.amazonaws.com/public/uploads/2020/11/glute-Bridge-%C2%A9puhhha-3.jpg' },
{id:6, name:'Planks', time:'10s', age_required:'20-25',
img:'https://barbend.com/wp-content/uploads/2021/06/BarBend-Article-Image-760-x-427-2021-06-02T165321.789.jpg' },
{id:7, name:'Single-leg deadlifts', time:'10s', age_required:'20-25',
img:'https://www.johnsonfitness.com/blog/wp-content/uploads/2016/03/RDL-2.jpg' },
]

const [list, setList] = useState([]);


const handleAddToList = (workout) =>{
		
		const newList = [...list, workout];
		setList(newList);
	}

	const showToastMessage = () => {
        toast.success('Thank You For Visiting Us !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

return (
<div className="">
	<div className=" workout-container py-5 px-4" id="workout">
		<div className="container exercise bg-light p-3 rounded">
			<a href="" className="nav-link fw-bold"><i class="fa-solid fa-dumbbell"></i> DAILY-WORKOUT-CLUB</a>
			<h5 className="py-4">Select today’s exercise</h5>
			<div className=" workouts p-4">
				
				{
				workouts.map(workout => <Workout
				key={workout.id}
				workout={workout}
				handleAddToList={handleAddToList}
				
				></Workout>)
				}
			</div>
		</div>
		<div className="summery px-3">
			<div className="name d-flex">
				<div class="name-img">
					<img src="my.png" className="" alt="" />
				</div>
				<div class="name-details d-flex flex-column mx-2">
					<h6>Maruf Ahmed Tushar</h6>
					<span><i class="fa-solid fa-location-pin"></i> Tangail, Bangladesh</span>
				</div>
			</div>
			
			<div className="details bg-light rounded px-3 py-2 mt-5">
				<div class="row  pt-2">
					<div class="col-lg-4 col-6">
						<h5 className="fw-bold">66<span className="text-secondary">kg</span></h5>
						<h6 class=" text-secondary">Weight</h6>
					</div>
					<div class="col-lg-4 col-6">
						<h5 className="fw-bold">5.6</h5>
						<h6 class=" text-secondary">Height</h6>
					</div>
					<div class="col-lg-4 col-6">
						<h5 className="fw-bold">25<span className="text-secondary">yrs</span></h5>
						<h6 class=" text-secondary">Age</h6>
					</div>
				</div>
			</div>
			<div className="break mt-5">
				<Breaktimes></Breaktimes>
			</div>
			<div className="e-details mt-5">
				<List list={list}></List>
			</div>

			<div className="activity mt-5">
				<button className="btn text-light w-100 p-3"  onClick={showToastMessage}>Activity Completed</button>
				<ToastContainer />
			</div>
		</div>
		
	</div>
	<div className=" workout-container py-5 px-4" id="workout1">
	<div className="row">
		<div className="col-md-12">
			<div className="container exercise bg-light p-3 rounded">
			<a href="" className="nav-link fw-bold"><i class="fa-solid fa-dumbbell"></i> DAILY-WORKOUT-CLUB</a>
			<h5 className="py-4">Select today’s exercise</h5>
			<div className=" workouts p-4">
				
				{
				workouts.map(workout => <Workout
				key={workout.id}
				workout={workout}
				handleAddToList={handleAddToList}
				
				></Workout>)
				}
			</div>
		</div>
		</div>
		<div className="col-md-12">
			<div className="summery px-3">
			<div className="name d-flex">
				<div class="name-img">
					<img src="my.png" className="" alt="" />
				</div>
				<div class="name-details d-flex flex-column mx-2">
					<h6>Maruf Ahmed Tushar</h6>
					<span><i class="fa-solid fa-location-pin"></i> Tangail, Bangladesh</span>
				</div>
			</div>
			
			<div className="details bg-light rounded px-3 py-2 mt-5">
				<div class="row  pt-2">
					<div class="col-lg-4 col-6">
						<h5 className="fw-bold">66<span className="text-secondary">kg</span></h5>
						<h6 class=" text-secondary">Weight</h6>
					</div>
					<div class="col-lg-4 col-6">
						<h5 className="fw-bold">5.6</h5>
						<h6 class=" text-secondary">Height</h6>
					</div>
					<div class="col-lg-4 col-6">
						<h5 className="fw-bold">25<span className="text-secondary">yrs</span></h5>
						<h6 class=" text-secondary">Age</h6>
					</div>
				</div>
			</div>
			<div className="break mt-5">
				<Breaktimes></Breaktimes>
			</div>
			<div className="e-details mt-5">
				<List list={list}></List>
			</div>

			<div className="activity mt-5">
				<button className="btn text-light w-100 p-3"  onClick={showToastMessage}>Activity Completed</button>
				<ToastContainer />
			</div>
		</div>
		</div>
	</div>
		
		
		
	</div>
</div>
)
}
export default Workouts