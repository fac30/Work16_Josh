import { useState } from "react";

function Shouter() {
    const [output, setOutput] = useState<string>("");
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setOutput(event.target.value); 
    };
  
    return (
      <>
        <input 
          type="text" 
          value={output} 
          onChange={handleInputChange} 
          placeholder="Type something..."
        />
        <p>{output.toUpperCase()}</p>
      </>
    );
  }

export default Shouter;
