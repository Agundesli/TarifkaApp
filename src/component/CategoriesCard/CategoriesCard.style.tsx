import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    sheet:{
        backgroundColor: '#FF8C00',
    },
    container:{
        flexDirection:'row',
        margin:5,
        flex:1,
        borderWidth:2,
        borderColor:'grey',
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        backgroundColor:'white'
        
    },
    image:{
        minHeight:Dimensions.get('window').height/8,
        minWidth:Dimensions.get('window').width/3,
        resizeMode:'center',
    },
    strCategory:{
        marginTop:30,
        marginStart:20,
        fontWeight:'bold',
        fontSize:20,
        color:'black',
    },
});