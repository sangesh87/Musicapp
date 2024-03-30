'use client'
import courseData from "../Data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"


interface Course {
        id: number,
        tittle: string,
        slug:  string,
        description: string,
         price: number,
         instructor: string,
         isFeatured:boolean,
      }

function Featuredcourses () {

    const Featuredcourses = courseData.courses.filter (( course:Course) => course.isFeatured)

    
    return(
        <div className="py-12 bg-gray-900">
            <div className="text-center">
              <div className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURES</div>
             <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm;text-4xl">lern With the Best</div>

            </div>
            <div className="mt-10">
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                     {Featuredcourses.map((course:Course)=>(
                        <div key={course.id} className="flex justify-center ">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 oveflow-hidden h-full max-w-sm">
                                <div className="p-4 sm;p-6 flex flex-col items-center text-center flex-grow">                              
                                      <div className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.tittle}</div>
                                      <div className="text-sm text-neutral-500 dark:text-neutral-400 flex-grow">{course.description}</div>
                                        <Link href={'/courses/${course.slug}'}></Link>
                                </div>
                            </BackgroundGradient>
                       </div>
                     ))}   
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"} className="px-4 py-2 rounded-border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">view all courses</Link>
            </div>

        </div>
    )
} 
export default Featuredcourses