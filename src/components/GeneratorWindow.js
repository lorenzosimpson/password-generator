import React, {useState, useEffect} from "react";
import StrengthIndicator from './StrengthIndicator'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SuccessAlert from "./SuccessAlert";

export function GeneratorWindow(props) {
  const [copied, setCopied] = useState(false);
  const { password } = props;

  useEffect(() => {
  return (
      setCopied(false)
    )
  }, [password])

  return (
    <div className="generator-window">
      
      <div className='password-and-copy-btn'>
        <p id='password'>{password}</p>


        <CopyToClipboard 
        text={password}
        onCopy={() => setCopied(true)}
         >
            <button id='btn-outer'><span id='copy-btn' class="material-icons" >
            content_copy
            </span></button>
        </CopyToClipboard>
       
      
      </div>
      <StrengthIndicator password={password} />
      {copied && (<SuccessAlert />)
      }
    </div>
  );
}
