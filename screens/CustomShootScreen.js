import React from 'react'
import { Image, Button, ScrollView, StyleSheet, Text, TouchableHighlight, View, Dimensions, TextInput } from 'react-native';
import { createAppContainer, Navigation, createStackNavigator } from 'react-navigation';

import InteriorShootNow from './InteriorShootNow';
import styled from 'styled-components/native';
import MiscShootNow from './MiscShootNow'
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import ShootOptions from './ShootOptions';

const MainNavigator = createStackNavigator({
    InteriorShootNow: InteriorShootNow,
    MiscShoot: MiscShootNow,
    ShootNow: ShootOptions,
})


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



export default class CustomShootScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentRoom: "",
            text: "",
        }
    }

    //// function to take text input and put into state goes here

    static navigationOptions = {
        title: "Custom Shoot"
    };

    handlePressIn = () => {
        this.setState(this.state.currentRoom = this.state.text)
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <TotalPageView>

                <ButtonsView style={{}}>
                    <ButtonView>
                        <TouchableHighlight
                            // onPress={() =>()}
                            className="home-screen buttons" buttonStyle={{ height: 50, width: 50, borderRadius: 25 }}>
                            <Image title="Exterior" source={require('../assets/images/ShootOptions/Exterior2.png')} style={{ backgroundColor: "#666666", height: 50, width: 50, borderRadius: 25 }} />

                        </TouchableHighlight>
                        <Text>Exterior</Text>
                    </ButtonView>
                    <ButtonView>
                        <TouchableHighlight
                            onPress={() =>
                                navigate("InteriorShoot")
                            }
                            className="home-screen buttons" buttonStyle={{ height: 50, width: 50, borderRadius: 25 }}>
                            <Image title="Interior" source={require('../assets/images/ShootOptions/armchair.png')} style={{ backgroundColor: "#FFF84E", height: 50, width: 50, borderRadius: 25 }} />

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
                            <Image title="Custom" source={require('../assets/images/ShootOptions/story.png')} style={{ background: "#AEADAF" }} />

                        </TouchableHighlight>
                        <Text>Custom</Text>
                    </ButtonView>
                   
                </ButtonsView>
                <MenuView>
<Text style={{ padding: 10 }}>Currently Shooting: {this.state.currentRoom}</Text>
<View>
<TextInput placeholder="Input Custom Name Here" 
style={{
    borderColor: "red",
    borderWidth: 1,
    height: "60%",
    backgroundColor: "lightgray"
  }}
  onChangeText={ (currentRoom) => this.setState({currentRoom})}
  value={this.state.currentRoom}
  />
<Button title="Submit" style={{width:"95%"}} handlePressIn={this.state.text = this.state.currentRoom}/>
</View>

</MenuView>

            </TotalPageView>
        )
    }
}