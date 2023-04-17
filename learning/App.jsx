import MyButton from "./Button.jsx";
import {react} from "react"

export default function App() {

    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1)
    }


    return (
        <div>
            <h1>
                {user.name}
            </h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                    borderRadius: "50%"
                }}
            />
            <br />
            {
                (user) && <MyButton count={count} onClick={handleClick} />
            }


            <div>
                <h1>Shopping Cart: </h1>
                {products.map(product =>
                    <li
                        style={
                            product.id !== 1 ? {} :
                                {
                                    background: "blue",
                                    padding: "2em",
                                    margin: "2em",
                                    boxShadow: "1em 1em 1em #cb841fff",

                                }}
                        key={product.id}> {product.title}</li>)}
            </div>

            <br />
            {
                (user) && <MyButton count={count} onClick={handleClick} />
            }
        </div>
    );
}
