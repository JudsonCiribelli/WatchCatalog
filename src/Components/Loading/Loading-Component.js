import RingLoader from "react-spinners/RingLoader";
const Loading = () => {
  return (
    <div className="fixed inset-y-0	w-screen h-screen	bg-[#696969] flex align-center justify-center">
      <RingLoader size={30} />
    </div>
  );
};

export default Loading;
