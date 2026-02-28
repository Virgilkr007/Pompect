import AsyncStorage from "@react-native-async-storage/async-storage";

const SCRIPTS_KEY= 'scripts-stored'

export const loadScripts= async ()=>{
    try{
        const data= await AsyncStorage.getItem(SCRIPTS_KEY);

        if (data!== null){
        return JSON.parse(data)
        }

        return [];
    }catch (error){
        console.log('The was an error loading this script', error);
        return [];
    }
}

 export const saveScripts= async (scriptsArray)=>{
    try{
        await AsyncStorage.setItem(SCRIPTS_KEY, JSON.stringify(scriptsArray));
    }
    catch(error){
        console.log('There was an error while saving this script', error)
    }
 };

