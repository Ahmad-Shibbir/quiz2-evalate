import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const quizInfo = useLoaderData();
    
    return (
        <div>
            <div><h1 className='font-bold text-4xl text-center m-8'>Number of Quizzes for different topic</h1></div>
            <div className='flex justify-center m-20'>
            <LineChart width={500} height={400} data={quizInfo.data}>
                    <Line type='monotone' dataKey='total' stroke='#82cacd'></Line>
                    <XAxis dataKey='name'></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
            </LineChart>
            </div>
        </div>
       
    );
};

export default Statistics;