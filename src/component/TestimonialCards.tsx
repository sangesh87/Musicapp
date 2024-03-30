'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const MusicSchooTestimonials = [
    {
        quote:'joining the music school transformwd my understanding of music and helped me to truly discover my own sound the instructors are world-class',
        name: 'Alex johnson',
        title:'Guitar Student'
    },

    {
        quote:'joining the music school transformwd my understanding of music and helped me to truly discover my own sound the instructors are world-class',
        name: 'Alex johnson',
        title:'Guitar Student'
    },

    {
        quote:'joining the music school transformwd my understanding of music and helped me to truly discover my own sound the instructors are world-class',
        name: 'Alex johnson',
        title:'Guitar Student'
    },

    {
        quote:'joining the music school transformwd my understanding of music and helped me to truly discover my own sound the instructors are world-class',
        name: 'Alex johnson',
        title:'Guitar Student'
    },

    {
        quote:'joining the music school transformwd my understanding of music and helped me to truly discover my own sound the instructors are world-class',
        name: 'Alex johnson',
        title:'Guitar Student'
    },

    {
        quote:'joining the music school transformwd my understanding of music and helped me to truly discover my own sound the instructors are world-class',
        name: 'Alex johnson',
        title:'Guitar Student'
    }


]
function MusicSchooTestimonial() {
    return(
        <div className="h-[30rem] w-full dark:bg-black  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center overflow-hidden justify-center">
            <div className="text-3xl font-bold text-center my-8 z-10">Hear our Harmony: Voices of success</div>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                     items={MusicSchooTestimonials}
                      direction="right"
                        speed="slow"
      />
                </div>
            </div>
        </div>
    )
}
export default MusicSchooTestimonial