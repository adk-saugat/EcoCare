import EventCard from "./EventCard"

const Events = () => {
  const eventsData = [
    {
      _id: "1",
      image:
        "https://i.pinimg.com/736x/96/32/25/963225fb3ec4ccf54648edd453076db4.jpg",
      title: "Riverbank Cleanup",
      date: "March 21, 2026",
      location: "Greenwood Park, NY",
      description: "Help remove trash and plant flowers!",
    },
    {
      _id: "2",
      image:
        "https://i.pinimg.com/736x/a3/cc/ad/a3ccadb09cfd8713d54589c7cde5e285.jpg",
      title: "Beach Sweep Saturday",
      date: "April 6, 2026",
      location: "Sunny Shoreline, CA",
      description: "Join us to clean up plastic waste from the beach.",
    },
    {
      _id: "3",
      image:
        "https://i.pinimg.com/736x/69/44/11/694411341fc7fedd49984f22c80340af.jpg",
      title: "Urban Garden Prep",
      date: "April 13, 2026",
      location: "Riverside Community Garden, IL",
      description: "Clear waste and prep soil beds for spring planting.",
    },
    {
      _id: "4",
      image:
        "https://i.pinimg.com/736x/40/68/e9/4068e92c207b1c7fb311ab9b7ccdeab1.jpg",
      title: "Forest Trail Cleanup",
      date: "April 20, 2026",
      location: "Lone Pine Trail, CO",
      description: "Pick up litter and help restore natural trails.",
    },
  ]
  return (
    <div className="bg-darkgreen text-bgwhite p-8 pb-12 my-20 flex flex-col justify-center">
      <h1 className="text-4xl w-full mb-12 text-center font-semibold">
        Find a Cleanup
      </h1>
      <section className="grid grid-cols-4 gap-6">
        {eventsData.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </section>
    </div>
  )
}

export default Events
