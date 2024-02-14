import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style2";


export default function Resultimc(props){

    const onShare = async () => {
        const result = await Share.share({
            message:"Meu Imc hoje é:" +props.resultImc,
        })
    }
    
    return (
       <View style={styles.contextImc}>
        <View style={styles.boxSharebutton}>
        <Text style={styles.titleResultImc} >{props.messageResultImc}</Text>
        <Text style={styles.resultImc} >{props.resultimc}</Text>                 
            <TouchableOpacity
                onPress={onShare}
                style={styles.shared}>
                    <Text style={styles.sharedText} >Share</Text>
                </TouchableOpacity>                       
            </View>                     
        </View>
    );
}
