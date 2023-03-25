import React from "react";

const Quiz = () => {

    const quizQuestions = [
        {
            question: 'What is the capital of France?',
            option1: 'Paris',
            option2: 'Berlin',
            option3: 'Madrid',
            option4: 'Rome',
            answer: 'Paris'
        },
        {
            question: 'What is the smallest planet in the solar system?',
            option1: 'Venus',
            option2: 'Jupiter',
            option3: 'Mercury',
            option4: 'Mars',
            answer: 'Mercury'
        },
        {
            question: 'What is the largest mammal in the world?',
            option1: 'Elephant',
            option2: 'Blue Whale',
            option3: 'Giraffe',
            option4: 'Hippopotamus',
            answer: 'Blue Whale'
        },
        {
            question: 'What is the currency of Japan?',
            option1: 'Euro',
            option2: 'Yen',
            option3: 'Dollar',
            option4: 'Pound',
            answer: 'Yen'
        },
        {
            question: 'What is the highest mountain in the world?',
            option1: 'Mount Everest',
            option2: 'K2',
            option3: 'Kangchenjunga',
            option4: 'Lhotse',
            answer: 'Mount Everest'
        }
    ];

    const selectOption = () => {


    }

    return <>

        <div className="flex flex-row justify-center items-center w-csreen h-screen bg-gradient-to-b from-blue-300 via-blue-500 to-blue-600 py-12">

            <div className="flex flex-row justify-center container mx-auto max-w-lg bg-white rounded-lg shadow-inner p-4 overflow-scroll h-3/4">

                <div className="flex flex-col gap-y-3">
                    {
                        quizQuestions.map((curValue, index) => {
                            return <>
                                <div className="flex flex-col gap-y-2 bg-yellow-300 max-w-sm">
                                    <h1 className="bg-gray-400 p-3 rounded-lg tracking-wider font-bold flex-wrap text-lg">{index + 1}. {curValue.question}</h1>

                                    <div className="flex flex-col gap-y-2 bg-blue-400 p-3 rounded-lg">
                                        <div className="flex flex-row gap-x-3">
                                            <input type="radio" name={curValue.answer} id={curValue.answer} value={curValue.answer} onChange={selectOption}></input>
                                            <label for={curValue.answer}>{curValue.option1}</label>
                                        </div>
                                        <div className="flex flex-row gap-x-3">
                                            <input type="radio" name={curValue.answer} id={curValue.answer} value={curValue.answer} onChange={selectOption}></input>
                                            <label for={curValue.answer}>{curValue.option2}</label>
                                        </div>

                                        <div className="flex flex-row gap-x-3">
                                            <input type="radio" name={curValue.answer} id={curValue.answer} value={curValue.answer} onChang={selectOption}></input>
                                            <label for={curValue.answer}>{curValue.option3}</label>
                                        </div>

                                        <div className="flex flex-row gap-x-3">
                                            <input type="radio" name={curValue.answer} id={curValue.answer} value={curValue.answer} onChange={selectOption}></input>
                                            <label for={curValue.answer}>{curValue.option4}</label>

                                        </div>

                                    </div>
                                </div>
                            </>

                        })
                    }

                    <div className="flex flex-row justify-center w-full mt-4 pb-3">
                        <button type="button" className="bg-blue-400 px-5 py-3 rounded-lg text-white font-bold tracking-wider antialiased text-xl text-center hover:bg-blue-500 hover:cursor-pointer shadow-inner w-3/4">Submit</button>
                    </div>

                </div>
            </div>
        </div>

    </>
};

export default Quiz;