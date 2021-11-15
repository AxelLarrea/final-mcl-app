import error from '../assets/images/error.svg';

const Error404 = () => {
    return (
        <div className="error-container">
            <img src={error} alt="sad face"/>
            <h1>404</h1>
            <h3>Not Found</h3>
        </div>
    );
}
 
export default Error404;