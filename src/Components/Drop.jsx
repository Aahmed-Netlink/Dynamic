import { useDrop } from "react-dnd"
import { ItemType } from "../Util/ItemType"
import ComponentModal from './ComponentModal'

const Drop = ({ dropable }) => {
    let result
    const [{ isOver, canDrop, didDrop, }, drop] = useDrop(() => ({
        accept: ItemType.ELEMENT,
        drop: () => { },
        collect: (monitor) => (
            {
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop(),
                didDrop: !!monitor.didDrop(),
            }
        )
    }))

    console.log(dropable);
    console.log(didDrop)

    return (
        <section ref={drop} className="w-3/4 border-2 border-black">
            <ComponentModal />
        </section>
    )
}

export default Drop