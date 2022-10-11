import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();
    const {questions}=quiz.data
    console.log(quiz)
    const answerCheck= (question, option)=>{
        console.log(option)
        if(question.correctAnswer===option){
            toast("Wow, your answer is correct!")
        }
        else{
            toast("Incorrect answer, please try again")
        }

    }
    
    return (
        <div className=''>
            <div>
                <h1 className='text-center text-5xl font-bold m-8'>{quiz.data.name} Quiz</h1>

            </div>

            <div >
               {questions.map(question=>               
                    <div className="card  bg-black shadow-xl my-10 p-8 mx-40">
                        <h1 className='text-3xl font-bold'> {question.question.replace(/<\/?[^>]+>/gi, '')}
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        
                        </h1> 


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
           <ToastContainer />
       </div>
       

        
    );
};

export default Quiz;