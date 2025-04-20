
import React from 'react';
import { View,Text, SafeAreaView, StatusBar, ScrollView, Image,TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const myColors = {
  primary: '#181715',
  secondary: '#ffffff',
  third: '#000000'
};

const des = () => {
  const nav = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ImageBackground 
        source={require('../assets/bandheni.jpeg')} 
        style={{ flex: 1,width:'100%',height:'100%' }}
      >
        <ScrollView style={{ flex: 1, paddingTop: 30 }}>
          
          <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
            <Text style={{fontWeight:400,fontSize:40,color:'black'}}>Handloom fabrics are not just textiles; they embody cultural heritage, support sustainable practices, empower artisans, and contribute to economic development. Their importance extends beyond fashion, making them a valuable asset in promoting a more equitable and environmentally conscious global textile industry.</Text>
           
            <Text style={{fontWeight:400,fontSize:40,color:'black'}}>Preserving heritage techniques for weaving is crucial for safeguarding cultural identity and promoting sustainable practices. These traditional methods not only uphold centuries-old craftsmanship but also support artisan communities and their livelihoods. By valuing and investing in these techniques, we ensure that unique weaving traditions continue to thrive, enriching our global heritage and offering eco-friendly alternatives to mass-produced textiles. Embracing these practices not only honors our past but also shapes a more sustainable future for generations to come.</Text>
            <Text style={{fontWeight:400,fontSize:40,color:'black'}}>Handloom fabrics are versatile and do not require a fixed size of the bearer, as they are woven manually with careful attention to detail and craftsmanship. This aspect of handloom weaving contributes to the uniqueness and cultural significance of the textiles produced.</Text>
            </View>
            </ScrollView>
            </ImageBackground>
            </SafeAreaView>
  )
}
export default des;