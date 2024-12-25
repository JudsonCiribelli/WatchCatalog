const CustomButton = ({ children }) => {
  return (
    <button className="bg-black w-full mt-4 flex justify-center align-center rounded-xl border-none  text-white py-2.5 px-3.5 font-bold">
      {children}
    </button>
  );
};
export default CustomButton;
