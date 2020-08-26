import React, { useState, useEffect } from "react";
import "./styles.css";
import { GeneratorWindow } from "./components/GeneratorWindow";
import { GeneratedPassword } from "./password";
import Hero from "./components/Hero";
import Options from './components/Options';


export default function App() {
  const [passwordOptions, setPasswordOptions] = useState({
    length: 20,
    lowerCase: true,
    upperCase: true,
    digits: true,
    symbols: false
  });

  const [password, setPassword] = useState("")
  const { length, lowerCase, upperCase, digits, symbols } = passwordOptions;

  useEffect(() => {
    setPassword(generateValidaPassword());
  }, [length, lowerCase, upperCase, digits, symbols])


const includesUppercase = /[A-Z]/
const includesDigits = /[0-9]/
const possibleSymbols = "!@#$%^&*()_+=[];='"

function validateSymbols(pass) {
    for (let i=0; i<pass.length; i++) {
      if (possibleSymbols.indexOf(pass[i]) !== -1) {return true}
    }
    return false
  }

function generateValidaPassword() {
  let p = new GeneratedPassword()
  .setLength(length)
  .addLowerCase(lowerCase)
  .addUpperCase(upperCase)
  .addDigits(digits)
  .addSymbols(symbols)
  .generate();

  
  // if the password doesn't contain at least one char of each of the user selections, regenerate it until it does
  if ((upperCase && !includesUppercase.test(p)) || (digits && !includesDigits.test(p)) || (symbols && validateSymbols(p) === false)) {
    console.log('invalid, regenerating', p)
    p = generateValidaPassword() // call the function again until it passes all tests
  }
  return p
}

  
  return (
    <div className="App">
      <section className='main'>
        <Hero />
        <GeneratorWindow
          password={password}
          passwordOptions={passwordOptions}
          setPasswordOptions={setPasswordOptions}
        />
        <Options 
        password={password}
        passwordOptions={passwordOptions}
        setPasswordOptions={setPasswordOptions}
        />
      </section>
    </div>
  );
}
