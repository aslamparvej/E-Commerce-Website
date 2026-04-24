import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-7.4375rem)]">
      <h2 className="text-[6.875rem] font-bold mb-2 text-red-400">
        404 Not Found
      </h2>
      <p className="text-lg mb-12">
        Your visited page not found. You may go home page.
      </p>
        <Link to="/" className="bg-primary text-white py-3 px-6 rounded-md hover:bg-navy-700 transition duration-300">
          Go Home
        </Link>
    </div>
  );
};

export default NotFound;
