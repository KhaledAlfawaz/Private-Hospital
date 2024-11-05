import react from 'react'

export default function Card(props){
    return (
        <div className='doctor' key={props.doctor.id}>
        <img src="https://cdn-icons-png.flaticon.com/512/9193/9193824.png" className='doctor-img' width={"10px"} alt="" />
        <h3>{props.doctor.name}</h3>
        <h4>{props.doctor.speciality}</h4>
        <h4><i class="fa-solid fa-star"></i>{props.AvargeRating}</h4>
        <button disabled={!props.doctor.isAvailable ? true : false } onClick={() => console.log("Clicked")}>{props.doctor.isAvailable ? "Book" : "Not Available"}</button>
      </div>
    )
}