document.addEventListener("DOMContentLoaded", () => {

const counter = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const like = document.querySelector('#heart');
const likes = document.querySelector('ul.likes');
const pause = document.querySelector('#pause');
const form = document.querySelector('#comment-form');
const comments = document.querySelector('#list')
let interval = setInterval(countUP,1000)
let paused = false
let numberList = {}

minus.addEventListener('click', countDown)
plus.addEventListener('click', countUP)
like.addEventListener('click', handleLike)
pause.addEventListener('click', pauseCounter)
form.addEventListener('submit', handleSubmit)

function countUP(){
    counter.innerText = parseInt(counter.innerText) + 1
};
function countDown(){
    counter.innerText = parseInt(counter.innerText) - 1
};
function handleLike(){
    let second = counter.innerText
    numberList[second] = numberList[second] || 0
    numberList[second] += 1
    postLike()
};
function postLike(){
    likes.innerHTML = ""
    for (let key in numberList){
        const likeList = document.createElement('li')
        likeList.innerText = `${key} has been liked ${numberList[key]} times.`
        likes.append(likeList)
    }
}
function pauseCounter(){
    paused = !paused
    if (paused){
    clearInterval(interval)
    pause.innerText = "resume"
    } else{
        interval = setInterval(function(){
            counter.innerText = parseInt(counter.innerText) + 1
        }, 1000)
        pause.innerText = "pause"
    }};

function handleSubmit(event){
    event.preventDefault()
    const comment = event.target.querySelector('input').value
    const commentList = document.createElement('li')
    commentList.innerText = comment
    comments.append(commentList)
    event.target.reset()
};
})
