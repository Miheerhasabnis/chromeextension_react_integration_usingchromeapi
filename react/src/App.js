/*global chrome*/
import React , { useState }from 'react';
const App = () => {
    const [inputValue, setInputValue] = useState("click button");
  const handleSendMessage = () => {
    // Make a simple request:
    const url='http://ip.jsontest.com/';
    chrome.runtime.sendMessage("oebaklkpfoheclphkoehncafcomnbikg", { openUrlInEditor: url},
    function(response){
      setInputValue(response.ip);
      alert("see console");
      console.log(inputValue);
    }
    );
  };
  // const handleError = (url) => {
  //   console.log(`Error opening URL in editor: ${url}`);
  // };

  // Call handleSendMessage whenever the component is mounted
  return (
    <div>
      <h1>click below button</h1>
      <h1>{inputValue}</h1>
      <button onClick={handleSendMessage}>click me</button>
    </div>
  );
};

export default App;
