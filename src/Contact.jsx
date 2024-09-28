const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-24"
      id="contacts"
    >
      <h1 className="text-3xl md:text-3xl font-bold dark:text-gray-100 text-gray-900 mb-5">
        CONTACTS
      </h1>

      {/* Email Button */}
      <button
        type="button"
        className="relative border-2 dark:border-primary border-lightprimary text-lightprimary dark:text-primary font-semibold py-3 px-6 rounded-sm text-lg overflow-hidden group transition-all duration-300 ease-in-out hover:text-white dark:text-primary-dark dark:border-primary-dark"
      >
        <span className="relative z-10">EMAIL</span>
        <span
          className="absolute inset-0 dark:bg-primary bg-lightprimary dark:bg-primary-dark z-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
};

export default Contact;
