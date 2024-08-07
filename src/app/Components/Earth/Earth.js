'use client';
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useRef } from 'react';

import { useSpring, motion } from 'framer-motion';
import { useScroll } from "framer-motion"
export default function Earth() {

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        'https://cdn.pixabay.com/photo/2024/05/07/20/36/ai-generated-8746751_1280.png',
        'https://cdn.pixabay.com/photo/2024/05/07/20/36/ai-generated-8746751_1280.png',
        'https://cdn.pixabay.com/photo/2024/05/07/20/36/ai-generated-8746751_1280.png'
    ])

    const scene = useRef(null);
    const { scrollYProgress } = useScroll()
const { scrollY } = useScroll({

    target: scene,

    offset: ['start end', 'end start']

})

const smoothRotation = useSpring(scrollYProgress, {

    damping: 20

});
    return (
        <Canvas ref={scene}>
            <motion.mesh scale={2.5} rotation-y={scrollYProgress}></motion.mesh>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={3.5} position={[1, 0, -.25]} />
            <mesh scale={2.5}>
                <sphereGeometry args={[1, 64, 64]}/>
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap}/>
            </mesh>
        </Canvas>
    )
}

