import Image from 'next/image'
import React from 'react'
import styles from '../../../styles/EventCard.module.css'
import ButtonComponent from '../ButtonComponent'

function EventCard({event}) {
	return (
		<div className={styles.card}>
			<h2 className={styles.name}>
				<strong>{event.name}</strong>
			</h2>
			<Image
				className={styles.image}
				width={200}
				height={300}
				src={`${event.images[0].url}`}
				alt={event.name}
			/>
			<div className={styles.details}>
				<h2>
					Venue: <strong>{event._embedded.venues[0].name}</strong>
				</h2>
				<p>
					Date: <strong>{event.dates.start.localDate}</strong>
				</p>
				<p>
					Start Time: <strong>{event.dates.start.localTime}</strong>
				</p>
			</div>
			<ButtonComponent text='	Buy Ticket'>
				<a href={event.url} target='_blank noopener norefferer'></a>
			</ButtonComponent>
		</div>
	)
}

export default EventCard
