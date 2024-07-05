let a = Math.random() *3
let c = Math.random() * 10
let d = Math.ceil(c) / 10
let b = Math.ceil(a) + d;
let f = b * 1000
console.log(f)
let axe

function print(data, id) {
  return new Promise((resolve, reject) => {
    if(id !=1){
       setTimeout(() => {
      document.querySelector("body").innerHTML += `<div> ${data}<span>.</span> </div>`
      resolve(`step done`);
    }, f);
    }
   
    if(id == 1){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          document.querySelector("body").innerHTML = ` <div id="myvideo"><video src="sauce1.mp4" muted autoplay ></video> </div>`
          axe = true;
        }, 1000);
      })
    }
  })

}



function openFullscreen() {
  if (document.getElementById("myvideo").requestFullscreen) {
    document.getElementById("myvideo").requestFullscreen();
  } else if (document.getElementById("myvideo").webkitRequestFullscreen) { /* Safari */
    document.getElementById("myvideo").webkitRequestFullscreen();
  } else if (document.getElementById("myvideo").msRequestFullscreen) { /* IE11 */
    document.getElementById("myvideo").msRequestFullscreen();
  }
}


(async function () {
  console.log(f);
  await print("This is us..");
  console.log(f);
  await print("And we are..");
  console.log(f);
  await print("accessing system files..");
  console.log(f);
  await print("uploading files..");
  console.log(f);
  await print("process initialization..");
  await print("data", 1);
  // openFullscreen();
}

)();
