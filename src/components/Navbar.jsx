import React from 'react'

const navItems = [
    {
        label: "About me",
        link: "#aboutme"
    },
    {
        label: "Skills",
        link: "#skills"
    },
    {
        label: "Hobbies and Interests",
        link: "#hobbies"
    },
    {
        label: "Work Experience",
        link: "#experience"
    },
    {
        label: "Passion",
        link: "#passion"
    },
    {
        label: "Academic Background",
        link: "#academic"
    },

]

export default function Navbar() {
    return (
        <header className='flex justify-between items-center px-4 py-6 bg-white'  >

            <div className='font-bold text-xl gap-5 flex items-center'>
                <img src='/my-photo.jpg' className='h-14  rounded-full' />
                Mohammed Faraz
            </div>


            <ul className='flex gap-4'>
                {navItems.map(item => (
                    <li className='font-medium'>
                        <a href={item.link} >{item.label}</a>
                    </li>
                ))}
            </ul>

        </header>
    )
}
