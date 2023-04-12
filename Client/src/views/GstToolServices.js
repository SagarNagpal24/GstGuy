import React, { useState, useRef, useEffect } from "react";
import "./GstToolServices.css";
const GSTToolServices = () => {
  const questions = [    {
    questionText: "Whether expected/aggregated Turnover for the Year?",
    answerOptions: [
      {
        answerText: "upto Rs.10 Lakh",
        isLimit10: true,
      },
      { answerText: "upto Rs.20 Lakh", isLimit20: true },
       
   
    ],
  },
  {
    questionText: "State in which business is Started?",
    answerOptions: [
      { answerText: "Manipur, Mizoram, Nagaland and Tripura", isStateM4: true },
      { answerText: "Arunachal Pradesh, Assam, Himachal Pradesh, Meghalaya, Sikkim, Uttarakhand  and Telangana", isStateM7: true },
{ answerText: "Others", isStateothers: true },
    ],
  },
  {
    questionText: "Whether Supply of Goods or Service exclusively in",
    answerOptions: [
      {
        answerText: "Taxable or Both",

        issupplytaxable: true,
      },
      { answerText: "Exempt", issupplytaxable: false },
     
    ],
  },
  {
    questionText: "Whether Supply is Outside state?",
    answerOptions: [
      { answerText: "Yes", isSupplyoutsidestate: true },
      { answerText: "No", isSupplyoutsidestate: false },
     
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
  const [Supplyoutsidestatestatus, setSupplyoutsidestatestatus] =
    React.useState(0);
  const [throughEcommerceOperatorstatus, setthroughEcommerceOperatorstatus] =
    React.useState(0);
  const [nonresidenttaxablestatus, setnonresidenttaxablestatus] =
    React.useState(0);
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
    isSupplyoutsidestate,
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
    if (isStateM7 === true) {
      setStateM7Status(1);
    }
    if (isStateothers === true) {
      setStateotherStatus(1);
    }

    if (isLimit10 === true) {
      setlimit10Status(1);
    }
    if (isLimit20 === true) {
      setlimit20Status(1);
    }
    if (isLimit40 === true) {
      setlimit40Status(1);
    }
    if (issupplytaxable === true) {
      setsupplytaxablestatus(1);
    }
    if (isSupplyoutsidestate === true) {
      setSupplyoutsidestatestatus(1);
    }
    if (throughEcommerceOperator === true) {
      setthroughEcommerceOperatorstatus(1);
    }
    if (nonresidenttaxable === true) {
      setnonresidenttaxablestatus(1);
    }
    if (TDSDeductor === true) {
      setTDSDeductorstatus(1);
    }

    // if (
    //   (isStateM4 === true && isLimit10 === true) ||
    //   isSupplyWithinstate === true
    // ) {
    //   setgstState(0);
    // } else {
    //   setgstState(1);
    // }

    if (StateM4Status === 1) {
      if (
        limit10Status === 1 ||
        (limit10Status === 0 &&
          supplytaxablestatus === 1 &&
          Supplyoutsidestatestatus === 1) ||
       
        (limit10Status === 0 &&
          supplytaxablestatus === 1 &&
          Supplyoutsidestatestatus === 0 &&
          throughEcommerceOperatorstatus === 1) ||
        (limit10Status === 0 &&
          supplytaxablestatus === 1 &&
          Supplyoutsidestatestatus === 0 &&
          throughEcommerceOperatorstatus === 0 &&
          nonresidenttaxablestatus === 1) ||
        (limit10Status === 0 &&
          supplytaxablestatus === 1 &&
          Supplyoutsidestatestatus === 0 &&
          throughEcommerceOperatorstatus === 0 &&
          nonresidenttaxablestatus === 0 &&
          TDSDeductorstatus === 1)
      ) {
        setgstState(1);
      }
    }

    if (StateM7Status === 1) {
      if (
        limit20Status === 1 ||
        (limit20Status === 0 &&
          supplytaxablestatus === 1 &&
          Supplyoutsidestatestatus === 1) ||
       
        (limit20Status === 0 &&
          supplytaxablestatus === 1 &&
          Supplyoutsidestatestatus === 0 &&
          throughEcommerceOperatorstatus === 1) ||
        (limit20Status === 0 &&
          supplytaxablestatus === 1 &&
          Supplyoutsidestatestatus === 0 &&
          throughEcommerceOperatorstatus === 0 &&
          nonresidenttaxablestatus === 1) ||
        (limit20Status === 0 &&
          supplytaxablestatus === 1 &&
          Supplyoutsidestatestatus === 0 &&
          throughEcommerceOperatorstatus === 0 &&
          nonresidenttaxablestatus === 0 &&
          TDSDeductorstatus === 1)
      ) {
        setgstState(1);
      }
    }

    if (StateotherStatus === 1) {
      if (
        limit20Status === 1 ||
        (limit20Status === 0 &&
          supplytaxablestatus === 1 &&
          Supplyoutsidestatestatus === 1) ||
       
        (limit20Status === 0 &&
          supplytaxablestatus === 1 &&
          Supplyoutsidestatestatus === 0 &&
          throughEcommerceOperatorstatus === 1) ||
        (limit20Status === 0 &&
          supplytaxablestatus === 1 &&
          Supplyoutsidestatestatus === 0 &&
          throughEcommerceOperatorstatus === 0 &&
          nonresidenttaxablestatus === 1) ||
        (limit20Status === 0 &&
          supplytaxablestatus === 1 &&
          Supplyoutsidestatestatus === 0 &&
          throughEcommerceOperatorstatus === 0 &&
          nonresidenttaxablestatus === 0 &&
          TDSDeductorstatus === 1)
      ) {
        setgstState(1);
      }
    }

    // else
    //   if(StateM4Status===true && limit10Status=== false && supplytaxablestatus===false )
    //   {
    //     setgstState(0);
    //   }
    //   else
    //   if
    //   {
    //     setgstState(1);
    //   }
    //   else
    //   if
    //   {
    //     setgstState(1);
    //   }
    //    if
    //   {
    //     setgstState(1);
    //   }
    //    if
    //   {
    //     setgstState(1);
    //   }
    //    if(StateM4Status===true && limit10Status=== false && supplytaxablestatus===true
    //     && SupplyWithinstatestatus===false && throughEcommerceOperatorstatus===false
    //     && nonresidenttaxablestatus===false && TDSDeductorstatus===false)
    //   {
    //     setgstState(0);
    //   }

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
                    answerOption.isSupplyoutsidestate,

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

export default GSTToolServices;
