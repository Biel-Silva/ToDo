import { useState } from "react"
import Card from "./Card"

function Modal(props){

    return(
        <div onClick={props.modalSettings[1]} id="modal" className={props.modalSettings[0] ? 'modal' : 'hide'}>
            <Card>{props.children}</Card>
        </div>
    )
}

export default Modal