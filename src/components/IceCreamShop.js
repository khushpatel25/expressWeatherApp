import React from 'react'
import { buyIceCream } from '../redux/index'
import { connect } from 'react-redux'

function IceCreamShop(props) {
    return (
        <>
            <h1>Number of icecream - {props.numberOfIceCreams}</h1>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfIceCreams: state.iceCream.numberOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamShop)