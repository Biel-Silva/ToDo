import { useState, useEffect } from 'react'
import Form from './form.jsx'
import Tasks from './tarefas.jsx'
import Item from './itens.js'
import Modal from './modal.jsx'

const SAVED_ITEMS = 'savedItems'

function Todo(){
    const [lis, setLis] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [show, setShow] = useState(true)

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        setRefresh(false)
        if(savedItems){
           setLis(savedItems)

           setRefresh(true)
        }
    }, [])

    
    useEffect(()=>{
        if(refresh){
            localStorage.setItem(SAVED_ITEMS, (JSON.stringify(lis))) 
            console.log("Psé")
        }
    }, [lis])
    
    function hideModal(e){
        if(e.target.id == 'modal'){
            setShow(false)
        }
        console.log(e.target)
    }

    function onAddItem(text){
        let item = new Item(text)

        setLis([...lis, item])
    }
    
    function onItemDeleted(item){
        let filtro = lis.filter(x=>{
            return(item.id != x.id)
        })

        console.log(filtro )

        setLis(filtro)

    }

    //Para cada iteração, o programa vai verificar se o id fornecido é identico a algum id dos objetos, se não
    //ele retorna o objeto, se sim ele muda o valor e retorna o objeto
    function onDone(item){
        let filtroFeitos = lis.map((x)=>{
            if(x.id === item.id){
                x.done = !(x.done)
                console.log(x)
            }

            return x
        })

        console.log(filtroFeitos)
        setLis(filtroFeitos)
    }

    return(
        <div id={"container"}>
            <header className="header">
                <h1>Todo list</h1>
                <button onClick={()=>{setShow(true)}}  className="addmodal">+</button>
            </header>


            <Tasks lis={lis} onItemDeleted={onItemDeleted} onDone={onDone} />

            <Modal modalSettings={[show, hideModal]} >
                <Form onAddItem={onAddItem} />
            </Modal>
        </div>
    )
}

export default Todo 