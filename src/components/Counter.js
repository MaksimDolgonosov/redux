///import { connect } from 'react-redux'
import { inc, dec, rnd } from './actionCreators'
//import { useSelector, useDispatch } from 'react-redux/es/hooks/useSelector';
import { useDispatch, useSelector } from 'react-redux';



const Counter = () => {
    const counter = useSelector(state => state.value);
    const dispatch = useDispatch();


    return (
        <>
            <div >{counter}</div>
            <button onClick={() => dispatch(inc())}>inc</button>
            <button onClick={() => dispatch(dec())}>dec</button>
            <button onClick={() => dispatch(rnd())}>rnd</button>
        </>
    )
}


// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         inc: () => dispatch(inc()),
//         dec: () => dispatch(dec()),
//         rnd: ()=> dispatch(rnd())
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;