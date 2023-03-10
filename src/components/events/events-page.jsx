import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllEvents = ({data}) => {
  return (
    <div className="events_page">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <Image src={ev.image} width={300} height={300} alt={ev.title} />
            <h2>{ev.title}</h2>
          </Link>
        ))}
    </div>
  );
};

export default AllEvents;
