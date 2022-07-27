import React from 'react';
import Navbar from './Navbar';
import SEO from './SEO';

export default function Layout({children, title}){
    return (
        <>
            <SEO title={title} />
            <header>
                <Navbar />
            </header>
            <main className='text-center' style={{'marginTop':'90px'}}>
                {children}
            </main>
        </>)
}