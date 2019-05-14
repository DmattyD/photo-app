import React from 'react'
import { Image, Button,  ScrollView, StyleSheet, Text, TouchableHighlight, View, Dimensions } from 'react-native';
import {  createAppContainer, Navigation, createStackNavigator } from 'react-navigation';

import InteriorShootNow from './InteriorShootNow';
import styled from 'styled-components/native';
import MiscShootNow from './MiscShootNow'
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


const MainNavigator = createStackNavigator({
    InteriorShootNow: InteriorShootNow,
    MiscShoot: MiscShootNow
})
export const App = createAppContainer(MainNavigator);


export default class ShootOptions extends React.Component {

    
    
        constructor(props) {
            super(props)
        this.state= {
            currentRoom : "",
            data: [
            "Exterior",
            "Exterior Rear",
            "Driveway",
            "Pool",
            "Deck",
            "Patio",
            "Hot Tub",
            "Garage",
        ],
        }
    }
        
        
        handlePressIn = (index) => {
            
            this.setState(this.state.currentRoom = [this.state.data[index]])  
             }

    // onPress = (e) => {
    //     this.setState({
    //         currentRoom : this.state.data[0]
    //     })
    // }

    static navigationOptions = {
        title: 'Shoot Options',
    };

    render () {
       const { navigate } = this.props.navigation;
        return (
            <TotalPageView>
                
                <ButtonsView style={{}}>
                    <ButtonView>
                        <TouchableHighlight
                        // onPress={() =>()}
                        className="home-screen buttons" buttonStyle={{ height: 50, width: 50, borderRadius: 25 }}>
                        <Image title="Exterior" source={require('../assets/images/ShootOptions/Exterior2.png')} style={{backgroundColor: "#666666", height: 50, width: 50, borderRadius: 25}}/>

                        </TouchableHighlight>
                        <Text>Exterior</Text>
                    </ButtonView>
                    <ButtonView>
                        <TouchableHighlight
                        onPress={() =>
                            navigate("InteriorShoot")
                          }
                        className="home-screen buttons" buttonStyle={{ height: 50, width: 50, borderRadius: 25 }}>
                        <Image title="Interior" source={require('../assets/images/ShootOptions/armchair.png')} style={{backgroundColor: "#FFF84E", height: 50, width: 50, borderRadius: 25}}/>

                        </TouchableHighlight>
                        <Text>Interior</Text>
                    </ButtonView>
                    <ButtonView>
                        <TouchableHighlight
                        onPress={() =>
                            navigate("MiscShoot")
                          }
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
                    <Text style={{padding: 10}}>Currently Shooting: {this.state.currentRoom}</Text>

	                <ChooseRoomView>
                        <TouchableHighlight
                        underlayColor={"#DBDBDB"}
                        value="Exterior"
                        onPressIn={() => this.handlePressIn(0)}>
                        <Text> Exterior</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight
                        underlayColor={"#DBDBDB"}
                        value="Exterior"
                        onPressIn={() => this.handlePressIn(1)}>
                        <Text>Exterior Rear</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight
                        underlayColor={"#DBDBDB"}
                        value="Exterior"
                        onPressIn={() => this.handlePressIn(2)}>
                        <Text>Driveway</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight
                        underlayColor={"#DBDBDB"}
                        value="Exterior"
                        onPressIn={() => this.handlePressIn(3)}>
                        <Text>Pool</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight
                        underlayColor={"#DBDBDB"}
                        value="Exterior"
                        onPressIn={() => this.handlePressIn(4)}>
                        <Text>Deck</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight
                        underlayColor={"#DBDBDB"}
                        value="Exterior"
                        onPressIn={() => this.handlePressIn(5)}>
                        <Text>Patio</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight
                        underlayColor={"#DBDBDB"}
                        value="Exterior"
                        onPressIn={() => this.handlePressIn(6)}>
                        <Text>Hot Tub</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        className="table buttons" >
                        <Image title="Go to" source={require('../assets/images/ShootOptions/ArrowRightSmall.png')} style={{backgroundColor: "#727C8e", height: 20, width: 20, borderRadius: 10}}/>
                        </TouchableHighlight>
                    </ChooseRoomView>
                    <ChooseRoomView>
                        <TouchableHighlight
                        underlayColor={"#DBDBDB"}
                        value="Exterior"
                        onPressIn={() => this.handlePressIn(7)}>
                        <Text>Garage</Text>
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