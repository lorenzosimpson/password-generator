import React from 'react';
import CheckboxGroup from './CheckboxGroup';
import LengthSlider from './LengthSlider';
function Options(props) {
    const { passwordOptions, setPasswordOptions } = props;
    return (
        <div className='options-container'>
            <div className='options-top'>
                <h1>Customize</h1>
            </div>
            
        <div className='options'>
        
        <LengthSlider 
        passwordOptions={passwordOptions} 
        setPasswordOptions={setPasswordOptions} 
        />
       
        <CheckboxGroup
          passwordOptions={passwordOptions}
          setPasswordOptions={setPasswordOptions}
        />
        </div>
       </div>
    
    );
}

export default Options;