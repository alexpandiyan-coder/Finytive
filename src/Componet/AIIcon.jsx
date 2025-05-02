import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Extend Three.js with OrbitControls
extend({ OrbitControls })

const Controls = () => {
  const { camera, gl } = useThree()
  const controls = useRef()
  useFrame(() => controls.current.update())
  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.05}
    />
  )
}

const AIShape = () => {
  const mesh = useRef()
  const svgPath = "M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z"

  useEffect(() => {
    const shape = new THREE.Shape()
    const paths = svgPath.split(' Z ')
    
    paths.forEach((path, i) => {
      if (!path) return
      
      const commands = path.split(' ')
      let firstPoint = null
      
      commands.forEach((cmd, j) => {
        if (cmd === 'M' || cmd.includes(',')) {
          const coords = cmd.replace('M', '').replace('L', '').split(',')
          const x = (parseFloat(coords[0]) - 192) / 100
          const y = (parseFloat(coords[1]) - 192) / -100
          
          if (j === 0 || cmd.startsWith('M')) {
            if (i > 0 && j === 0) shape.moveTo(x, y)
            else shape.moveTo(x, y)
            firstPoint = { x, y }
          } else {
            shape.lineTo(x, y)
          }
        }
      })
      
      if (firstPoint) {
        shape.lineTo(firstPoint.x, firstPoint.y)
      }
    })
    
    const extrudeSettings = {
      steps: 1,
      depth: 0.2,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 3
    }
    
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    mesh.current.geometry = geometry
  }, [])

  useFrame(() => {
    if (mesh.current) {
      // Pulsing animation
      const scale = 1 + Math.sin(Date.now() * 0.001) * 0.05
      mesh.current.scale.set(scale, scale, scale)
      
      // Rotation
      mesh.current.rotation.y += 0.005
    }
  })

  return (
    <mesh ref={mesh} rotation-x={Math.PI / 2}>
      <meshPhongMaterial
        color="#00aaff"
        specular="#111111"
        shininess={30}
        flatShading
      />
    </mesh>
  )
}

const AIIcon = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        <AIShape />
        <Controls />
      </Canvas>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        width: '100%',
        textAlign: 'center',
        color: '#333',
        fontFamily: 'Arial, sans-serif'
      }}>
        Drag to rotate | Scroll to zoom
      </div>
    </div>
  )
}

export default AIIcon