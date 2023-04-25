import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const {articles}= useLoaderData()
    console.log({articles})
    return (
        <div>
            <h1>Top News </h1>
           <div className='grid gap-6 mb-8 lg:grid-cols-3 sm:grid-cols-1 mt-10'>
           {
                articles.map(article => 
                    <div>
                        <img src={article.urlToImage} alt="" className='object-cover w-full  mr-10 h-64 md:h-80 xl:h-80'/>
                    </div>
                    )
            }
           </div>
            
        </div>
    );
};

export default News;