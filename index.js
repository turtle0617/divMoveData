let child = document.querySelector('#child');
let displayDiv = document.querySelector('#displayDiv');
let displayMouse = document.querySelector('#displayMouse');
let container = document.querySelector('#container');
let isDown = false;
let clickXDistance;
let clickYDistance;
child.addEventListener('mousemove', status);
child.addEventListener('mousedown', (e) => {
  isDown = true;
  clickXDistance = e.offsetX;
  clickYDistance = e.offsetY;
});
child.addEventListener('mouseup', () => isDown = false);

function status(e) {
  if (!isDown) return;
  // if(!e.target.id.includes("child")) isDown = false
  // console.log(e.target.id.includes("child"));
  child.style.left=`${e.pageX-clickXDistance}px`
  child.style.top=`${e.pageY-clickYDistance}px`
  child.innerHTML =
    `
  height:${child.offsetHeight},
  width:${child.offsetWidth}<br>
  clientHeight:${child.clientHeight},
  clientWidth:${child.clientWidth},
  `;
  displayDiv.innerHTML =
    `
  DIV :
  offsetTop:${child.offsetTop},
  offsetLeft:${child.offsetLeft}
  `
  displayMouse.innerHTML =
    `
  Mouse :
  clientX:${e.clientX},
  clientY:${e.clientY}
  `
}
