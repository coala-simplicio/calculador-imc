import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        justifyContent:"space-around",
        bottom:0,
        backgroundColor:"#ffff",
        alignItems:"center",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        paddingTop:0,
        marginTop:17,
        
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:10,
        padding:10,
       

    },
    formLabel:{
        color:"#000000",
        fontSize:16,
        paddingLeft:20,

    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,

    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop:15,
        paddingBottom:15,
        marginLeft:17,
        margin:50,


    },
    textButtonCalculator:{
        fontSize:20,
        color:"#ffffff"
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
    },
    exhibitionResultImc:{
        width:"100%",
        height:"50%",
    },
    listImcs:{
        marginTop:0,

    },
    resultImcItem:{
        fontSize:20,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20,
    },
    textResultList:{
        fontSize:18,
        color:"red",

    },


  
});
export default styles