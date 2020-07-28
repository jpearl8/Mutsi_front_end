var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var yo = document.getElementById("yo");
var morning = document.getElementById("morning");
var bedtime = document.getElementById("bedtime");
var friend = document.getElementById("friend");
var newFriend = document.getElementById("newFriend");
var breakfast = document.getElementById("breakfast");
var afternoon = document.getElementById("afternoon");
var activities = document.getElementById("activities");
var secretMessage = document.getElementById("secretMessage");
var goodMorning = document.getElementById("goodMorning");




showSection(-1);
img1.onclick = function() {
  showSection(1);
}

img2.onclick = function() {
  showSection(2);
}

img3.onclick = function() {
  showSection(3);
}

function showSection(sectionNumber) {
  var displays = [goodMorning, afternoon, bedtime];
  var i;
  for (i = 0; i < 3; i++){
    if (i == sectionNumber - 1){
      displays[i].style.display = "inline";
    } else {
      displays[i].style.display = "none";
    }
  }
}

breakfast.onclick = function() {
    if (activities.value == "chicken"){
        secretMessage.innerHTML = "Correct!";
        secretMessage.style.color = "green";
    } else if (activities.value != "-1"){
      secretMessage.style.color = "red";
        secretMessage.innerHTML = "Try Again! (I guess I know her better than you do)";
    }
}

newFriend.onclick = function() {
  var myHeaders = new Headers();
  // myHeaders.append("Cookie", "__cfduid=dc628a286403e12ec9ff97d57967a23dd1595951096");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  fetch("https://dog.ceo/api/breeds/image/random", requestOptions)
  .then(response => response.json())
  .then(result => {
    friend.src = result.message;
    return console.log(result)})
  .catch(error => console.log('error', error));
}
var xhr = new XMLHttpRequest();


xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    yo.innerHTML += "my mom";
    console.log(this.response);
    yo.innerHTML += JSONithis.response;
    // friend.src += ;
  }
});




var res = document.getElementById('res');
var btn00 = document.getElementById('btn00');
 var btn01 = document.getElementById('btn01');
 var btn02 = document.getElementById('btn02');
 var btn03 = document.getElementById('btn03');
 var btn04 = document.getElementById('btn04');
 var btn05 = document.getElementById('btn05');
 var btn06 = document.getElementById('btn06');
 var btn07 = document.getElementById('btn07');
 var btn08 = document.getElementById('btn08');
 var btn09 = document.getElementById('btn09');
 var btn10 = document.getElementById('btn10');
 var btn11 = document.getElementById('btn11');
 var btn12 = document.getElementById('btn12');
 var btn13 = document.getElementById('btn13');
 var btn14 = document.getElementById('btn14');
 var btn15 = document.getElementById('btn15');
 var btn16 = document.getElementById('btn16');
 var btn17 = document.getElementById('btn17');
 var btnClr = document.getElementById('btnClr');
 var btnEql = document.getElementById('btnEql');
 var btnSum = document.getElementById('btnSum');
 var btnSub = document.getElementById('btnSub');
 var btnMul = document.getElementById('btnMul');
 var btnDiv = document.getElementById('btnDiv');

res.onclick = function() {
    res.disabled = true;
}
btn00.onclick = function() {
    res.innerHTML = res.innerHTML + '0';
};

btn01.onclick = function() {
    res.innerHTML = res.innerHTML + '1';
};

btn02.onclick = function() {
res.innerHTML = res.innerHTML + '2';
};

btn03.onclick = function() {
res.innerHTML = res.innerHTML + '3';
};

btn04.onclick = function() {
res.innerHTML = res.innerHTML + '4';
};

btn05.onclick = function() {
res.innerHTML = res.innerHTML + '5';
};

btn06.onclick = function() {
res.innerHTML = res.innerHTML + '6';
};

btn07.onclick = function() {
res.innerHTML = res.innerHTML + '7';
};

btn08.onclick = function() {
  res.innerHTML = res.innerHTML + '8';
  };
  
btn09.onclick = function() {
res.innerHTML = res.innerHTML + '9';
};

btnClr.onclick = function() {
    res.innerHTML = "";
};

btnMul.onclick = function() {
    res.innerHTML = res.innerHTML + '* 7';
};

btnDiv.onclick = function() {
    res.innerHTML = res.innerHTML + '/ 7';
};

btnEql.onclick = function() {
    var sol = res.innerHTML;
    let mySet = new Set("+-/*");
    var build = 0;
    var expression = "";
    var i;
    for (i = 0; i < sol.length; i++){
        if (!(mySet.has(sol.charAt(i)))){
            build = build + sol.charAt(i);
            if (i == sol.length - 1){
                expression = expression + build;
            }
        
        } else {
            expression = expression + build + sol.charAt(i);
            build = "";
        }
    }
    res.innerHTML = eval(expression);
     
    
};


