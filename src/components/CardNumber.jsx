import { Text } from '@react-three/drei'
import PropTypes from 'prop-types'

function CardNumber({ position }) {
  return (
    <Text
      font="./fonts/Tecmo-Bowl.woff"
      fontSize={0.1}
      anchorX="center"
      color={'#ffffff'}
      position={[0.75, 1.28, position[2]]}
    >
      1
    </Text>
  )
}

CardNumber.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default CardNumber