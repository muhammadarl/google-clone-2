import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import {API_KEY, CONTEXT_KEY} from '../keys';
import Response from '../Response';
import {useRouter} from 'next/router';
import SearchResult from '../components/SearchResult';


function search({results}) {
    const router = useRouter();
    console.log(results);
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="favicon.ico" type="image/x-icon"/>
            </Head>
            {/* Header */}
            <Header />
            {/* Search Results */}
            <SearchResult results={results}/>
        </div>
    );
}

export default search;
export async function getServerSideProps(context){
    const useDummyData = true;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start${startIndex}`
    ).then(response =>response.json());

    // pass the result to the client
    return{
        props:{
            results: data,
        }
    }
};
