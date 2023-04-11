import React, { useState, useRef, useEffect } from "react";
import "./GstToolServices.css";
const GstToolServices = () => {
  const questions = [    {
    questionText: "Whether expected/aggregated Turnover for the Year?",
    answerOptions: [
      {
        answerText: "upto Rs.10 Lakh",
        isStateM4: true,
      },
      { answerText: "upto Rs.20 Lakh", isStateM4: false },
       
   
    ],
  },
  {
    questionText: "State in which business is Started?",
    answerOptions: [
      { answerText: "Manipur, Mizoram, Nagaland and Tripura", isLimit10: true },
      { answerText: "Arunachal Pradesh, Assam, Himachal Pradesh, Meghalaya, Sikkim, Uttarakhand  and Telangana", isLimit10: false },
{ answerText: "Others", isLimit10: false },
    ],
  },
  {
    questionText: "Whether Supply of Goods or Service exclusively in",
    answerOptions: [
      {
        answerText: "Taxable or Both",

        isSupplyWithinstate: true,
      },
      { answerText: "Exempt", isSupplyWithinstate: false },
     
    ],
  },
  {
    questionText: "Whether Supply is Outside state?",
    answerOptions: [
      { answerText: "Yes", isnonGSTSupply: true },
      { answerText: "No", isExemptSupply: true },
     
    ],
  },
  {
    questionText:
      "Whether Supply of Service is Through E- commerce Operator Or Pay GST as E-commerce Operator?",
    answerOptions: [
      { answerText: "Yes", throughEcommerceOperator: true },
      { answerText: "No", throughEcommerceOperator: true },
    ],
  },
  {
    questionText:
      "Whether You are Non Resident Taxable Person Or Casual Taxable Person Or Input Service Distributor Or Agent of Another person?",
    answerOptions: [
      { answerText: "Yes", nonresidenttaxable: true },
      { answerText: "No", nonresidenttaxable: false },
    ],
  },

  {
    questionText:
      "Whether you are required to Deduct Tax under GST (TDS Deductor) OR Collect Tax under GST (TCS Collector)?",
    answerOptions: [
      { answerText: "Yes", TDSDeductor: true },
      { answerText: "No", TDSDeductor: false },
    ],
  },
];



  const [StateStatus, setStateStatus] = React.useState(0);

  const [limitStatus, setlimitStatus] = React.useState(0);

  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const [showScore, setShowScore] = React.useState(false);
  const [gstState, setgstState] = React.useState(0);

  const [score, setScore] = React.useState(0);
  const handleAnswerButtonClick = (
    isStateM4,
    isLimit10,
    isSupplyWithinstate,
    issupplyBothstate,
    isnonGSTSupply,
    isExemptSupply,
    isTaxable,
    isALLtax,
    throughEcommerceOperator,
    nonresidenttaxable,
    TDSDeductor
  ) => {
    // isStateM4,
    // isLimit10,
    // isSupplyWithinstate,
    // issupplyBothstate,
    // isnonGSTSupply,
    // isExemptSupply,
    // isTaxable,
    // isALLtax,
    // throughEcommerceOperator,
    // nonresidenttaxable,
    // TDSDeductor

    if (isStateM4 === true) {
      setStateStatus(1);
    }

    if (isLimit10 === true) {
      setlimitStatus(1);
    }
    if (
      (isStateM4 === true && isLimit10 === true) ||
      isSupplyWithinstate === true
    ) {
      setgstState(0);
    } else {
      setgstState(1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          {gstState === 1
            ? "Yes GST Registration is required."
            : "No GST Registration is not required."}{" "}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() =>
                  handleAnswerButtonClick(
                    answerOption.isStateM4,
                    answerOption.isLimit10,
                    answerOption.isSupplyWithinstate,
                    answerOption.issupplyBothstate,
                    answerOption.isnonGSTSupply,
                    answerOption.isExemptSupply,
                    answerOption.isTaxable,
                    answerOption.isALLtax,
                    answerOption.throughEcommerceOperator,
                    answerOption.nonresidenttaxable,
                    answerOption.TDSDeductor
                  )
                }
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GstToolServices;
