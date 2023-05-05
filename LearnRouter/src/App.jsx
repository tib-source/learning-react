import "./App.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { Home, About } from "./pages";

// Layouts
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import Error from "./layout/Error";
import CareerLayout from "./layout/CareerLayout";

// Page components
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import Career, { careerLoader } from "./pages/career/Career";
import CareerDetails, {
	careerDetailsLoader,
} from "./pages/career/CareerDetails";
import CareerError from "./pages/career/CareerError";

// Router
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="help" element={<HelpLayout />}>
				<Route path="faq" element={<Faq />} />
				<Route path="contact" element={<Contact />} />
			</Route>
			<Route
				path="careers"
				element={<CareerLayout />}
				errorElement={<CareerError />}
			>
				<Route index element={<Career />} loader={careerLoader} />
				<Route
					path=":id"
					element={<CareerDetails />}
					loader={careerDetailsLoader}
				/>
			</Route>
			<Route path="*" element={<Error />} />
		</Route>
	)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
