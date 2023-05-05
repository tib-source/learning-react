import { useLoaderData } from "react-router"
import { Link } from "react-router-dom";

export default function Career() {
    const careers = useLoaderData(); 

  return (
    <div className="careers">{careers.map((career)=>(
        <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
        </Link>
    ))}</div>
  )
}


export const careerLoader = async () => { 
    let response = await fetch("http://localhost:4000/careers")
    if(!response.ok){
      throw Error("Cant fetch Careers.")
    }
    return response.json()
}