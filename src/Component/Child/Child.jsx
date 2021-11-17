import Secondchild from '../Secondchild/Secondchild';
import { useDispatch, useSelector } from 'react-redux';

const Child = () => {

    const dispatch = useDispatch();
    const counter  = useSelector(state => state.counter);


    return(
        <div>
            <button onClick={() => dispatch({type: "changeIncrease"})}>increase</button>
            <button onClick={() => dispatch({type: "changedecrese"})}>decrease</button>
            <button onClick={() => dispatch({type: "zero"})}>zero</button>
            <Secondchild/>
        </div>

    )
}

export default Child;