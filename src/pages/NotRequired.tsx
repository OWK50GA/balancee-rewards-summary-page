import { Link } from "react-router-dom";

const NotRequired = () => {
    return ( 
        <div className="flex flex-col items-center justify-center mt-56 gap-6">
            <div className="block text-xl">
                Why are you here?
                This is not one of the required pages.
            </div>

            <div className="block text-3xl hover:underline text-blue-600 font-bold">
                <Link to={'/dashboard/rewards-summary'}>
                    Rewards Summary Page
                </Link>   
            </div>
        </div>
     );
}
 
export default NotRequired;