

let userArr = [];


userArr =   JSON.parse(localStorage.getItem('user')) 

function ourFunc(){
    
    var enterData = document.getElementById('todo').value
    
    if(enterData == ''){
        
        alert("Input field cannot be blank")
        
    }
    
    else {
        
        let show = document.getElementById('show')
        let li = document.createElement('li')
        show.appendChild(li)
        li.textContent = enterData

    let a = document.createElement('a');
    a.innerHTML = "\u00d7";
    a.href ="javascript:void(0)"
    a.className = "remove"
    li.appendChild(a)
    
    //    localStorage
        
    userArr.push({'name': enterData})
    localStorage.setItem("user", JSON.stringify(userArr) )
       
} 
   
    document.getElementById('todo').value = ""

    let btn = document.querySelector('ul');
    btn.addEventListener('click',function (e) {
    let show = document.getElementById('show')
    let li  = e.target.parentElement
    show.removeChild(li)





 }
 )

}