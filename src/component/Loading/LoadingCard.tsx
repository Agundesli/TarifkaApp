import React from "react";
import Lottie from "lottie-react-native";


function Loading(){
    return <Lottie source={require('../../asset/loading.json')} autoPlay loop/>
}

export default Loading;