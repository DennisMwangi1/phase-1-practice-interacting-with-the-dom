let counter = document.getElementById('counter')
time = setInterval(()=>counter.innerHTML++,1000)

const minus = document.getElementById('minus')
minus.addEventListener('click',()=>{
    counter.innerHTML--
})

const add = document.getElementById('plus')
add.addEventListener('click',()=>{
    counter.innerHTML++
})

const like = document.getElementById('heart')
like.addEventListener('click',()=>{
    let likes = 0
    let likeList = document.querySelector('.likes')
    let list = document.createElement('li')
    list.textContent = `${counter.innerHTML} has ${likes} likes`
    likeList.appendChild(list)
})

const pause = document.getElementById('pause')

     pause.addEventListener('click',()=>{
        if (pause.innerText === 'pause') {
            like.disabled = true 
            add.disabled = true 
            minus.disabled = true
            clearTimeout(time)
            pause.innerText = 'resume'
        }
        else if(pause.innerText === 'resume'){
        //    console.log('hello')
            like.disabled = false
            add.disabled = false
            minus.disabled = false
            pause.innerText = 'pause'
            
        }
        
})
let form = document.querySelector('form')
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    addComment()
    form.reset()
     
})

const addComment = ()=>{
    let input = document.getElementById('comment-input').value
    let userComments = document.getElementById('list')
    let comment = document.createElement('li')
    comment.innerText = input
    userComments.appendChild(comment)
    
}
    



