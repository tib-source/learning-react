import { useLoaderData } from "react-router"


export default function CareerDetails() {

    const data = useLoaderData()

    return (
    <div className="career-details">
        <h2>{data.title}</h2>
        <p><em>Salary</em> : {data.salary}</p>
        <p><em>Location</em> : {data.location}</p>

        <p><em>Description</em>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sit suscipit ad, beatae a ex repudiandae omnis corporis, minus ut consequatur qui dignissimos pariatur in quo! Quo similique quaerat asperiores.</p>
    </div>
  )
}


export const careerDetailsLoader = async ({ params }) => { 
    let { id } = params
    let res = await fetch(`http://localhost:4000/careers/${id}`)

    if(!res.ok){ 
        throw Error("Cant find specified Career")
    }
    
    return res.json()

}