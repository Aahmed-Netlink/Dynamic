import { useState } from "react"

import { v4 as uuidv4 } from "uuid"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import Drag from "./Drag"
import Drop from "./Drop"

const Index = () => {

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

    return (
        <DndProvider backend={HTML5Backend} >
            <div className="h-screen">
                <header className="bg-slate-50 h-[10%] flex justify-center items-center">
                    <h1 className="text-2xl font-semibold" >Dynamic Form</h1>
                </header>
                <section className="h-[80%]">
                    <Drag />
                    <section>

                    </section>
                </section>
            </div>
            <footer className=" bg-slate-50 h-[10%]  flex justify-center items-center">
                <h2 className="text-2xl font-semibold">Footer</h2>
            </footer>
        </DndProvider>
    )
}

export default Index