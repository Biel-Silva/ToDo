import ListItems from './ListItems'

function Tasks(props){

    return(
        <>
            <ul>
                {props.lis.map((item) => 
                    <ListItems items={item} funcs={[props.onDone, props.onItemDeleted]} />
                )}
            </ul>
        </>
    )
}

export default Tasks