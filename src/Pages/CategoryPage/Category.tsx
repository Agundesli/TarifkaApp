import React from "react";
import {SafeAreaView, FlatList } from "react-native";
import CategoriesCard from "../../component/CategoriesCard/CategoriesCard";
import useFetch from "../../hooks/useFetch";
import Config from 'react-native-config';
import Loading from "../../component/Loading/LoadingCard";
import Error from "../../component/Error/ErrorCard";

const Category=({navigation}) =>{

    const {error,loading,data}=useFetch(Config.API_CATEGORIES_URL);

    const handlerCategoriesSelect = category =>{
        navigation.navigate('MealPage',{category});
    };

    const renderCategory=({item}:any) =>(
        <CategoriesCard 
            categories={item} 
            onSelect={()=>handlerCategoriesSelect(item)}/>
    );


    if(loading){
        return <Loading/>;
    }

    if(error){
        return <Error/>;
    }
    
    return(
    <SafeAreaView>
        <FlatList 
            data={data.categories} 
            renderItem={renderCategory}/>
    </SafeAreaView>
    );
};

export default Category;


 