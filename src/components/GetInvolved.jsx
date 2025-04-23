const GetInvolved = () => {
  return (
    <div className="my-2">
      <h1 className="text-4xl w-full mb-4 text-center text-darkgreen font-semibold">
        Get Involved
      </h1>
      <p className="text-lg w-full text-center mb-12 text-darkgreen">
        Want to host your own cleanup? Let us know!
      </p>
      <form className="flex flex-col px-26 gap-4">
        <input
          type="text"
          className="border-1 border-darkgreen h-10 rounded-xl px-4"
          placeholder="Display Name"
          p
        />
        <input
          type="email"
          className="border-1 border-darkgreen h-10 rounded-xl px-4"
          placeholder="Email or Phone Number"
        />
        <textarea
          className="border-1 border-darkgreen h-20 rounded-xl p-4"
          placeholder="Message..."
        ></textarea>
        <button className="bg-darkgreen rounded-2xl h-12 font-semibold text-white shadow-lg cursor-pointer hover:bg-lightgreen">
          Submit
        </button>
      </form>
    </div>
  )
}

export default GetInvolved
