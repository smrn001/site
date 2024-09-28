const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center my-14" id="contacts">
      <h1 className="text-3xl text-white font-bold flex items-center my-7 ">
        CONTACTS
      </h1>
      <button
        type="button"
        className="border-2 text-primary border-primary p-3 min-w-32 text-center bg-transparent relative overflow-hidden hover:text-white transition-colors hover:z-[2] duration-300 group font-bold cursor-pointer"
      >
        EMAIL
        <span
          aria-hidden="true"
          className="bg-primary absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-[-1]"
        ></span>
      </button>
    </div>
  );
};

export default Contact;
