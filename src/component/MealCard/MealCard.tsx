import React from "react"
import {ImageBackground,View,Text,TouchableWithoutFeedback,Image } from "react-native";
import styles from './MealCard.Style';

const MealsCard=({meals,onSelect}:any)=>{

    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.sheet}>
                <View style={styles.container}>
                    <ImageBackground source={{uri:meals.strMealThumb}} style={styles.image}>
                        <Text style={styles.title}>{meals.strMeal}</Text>
                    </ImageBackground>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

}
export default MealsCard;