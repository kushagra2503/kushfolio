import React from 'react'

const SectionTitle = ({ title}: { title: string }) => {
    return <h1 className='text-lg font-semibold text-light-text dark:text-mainWhite'>{title}</h1>
}

export default SectionTitle
// This component is used to display section titles in a consistent style across the application.