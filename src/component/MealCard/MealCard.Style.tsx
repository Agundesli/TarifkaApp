import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    sheet:{
        backgroundColor:'orange',
    },
    container:{
        margin:5,
        padding:7,
        flex:1,

    },

    image:{
        minHeight:Dimensions.get('window').height/4,
        minWidth:Dimensions.get('window').width/3,
        resizeMode:'cover',
        justifyContent:'flex-end',
        borderRadius:15,
        overflow: 'hidden',
    },

    title:{
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center',
        backgroundColor: '#000000a0',
        fontSize:25,

        
    },
});