import Card from "./Card"

function ListItems(props){
    function FeitoOuNao(props){
        if(props.item.done){
            return(<img width={'17px'} src="https://img.freepik.com/icones-gratis/assinale-circulo-dentro_318-76974.jpg"></img>)
        } else {
            return(<img width={'17px'} src="https://cdn-icons-png.flaticon.com/512/6372/6372150.png"></img>)
        }
    }

    let item = props.items


    return(
        <li key={item.id}>
                <Card className={item.done? "done item" : "item"}>
                    {item.text}
                    <div>
                        <button onClick={()=>{props.funcs[0](item)}}><FeitoOuNao item={item} /></button>
                        <button onClick={()=>{props.funcs[1](item)}}><img src={"https://cdn-icons-png.flaticon.com/512/54/54324.png"} width={"20px"}></img></button>
                    </div>
                </Card>     
        </li>            
    )
}

export default ListItems