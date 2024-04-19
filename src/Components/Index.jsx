import { memo, useState } from "react"

import { v4 as uuidv4 } from "uuid"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { Button } from "antd"

import Drag from "./Drag"
import Drop from "./Drop"

const Index = memo(() => {

    // Defining States
    const [drag, setDrag] = useState([
        {
            componentType: "calander",
            id: uuidv4(),
        },
        {
            componentType: "checkbox",
            id: uuidv4(),
        },
        {
            componentType: "date Picker",
            id: uuidv4(),
        },
        {
            componentType: "dropdown",
            id: uuidv4(),
        },
        {
            componentType: "input",
            id: uuidv4(),
        },
        {
            componentType: "number Format",
            id: uuidv4(),
        },
        {
            componentType: "radio Group",
            id: uuidv4(),
        },
        {
            componentType: "text Area",
            id: uuidv4(),
        },
        {
            componentType: "button",
            id: uuidv4(),
        },
        {
            componentType: "upload",
            id: uuidv4(),
        },
    ])

    const [droppable] = useState([])

    const [boolean, setboolean] = useState({
        open: false,
        componentType: null
    })

    const [selectOption, setSelectOption] = useState([])
    const [value, setValue] = useState([])


    return (
        <DndProvider backend={HTML5Backend} >
            <div className="h-screen min-w-[600px] bg-[#399c7e] text-slate-100 font-OpenSans">
                <header className=" h-[10%] flex justify-center items-center">
                    <h1 className="text-2xl font-semibold" >Dynamic Form</h1>
                </header>
                <section className="h-[80%] flex flex-row gap-4 p-4 ">
                    <Drag
                        dragable={drag}
                    />
                    <Drop
                        droppable={droppable}
                        boolean={boolean}
                        setboolean={setboolean}
                        selectOption={selectOption}
                        setSelectOption={setSelectOption}
                        value={value}
                        setValue={setValue}
                    />
                </section>
                <footer className=" h-[10%] flex justify-center items-center">
                    <Button type="primary" className="px-3 py-1 text-center text-sm font-semibold">
                        SAVE
                    </Button>
                </footer>
            </div>
        </DndProvider>
    )
})

export default Index