import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();
    const {questions}=quiz.data
    console.log(quiz)
    const answerCheck= (question, option)=>{
        console.log(option)
        if(question.correctAnswer===option){
            alert("dshdshg")
        }
        else{
            alert('incorrect')
        }

    }
    
    return (
        <div className=''>
            <div><h1>Thiiss</h1></div>
            <div >
           
           
               {questions.map(question=>               
                    <div className="card  bg-black shadow-xl my-10 p-8 mx-40">
                        <h1 className='text-3xl font-bold'> {question.question.replace(/<\/?[^>]+>/gi, '')}</h1> 
                        <div className=' '>
                            <br /><br />
                            <h3 className='font-bold'>{question.options.map(option=>
                            <li>
                                <label>
                                    <input type="checkbox" onClick={()=>answerCheck(question,option )} />
                                    { option}
                                </label> 
                            </li> )} 
                            
                            </h3>
                        </div>
                    </div>
               )}

           </div>
       </div>
       

        
    );
};

export default Quiz;