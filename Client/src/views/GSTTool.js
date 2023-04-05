import React, { useState, useRef, useEffect } from "react";
import "./GSTTool.css";
const GSTTool = () => {
  const questions = [
    {
        questionText: "Supply of Goods or services or both?",
        answerOptions: [
          {
            answerText: "Goods",
            isGoods: true,
          },
          { answerText: "Services", isServices: true },
          { answerText: "Both", isBoth: true },
        ],
      },
    {
      questionText: "State in which business is Started?",
      answerOptions: [
        {
          answerText: "Manipur, Mizoram, Nagaland and Tripura",
          isStateM4: true,
        },
        { answerText: "Other states", isStateM4: false },
      ],
    },
    {
      questionText: "What is your turnover limit?",
      answerOptions: [
        { answerText: "Upto 10 lakhs", isLimit10: true },
        { answerText: "Above 10 lakhs", isLimit10: false },
      ],
    },
    {
      questionText: "Whether Supply is within state or Outside state?",
      answerOptions: [
        {
          answerText: "Within State",

          isSupplyWithinstate: true,
        },
        { answerText: "Outside State", isSupplyWithinstate: false },
        { answerText: "Both", issupplyBothstate: true },
      ],
    },
    {
      questionText: "Whether Supply of Goods or Service exclusively in?",
      answerOptions: [
        { answerText: "Non GST Supply", isnonGSTSupply: true },
        { answerText: "Exempt Supply/ Nil Rated Supply", isExemptSupply: true },
        { answerText: "Taxable", isTaxable: true },
        { answerText: "All of the Above", isALLtax: true },
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

export default GSTTool;
