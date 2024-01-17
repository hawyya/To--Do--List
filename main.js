    // let cont = document.querySelector('.container')
        
        // for(i = 0; i<5; i++){
        // create = document.createElement('div')
        // create.style.width = '500px'
        // create.style.height='500px'
        // create.style.marginBottom = '50px'
        // create.style.background = 'black'
        // cont.appendChild(create)
        // }

        // create = document.createElement('button')
        // createTwo = document.createElement('p')
        // create.style.width = '90px'
        // create.style.height = '30px'
        // create.innerHTML = 'button'
        // createTwo.textContent = "Clicked: 0 times."
        // document.querySelector('body').appendChild(create)
        // document.querySelector('body').appendChild(createTwo)

        // let cont = document.querySelector('.container')
        // for(i = 1; i<8; i++){
        //     create = document.createElement('li')
        //     create.innerHTML = i 
        //     cont.appendChild(create)
        // }


        // let p = document.querySelector('p')
        // p.innerHTML = '<b>Hello</b>'
        // p.textContent = '<b>Hello</b>'

        let Input = document.querySelector('input')
        let box = document.querySelector('.bg-square')
        let btn = document.querySelector('.button')

        btn.addEventListener('click', function(){
            let inputValue = Input.value 
            if(inputValue.trim() == ''){
                return
            }else{
            let ul = document.createElement('ul')
            let checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.addEventListener('change', function(event){{
                if (event.target.checked){
                    ul.classList.add('remove');
                    setTimeout(function(){
                        ul.parentNode.removeChild(ul)
                    }, 500);
                }
            }})
            let li = document.createElement('li')
            li.style.listStyle = 'none'
            li.style.color = 'white'
            li.style.marginLeft = '10px' 
            li.textContent = inputValue
            let label = document.createElement('label')
            label.style.display = 'flex'
            label.style.alignItems = 'center'
            label.appendChild(checkbox)
            label.appendChild(li)
            ul.style.marginLeft = '30px'
            ul.appendChild(label)
            box.appendChild(ul)
            Input.value = ''
            }
       })

       Input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            btn.click();
        }
    });
    
    btn.addEventListener('click', function(){
        let inputValue = Input.value 
        if(inputValue.trim() == ''){
            return
        }else{
        let ul = document.createElement('ul')
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.addEventListener('change', function(event){{
            if (event.target.checked){
                ul.classList.add('remove');
                setTimeout(function(){
                    ul.parentNode.removeChild(ul)
                }, 500);
            }
        }})
        let li = document.createElement('li')
        li.style.listStyle = 'none'
        li.style.color = 'white'
        li.style.marginLeft = '10px' 
        li.textContent = inputValue
        let label = document.createElement('label')
        label.style.display = 'flex'
        label.style.alignItems = 'center'
        label.appendChild(checkbox)
        label.appendChild(li)
        ul.style.marginLeft = '30px'
        ul.appendChild(label)
        box.appendChild(ul)
        Input.value = ''
        }
    })

    

        















//сделать 2 input с innerHTML && textContent