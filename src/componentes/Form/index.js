import React, {useState} from "react";
import { TextInput, View, Text,TouchableOpacity,Vibration,Pressable,Keyboard,FlatList} from "react-native";
import Resultimc from "./Resultimc/";
import styles from "../Form/style1";

export default function Form(){

    const [height,setHeight]= useState(null)
    const [weight,setWeight]= useState(null)
    const [messageImc,setMessageImc]= useState(null)
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator(){
        let heightFormat = height.replace(",",".")
        let totalImc =((weight/(heightFormat*heightFormat)).toFixed(2)); // projetanto o calculo para encontrar o imc,toFixed para retornar as casas decimais
        setImcList ((arr) => [...arr, {id:new Date().getTime(), imc:totalImc }])
        setImc(totalImc)
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*")
        }

    }

    function validationImc(){ //validator : verifica se os dados que o usuario colocou estão corretos 
        console.log(imcList)
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
        }
        else{
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
        }
    }

    return (
          <View style={styles.formContext} >
            {imc == null ? 
          <Pressable onPress={Keyboard.dismiss} style={styles.form} >
            <Text style={styles.formLabel} >Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setHeight}// conforme voce vai digitando ele vai alterando o estado
            value={height}
            placeholder="Ex. 1.75" // o que o usuario precisa prencher
            keyboardType="numeric" //liberando teclado numerico
            ></TextInput>
            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 75.365 " // o que o usuario precisa prencher
            keyboardType="numeric" //liberando teclado numerico--
            />          
            <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={()=>{validationImc()}}
            >
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </Pressable>
          : 
          <View style={styles.exhibitionResultImc} >
          <Resultimc messageResultImc={messageImc} resultimc={imc} />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={()=>{validationImc()}}
            >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
           </TouchableOpacity>               
        </View>
        }
        <FlatList
        showsVerticalScrollIndicator={false} 
        style={styles.listImcs}
        data={imcList.reverse()}
        renderItem={({item})=>{
            return(
                <Text style={styles.resultImcItem}> 
                <Text style={styles.textResultList} >Resultado IMC = </Text>
                {item.imc}
                </Text>

            )
        }} 
        keyExtractor={(item) =>{
            item.id

        }}
        >

        </FlatList>
        </View>
    );
}