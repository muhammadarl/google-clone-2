import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

function search() {
    return (
        <div>
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="favicon.ico" type="image/x-icon"/>
            </Head>
            {/* Header */}
            <Header />
            {/* Search Results */}
        </div>
    );
}

export default search
