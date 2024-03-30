'use client'

import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"

const instructors =[
    {
        id: 1,
        name: 'Elena Brions',
        designation: 'Vocal coach',
        image:'/1.jpg',

    },
   
    {
        id: 2,
        name: 'Elena Brions',
        designation: 'Vocal coach',
        image:'/1.jpg',

    },
    
    {
        id: 3,
        name: 'Elena Brions',
        designation: 'Vocal coach',
        image:'/1.jpg',

    },
    {
        id: 4,
        name: 'Elena Brions',
        designation: 'Vocal coach',
        image:'/1.jpg',

    },
   
]

function Instructors() {
    return(
        <div className="relative h-[40rem] overflow-hidden flex item-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col item-center justify-center h-full">
                <div className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</div>
                <div className="text-base md:text-lg text-white text-center mb-4 ">Discover the talented professioals who will guide your musical journey</div>
                <div className="flex flex-row item-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={instructors}/>
                </div>
            </WavyBackground>
        </div>
    )
}
export default Instructors