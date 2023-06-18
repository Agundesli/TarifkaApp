import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from './Pages/CategoryPage';
import Details from './Pages/DetailPage';
import Meals from './Pages/MealPage';


const Stack= createNativeStackNavigator();

function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="CategoryPage" component={Categories}/>
                <Stack.Screen name="MealPage" component={Meals}/>
                <Stack.Screen name="DetailPage" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>      
    );
};

export default Router;