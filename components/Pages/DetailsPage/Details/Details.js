import React from "react";
import { View,Text,FlatList } from "react-native";
import useFetch from "../../../Hooks/useFetch";
import {API_mealsURL} from "@env" 
import DetailCard from "../DetailsCard"
import Loading from "../../../Loading";
import Error from "../../../Error";

const Details =({route})=>{
    const detail=route.params.meals
    const {loading,error,userdata}=useFetch(API_mealsURL+`${detail}`)
    
    const renderMeals=({item})=><DetailCard meals={item}/>
    if(loading)
    {
        return <Loading/>
    }
    
    if(error)
    {
        return <Error/>
    }

    return <FlatList data={userdata.meals} renderItem={renderMeals}  keyExtractor={item => item.idMeal}/>
}

export default Details