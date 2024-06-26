import { memo } from "react";
import Dragable from "./Dragable";
const Drag = memo(({ dragable }) => {

    return (
        <aside className="w-1/4 border-2 border-black p-4 bg-[#334D50] min-w-[250px] rounded-lg overflow-scroll no-scrollbar">
            <h2
                className="mb-8 font-bold uppercase md:text-xl font-sans text-center"
            >
                Elements
            </h2>
            <ul className='grid grid-cols-2 gap-2'>
                {
                    dragable.map((item,index) =>
                        <Dragable
                            key={index}
                            item={item}
                        />
                    )
                }
            </ul>
        </aside>
    )
})

export default Drag