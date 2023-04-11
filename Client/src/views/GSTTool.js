import React, { useState, useRef, useEffect } from "react";
import "./GSTTool.css";
const GSTTool = () => 
{
  const questions = [
    {
      questionText: "Whether expected/aggregated Turnover for the Year?",
      answerOptions: [
        {
          answerText: "upto Rs.10 Lakh",
          isLimit10: true,
        },
        { answerText: "upto Rs.20 Lakh", isLimit20: true },

        { answerText: "upto Rs.40 Lakh", isLimit40: true },
      ],
    },
    {
      questionText: "State in which business is Started?",
      answerOptions: [
        {
          answerText: "Manipur, Mizoram, Nagaland and Tripura",
          isStateM4: true,
        },
        {
          answerText:
            "Arunachal Pradesh, Assam, Himachal Pradesh, Meghalaya, Sikkim, Uttarakhand  and Telangana",
            isStateM7: true,
        },
        { answerText: "Others", isStateothers: true },
      ],
    },
    {
      questionText: "Whether Supply of Goods or Service exclusively in",
      answerOptions: [
        {
          answerText: "Taxable or Both",issupplytaxable: true,
        },
        { answerText: "Exempt", issupplytaxable: false },
      ],
    },
    {
      questionText: "Whether Supply is Outside state?",
      answerOptions: [
        { answerText: "Yes", isSupplyWithinstate: true },
        { answerText: "No", isSupplyWithinstate: false },
      ],
    },
    {
      questionText:
        "Whether Supply of Service is Through E- commerce Operator Or Pay GST as E-commerce Operator?",
      answerOptions: [
        { answerText: "Yes", throughEcommerceOperator: true },
        { answerText: "No", throughEcommerceOperator: false },
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

  //conditions for Gst Tool
  const [StateM4Status, setStateM4Status] = React.useState(0);

  const [limit10Status, setlimit10Status] = React.useState(0);

  const [StateM7Status, setStateM7Status] = React.useState(0);
  const [StateotherStatus, setStateotherStatus] = React.useState(0);

  const [limit20Status, setlimit20Status] = React.useState(0);
  const [limit40Status, setlimit40Status] = React.useState(0);

  const [supplytaxablestatus, setsupplytaxablestatus] = React.useState(0);
  const [SupplyWithinstatestatus, setSupplyWithinstatestatus] = React.useState(0);
  const [throughEcommerceOperatorstatus, setthroughEcommerceOperatorstatus] = React.useState(0);
  const [nonresidenttaxablestatus, setnonresidenttaxablestatus] = React.useState(0);
  const [TDSDeductorstatus, setTDSDeductorstatus] = React.useState(0);
  


  //---------------------------------------------------------
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const [showScore, setShowScore] = React.useState(false);
  const [gstState, setgstState] = React.useState(0);

  const [score, setScore] = React.useState(0);
  const handleAnswerButtonClick = (
    isStateM4,
    isStateM7,
    isStateothers,
    isLimit10,
    isLimit20,
    isLimit40,
    isSupplyWithinstate,
    issupplytaxable,
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

    //----------------------if else for gst tool
    if (isStateM4 === true) {
      setStateM4Status(1);
    }
    else{
      setStateM4Status(0);
    }
    if (isStateM7 === true) {
      setStateM7Status(1);
    }
    else{
      setStateM7Status(0);
    }
    if (isStateothers === true) {
      setStateotherStatus(1);
    }
    else{
      setStateotherStatus(0);
    }


    if (isLimit10 === true) {
      setlimit10Status(1);
    }
    else {
      setlimit10Status(0);
    }
    if (isLimit20 === true) {
      setlimit20Status(1);
    }
    else {
      setlimit20Status(0);
    }
    if (isLimit40 === true) {
      setlimit40Status(1);
    }
    else {
      setlimit40Status(0);
    }
    if(issupplytaxable ===true)
    {
      setsupplytaxablestatus(1)
    }
    else {
      setsupplytaxablestatus(0);
    }
    if(isSupplyWithinstate ===true)
    {
      setSupplyWithinstatestatus(1)
    }
    else {
      setSupplyWithinstatestatus(0);
    }
    if(throughEcommerceOperator ===true)
    {
      setthroughEcommerceOperatorstatus(1)
    }
    else {
      setthroughEcommerceOperatorstatus(0);
    }
    if(nonresidenttaxable ===true)
    {
      setnonresidenttaxablestatus(1)
    }
    else {
      setnonresidenttaxablestatus(0);
    }
    if(TDSDeductor ===true)
    {
      setTDSDeductorstatus(1)
    }
    else {
      setTDSDeductorstatus(0);
    }


    // if (
    //   (isStateM4 === true && isLimit10 === true) ||
    //   isSupplyWithinstate === true
    // ) {
    //   setgstState(0);
    // } else {
    //   setgstState(1);
    // }

    if(StateM4Status===true && limit10Status=== true)
    {
      setgstState(1);
    }
    else
      if(StateM4Status===true && limit10Status=== false && supplytaxablestatus===true
         && SupplyWithinstatestatus===false)
      {
        setgstState(1);
      }
    
    else 
      if(StateM4Status===true && limit10Status=== false && supplytaxablestatus===false )
      {
        setgstState(0);
      }
      else 
      if(StateM4Status===true && limit10Status=== false && supplytaxablestatus===true 
        && SupplyWithinstatestatus===false)
      {
        setgstState(1);
      }
      else 
      if(StateM4Status===true && limit10Status=== false && supplytaxablestatus===true 
        && SupplyWithinstatestatus===false && throughEcommerceOperatorstatus===true)
      {
        setgstState(1);
      }
       if(StateM4Status===true && limit10Status=== false && supplytaxablestatus===true 
        && SupplyWithinstatestatus===false && throughEcommerceOperatorstatus===false && nonresidenttaxablestatus===true)
      {
        setgstState(1);
      }
       if(StateM4Status===true && limit10Status=== false && supplytaxablestatus===true 
        && SupplyWithinstatestatus===false && throughEcommerceOperatorstatus===false 
        && nonresidenttaxablestatus===false && TDSDeductorstatus===true)
      {
        setgstState(1);
      }
       if(StateM4Status===true && limit10Status=== false && supplytaxablestatus===true 
        && SupplyWithinstatestatus===false && throughEcommerceOperatorstatus===false 
        && nonresidenttaxablestatus===false && TDSDeductorstatus===false)
      {
        setgstState(0);
      }

    
    

     // --------------------------------
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
                    answerOption.isStateM7,
                    answerOption.isStateothers,
                    answerOption.isLimit10,
                    answerOption.isLimit20,
                    answerOption.isLimit40,
                    answerOption.isSupplyWithinstate,
                    
                    
                    answerOption.issupplytaxable,
                    
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
