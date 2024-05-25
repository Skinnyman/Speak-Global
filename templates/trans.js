// Changes from the text translate to the file translate
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
  