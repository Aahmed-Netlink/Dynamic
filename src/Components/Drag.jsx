import Dragable from "./Dragable";

const Drag = ({ dragable }) => {

    // console.log(dragable);

    return (
        <aside className="w-1/4 border-2 border-black p-4 bg-[#051835] min-w-[250px] rounded-lg overflow-scroll no-scrollbar">
            <h2
                className="mb-8 font-bold uppercase md:text-xl font-sans text-center"
            >
                Elements
            </h2>
            <ul className='grid grid-cols-2 gap-2'>
                {
                    dragable.map((item) =>
                        <Dragable
                            key={item.id}
                            item={item}
                        />
                    )
                }
            </ul>
        </aside>
    )
}

export default Drag