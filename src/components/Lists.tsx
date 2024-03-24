import { useState } from 'react';
import { Back } from './Navigation'

const Lists = () => {

    const addList = (e: any) => {
        e.preventDefault();
        // Adding list ( to do )
        console.log('Here we are');

    }

    const [isBack, setIsBack] = useState(true);

    const switchFrontBack = () => {
        // Switch to back of the flash card

        setIsBack(!isBack);
    }

    return (
        <>
            <Back />
            <div>
                <form>
                    <div>
                        <h3>Title:</h3>
                        <input name='title' />
                    </div>
                    <div>
                        <h3>Description:</h3>
                        <textarea name="desc" id="desc" cols={30} rows={10}></textarea>
                    </div>
                    <div className='buttons'>
                        <input type='submit' value={"Add"} onClick={(e) => addList(e)} />
                        <input type='button' value={isBack ? "Flashcard Back" : "Flashcard Front"} onClick={switchFrontBack} />
                    </div>
                </form>
            </div>

        </>
    )
}

export default Lists;