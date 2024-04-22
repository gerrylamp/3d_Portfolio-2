{/* <div className="absolute flex justify-center items-center right-0 left-0 top-28 z-10">
    POPUP
</div> */}
import { Suspense } from 'react'

import Loader from '../components/Loader'
import Island  from '../models/Island'

import { Canvas } from '@react-three/fiber'

const Home = () => {
    return (
        <section className="relative w-full h-screen">
            <Canvas
                className='w-full h-screen bg-transparent'
                camera={{ near: 0.1, far: 1000 }}    
            >
                <Suspense fallback={<Loader />}>
                    <Island />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home