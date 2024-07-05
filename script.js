let a = Math.random() *4
let c = Math.random() * 10
let d = Math.ceil(c) / 10
let b = Math.ceil(a) + d;
let f = b * 1000
console.log(f)
let axe

function print(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("body").innerHTML += `<div> ${data}<span>.</span> </div>`
      resolve(`step done`);
    }, f);
  })

}


function vidprint() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("body").innerHTML = ` <div id="myvideo"><video src="sauce.mp4" autoplay  ></video> </div>`
      axe = true;
    }, 1000);
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
  await vidprint();
  // openFullscreen();
}

)();


