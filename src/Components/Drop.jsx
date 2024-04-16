import { useDrop } from "react-dnd"
import { ItemType } from "../Util/ItemType"
import ComponentModal from './ComponentModal'
import { memo, useState } from "react"

const Drop = memo(({ dropable }) => {
    const [boolean, setboolean] = useState({
        open: false,
        componentType: null
    })
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: ItemType.ELEMENT,
        // drop: (val) => { console.log(val);},
        drop: (item, monitor) => {

            console.log('Dropped item:', item);
            console.log('Is over:', monitor.isOver());
            setboolean((prevState) => ({
                ...prevState,
                open: monitor.isOver(),
                componentType: item.name.componentType
            }))
        },
        collect: (monitor) => (
            {
                canDrop: !!monitor.canDrop(),
            }
        )
    }), [])



    console.log(boolean);


    return (
        <section ref={drop} className="w-3/4 border-2 border-black min-w-[300px]">
            <ComponentModal boolean={boolean} componentType ={boolean.componentType} setboolean = {setboolean}/>
        </section>
    )
})

export default Drop