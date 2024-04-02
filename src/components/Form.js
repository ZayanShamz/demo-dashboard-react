import {
  FaApple,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Home from "./Home";
import { useNavigate } from "react-router-dom";


const onSubmit = () => {
  return Home
}

const Form = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden md:flex flex-col gradient-background w-1/2 h-screen items-center justify-center text-white">
          <img src={"./logo/logo.png"} alt="..." className="absolute left-0 top-0 p-5 w-[8%]" />
          <div className="flex flex-col justify-center items-center h-full">
            <div className="text-5xl font-bold mb-8">BASE</div>
          </div>
          <div className="mt-auto pb-4">
            <div className="flex justify-between space-x-10 items-center text-3xl">
              <FaGithub />
              <FaTwitter />
              <FaLinkedin />
              <FaDiscord />
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex md:items-center justify-center md:p-3">
          <div className="container mx-auto h-full sm:h-auto flex flex-col justify-between lg:w-[60%]">
            <div className="flex space-x-4 md:hidden p-5 bg-[#605BFF]">

              <img src={"./logo/logo.png"} className="w-[10%]" />

              <h5 className="text-xl text-white font-semibold mb-1">Base</h5>

            </div>
            <div className="container mx-auto py-3">
              <div className="px-3">
                <h2 className="text-4xl font-bold mb-2 px-3">Sign In</h2>
                <h5 className="text-lg mb-6 px-3">Sign in to your account.</h5>
              </div>
              <div className="flex space-x-4 mb-4">
                <button className="flex items-center justify-center flex-1 bg-white p-3 rounded-lg">
                  <FcGoogle className="mr-2" />
                  <span className=" text-gray-400 text-sm">
                    Sign in with Google
                  </span>
                </button>
                <button className="flex items-center justify-center flex-1 bg-white text-gray-400 p-2 rounded-lg">
                  <FaApple className="mr-2" />
                  <span className="text-sm">Sign in with Apple</span>
                </button>
              </div>
              <div className="container rounded-xl bg-white p-3">
                <div className="m-6">
                  <label className="text-md mb-3">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-lg bg-gray-100 mb-4"
                    value="johndoe@gmail.com"
                  />
                  <label className="text-md mb-3">Password</label>
                  <input
                    type="password"
                    className="w-full p-3 rounded-lg bg-gray-100 mb-4"
                    value="pasword"
                  />
                  <a href="#" className="text-blue-600">
                    Forgot password?
                  </a>
                  <button className="w-full bg-[#605BFF] text-white p-3 rounded-lg mt-6 font-bold"
                    onClick={() => { navigate('/home') }}>
                    Sign In
                  </button>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <a href="#" className="text-[#605BFF]">
                    Register here
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-auto p-5">
              <div className="md:hidden flex justify-center space-x-8 items-center text-3xl text-gray-400">
                <FaGithub />
                <FaTwitter />
                <FaLinkedin />
                <FaDiscord />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
