import { Back } from './Navigation'

const Lists = () => {

    const addList = (e: any) => {
        e.preventDefault();
        // Adding list ( to do )
        console.log('Here we are');
        
    }

    return (
        <>
            <Back />
            <form>
                <div>
                    <h3>Title:</h3>
                    <input name='title' />
                </div>
                <div>
                    <h3>Description:</h3>
                    <textarea name="desc" id="desc" cols={30} rows={10}></textarea>
                </div>
                <div>
                    <input type='submit' value={"Add"} onClick={(e) => addList(e)} />
                </div>
            </form>
        </>
    )
}

export default Lists;