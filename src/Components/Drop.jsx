import { useDrop } from "react-dnd"
import { ItemType } from "../Util/ItemType"
import ComponentModal from './ComponentModal'
import { memo, } from "react"

import { UploadOutlined } from '@ant-design/icons';

import {
    Input,
    Button,
    InputNumber,
    Select,
    Upload,
    DatePicker,
    Radio,
    Checkbox,
    Calendar,
    theme,
} from 'antd';


const Drop = memo(({
    droppable,
    boolean,
    setboolean,
    selectOption,
    setSelectOption,
    value,
    setValue
}) => {

    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: ItemType.ELEMENT,
        drop: (item, monitor) => {
            setboolean((prevState) => ({
                ...prevState,
                open: monitor.isOver(),
                componentType: item.name.componentType
            }))
        },
        collect: (monitor) => (
            {
                canDrop: !!monitor.canDrop(),
            }
        )
    }), [])

    return (
        <section ref={drop} className="w-3/4 bg-slate-100 border-2 p-8 border-black min-w-[300px] rounded-lg overflow-scroll no-scrollbar text-center text-black">
            <ComponentModal
                boolean={boolean}
                componentType={boolean.componentType}
                setboolean={setboolean}
                droppable={droppable}
                selectOption={selectOption}
                setSelectOption={setSelectOption}
                value={value}
                setValue={setValue}
            />
            <h2 className='mb-8 font-bold uppercase md:text-xl font-sans'>
                From
            </h2>
            {droppable.length == 0 ?
                <p className=" mb-4 text-3xl">
                    Drag An Element To Get Started
                    <sup className='text-red-600 text-3xl'>
                        *
                    </sup>
                </p>
                : ""}
            <form>
                <ul className='flex flex-col gap-2 items-center'>
                    {
                        droppable.map((item, index) => (
                            <li key={item.componentType} className=' inline-flex gap-3'>
                                {
                                    item.componentType === "calander" ?
                                        <>
                                            <label htmlFor={item.id}>{item.label}</label>
                                            <div style={wrapperStyle}>
                                                <Calendar fullscreen={false} />
                                            </div>
                                        </>
                                        : item.componentType === "input" ?
                                            <>
                                                <label htmlFor={item.id}>{item.label}</label>
                                                <Input placeholder={item.placeholder} />
                                            </>
                                            : item.componentType === 'button' ?
                                                <Button
                                                    type='primary'
                                                >
                                                    {item.btnCaption}
                                                </Button>
                                                : item.componentType === "text Area" ?
                                                    <>
                                                        <label htmlFor={item.id}>{item.label}</label>
                                                        <Input.TextArea placeholder={item.placeholder} />
                                                    </>
                                                    : item.componentType === "number Format" ?
                                                        <>
                                                            <label htmlFor={item.id}>{item.label}</label>
                                                            <InputNumber placeholder={item.placeholder} />
                                                        </>
                                                        : item.componentType === "upload" ?
                                                            <>
                                                                <label htmlFor={item.id}>{item.label}</label>
                                                                <Upload>
                                                                    <Button icon={<UploadOutlined />}>
                                                                        {item.placeholder}
                                                                    </Button>
                                                                </Upload>
                                                            </>
                                                            : item.componentType === "date Picker" ?
                                                                <>
                                                                    <label htmlFor={item.id}>{item.label}</label>
                                                                    <DatePicker
                                                                        format={"DD/MM/YYYY"}
                                                                        placeholder={item.placeholder}
                                                                    />
                                                                </>
                                                                : item.componentType === "checkbox" ?
                                                                    <>
                                                                        <label htmlFor={item.id}>{item.label}</label>
                                                                        <Checkbox.Group
                                                                            options={item.option}
                                                                        />
                                                                    </>
                                                                    : item.componentType === "radio Group" ?
                                                                        <>
                                                                            <label htmlFor={item.id}>{item.label}</label>
                                                                            <Radio.Group key={index}>
                                                                                {item.option.map(
                                                                                    (data, value) =>
                                                                                        <Radio value={value}>
                                                                                            {data}
                                                                                        </Radio>)}
                                                                            </Radio.Group>
                                                                        </>
                                                                        : item.componentType === "dropdown" ?
                                                                            <>
                                                                                <label htmlFor={item.id}>{item.label}</label>
                                                                                <Select
                                                                                    style={{
                                                                                        width: '250px'
                                                                                    }}
                                                                                    defaultValue={item.selectOption[0]}
                                                                                    options={item.selectOption}
                                                                                />
                                                                            </>
                                                                            : ''
                                }
                            </li>
                        ))
                    }
                </ul>
            </form>
        </section >
    )
})

export default Drop