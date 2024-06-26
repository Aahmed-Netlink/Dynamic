import { useDrag } from "react-dnd";
import { ItemType } from '../Util/ItemType'

const Dragable = ({ item, }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemType.ELEMENT,
        item: { name: item },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0 : 1,
            isDragging: !!monitor.getItem(),
        })
    }), [],)

    // console.log(isDragging);

    return (
        <>
            <li ref={drag} className="bg-[#CBDFBD] p-3 text-[#292929] capitalize rounded-lg flex flex-row justify-center gap-3">
                {
                    item.componentType
                }
            </li>
        </>
    )
}

export default Dragable