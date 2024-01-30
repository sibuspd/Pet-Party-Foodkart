import { ERROR_LOGO } from "../utils/constants";
import { useRouteError } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <div>
            <h1>Oops!</h1>
            <h2>You might have entered an invalid URL. Please check it.</h2>
            <div>
                <p>{err.Status} : {err.StatusText}</p>
            </div>
            <img className="CatError" src={ERROR_LOGO}/>
            </div>
        </div>

    );
};
export default Error;