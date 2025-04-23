const EventCard = ({ event }) => {
  const { title, image, date, location, description } = event
  return (
    <div className="flex flex-col text-gray-700 shadow-2xl">
      <img src={image} className="rounded-tr-2xl rounded-tl-2xl h-[200px]" />
      <section className="bg-bgwhite p-4 rounded-bl-2xl rounded-br-2xl h-[200px] flex flex-col justify-between">
        <div className="h-[80%] overflow-hidden">
          <h2 className="text-2xl font-semibold ">{title}</h2>
          <p className="text-sm">Date: {date}</p>
          <p className="text-sm">{location}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="text-right h-[20%]">
          <button className="bg-lightgreen text-white px-4 py-1 rounded-2xl cursor-pointer">
            Join
          </button>
        </div>
      </section>
    </div>
  )
}

export default EventCard
