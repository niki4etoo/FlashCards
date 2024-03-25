import { useState } from 'react';
import { Back } from './Navigation'

const Lists = () => {

    const addList = (e: any) => {
        e.preventDefault();
        // Adding list ( to do )
    }

    const [isBack, setIsBack] = useState(true);

    const switchFrontBack = () => {
        // Switch to back of the flash card

        setIsBack(!isBack);
    }

    return (
        <>
            <Back />
            <Adder addList={addList} isBack={isBack} switchFrontBack={switchFrontBack} />
        </>
    )
}

const Adder = (props: any) => {
    return (
        <div className='container'>
            <form>
                <div>
                    <h3>Title</h3>
                    <input type='text' name='title' />
                </div>
                <div>
                    <h3>Description</h3>
                    <textarea name="desc" id="desc" cols={30} rows={10}></textarea>
                </div>
                <div className='buttons'>
                    <input type='submit' value={"Add"} onClick={(e) => props.addList(e)} />
                    <input type='button' value={props.isBack ? "Flashcard Back" : "Flashcard Front"} onClick={props.switchFrontBack} />
                </div>
            </form>
        </div>
    )
}

export default Lists;