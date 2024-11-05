import { useState , useEffect } from 'react'
import './App.css'
import Card from './Component/Card'
import Header from './Component/Header'
import Hero from './Component/Hero'

function App() {
  const [doctors, setDocotrs] = useState([])

  //fetch the data from API
  useEffect(() => {
    fetch("https://671c858309103098807a599e.mockapi.io/doctors")
    .then(response => response.json())
    .then(data => {
      setDocotrs(data)
    
    })
  },[])


  //get the avarge of ratings
  function getAvarge(numberOfRatings , array) {
    //calcute sum of the array using reduce function
    var sum = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    },0);

    return sum / numberOfRatings;
  }

  //map thru the array , sending the doctor object as a props to the card component and the avarge rating of the doctor ,  then sorting the Cards by rating
  const doctorsElemnts = doctors.map(doctor => <Card doctor={doctor} AvargeRating={getAvarge(doctor.rating.length , doctor.rating)} />)
  .sort(function (a, b) {
    //sort by rating
    let r1 = getAvarge(a.props.doctor.rating.length , a.props.doctor.rating);
    let r2 = getAvarge(b.props.doctor.rating.length , b.props.doctor.rating);

    return ((r1 < r2) ? 1 : ((r1 > r2) ? -1 : 0));
  });

  

  return (
    <>
    <Header />
    <Hero />
    <h1 className='book-appointment'>Book an appointment</h1>
    <div className='grid'>
    {doctorsElemnts}
    </div>
    </>
  )
}

export default App
