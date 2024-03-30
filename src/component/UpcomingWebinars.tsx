'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/Card-hover-effect"


function UpcomingWebinars () {

    const featuredWebinars = [
        {
            title: 'Understanding Music Theory',
            description:'Dive deep into the fundamentals of music theory and enbance your musical skills',
            slug:'understanding-music-theory',
            isFeatured: true,
        },

        {
            title: 'Understanding Music Theory',
            description:'Dive deep into the fundamentals of music theory and enbance your musical skills',
            slug:'understanding-music-theory',
            isFeatured: true,
        },

        {
            title: 'Understanding Music Theory',
            description:'Dive deep into the fundamentals of music theory and enbance your musical skills',
            slug:'understanding-music-theory',
            isFeatured: true,
        },

        {
            title: 'Understanding Music Theory',
            description:'Dive deep into the fundamentals of music theory and enbance your musical skills',
            slug:'understanding-music-theory',
            isFeatured: true,
        },

        {
            title: 'Understanding Music Theory',
            description:'Dive deep into the fundamentals of music theory and enbance your musical skills',
            slug:'understanding-music-theory',
            isFeatured: true,
        },

        {
            title: 'Understanding Music Theory',
            description:'Dive deep into the fundamentals of music theory and enbance your musical skills',
            slug:'understanding-music-theory',
            isFeatured: true,
        },

       
    ]

    return(
        <div className="p-12 bg-gray-900 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <div className="text-base text-teal-600 font-semibold traking-wide uppercase">FEAURED WEBINARS</div>
                    <div className="mt-5 text-4xl md;text-7xl font-bold">Enhance Your Musical Joureny</div>
                </div>
                <div className="mt-10 ">
                    <HoverEffect items={featuredWebinars.map(Webinar=>(
                        {
                            title:Webinar.title,
                            description:Webinar.description,
                            link:'/',
                        }
                    ))}/>
                </div>
                <div className="mt-10 text-center ">
                    <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View All Webinars</Link>
                </div>
            </div>
        </div>
    )
}
export default UpcomingWebinars