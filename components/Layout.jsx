import Head from 'next/head'
import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({title, description, children}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        
        <Nav/>
        
        {children}

        <Footer/>
    </>
  )
}

export default Layout