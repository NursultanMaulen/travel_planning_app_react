const Loader = ({ classname }) => {
  return (
    <>
      <div
        className={`${classname} 2 mx-auto border-4 border-yellow-400 border-solid rounded-full border-t-transparent animate-spin`}
      />
    </>
  );
};


export default Loader;
