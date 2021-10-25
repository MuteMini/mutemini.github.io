import React, { useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

const deg2rad = degrees => degrees * (Math.PI / 180);

function Particles({ pointCount }) {

  let fre = 0.20;
  let amp = 2;
  const graph = useCallback((a, b, t) => {
    return Math.tan(fre*(a**2+b**2+t))*amp
    //return amp*Math.sin(fre*a + t)*Math.cos(fre*b + t);
  }, [fre, amp]);

  const mesh = useRef();
  const camera = useRef();
  const { vec, transform, positions, colors } = useMemo(() => {
    const COLOR_TYPES = ["#fbf5c5","#f7efb3","#e1d98b","#bfbd66","#859547","#627232","#4e5d26","#475422"];
    
    const vec = new THREE.Vector3()
    const transform = new THREE.Matrix4()

    // Precompute randomized initial positions
    const positions = [...Array(pointCount)].map((_, i) => {
      const position = new THREE.Vector3()
      // Place randomly in a grid
      position.y = THREE.MathUtils.randFloatSpread( 200 );
      position.z = THREE.MathUtils.randFloatSpread( 200 );
      position.x = graph(position.y, position.z, 0);
      return position
    })

    const colors = [...Array(pointCount)].map(() => {
      return new THREE.Color(COLOR_TYPES[Math.floor(Math.random()*COLOR_TYPES.length)])
    })

    return { vec, transform, positions, colors }
  }, [pointCount, graph])

  useFrame((state) => {
    const mouseTolerance = 0.4;
    var centerX = window.innerWidth * 0.5;
    var centerY = window.innerHeight * 0.5;

    camera.current.rotation.y = deg2rad((state.mouse.x*window.innerWidth - centerX) / centerX * mouseTolerance)
    camera.current.rotation.x = deg2rad((state.mouse.y*window.innerHeight - centerY) / centerY * mouseTolerance)
    camera.current.needsUpdate = true

    for (let i = 0; i < pointCount; ++i) {
      vec.copy(positions[i])
      vec.x = graph(vec.y, vec.z, state.clock.elapsedTime*0.5)
      transform.setPosition(vec)
      mesh.current.setMatrixAt(i, transform)
      mesh.current.setColorAt(i, colors[i])
    }
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return(
    <instancedMesh ref={mesh} args={[null, null, pointCount]}>
      <PerspectiveCamera makeDefault ref={camera} position={[0, -50, 110]} rotation={[0, 0, deg2rad(55)]} />
      <sphereBufferGeometry args={[0.15]} />
      <meshBasicMaterial />
    </instancedMesh>
  );
}

function Background() {
  return (
    <Canvas onCreated={state => {
        state.gl = new THREE.WebGLRenderer( { alpha: true } );
        state.gl.setClearColor(0xffffff, 0)
        }} 
        colorManagement>
        <ambientLight intensity={0.3} />
        <Particles pointCount={15000}/> 
    </Canvas>
  );
}

export default Background;