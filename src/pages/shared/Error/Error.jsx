import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="text-center my-48 sm:my-80 text-5xl text-red-500">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p className="mt-8 text-blue-600 text-3xl"><Link to={'/'}>Back To Home</Link></p>
        </div>
    );
}

export default ErrorPage;