import { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import { NavLink, } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formActions } from "../Store/FormStore"

const HomePage = () => {

    const dispatch = useDispatch()
    const forms = useSelector((state) => state.forms)

    console.log("Forms From Redux -->", forms);

    const handleDelete = (id) => {
        console.log("Id Of Deleted Component ->", id);
        const newForms = forms.filter((item) => item.id !== id);
        console.log(newForms)
        dispatch(formActions.handleDelete(newForms))
    }

    return (
        <>
            <main className='grid grid-rows-2 px-4 py-2 h-[100%] gap-4'>
                <section className='px-28 bg-[#CBDFBD] flex items-center flex-row rounded-md'>
                    <NavLink to='/Dynamic/form-page'>
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
                            <h2>Click To Create Form</h2>
                        </Card>
                    </NavLink>
                </section>
                <section className='bg-[#CBDFBD] px-28 flex items-center overflow-scroll no-scrollbar rounded-md '>
                    <ul className='flex flex-row gap-4 overflow-scroll no-scrollbar p-2'>
                        {
                            forms.length == 0 ? <div> Create at least one form</div>
                                : forms.map((item, index) => <li
                                    key={index}
                                >
                                    <Card
                                        key={index}
                                        className='text-center outline outline-2 h-[200px] w-[200px]'
                                    // cover={ 
                                    //     'form' + (index + 1)
                                    // }
                                    >
                                        {/* <h2>Click To Edit Form</h2> */}
                                        <p className='font-semibold text-center text-lg pt-6'>
                                            {'Form' + (index + 1)}
                                        </p>
                                        <section className='flex gap-2 justify-center mt-16'>
                                            <Button type='primary'>
                                                Edit
                                            </Button>
                                            <Button type='primary' danger onClick={() => { handleDelete(item.id) }}>
                                                Delete
                                            </Button>
                                        </section>
                                    </Card>
                                </li>
                                )
                        }
                    </ul>
                </section>
            </main>
        </>
    )
}

export default HomePage