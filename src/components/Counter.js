import { connect } from 'react-redux'
import { inc, dec, rnd } from './actionCreators'
const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <>
            <div >{counter}</div>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
            <button onClick={rnd}>rnd</button>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec()),
        rnd: ()=> dispatch(rnd())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);