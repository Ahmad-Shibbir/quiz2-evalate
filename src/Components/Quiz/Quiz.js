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
           <ToastContainer />
       </div>
       

        
    );
};

export default Quiz;