import React, { useEffect } from "react";
import { FlatList } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import Config from "react-native-config";
import Loading from "../../component/Loading/LoadingCard";
import Error from "../../component/Error/ErrorCard";
import { SafeAreaView } from "react-native-safe-area-context";
import MealsCard from "../../component/MealCard/MealCard";

const MealPage=({route,navigation}:any)=>{

    const category = route.params.category.strCategory
    const {error,loading,data} =useFetch(Config.API_MEALS_URL+`${category}`)

    console.log(route)

    const HandleDetailSelect = detail =>{
        navigation.navigate("DetailPage",{detail})
    }

    const renderMeals =({item}:any) => (
        <MealsCard 
            meals={item}
            onSelect = {()=>HandleDetailSelect(item)}
        />
        
    );

    if(loading)
    {
        return <Loading/>
    }
    
    if(error)
    {
        return <Error/>
    }

    return(
        <SafeAreaView>
            <FlatList 
                data={data.meals}
                renderItem={renderMeals}
                keyExtractor={item => item.idMeal}/>
        </SafeAreaView>
    );

};


export default MealPage;