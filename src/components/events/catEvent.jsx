import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CatEvent = ({data, pageName}) => {
  return (
    <div className='cat_events'>
      <h1>Events is {pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>
      <div className='content'>
      {data.map((ev) => {
        return (
          <Link className='card' key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
            <h2>{ev.title}</h2>
            <Image src={ev.image} alt={ev.title} width={300} height={300} />
            <p>{ev.description}</p>
          </Link>
        );
      })}
      </div>
    </div>
  )
}

export default CatEvent