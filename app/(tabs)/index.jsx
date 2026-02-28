import Slider from '@react-native-community/slider';
import { StyleSheet, Text, TextInput, View, TouchableOpacity,Image } from 'react-native';
import React from 'react';
import ThemedCard from '../../components/ThemedCard';
import {Link} from 'expo-router';
import dashBoardcolors from '../../constants/dashboardColors';
import Header from '../../components/header';
import typography from '../../constants/dashBoardfonts';
import Themedview from '../../components/Themedview';
import Spacer from '../../components/Spacer';
import { ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import fonts from '../../constants/dashBoardfonts';
import Logo from '../../assets/teleprompter.png'
const index = () => {
  return (
    <Themedview style={styles.container}>
      <ScrollView>
        <Header >
          <Image source={Logo} alt='Teleprompter Logo' style={styles.headimg}></Image>
          <Text style={styles.headtxt}>Pompect</Text>
        </Header>
        
      
        <TextInput placeholder='Search your scripts...' placeholderTextColor={dashBoardcolors.text.secondary} style={styles.searchInput}></TextInput>
        <Spacer style={{height: 20}}/>
        <View style={styles.topStrap}>
          <Text style={styles.herotitle}>Quick Opener</Text>
          <Link href='' style={styles.linktitle}>Open Full Studio</Link>
        </View>
        <View style={styles.frontCard}>
          <View >
            <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
           
              <MaterialCommunityIcons name="lightning-bolt-circle" size={24} color="#60ccdb" />
              <View>
                <Text style={{fontSize:fonts.heroBody.fontSize, color: dashBoardcolors.text.primary, fontWeight: fonts.heroBody.fontWeight}}>Teleprompter Control</Text>
                <Text style={{fontSize:13, color: '#c4d3d9', fontWeight:500}}>Quick-launch active script</Text>
              </View>
              <View style={styles.readyBadge}>
                <Text style={styles.readyText}>Ready</Text>
              </View> 
            </View>
          </View>  
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startText}>Start</Text>
          </TouchableOpacity>
          <View style={styles.speedContainer}>
            <Text style={styles.speedLabel}>SCROLL SPEED</Text>
            <Text style={styles.speedValue}>FAST</Text>
          </View>   
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={50}
            minimumTrackTintColor="#94def3"
            maximumTrackTintColor="#555"
            thumbTintColor="#fff"
          />
        </View>
        <Text style={[styles.herotitle, {marginLeft:10, marginTop:20} ]}>Recent Scripts</Text>
        <View style={styles.cardbg}>
          <ThemedCard></ThemedCard>
        </View>
  
      </ScrollView>
    
    </Themedview>

  )
}

export default index;

const styles = StyleSheet.create({
  container:{
    flexbox: 1,
  },
  searchInput: {
    backgroundColor: dashBoardcolors.surface.cardContrast,
    color: dashBoardcolors.text.primary,
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  inputtxt:{
    color: dashBoardcolors.text.primary,
    paddingLeft: 10,
    fontSize: typography.inputMd.fontSize,
  },
  herotitle:{
    color: dashBoardcolors.text.primary,
    fontSize: typography.heroTitle.fontSize,
    fontWeight: typography.heroTitle.fontWeight,
    paddingLeft:10,
  },
  linktitle:{
    fontWeight: typography.inputMd.fontWeight,
    fontSize: typography.inputMd.fontSize,
    color: dashBoardcolors.accent.blueStrong,
    paddingLeft: 10
  },
  topStrap:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  frontCard:{
    display: 'flex',
    backgroundColor: "#043c49",
    width: '90%',
    height: 200,
    borderRadius:10,
    alignSelf: 'center',
    opacity: 0.7,
    flexDirection: 'column',
    padding: 20,
  },
  readyBadge: {
    backgroundColor: '#1B1E22',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    width: 60,
    alignItems: 'center',
    marginLeft: 'auto',
  },
  readyText: {
    color: '#BFC6CC',
    fontSize: 12,
    fontWeight: '600',
  },
    startText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
   startButton: {
    backgroundColor: '#8B85FF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 15,
  },
  speedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  speedLabel: {
    color: '#BFC6CC',
    fontSize: 12,
    fontWeight: '500',
  },
  speedValue: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  cardbg:{
    display:'flex',
    flexDirection:'column',

  },
  headimg:{
    width:30,
    height:30,
  },
  headtxt:{
    color:dashBoardcolors.text.primary,
    fontFamily: typography.heroTitle.fontFamily,
    fontSize:24,
    fontWeight:'800',
  }

})
