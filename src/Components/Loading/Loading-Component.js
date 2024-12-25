import { RingLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className=" fixed inset-0 h-screen bg-[#696969] flex items-center justify-center">
      <RingLoader size={60} />
    </div>
  );
};

export default Loading;
