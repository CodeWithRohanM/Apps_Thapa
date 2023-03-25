import React, { useState } from "react";
import downArrow from "/Users/rohanmote/Desktop/Thapa Projects/MERN_16March/client/src/Images/down_arrow.png";
import upArrow from "/Users/rohanmote/Desktop/Thapa Projects/MERN_16March/client/src/Images/up_arrow.png";

const Accord = () => {

    const contentArray = [{
        id: 1,
        heading: "What is the capital of Namibia?",
        para: "Windhoek.",
    },
    {
        id: 2,
        heading: "What is the largest bird in the world?",
        para: "The ostrich.",
    },
    {
        id: 3,
        heading: "Who painted the Mona Lisa?",
        para: "Leonardo da Vinci.",
    },
    {
        id: 4,
        heading: "What is the smallest country in the world by land area?",
        para: "Vatican City.",
    },
    {
        id: 5,
        heading: "Who wrote the novel \"To Kill a Mockingbird\"?",
        para: "Harper Lee.",
    },
    {
        id: 6,
        heading: "What is the boiling point of water in Celsius?",
        para: "100 degrees Celsius.",
    },
    {
        id: 7,
        heading: "Who is the founder of Microsoft?",
        para: " Bill Gates.",
    }]


    const [displayData, setDisplayData] = useState("block");
    const [content, setContent] = useState(contentArray);
    const [displayImage, setDisplayImage] = useState(downArrow);

    const showItem = (id) => {
        // displayData === "hidden" ? setDisplayData("block") : setDisplayData("hidden");
        // window.alert(id);

        document.getElementById(id).style.maxHeight = "96px";
        document.getElementById(id).style.paddingTop = "8px";
        document.getElementById(id).style.paddingBottom = "8px";
        content.filter((curValue, index) => index + 1 !== id).map((curValue, ind) => {
            const element = document.getElementById(curValue.id);
            element.style.maxHeight = "0px";
            element.style.paddingTop = "0px";
            element.style.paddingBottom = "0px";
        });
    }

    return <>
        <div className="flex flex-col gap-y-12 items-center w-screen h-screen p-12 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-600">
            <button type="button" className="w-80 py-3 text-center text-xl font-bold antialiased tracking-widest text-white bg-blue-600 h-fit rounded-lg shadow-inner hover:bg-blue-500 transition ease-in-out duration-200 active:scale-95">Click To Know More..</button>

            <div className="flex flex-col gap-y-8 container mx-auto max-w-lg bg-white shadow-inner p-6 overflow-scroll rounded-lg">

                {
                    content.map((curValue, index) => {
                        return <>
                            <div className="flex flex-col gap-y-2 items-center">

                                <div className="flex flex-row gap-x-2 w-5/6 bg-blue-600 py-3 rounded-md px-3 hover:cursor-pointer shadow-inner items-center justify-center hover:bg-blue-500">
                                    <h1 className="text-center text-white font-bold text-xl tracking-wider antialiased w-11/12"
                                        onClick={() => {
                                            showItem(curValue.id);
                                        }}>{curValue.heading} </h1>
                                    {/* <div className="w-1/5 flex justify-center">
                    <img src={displayImage} className="w-6 h-6" id={curValue.id}></img>
                  </div> */}
                                </div>

                                <h1 className={`bg-cyan-600 text-white text-lg font-bold tracking-wider w-3/4 text-center rounded-md uppercase shadow-inner max-h-0 transition-max-height ease-in-out duration-700 overflow-hidden`} id={curValue.id}>{curValue.para}</h1>
                            </div>

                        </>

                    })
                }





            </div>
        </div>
    </>
};



export default Accord;