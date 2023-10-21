import { React,useState } from 'react';
import './App.css';

export default function App(){
    const [codeChange,setCodeChange] = useState('Your code here');
    const [isLocked,setIsLocked] = useState(false);
    const [isCopy,setIsCopy] = useState('Copy');
    const [saveData,setSaveData] = useState('');

    const handleCodeChange = (e) =>{
        if(!isLocked){
            setCodeChange(e.target.value);
        }
    }

    const handleCopyCode = () =>{
        navigator.clipboard.writeText(codeChange);
        setIsCopy('Copied !')
        setTimeout(()=>{
            setIsCopy('Copy')
        },10000)
    }

    const handleSaveCode = () => {
        setSaveData(codeChange);
        alert('Code saved!');
    }
    const handleLock = () =>{
        setIsLocked(!isLocked);
    }

    return(
        <div className="App">
        <h1>Basic Code Editor</h1>
        <button onClick={handleCopyCode} className="button">{isCopy}</button>
        <button onClick={handleSaveCode} className="button">Save</button>
        <button onClick={handleLock} className={`button ${isLocked ? 'button--locked' : ''}`}>
          {isLocked ? 'Unlock' : 'Lock'}
        </button>
        <div className="editor">
          <textarea
            value={codeChange}
            onChange={handleCodeChange}
            readOnly={isLocked}
          />
        </div>
      </div>
    )
}