// Your code goes here

let images = document.querySelectorAll('img');
console.log(images)

let navigation = document.querySelector('.main-navigation');
console.log(navigation)

function generateGradient(){
    let r1 = Math.floor(Math.random() * Math.floor(256))
    let r2 = Math.floor(Math.random() * Math.floor(256))
    let r3 = Math.floor(Math.random() * Math.floor(256))
    let g1 = Math.floor(Math.random() * Math.floor(256))
    let g2 = Math.floor(Math.random() * Math.floor(256))
    let g3 = Math.floor(Math.random() * Math.floor(256))
    let b1 = Math.floor(Math.random() * Math.floor(256))
    let b2 = Math.floor(Math.random() * Math.floor(256))
    let b3 = Math.floor(Math.random() * Math.floor(256))
    let degrees = Math.floor(Math.random() * Math.floor(360))
    let p1 = Math.floor(Math.random() * Math.floor(100))
    let p2 = Math.floor(Math.random() * Math.floor(100))
    let p3 = Math.floor(Math.random() * Math.floor(100))
    return `linear-gradient(90deg, rgb(${r1},${g1},${b1}) ${p1}%, rgb(${r2},${g2},${b2}) ${p2}%, rgb(${r3},${g3},${b3}) ${p3}%`
}

navigation.addEventListener('wheel', event =>{
    event.preventDefault();
    navigation.style.background = generateGradient();
})

let inform = false


images.forEach(obj => {
    obj.addEventListener('mouseout', event =>{
        images.forEach(image => {
            image.style.filter = 'none'
        })
        navigation.style.display = 'flex'
    })
    obj.addEventListener('dragstart', event =>{
        event.preventDefault()
    })
    obj.addEventListener('contextmenu', event =>{
        event.preventDefault()
    })
    obj.addEventListener('mouseover', event =>{
        images.forEach(image => {
            image.style.filter = 'grayscale(100%) blur(3px)'
        })
        obj.style.filter = 'contrast(1.2)';
        obj.style.transition = 'all .2s ease-in-out';
        navigation.style.display = 'none';
    })
    obj.addEventListener('dblclick', event =>{
        alert('Boop!')

    })
})

let body = document.querySelector('body');
console.log(body)


body.addEventListener('keydown', event =>{
    if (!inform){
    body.style.transition = 'all .2s ease-in-out';
    body.style.background = generateGradient();
    }
})

// body.addEventListener('keyup', event =>{
//     body.style.background = `white`;
// })

window.addEventListener('load', (event) => {
    alert('page is fully loaded');
});

let textcontent = document.querySelectorAll('p');
// console.log(textcontent)

const selectedText = document.getElementById('Selectedtext')
// console.log(selectedText)

textcontent.forEach(object => {
        object.addEventListener('select', event =>{
        console.log(object)
        // let selection = object.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        // selectedText.textContent = selection
        // console.log(selection)
        })
})

let input = document.querySelectorAll('input');
input.forEach(object =>{
    object.addEventListener('focus', event =>{
        object.style.background = 'red';
        inform = true
    })
    object.addEventListener('blur', event =>{
        object.style.background = 'white';
        inform = false
    })
})


window.addEventListener('resize', event =>{
    setTimeout(function () {
            alert(`You've resized the window`);
    }, 5000);
})