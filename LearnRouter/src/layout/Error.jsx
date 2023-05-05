import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="error">
      <h1 style={{ textAlign: "center" }}>
        Error Page, How the fuck did you get here
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis
        laboriosam omnis ab quos, repudiandae distinctio delectus blanditiis
        mollitia nihil!
      </p>
      <p>Go to the <Link to="/">Home page</Link></p>
    </div>
  );
}
