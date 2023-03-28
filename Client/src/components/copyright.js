import React from 'react'

import './copyright.css'

const Copyright = (props) => {
  return (
    <div className="copyright-copyright">
      <div className="copyright-max-width max-content-container">
        <span className="copyright-text">
          <span className="copyright-text1">
            © All rights reserved
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
         
            <span className="copyright-text2">AGNK</span>
        
          <span className="copyright-text3">
            {' '}
            Powered by
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          
            <span className="copyright-text4">Frozenfire</span>
          
          <span className="copyright-text5">
            . Image source:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          
            <span className="copyright-text6">Frozenfire</span>
          
          <span className="copyright-text7">.</span>
        </span>
      </div>
    </div>
  )
}

export default Copyright
