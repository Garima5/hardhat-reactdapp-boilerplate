import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
const greeterAddress = ''
function App() {
  const [greeting, setGreetingValue] = useState('')
  async function requestAccount(){
    // request account information from metamask wallet
    // Ask user to connect to Metamask if not already connected
    await window.ethereum.request({method: 'eth_requestAccounts'});
    
  }
  
  async function getGreeting(){
    // This function will be attached to a button
    if (typeof window.ethereum !== 'undefined')
    {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress,Greeter.abi,provider)
      try{
        const data = await contract.greet()
        console.log('data:', data)
      }catch(err)
      {
        console.log(err)
      }

    }
  }
  async function setGreeting(){
    // first check that an actual greeting has been sent - we don't want to write empty string
    if(!greeting)return
    if(typeof window.ethereum !== 'undefined'){
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner(); // we need to sign the transaction
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      const transaction = await contract.setGreeting(greeting)
      setGreetingValue('')
      await transaction.wait() // waiting for transaction to confirm on blockcahin
      getGreeting() //log the new value on console
    }

  }

  return (
    <div className="App">
      <button onClick = {getGreeting }>Fetch Greeting</button>
      <button onClick = {setGreeting}>Set Greeting</button>
      <input onChange={e => setGreetingValue(e.target.value)} placeholder = "Set greeting" value={greeting}>
      </input>
      <br />

    </div>
  );
}

export default App;
