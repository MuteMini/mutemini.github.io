import { PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useCallback, useMemo, useRef } from 'react';
import * as THREE from 'three';

const deg2rad = degrees => degrees * (Math.PI / 180);

function Particles({ pointCount }) {
  let fre = 0.4;
  let amp = 1.75;
  const graph = useCallback((a, b, t) => {
    return Math.tan(fre*(a**2+b**2+t))*amp
    //return amp*Math.sin(fre*a + t)*Math.cos(fre*b + t);
  }, [fre, amp]);

  const mesh = useRef();
  const camera = useRef();
  const { vec, transform, positions, colors } = useMemo(() => {
    const COLOR_TYPES = ["708C43","6E823E","6C7738","6A6D33","68622E","665828","644D23"];
    
    const vec = new THREE.Vector3()
    const transform = new THREE.Matrix4()

    // Precompute randomized initial positions
    const positions = [...Array(pointCount)].map((_, i) => {
      const position = new THREE.Vector3()
      // Place randomly in a grid
      position.y = THREE.MathUtils.randFloatSpread( 100 );
      position.z = THREE.MathUtils.randFloatSpread( 100 );
      position.x = graph(position.y, position.z, 0);
      return position
    })

    const colors = [...Array(pointCount)].map(() => {
      return new THREE.Color("#"+COLOR_TYPES[Math.floor(Math.random()*COLOR_TYPES.length)])
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
    console.log(camera.current.position); 
  })

  return(
    <instancedMesh ref={mesh} args={[null, null, pointCount]}>
      <PerspectiveCamera makeDefault ref={camera} position={[0, 0, 70]} rotation={[0, 0, deg2rad(55)]} />
      <sphereBufferGeometry args={[0.2]} />
      <meshToonMaterial />
    </instancedMesh>
  );
}

function Background({ ballCount }) {
  return (
    <Canvas onCreated={state => {
      state.gl.setClearColor( new THREE.Color(0xEAB48A) );
      state.gl.setClearAlpha( 0.2 )
      }}
      colorManagement>
      <ambientLight intensity={0.6} />
      <pointLight intensity={0.4} position={[-70,100,100]} />
      <pointLight intensity={0.3} position={[100,-100,-100]} />
      <Particles pointCount={ballCount}/> 
    </Canvas>
  );
}

export default Background;