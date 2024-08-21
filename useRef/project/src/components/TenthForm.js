import React, { useRef } from 'react'

function TenthForm() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let telInputRef = useRef();
  let engInputRef = useRef();
  let hindiInputRef = useRef();
  let mathsInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();
  let resultParaRef = useRef();
  return (
    <div>
      <form>
        <div>
            <label>firstName</label>
            <input ref={firstNameInputRef}></input>   
        </div>
        <div>
            <label>LastName</label>
            <input ref={lastNameInputRef}></input>  
        </div>
        <div>
            <label>Telugu</label>
            <input ref={telInputRef}></input>   
        </div>
        <div>
            <label>Hindi</label>
            <input ref={hindiInputRef}></input>   
        </div>
        <div>
            <label>English</label>
            <input ref={engInputRef}></input>   
        </div>
        <div>
            <label>Maths</label>
            <input ref={mathsInputRef}></input>   
        </div>
        <div>
            <label>Science</label>
            <input ref={sciInputRef}></input>   
        </div>
        <div>
            <label>Social</label>
            <input ref={socInputRef}></input>   
        </div>
        <div>
          <button type="button" onClick={()=> {
            let firstName= firstNameInputRef.current.value;
            let lastName= lastNameInputRef.current.value;
              let telMarks= Number(telInputRef.current.value);
              let hindiMarks= Number(hindiInputRef.current.value);
              let engMarks= Number(engInputRef.current.value);
              let mathsMarks= Number(mathsInputRef.current.value);
              let sciMarks= Number(sciInputRef.current.value);
              let socMarks= Number(socInputRef.current.value);
              let totalMarks= telMarks+hindiMarks+engMarks+mathsMarks+sciMarks+socMarks;

              let perc = (totalMarks/600)*100
              resultParaRef.current.innerHTML = `${firstName} ${lastName} got Total marks of ${totalMarks} wiith percentage of ${perc}%`;
          }}>Calculate Result</button>   
        </div>
        <div>
         <p ref={resultParaRef}>please enter values</p>
        </div>
      </form>
    </div>
  )
}

export default TenthForm
