import { useLocation } from "react-router"
import { Link } from "react-router-dom"

export default function BreadCrumbs() {
    
    const location = useLocation().pathname.split("/").filter(crumb => crumb !== "")
    let currentLocation = ""; 
    const crumbs = location.map((crumb)=>{
        currentLocation += `/${crumb}`
        return ( 
            <div className="crumb" key={location.indexOf(crumb)}>
                <Link to={currentLocation}>{crumb}</Link>
            </div>
        )
    })
    return (
    <div className="breadcrumbs">
        {crumbs}
    </div>
  )
}
