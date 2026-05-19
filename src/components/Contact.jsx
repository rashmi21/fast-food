const Contact = () => {
  return (
    <div className="bg-orange-200 h-192 overflow-y-auto text-center">
      <h1 className="text-lg m-4 p-4 font-bold "> Contact Us</h1>
      <div className="flex items-center justify-center">
        <form className="center w-4/12 bg-orange-400 border border-balck rounded-sm">
          <div className="m-2 p-2">
            <label className="">Name : </label>
            <input
              className="bg-white rounded-sm w-100 border border-solid border-black"
              type="text"
              placeholder="name"
            />
          </div>
          <div className="m-2 p-2">
            <label>Email : </label>
            <input
              className="bg-white rounded-sm w-100 border border-solid border-black"
              type="text"
            />
          </div>
          <div className="m-4 p-4">
            <button className="h-8 w-25 bg-black text-white mx-4 px-4 cursor-pointer rounded-sm">
              Notify Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
