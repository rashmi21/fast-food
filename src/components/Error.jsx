import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="bg-orange-200 h-192 overflow-y-auto">
            <h3>OPPS....</h3>
            <h2>Somthing went wrong !!!!</h2>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}

export default Error;