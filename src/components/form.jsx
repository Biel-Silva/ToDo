import { useState } from 'react'

function Form(props){
    const [text, setText] = useState('')

    function whenRefresh(element){
        setText(element.target.value)
    }

    function add(){
        if(text){
            props.onAddItem(text)
        }

        document.querySelector('input').value = ''
    }

    return(
        <>
            <input type="text" onChange={whenRefresh} />
            <button type="button" onClick={add}>Add</button>
        </>
    )
}

export default Form