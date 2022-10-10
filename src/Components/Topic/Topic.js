import React from 'react';

const Topic = ({topic}) => {
    const {id, logo, name, total}=topic
    console.log(name)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Topic" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">{total} Quizzes</div>
                </h2>
                <p>This section have {total} quizzes about {name}</p>
                <div className="card-actions justify-end">
                
                <div className="badge badge-outline">Start Practice --></div>
                </div>
            </div>
        </div>
    );
};

export default Topic;