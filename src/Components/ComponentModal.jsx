import { Button, Modal, Input } from 'antd';
import { useRef, useState } from 'react';

const ComponentModal = ({ boolean, componentType, setboolean }) => {

    const handleOk = () => {
        setboolean((prevState) => ({
            ...prevState,
            open: false,
        }))
    };
    const handleCancel = () => {
        setboolean((prevState) => ({
            ...prevState,
            open: false,
        }))
    };


    const label = useRef()
    const placeholder = useRef()
    const option = useRef()
    const btnCaption = useRef()

    console.log(boolean);

    return (
        <div>
            <Modal title="Basic Modal" open={boolean.open} onOk={handleOk} onCancel={handleCancel}>
                {
                    componentType === "calander" ||
                        componentType === "date Picker" ?
                        <>
                            <label htmlFor=""> Enter Label </label>
                            <Input ref={label} />
                        </>
                        : componentType === "checkbox" ||
                            componentType === "dropdown" ||
                            componentType === "radio Group" ?
                            <>
                                <label htmlFor=""> Enter Label </label>
                                <Input ref={label} />
                                <label>Enter Option</label>
                                <Input ref={option} />
                            </>
                            : componentType === "input" ||
                                componentType === "number Format" ||
                                componentType === "text Area" ||
                                componentType === "upload" ?
                                <>
                                    <label>Enter Label</label>
                                    <Input ref={label} />
                                    <label >Enter Placeholder</label>
                                    <Input ref={placeholder} />
                                </>
                                : componentType === "button" ?
                                    <>
                                        <label>Enter Button Caption</label>
                                        <Input ref={btnCaption} />
                                    </>
                                    : ""
                }
            </Modal>
        </div>
    )
}

export default ComponentModal