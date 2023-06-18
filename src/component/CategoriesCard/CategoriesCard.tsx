import React from "react"
import {Image,View,Text,TouchableWithoutFeedback } from "react-native";
import styles from './CategoriesCard.style';

const CategoriesCard=({categories,onSelect}:any)=>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.sheet}>
                <View style={styles.container}>
                    <View>
                        <Image style={styles.image} source={{uri:categories.strCategoryThumb}}/>
                    </View>
                    <View>
                        <Text style={styles.strCategory}>{categories.strCategory}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    );

}
export default CategoriesCard;
