const counter  = document.querySelector('#counter');
const AllBtn = document.querySelectorAll(".btn");

count = 0;

AllBtn.forEach((btn) => {
    btn.addEventListener('click', (e)=>{
        if(e.currentTarget.classList.contains('increase')){
            count++
        }else if(e.currentTarget.classList.contains('decrease')){
            count--
        }else if(e.currentTarget.classList.contains('reset')){
            count = '0'
        }

        if(count>0){
            counter.style.color = 'green'
        }else if(count<0){
            counter.style.color = 'red'
        }else if(count == 0){
            counter.style.color = 'grey'
        }

        counter.innerHTML = count
    })
});






























// const counter = document.querySelector('#counter')
// const allBtn = document.querySelectorAll('.btn')

// count = 0;

// allBtn.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         if(e.currentTarget.classList.contains('increase')){
//             count++
//         }else if(e.currentTarget.classList.contains('decrease')){
//             count--
//         }else{
//             count = '0'
//         }
//         if(count > 0){
//             counter.style.color = 'green'
//         }else if(count < 0){
//             counter.style.color = 'red'
//         }else if(count === 0){
//             counter.style.color ='grey'
//         }

//         counter.innerHTML = count;
//     })
    
// })
