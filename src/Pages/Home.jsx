import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { NavLink } from 'react-router-dom';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const HomePage = () => {
    return (
        <>
            <main className='grid grid-rows-2 px-4 py-2 h-[100%]'>
                <section className='px-28 bg-[#CBDFBD] flex items-center rounded-md'>
                    <Card
                        style={{ width: 200 }}
                        className='text-center outline outline-2'
                        cover={
                            <img
                                alt="example"
                                src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"
                            />
                        }
                    >
                        <NavLink to='/Dynamic/form-page'>
                            <h2>Click To Create Form</h2>
                        </NavLink>
                    </Card>
                </section>
                <section></section>
                {/* <section className='w-[100%] flex flex-col pl-10 my-28'>
                    <h1 className='text-[50px] font-thin'>
                        Get Quick Forms,
                        <br />
                        With Form Maker
                    </h1>
                    <p className='font-medium text-slate-600'>
                        Easily create and share online forms
                    </p>
                    <div>
                        <Button className='bg-[#CBDFBD]'>
                            <NavLink to='/Dynamic/form-page'>
                                Go To Forms
                            </NavLink>
                        </Button>
                    </div>
                </section>
                <section className='w-[100%] bg-black'>
                    <img src="" alt="Image Not Found" />
                </section> */}
            </main>
        </>
    )
}

export default HomePage