import React from 'react'
import { Image, Button,  ScrollView, StyleSheet, Text, TouchableHighlight, View, Dimensions } from 'react-native';
import {  createAppContainer, Navigation, createStackNavigator } from 'react-navigation';


import styled from 'styled-components/native';

import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';

const TotalPageView = styled.View`
flexDirection: row`;

const ButtonView = styled.View`
justifyContent: space-evenly
alignItems: center
border: 1px solid black
`;

const ButtonsView = styled.View`
justifyContent: flex-start
border: 1px solid orange
marginLeft: 10px
width: 30%
height: 100%`;

const MenuView = styled.View`
border: 1px solid green
justifyContent: flex-start
width: 65%`;

const TableView = styled.View`
border: 1px solid red`;

const ChooseRoomView = styled.View`
border: 1px solid lightblue
flex: 1
flexDirection: row
justifyContent: space-between
alignItems: center`;



selectedRoom = () => {
} 

currentlyShooting = () => {}


export default class MiscShootNow extends React.Component {

    
    onPress = data => this.setState({ 
        Room: ''
     });

    static navigationOptions = {
        title: 'Shoot Options',
    };

    render () {
       
        return (
            <TotalPageView>
                
                <ButtonsView style={{}}>
                    <ButtonView>
                        <TouchableHighlight
                        // onPress={() =>()}
                        className="home-screen buttons" buttonStyle={{ height: 50, width: 50, borderRadius: 25 }}>
                        <Image title="Exterior" source={require('../assets/images/ShootOptions/Exterior2.png')} style={{backgroundColor: "#666666", height: 50, width: 50, borderRadius: 25}}/>

                        </TouchableHighlight>
                        <Text>Guest</Text>
                    </ButtonView>
                    <ButtonView>
                        <TouchableHighlight
                        // onPress={() =>()}
                        className="home-screen buttons" buttonStyle={{ height: 50, width: 50, borderRadius: 25 }}>
                        <Image title="Interior" source={require('../assets/images/ShootOptions/armchair.png')} style={{backgroundColor: "#FFF84E", height: 50, width: 50, borderRadius: 25}}/>

                        </TouchableHighlight>
                        <Text>Interior</Text>
                    </ButtonView>
                    <ButtonView>
                        <TouchableHighlight
                        // onPress={() =>()}
                        className="home-screen buttons" buttonStyle={{ height: 50, width: 50, borderRadius: 25 }}>
                        <Image title="Misc" source={require('../assets/images/ShootOptions/Misc-Benefits-Icon.png')} />
                        </TouchableHighlight>
                        <Text>Misc</Text>
                    </ButtonView>
                    <ButtonView>
                        <TouchableHighlight
                        // onPress={() =>()}
                        className="home-screen buttons" buttonStyle={{ height: 50, width: 50, borderRadius: 25 }}>
                        <Image title="Custom" source={require('../assets/images/ShootOptions/story.png')} style={{background: "#AEADAF"}}/>

                        </TouchableHighlight>
                        <Text>Custom</Text>
                    </ButtonView>
                    

                </ButtonsView>
                <MenuView>
                    
                     <TableView style={{ flex: 1,  alignSelf: "stretch" }}>
                    <Text style={{padding: 10}}>Currently Shooting: {this.setState.Room}</Text>

	                <ChooseRoomView>
                        <TouchableHighlight
                        underlayColor={"#DBDBDB"}
                        onPress={() => {setState.Room="Exterior Front"}}>
                        <Text>Barn</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight>
                        <Text>Shed</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight>
                        <Text>Water Feature</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight>
                        <Text>Guest House</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight>
                        <Text>Wine Cellar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight>
                        <Text>Gym</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight>
                        <Text>Tennis Court</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight>
                        <Text>Basketball Court</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight>
                        <Text>Game Room</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    </TableView> 
                </MenuView>

        </TotalPageView>
        );
    }
}