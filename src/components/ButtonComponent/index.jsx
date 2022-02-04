import {Button} from '@chakra-ui/react'
import React from 'react'

function ButtonComponent({handleClick, text}) {
	return (
		<Button colorScheme='blue' onClick={handleClick}>
			{text}
		</Button>
	)
}

export default ButtonComponent
