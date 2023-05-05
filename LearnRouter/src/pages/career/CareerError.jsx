import { useRouteError } from "react-router"
import { Link } from "react-router-dom"

export default function CareerError() {
    let error = useRouteError()
  return (
    <div className="career-details">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Go back to the Home page</Link>
    </div>
  )
}
