import React from "react";
import {SafeAreaView,FlatList} from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import Config from 'react-native-config';
import Loading from "../../component/Loading/LoadingCard";
import Error from "../../component/Error/ErrorCard";
import DetailCard from "../../component/DetailCard/DetailCard";


const DetailPage=({route}:any)=>{

    const detail=route.params.detail.strMeal
    const {error,loading,data}=useFetch(Config.API_DETAIL_URL+`${detail}`)

    const renderDetail=({item}:any) =><DetailCard meals ={item}/>

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
                renderItem={renderDetail}/>
        </SafeAreaView>

    );
};


export default DetailPage;