import Image from 'next/image'
import React from 'react'

function EventCard({event}) {
	return (
		<div>
			<h2>Event: {event.name}</h2>
			<Image
				width={400}
				height={300}
				src={`${event.images[0].url}`}
				alt={event.name}
			/>
			{event.classifications[0].segment.name && (
				<h3>Category: {event.classifications[0].segment.name}</h3>
			)}
			<h2>Venue: {event._embedded.venues[0].name}</h2>
			<p>Date: {event.dates.start.localDate}</p>
			<p>Start Time: {event.dates.start.localTime}</p>
			<button>
				<a href={event.url} target='_blank noopener norefferer'>
					Buy Ticket
				</a>
			</button>
		</div>
	)
}

export default EventCard
