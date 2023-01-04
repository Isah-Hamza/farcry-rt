
import { useNavigate } from "react-router-dom";
const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-5rem)] grid place-content-center">
      <p className="text-center text-xl text-green-800 font-semibold mb-2">
        farcry
      </p>
      <div className="bg-blue-200 rounded p-6 text-center max-w-md">
        <p className="text-xl font-semibold">Payment Successful!</p>
        <p className="text-sm my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odit harum eius quaerat assumenda. Optio, atque quaerat!
        </p>
        <button
          onClick={() => navigate("/", { replace: true })}
          className="text-white bg-green-500 px-5 py-1 text-sm rounded mt-3"
        >
          OK. Take me Home
        </button>
      </div>
    </div>
  );
};

export default Success;
