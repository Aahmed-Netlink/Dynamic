import { memo, useState } from "react"

import { v4 as uuidv4 } from "uuid"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { Button } from "antd"

import { useNavigate, useLocation } from "react-router-dom"
import Drag from "../Components/Drag"
import Drop from "../Components/Drop"
import { useDispatch } from "react-redux"
import { formActions } from "../Store/FormStore"
import Swal from 'sweetalert2'
import { useSelector } from "react-redux"

const Form = memo(() => {
    const ff = useSelector((state) => state.forms)
    const forms = JSON.parse(JSON.stringify(ff));
    // Defining States
    const [drag, setDrag] = useState([
        {
            componentType: "calander",
        },
        {
            componentType: "checkbox",
        },
        {
            componentType: "date Picker",
        },
        {
            componentType: "dropdown",
        },
        {
            componentType: "input",
        },
        {
            componentType: "number Format",
        },
        {
            componentType: "radio Group",
        },
        {
            componentType: "text Area",
        },
        {
            componentType: "button",
        },
        {
            componentType: "upload",
        },
    ])
    const navigate = useNavigate()
    const id = useLocation()
    console.log(id.state);
    let edit = forms.find((item) =>
        item.id == id.state
    )
    console.log(edit);

    const [droppable, setDroppable] = useState(edit?.droppable || [])
    console.log(droppable);

    const [boolean, setboolean] = useState({
        open: false,
        componentType: null
    })

    const [selectOption, setSelectOption] = useState([])
    const [value, setValue] = useState([])

    const dispatch = useDispatch()

    const handleSave = (droppable) => {
        const form = {
            id: id && id.state || uuidv4(),
            droppable: droppable,
        }
        if (id.state) {
            dispatch(formActions.handleEdit(form))
        }
        Swal.fire(
            droppable.length == 0 ?
                {
                    title: "Error",
                    html: "At Drop One Field To Save A From",
                    timer: 1250,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                }
                :
                {
                    title: "Form Saved!",
                    html: "Form Saved Succesfully",
                    timer: 500,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                }
        )

        droppable.length == 0 ? "" : navigate("/Dynamic/")
        form.length == 0 ? "" :
            dispatch(formActions.handleSave(form))
        setDroppable([])
    }

    return (
        <DndProvider backend={HTML5Backend} >
            <div className=" h-[100%] min-w-[600px] text-slate-100 font-OpenSans">
                <section className=" h-[90%] flex flex-row gap-4 p-4 ">
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
                    <Button
                        type="primary"
                        className="px-3 py-1 text-center text-sm font-semibold"
                        onClick={() => { handleSave(droppable) }}
                    >
                        SAVE
                    </Button>
                </footer>
            </div>
        </DndProvider >
    )
})

export default Form