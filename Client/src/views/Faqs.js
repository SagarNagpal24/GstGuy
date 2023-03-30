import React, { useState, useRef } from 'react';
import ReactDOM from "react-router-dom";
import "./Faqs.css";
import Accordion from "./Accordian";



const Faqs = () => {



    const faqs = [
        {
          id: 1,
          header: " Whether GST is applicable to the whole of India?",
          text: `It extends to the whole of India including Jammu and Kashmir on 08 July 2017.`,
        },
        {
          id: 2,
          header: " What is the taxable event under GST",
          text: ` Taxable Event under GST is supply of goods or services or both as per section 9(1) of CGST Act and section 5(1) of IGST Act. `,
        },
        {
          id: 3,
          header:
            " Whether GST is applicable if import of service is without consideration?",
          text: ` Yes Import of service without consideration is to attract the GST only if it is from the related person otherwise it did not attract the GST under law.`,
        },
        {
          id: 4,
          header:
            " If Mr. A Transfers its Second hand Mobile in exchange of New Mobile. Whether this transaction attracts GST?",
          text: ` Yes, transfer of second hand goods in exchange of new goods attracts the GST as supply of goods or services include the words “exchange”.`,
        },
        {
          id: 5,
          header: " What is the hierarchy of GST Officials?",
          text: ` 1) Principal Chief Commissioners of Central Tax or Principal Directors General of Central Tax
      2) Chief Commissioners of Central Tax or Directors General of Central Tax
      3) Principal Commissioners of Central Tax or Principal Additional Directors General of Central Tax
      4) Commissioners of Central Tax or Additional Directors General of Central Tax
      5) Additional Commissioners of Central Tax or Additional Directors of Central Tax
      6) Joint Commissioners of Central Tax or Joint Directors of Central Tax
      7) Deputy Commissioners of Central Tax or Deputy Directors of Central Tax
      8) Assistant Commissioners of Central Tax or Assistant Directors of Central Tax, and
      9) any other class of officers as it may deem fit `,
        },
        {
          id: 6,
          header: " Which are the commodities kept outside the GST?",
          text: "Alcohol for human consumption Petroleum products such as petroleum crude, motor spirit (petrol), high speed diesel, natural gas and aviation turbine fuel etc.Electricity.",
        },
        {
          id: 7,
          header: " Which are the taxes to be subsumed in GST?",
          text: ` At the Central level
      •	Central Excise Duty
      •	Additional Excise Duty
      •	Service Tax
      •	Additional Custom Duty
      At the State Level
      •	State Value Added Tax/Sales Tax
      •	Entertainment Tax other than levied by local bodies
      •	Luxury Tax
      •	Taxes on Lottery, betting and gambling `,
        },
        {
          id: 8,
          header: " What are the taxes that will continue post GST?",
          text: ` Basic Custom Duty
      Surcharge on Custom Duty
      State Excise
      Stamp Duty
      Property Tax levied by Local Bodies
      VAT on Petroleum Product
      Professional Tax
      Securities Transaction Tax. `,
        },
        {
          id: 9,
          header:
            " Which states have been categorized as Special Category States in GST?",
          text: ` Arunachal Pradesh
      Assam
      Himachal Pradesh
      Jammu and Kashmir
      Manipur
      Meghalaya
      Mizoram
      Nagaland
      Sikkim
      Tripura
      Uttarakhand `,
        },
        {
          id: 10,
          header: " When does a particular activity attract GST?",
          text: ` Activity will attract GST when activity will be treated as SUPPLY.
      As per Section 7 of CGST Act, supply includes
      (1)(a) All forms of supply of goods or services or both
      •	Such as sale, transfer, barter, exchange, license, rental, lease or disposal
      •	Made or agreed to be made for consideration by person
      •	In the course of furtherance of business
      (aa)The activities or transactions,
      •	By a person, other than an individual,
      •	To its members or constituents or vice versa,
      For cash, deferred payment or other valuable consideration
      (2) Import of services for a consideration whether or not in course or furtherance of business and
      (3) the activities specified in schedule I, made or agreed to be made without a consideration
      Thus all the activities specified above falling under the scope of supply shall attract GST excluding
      (a)those activities as specified in Schedule III
      (b)such activities or transactions undertaken by the CG, SG or any local authority in which they engaged as public authorities as may be notified by the government on the recommendation of council, `,
        },
        {
          id: 11,
          header:
            " Whether transfer of title and/or possession is necessary for a transaction to constitute supply of GST?",
          text: ` Transfer of possession as well as title is classified as supply of goods.
      Transfer of possession with future transfer of title is also classified as supply of goods
      In case of transfer of possession and not title is classified as supply of service in terms of Schedule II of CGST Act `,
        },
        {
          id: 12,
          header: " Whether GST is applicable on Scrap material?",
          text: ` The scrap is the supply of tax under GST norms, its rate of GST has depended upon the nature of the scrap as well as HSN code. `,
        },
        {
          id: 13,
          header:
            " What is the GST rate for Plastic Injection scrap? Whether it is covered under Pharmaceutical waste or Plastic waste?",
          text: ` The GST rate of Plastic Injection Scrap will cover under plastic waste, paring or scrap under HSN 3915 at the rate of 5%. `,
        },
        {
          id: 14,
          header: " Whether GST registration is mandatory for Import of Services?",
          text: ` Yes, GST is mandatory in case of where consideration is engaged in case of Import of service as it comes under supply which says Import of services for a consideration whether or not in course or furtherance of business. `,
        },
        {
          id: 15,
          header:
            " Whether GST is applicable on import of service if import for non business purpose?",
          text: ` If consideration is there in the import of services then it attracts the GST whether it is for business purpose or not.
      And if consideration does not include the money or monetary value then it doesn't attract the GST. `,
        },
        {
          id: 16,
          header:
            " Whether GST is applicable if import of service is without consideration?",
          text: ` No, if consideration is not included in the import it does not constitute the supply under GST unless and utill if falls under Schedule I of CGST Act. `,
        },
        {
          id: 17,
          header:
            " Mr. X Disposed off its computers and printers which are no more beneficial asset for the business. Whether GST is Applicable on such disposal. Case 1 If ITC availed. Case 2 ITC not availed?",
          text: ` As per Entry 1 of Schedule I of CGST Act, 2017 where business assets are disposed of after availing input tax credit will attract the GST and if no input tax credit is availed on such business asset then no GST is payable.
      Note: The goods should be transferred without any intention or requirement of having to receive the goods back. `,
        },
        {
          id: 18,
          header:
            " XYZ Ltd provided service of renting of its offices to its sister concern ABC Ltd who holds 42% of its shares amounting to Rs. 50 Lacs. Whether GST is leviable? What if it is without consideration?",
          text: ` As per Schedule I of CGST Act, 2017 supply of goods or services or both between the related person when made in the course or furtherance of business shall be treated as supply.
      In the given case ABC holds 42% of shares in XYZ Ltd which makes them related persons which attract the GST on Rs. 50 Lacs.
      If consideration is not there then it is also treated as supply of services but value shall be determined as per Rule 28. `,
        },
        {
          id: 19,
          header:
            " XYZ Ltd transferred the right to enjoy one of residential complex to its director Mr. D without consideration. Whether GST is leviable?",
          text: ` As per Entry 5AA property used for Residential property is out of scope in the GST.
      So in the following residential complex given to Mr. d by XYZ Ltd is leviable under GST. `,
        },
        {
          id: 20,
          header:
            " Ms. RPV Ltd. imported advocate services from Singapore for Rs. 10 Lac from one of its sister concerns outside india. Whether GST is leviable?",
          text: ` If consideration is there in the import of services then it attracts the GST whether it is for business purpose or not.
      In the given case Rs.10 lacs is included in the import of services between the Ms. RPV Ltd and its sister concerns outside india. Hence GST is leviable. `,
        },
        {
          id: 21,
          header:
            " Ms. RPV Ltd. imported advocate services from Singapore without consideration from one of its sister concerns outside india. Whether GST is leviable?",
          text: ` Import of services with consideration whether or not in course or furtherance of business attracts the GST but as per Entry II of schedule II import of service from its related person without consideration also attract the GST.
      In the Given case Ms. RPV Ltd took advocate service from its sister concerns which treated it as a related person and will attract the GST and borne by Ms. RPV Ltd. `,
        },
        {
          id: 22,
          header:
            " Ms. XYZ Pvt Ltd received consultancy services from one of its non executive director i.e. Mr. D without consideration. Mr. D resides outside india. Whether GST is leviable?",
          text: ` Import of services with consideration whether or not in course or furtherance of business attracts the GST but as per Entry II of schedule II import of service from its related person without consideration also attract the GST.
      In the Given case Ms. XYZ Pvt Ltd took consultancy service from one of its non-executive directors without consideration which treated it as a related person and will attract the GST and borne by XYZ Pvt Ltd. `,
        },
        {
          id: 23,
          header:
            " Mr. A imported laptop from his brother resides in Singapore as a gift. Whether GST is applicable in such a transfer?",
          text: ` Goods imported in India will not be leviable under supply and does not attract the GST. Goods imported will attract the Custom Act. `,
        },
      ];
      

    
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
    
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card">
                            <div className="card-body">
                              <h4 className="form-heading mb-4 text-primary text-center mt-3">FAQ's</h4>
                                {faqs.map((faq, index) => {
                                     return (
                                            <Accordion key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faqs;

