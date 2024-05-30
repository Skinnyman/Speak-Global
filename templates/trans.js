const exchangeIcon = document.querySelector(".exchange");
const type_text = document.querySelector(".enter-text");
const translate_text = document.querySelector(".translate-text");
const CopyBtn = document.querySelector(".copy-me");
const CopyBtn2 = document.querySelector(".copy-me2");
const VolumeBtn = document.querySelector(".volume");
const VolumeBtn2 = document.querySelector(".volume2");
const TranslateBtn = document.querySelector(".transbtn");
const left_Select = document.getElementById("Text-select");
const right_Select = document.getElementById("translate-select") 
 

// This eventlistener helps to navigate from Translate Text to Translate Files 
document.addEventListener('click', function() {
    const textBtn = document.getElementById("text-translate");
    const fileBtn = document.getElementById("file-translate");
    const  Transtext= document.getElementById("text-trans");
    const Transfile = document.getElementById("file-trans");
    
    textBtn.addEventListener('click', ()=>{
        Transtext.classList.add('active');
        Transfile.classList.remove('active');
        textBtn.classList.add('trans-high')
        fileBtn.classList.remove('trans-high')
       
    })
    fileBtn.addEventListener('click', ()=>{
        Transtext.classList.remove('active');
        Transfile.classList.add('active');
        fileBtn.classList.add('trans-high')
        textBtn.classList.remove("trans-high")
    })
  });


 
  
// The exhange Icon swaps the language selected 
exchangeIcon.addEventListener("click", () => {
    // Store the current values of the type_text input and the first select element
    const tempText = type_text.value,
        tempLang = left_Select.value;

    // Swap the values of the fromText and toText inputs
    type_text.value = translate_text.value;
    translate_text.value = tempText;

    // Swap the values of the first and second select elements
    left_Select.value = right_Select.value;
    right_Select.value = tempLang;
});


// This CopyBtn is used to copy text
CopyBtn.addEventListener("click",() => {
    if(!type_text.value) return;
    navigator.clipboard.writeText(type_text.value);
    alert("Text copied to clipboard!")
})

CopyBtn2.addEventListener("click",() => {
    if(!translate_text.value) return;
    navigator.clipboard.writeText(translate_text.value);
    alert("Text copied to clipboard!")
})

// This VolumeBtn is used for text-to-speech

VolumeBtn.addEventListener("click", ()=>{
    const speech = new SpeechSynthesisUtterance();
    speech.text = type_text.value;
    speech.lang = left_Select.value;
    window.speechSynthesis.speak(speech);
})
VolumeBtn2.addEventListener("click", ()=>{
    const speech = new SpeechSynthesisUtterance();
    speech.text = translate_text.value;
    speech.lang = right_Select.value;
    window.speechSynthesis.speak(speech);
})



TranslateBtn.addEventListener('click' ,() => {
      function texttranslation(){
      
        fetch("http://127.0.0.1:5000/translate",{
            method: "POST",
            body: JSON.stringify({
            q: type_text.value,
            source: left_Select.value,
            target: right_Select.value,
            format: "text",
            api_key: ""
        }),
        headers: { "Content-Type": "application/json" }
        })
        .then(data => data.json())
        .then (item => {
            console.log(item)
            translate_text.textContent = item.translatedText
        })
        .catch((error) =>{
              console.log(error)
        })
      }
      texttranslation()
})
