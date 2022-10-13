const eyes = document.querySelectorAll('.eye');

const anchor = document.getElementById('anchor'),
    rekt = anchor.getBoundingClientRect();

const anchorX = rekt.left + rekt.width/2,
    anchorY = rekt.top + rekt.height/2;

document.addEventListener('mousemove', (e) => {
    const  mouseX = e.clientX,
        mouseY = e.clientY;
    const degAngle = angle(mouseX, mouseY, anchorX, anchorY);


    eyes.forEach((eye) =>{
        eye.style.transform= `rotate(${90+degAngle}deg)`;
        anchor.style.filter = `hue-rotate(${degAngle}deg)`;
    })

})


function angle(cx, cy, ex, ey){
    const dy = ey - cy,
        dx = ex - cx;
    return (Math.atan2(dy, dx) * 180 / Math.PI);



}