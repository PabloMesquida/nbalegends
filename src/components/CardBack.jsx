import { useRef } from 'react'
import { DoubleSide } from 'three'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import PropTypes from 'prop-types'
import backVertexShader from '../shaders/back/vertex.glsl'
import backFragmentShader from '../shaders/back/fragment.glsl'

const BackMaterial = shaderMaterial({ side: DoubleSide }, backVertexShader, backFragmentShader)

extend({ BackMaterial })

function CardBack({ position }) {
  const materialRef = useRef()

  return (
    <>
      <mesh position={position}>
        <planeGeometry args={[2, 3, 10, 10]} />
        <backMaterial ref={materialRef} />
      </mesh>
    </>
  )
}

CardBack.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default CardBack
