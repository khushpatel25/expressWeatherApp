import React from 'react'
import { buyCake } from '../redux/index'
import { connect } from 'react-redux'

function CakeShop(props) {
    return (
        <>
            <h1>Number of cakes - {props.numberOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeShop)