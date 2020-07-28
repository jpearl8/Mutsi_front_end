document.getElementById("morning");

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.yelp.com/v3/businesses/search?appSecret=Z4_rYg8KjENGrSHhDf4b0tAnUw1xEYqfaOk2rl3dYWJME5hVDpABzZNUsHq4r1Oo_qt4o-Sy6siqMdxOHeP8AHUicSdqSAzZ9Ftbbk-0y0OJTahtE8N7lGsLjK0fX3Yx&appId=hcmtRDNuHRizeotFXUi3pQ&location=Wellesley&categories=dog_parks&limit=3");
xhr.setRequestHeader("Authorization", "Bearer Z4_rYg8KjENGrSHhDf4b0tAnUw1xEYqfaOk2rl3dYWJME5hVDpABzZNUsHq4r1Oo_qt4o-Sy6siqMdxOHeP8AHUicSdqSAzZ9Ftbbk-0y0OJTahtE8N7lGsLjK0fX3Yx");
xhr.onload = function () {
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        var parks = data.businesses
        data.forEach((park) => {
            console.log(park.name)
            morning.innerHTML += park.name
        })  
    } else {
        console.log('error with query')
        morning.innerHTML += "error"
    }

}
xhr.send();

// var request = new XMLHttpRequest()
// request.open('GET', "https://api.yelp.com/v3/businesses/search?appSecret=Z4_rYg8KjENGrSHhDf4b0tAnUw1xEYqfaOk2rl3dYWJME5hVDpABzZNUsHq4r1Oo_qt4o-Sy6siqMdxOHeP8AHUicSdqSAzZ9Ftbbk-0y0OJTahtE8N7lGsLjK0fX3Yx&appId=hcmtRDNuHRizeotFXUi3pQ&location=Wellesley&categories=dog_parks&limit=3", true)
// request.onload = function () {
//     var data = JSON.parse(this.response)
//     if (request.status >= 200 && request.status < 400) {
//         var parks = data.businesses
//         data.forEach((park) => {
//             console.log(park.name)
//             morning.innerHTML += park.name
//         })  
//     } else {
//         console.log('error with query')
//         morning.innerHTML += "error"
//     }

// }
// request.send();