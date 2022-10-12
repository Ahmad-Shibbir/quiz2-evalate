import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topic = useLoaderData();
    console.log(topic.data)
    return (
        <div className="font-bold bg-white ">
            <div className='flex items-center md:flex-row sm:flex-col'>
                <div>
                    <img className=' sm:w-9/12 md:w-full' src="https://www.thequizopedia.com/blog/wp-content/uploads/2019/11/online-kids_24877-51994.jpg" alt="" />
                </div>

                <div className='p-20'>
                    <h1 className="text-6xl font-bold "><span>Easy and intuitive</span> <br /><span>online  testing</span> </h1>
                    <p>Evaluate yourself by doing online test with us! we have various type of quize for you</p>
                </div>
                
            </div>

            <div className="bg-black md:p-8 sm:p-2  ">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    topic.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;