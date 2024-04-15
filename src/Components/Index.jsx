import { useState } from "react"

import { v4 as uuidv4 } from "uuid"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Flex, Layout } from 'antd';

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
    const { Header, Footer, Sider, Content } = Layout;

    //Styles
    const headerStyle = {
        textAlign: 'center',
        height: 64,
        paddingInline: 48,
        lineHeight: '64px',
    };
    const contentStyle = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#0958d9',
    };
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#4096ff',
    };
    const layoutStyle = {
        borderRadius: 8,
        overflow: 'hidden',
        width: '100%',
        minWidth: '50vw',
    };

    return (
        <DndProvider backend={HTML5Backend} >
            <Flex gap="middle" wrap="wrap">
                <Layout style={layoutStyle} className="h-screen">

                    <Header
                        style={headerStyle}
                        className="font-semibold bg-slate-50 text-2xl"
                    >
                        Dynamic Form
                    </Header>

                    <Layout>
                        <Sider className="w-2/5">
                            Sider
                        </Sider>
                        <Content className="w-3/5">Content</Content>
                    </Layout>

                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
            </Flex>
        </DndProvider>
    )
}

export default Index