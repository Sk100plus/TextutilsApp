import React ,{useState}from 'react'

export default function Aboutit() {
  const DarkM=()=>{
    let val=document.getElementsByTagName("BODY")[0];
    val.style.background="grey";
  }
  const LightM=()=>{
    let val=document.getElementsByTagName("BODY")[0];
    val.style.background="white";
  }

  const [btnText,setbtnText]=useState("Enable Dark Mode");
// STYLE USING AS AN OBJECT


const [style,setstyle]=useState({
  color:'white',
  background:'black',
});  

const toggleStyle=()=>{
  if(style.color==='white'){
    setstyle({
      color:'black',
      background:'white'
    })
    setbtnText("Enable Dark Mode");
  }
else{
  setstyle({
    color:'white',
    background:'black'
  })
  setbtnText("Enable Light Mode");
}
}
const api_url="https://api.quotable.io/random";
async function getquote(url){
  const response =await fetch(url);
  var data=await response.json();
  document.getElementById("data1").innerHTML=data.content;
  document.getElementById("author").innerHTML="---"+data.author;
}
getquote(api_url);
  return (
   <div className="container" style={style}>
    <h1 className='my-3'>About Us</h1>
    <div className="accordion" id="accordionExample"style={style}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={style}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="container">
<button className="btn btn-primary my-3 mx-1" id="but3" onClick={DarkM}>DarkM</button>
<button className="btn btn-primary my-3 mx-3" id="but3" onClick={LightM}>LightM</button>
<button className="btn btn-primary my-3 mx-3" id="but3" onClick={toggleStyle}>{btnText}</button>
   </div>
   

   

   <div class="card">
  <div class="card-body">
    <h5 class="card-title">Quotes of the Day</h5>
    <p class="card-text" id="data1">Loading....</p>
    <p class="card-text" id="author">Loading....</p>
    <a href="" class="btn btn-primary"  >New Quotes</a>
  </div>
</div>
   </div>
   
  )
}
