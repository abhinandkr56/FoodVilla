import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return(
        <div>
            <h1>Oops</h1>
            <h2>Somwthing went wrong</h2>
            <p>{err.data}</p>
        </div>
    )
}

export default Error;