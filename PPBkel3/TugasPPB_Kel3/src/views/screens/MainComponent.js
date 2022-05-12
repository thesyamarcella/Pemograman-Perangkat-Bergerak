import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import AttendanceScreen from "./AttendanceScreen"
import ProfileScreen from "./ProfileScreen"
import ScoreScreen from "./ScoreScreen"

export class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLabel: {
        home: "Home",
        profile: "Profile",
        attendance: "Attendance",
        score: "Score",
      },
    };
  }
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        initialRouteName={this.state.navLabel.home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === this.state.navLabel.home) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === this.state.navLabel.profile) {
              iconName = focused ? "person-circle" : "person-circle-outline";
            } else if (rn === this.state.navLabel.attendance) {
              iconName = focused ? "today" : "today-outline";
            } else if (rn === this.state.navLabel.score) {
              iconName = focused ? "pie-chart" : "pie-chart-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: [{ display: "flex" }],
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "purple",
          tabBarLabelStyle: { fontSize: 12, paddingBottom: 3 },
        })}
      >
        
        <Tab.Screen options={{headerShown:false}} name={this.state.navLabel.home} component={HomeScreen} />
        <Tab.Screen options={{headerShown:false}} name={this.state.navLabel.attendance} component={AttendanceScreen} />
        <Tab.Screen options={{headerShown:false}} name={this.state.navLabel.score} component={ScoreScreen} />
        <Tab.Screen options={{headerShown:false}} name={this.state.navLabel.profile} component={ProfileScreen} />

      </Tab.Navigator>
    );
  }
}

export default MainComponent;
