import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
      let error: any;
      let status: any;

      const routeError = useRouteError();
      if (routeError) {
            error = (routeError as { error: any }).error;

      }

      return (
            <div className="h-screen flex flex-col justify-center items-center bg-white">
                  <img className="w-[40%] rounded-2xl" src="https://img.lovepik.com/element/40021/7866.png_1200.png" alt="" />
                  <h1 className="text-4xl text-white font-extrabold mb-4">Oops! Something Went Wrong</h1>
                  <p className="text-red-700 text-center mt-3">
                        {error?.message}
                        <p>
                              <Link to="/" className="text-blue-800 text-center">
                                    Back to homepage
                              </Link>
                        </p>
                  </p>
            </div>

      );
};

export default ErrorPage;
