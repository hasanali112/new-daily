import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    
    const {articles} = useLoaderData()
    console.log({articles})

    return (
        <div >
            <div className='grid gap-6 mb-8 mx-20 lg:grid-cols-2 sm:grid-cols-1 mt-10'>
            {
            articles.slice(0,2).map(article => 
                <div className=''>
                    <div className='overflow-hidden'>
                      <img src={article.urlToImage} alt="news cover" className='object-cover w-full  mr-10 h-100 md:h-96 xl:h-96'/>
                    </div> 
                </div>
              
                )
           }
            </div>
            <div>
                <h1 className='mx-20 font-bold tracking-wide text-3xl'>Most populer news <hr/></h1>
              <div className='grid gap-6 mb-8 lg:grid-cols-3 sm:grid-cols-1 mt-10'>
                {
                   articles.map(article => 
                    <dir>
                        <img src={article.urlToImage} alt="" />
                    </dir>
                    )
                }
              </div>

            </div>
           
        </div>
    );
};

export default Home;