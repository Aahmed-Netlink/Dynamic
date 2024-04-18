import { Button, Modal, Input } from 'antd';
import Swal from 'sweetalert2'
import { useRef, } from 'react';

const ComponentModal = (
    {
        boolean,
        componentType,
        setboolean,
        droppable,
        selectOption,
        setSelectOption,
        value,
        setValue
    }) => {

    const handleOption = () => {
        const enterdOptionLabel = userOptionLabel?.current?.input?.value;
        const enterdValue = userValue?.current?.input?.value;

        const editable = {
            label: enterdOptionLabel,
            value: enterdValue
        }
        selectOption.push(editable)

        Swal.fire({
            title: "Option Saved!",
            html: "Option Saved Successfullt",
            timer: 500,
            didOpen: () => {
                Swal.showLoading();
            }
        })
    }

    const handleValue = () => {
        const enteredOption = userOption?.current?.input?.value;
        value.push(enteredOption)

        Swal.fire({
            title: "Option Saved!",
            html: "Option Saved Successfullt",
            timer: 500,
            didOpen: () => {
                Swal.showLoading();
            }
        })
    }

    const handleOk = () => {

        const enteredLabel = userLabel?.current?.input?.value;
        const enteredPlaceholder = userPlaceholder?.current?.input?.value;
        const enteredbtnCaption = userBtnCaption?.current?.input?.value;


        setboolean((prevState) => ({
            ...prevState,
            open: false,
        }))

        const editable = {
            label: enteredLabel,
            placeholder: enteredPlaceholder,
            option: value,
            selectOption: selectOption,
            btnCaption: enteredbtnCaption,
            componentType: componentType
        }

        droppable.push(editable)

        setSelectOption([])
        setValue([])
    };

    console.log(droppable);

    const handleCancel = () => {
        setboolean((prevState) => (
            {
                ...prevState,
                open: false,
            }))
    };


    const userLabel = useRef()
    const userPlaceholder = useRef()
    const userOption = useRef()
    const userBtnCaption = useRef()
    const userOptionLabel = useRef()
    const userValue = useRef()

    // console.log(boolean);

    return (
        <div>
            <Modal destroyOnClose title="Basic Modal" open={boolean.open} onOk={handleOk} onCancel={handleCancel}>
                {
                    componentType === "calander" ?
                        <>
                            <label htmlFor=""> Enter Label </label>
                            <Input ref={userLabel} allowClear />
                        </>
                        : componentType === "checkbox" ||
                            componentType === "radio Group" ?
                            <>
                                <label htmlFor=""> Enter Label </label>
                                <Input ref={userLabel} allowClear />
                                <label>Enter Option</label>
                                <Input ref={userOption} allowClear />
                                <Button type='primary' className="mt-4" onClick={handleValue}>
                                    Save
                                </Button>
                            </>
                            : componentType === "dropdown" ?
                                <>
                                    <label htmlFor=""> Enter Label </label>
                                    <Input ref={userLabel} allowClear />
                                    <label>Enter Value</label>
                                    <Input ref={userValue} allowClear />
                                    <label>Enter Option Label</label>
                                    <Input ref={userOptionLabel} allowClear />
                                    <Button type='primary' className="mt-4" onClick={handleOption}>
                                        Save
                                    </Button>
                                </>
                                : componentType === "input" ||
                                    componentType === "number Format" ||
                                    componentType === "text Area" ||
                                    componentType === "upload" ||
                                    componentType === "date Picker" ?

                                    <>
                                        <label>Enter Label</label>
                                        <Input ref={userLabel} allowClear />
                                        <label >Enter Placeholder</label>
                                        <Input ref={userPlaceholder} allowClear />
                                    </>
                                    : componentType === "button" ?
                                        <>
                                            <label>Enter Button Caption</label>
                                            <Input ref={userBtnCaption} allowClear />
                                        </>
                                        : ""
                }
            </Modal>
        </div>
    )
}

export default ComponentModal