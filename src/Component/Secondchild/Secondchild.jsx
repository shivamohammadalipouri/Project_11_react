import {useSelector } from 'react-redux';



const Secondchild = ()=>{

    const counter  = useSelector(state => state.counter);



    return(

        <div style={{backgroundColor: "red"}}>

            <h4>{counter}</h4>
        </div>

    )

}

export default Secondchild;