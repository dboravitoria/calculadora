const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const inputResult = document.getElementById('result')

const allCaracters = ["(", ")", "/", "7", "8", "9", "*", "4","5", "6","-", "1", "2", "3", "+", "0", ".", "%", "="]
function calculate(){
    inputResult.value = 'ERROR'
    inputResult.classList.add('error')

    let result = eval(input.value)   
    inputResult.value = result
    
    inputResult.classList.remove('error')
}
document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value;
        input.value += value
    })
})
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    inputResult.value = ''
    inputResult.classList.remove('error') 
    input.focus()
})


input.addEventListener('keydown', function(ev){
    ev.preventDefault();
    if(allCaracters.includes(ev.key)){
        input.value += ev.key
        return
    }
    if(ev.key == 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if(ev.key == 'Enter'){
        calculate()
    }
})
document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copy').addEventListener('click', function(ev){
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('sucess')
        navigator.clipboard.writeText(inputResult.value)
    }else{
        button.innerText = 'Copy'
        button.classList.remove("sucess")
    }

})

document.getElementById('themeSwitcher').addEventListener('click', function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--background-body', '#adb5bd')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--background-key', '#780000')
        main.dataset.theme = 'light'
    }else{
        root.style.setProperty('--background-body', '#212529')
        root.style.setProperty('--font-color', '#adb5bd')
        root.style.setProperty('--background-key', '#bc4749')
        main.dataset.theme = 'dark'
    }
})