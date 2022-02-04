import Image from 'next/image'
import React from 'react'
import styles from '../../../styles/EventCard.module.css'
import ButtonComponent from '../ButtonComponent'

function EventCard({event}) {
	if (!event) {
		return <h2>No event found...</h2>
	}
	return (
		<div className={styles.card}>
			<h2>Event: {event.name}</h2>
			<Image
				width={200}
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
			<ButtonComponent text='	Buy Ticket'>
				<a href={event.url} target='_blank noopener norefferer'></a>
			</ButtonComponent>
		</div>
	)
}

export default EventCard
