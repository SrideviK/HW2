let word;
let set=[];

function promptBox(){
for(i=0;i<3;i++){
word=prompt("enter a word");
set[i]=word;
}
displayWords();
}

function displayWords(){
    let startButton=document.getElementById("start");
    startButton.style.display="none";
    let ul= document.createElement("ul");
    document.getElementById("screen1").appendChild(ul);
    for(i=0;i<3;i++)
    {
        let li=document.createElement('li');
        ul.appendChild(li);
        li.textContent=set[i];
    }
let changeButton = document.createElement('button');
changeButton.innerHTML = 'Change the words';
document.getElementById('screen1').appendChild(changeButton);
changeButton.onclick=function(){wordSwap(set)};
}

function wordSwap(set){
    let scrn1=document.getElementById("screen1");
    let scrn2=document.getElementById("screen2");
    scrn1.style.display="none";
    scrn2.style.display="block";
    let newlist=set.map(swapping);
    let ul= document.createElement("ul");
    document.getElementById("screen2").appendChild(ul);
    for(i=0;i<3;i++)
    {
        let li=document.createElement('li');
        ul.appendChild(li);
        li.textContent=newlist[i];
    }
}

function swapping(newword){
    return newword.charAt(newword.length - 1) + 
    newword.substring(1, newword.length - 1) + newword.charAt(0);
}

