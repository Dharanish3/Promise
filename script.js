// Task
const url = "https://restcountries.com/v3.1/all";
const res = fetch(url);
res
  .then((data) => data.json())
  .then((value) => {
    for (var i = 0; i < value.length; i++) {
      const div = document.createElement("div");
      //   const country = value[i].name.common;
      div.innerHTML = `<div class ="container">
      <div class ="  row row-cols-1 row-cols-md-3">
      <div class ="card-body">
      <div class = "card">
         <h1 class ="card-header text-center" id="title" >${value[i].name.common}</h1>
             <img src="${value[i].flags.png}" class ="card-img-top" alt ="..">
                <div class ="card-body">
                            <p class ="card-title">Capital :${value[i].capital} <p>
                            <p class ="card-title">Region : ${value[i].region}<p>
                            <p class="card-text"><b><i>SubRegion: ${value[i].subregion}</i></b></p>
                            <p class="card-text"><b><i>Population: ${value[i].population}</i></b></p>
                            <p class ="card-title">Country Code  : ${value[i].cca3}<p>
                            <button type="button" class="btn btn-light" onclick =" country('${value[i].name.common}')">Click For Weather</button>
                           
                </div>
               
                           
            </div>
            </div>
      </div>
      </div>
      `;

      document.body.append(div);
    }
  });
  function country(names) {
   
    var apiKey = "ef9d4453debccbd0df79ad0d47452a11";
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${names}&appid=${apiKey}`;
  
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((weatherData) => {
        var weather = weatherData.name;
  
        if (weather === names) {
          alert(
            `Weather in ${weatherData.name} : ${weatherData.main.temp_min} min:deg&c and ${weatherData.main.temp_max} max:deg&c`
          );
        } else {
          alert("Country names do not match.");
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert`Error fetching weather data.`;
      });
  }
  
  
  
  // Promise

/* const a = parseInt(prompt('Enter Your Age '))

const voting = new Promise((resolve , reject) => {
    if(a >= 18){
        resolve('You are Eligible to  vote')
    }
    else {
        reject('You are not eligible to vote')
    }
})

console.log(voting)
voting.then((data) => console.log(data)).catch((err) => console.log(err)) */

// Promise in Function
/* const vote = (n) => {
    return new Promise((resolve , reject) => {
        if(n >= 18){
            resolve('You Are Eligible')
        }
        else{
            reject('Not eligible')
        }
    })
}

vote(19).then((data) => console.log(data)).catch((err) => console.log(err)) */

//  Promise Chain (Session Task)
/* const add = (val) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(val + 2)
        },3000)
    })
}
add(0).then((data)=> {
    console.log(data)
    return add(data)
}).then((ele) => {
    console.log(ele)
    return add(ele)
}).then((ele2)=>{
    console.log(ele2)
    return add(ele2)
}).then((ele3) => {
    console.log(ele3)
    return add(ele3)
}).then((ele4) => {
    console.log(ele4)
    return add(ele4)
}).then((ele5) => {
    console.log(ele5)
    
}).catch((err)=> {
    console.log(err)
}) */

//Promise.all
/*  const datas = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Is returned"), 3000);
  } else {
    setTimeout(() => reject("Is Not returned"), 3000);
  }
});
const datas2 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Is rr returned"), 3000);
  } else {
    setTimeout(() => reject("Is Not rr returned"), 3000);
  }
});
const datas3 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Is dd returned"), 3000);
  } else {
    setTimeout(() => reject("Is Not dd returned"), 3000);
  }
});

const res = Promise.all([datas, datas2, datas3]).then((data) =>
  data.forEach((res) => {console.log(res)})
).catch((err)=> console.log(err))  */

//Promise.allsetteled
/* const datas = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve("Is returned"), 3000);
    } else {
      setTimeout(() => reject("Is Not returned"), 3000);
    }
  });
  const datas2 = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve("Is rr returned"), 3000);
    } else {
      setTimeout(() => reject("Is Not rr returned"), 3000);
    }
  });
  const datas3 = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve("Is dd returned"), 3000);
    } else {
      setTimeout(() => reject("Is Not dd returned"), 3000);
    }
  });
  
  const res = Promise.allSettled([datas, datas2, datas3]).then((data) =>
    data.forEach((res) => {console.log(res)})
  ).catch((err)=> console.log(err))
 */

//   Fetch Using Promise

/* const url = "https://restcountries.com/v3.1/all"
const res = fetch(url)
res.then((data) => data.json())
.then((value) => {
    const div = document.createElement('div')
    for(var i=0; i<value.length; i++){
        const country = value[i].name.common

        const h3 = document.createElement('h4')
        h3.innerHTML = country

        div.appendChild(h3)
    }

    document.body.append(div)
}) */

// Session Task
/* const url = "https://restcountries.com/v3.1/all";
const res = fetch(url);
res
  .then((data) => data.json())
  .then((value) => {
    for (var i = 0; i < value.length; i++) {
      const div = document.createElement("li");
      const country = value[i].name.common;
      div.innerHTML = country;

      document.body.append(div);
    }
  });
 */

