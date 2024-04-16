import { useDrag } from "react-dnd";
import { ItemType } from '../Util/ItemType'

const Dragable = ({ item, dropable }) => {

    const [{ isDragging, didDrop }, drag] = useDrag(() => ({
        type: ItemType.ELEMENT,
        item: { name: item },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                let tempList = dropable;
                tempList.push(item.name)
            }
        },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0 : 1,
            isDragging: !!monitor.getItem(),
        })
    }), [],)

    // console.log(isDragging);

    return (
        <>
            <li ref={drag} className="bg-zinc-400 p-3 capitalize rounded-lg flex flex-row justify-center gap-3">
                {
                    item.componentType
                }
            </li>
        </>
    )
}

export default Dragable