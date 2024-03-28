import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import imageSrc from "../assets/wellcome.svg";
import Layout from "../components/Layout";
type Props = {};

function Wellcome({}: Props) {
  return (
    <Layout>
      <div className="h-screen flex flex-col">
        <div className="max-w-96 mx-auto my-auto">
          <div className="mx-auto pt-10">
            <img src={imageSrc} alt="Wellcome Page" />
          </div>

          <div className="mt-10">
            <p className="text-4xl">
              <span className="text-green-200 mr-2">Better </span>
              Task Management
            </p>
            <p className="mt-4 text-gray-300 text-opacity-90">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              hic sunt recusandae quaerat esse fugiat
            </p>
          </div>

          <div className="mt-5">
            <Link
              to="/tasks"
              className="w-fit flex gap-2 rounded-full bg-yellow-200 text-black"
            >
              <span className="my-auto inline-block pl-5 pr-3">
                Get Started
              </span>
              <div className="p-4 rounded-full m-1 text-white bg-black">
                <IoArrowForward className="my-auto text-2xl text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Wellcome;
