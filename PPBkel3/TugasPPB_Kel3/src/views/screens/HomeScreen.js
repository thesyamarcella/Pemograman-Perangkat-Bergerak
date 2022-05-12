import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"

export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20 }}>

        <View style={styles.header}>
          <View style={{flexDirection:'row'}}>
            <View style={{ flexDirection: 'column',flex:3 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 24 }} >Hi,</Text>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >Kelompok 3</Text>
              </View>
              <Text style={{ fontSize: 18, marginTop: 5, color: "black" }} >332019306</Text>
            </View>
            <View style={{flex:1,justifyContent:'flex-start', alignItems:'flex-end'}}>
              <Ionicons name="person-circle" size={60} color={"black"} />
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card}>

            <Text style={styles.cardTitle}>
              Current Grade
            </Text>

            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ fontSize: 18, color: "white" }}>Semester 4</Text>
              <Text style={{ fontSize: 18, color: "white", marginLeft: 20 }}>
                GPA 3.5
              </Text>
            </View>

            <View style={styles.indicatorContainer}>
              <View style={styles.indicatorItem}></View>
            </View>

            <Text
              style={styles.indicatorLabel}
            >
              40% completed
            </Text>
          </View>
        </View>
  
          <View style={styles.row}>
            <Text style={styles.title}>Timeltable for today</Text>
          </View>

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <ScrollView horizontal >

                  <View style={styles.cardContainer} key={1}>
                    <View style={[styles.card, styles.cardCourses]}>
                      <View style={{ flexDirection: 'row', marginBottom: 5, paddingTop: 5 }}>
                        <Ionicons name="phone-portrait-outline" size={40} color={"white"} />
                      </View>
                      <View style={{ flexDirection: 'row', paddingLeft: 7 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: "white" }} >Pemograman</Text>
                      </View>
                      <View style={{ flexDirection:'row', marginBottom: 5, paddingLeft: 7}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: "white" }} >Perangkat Bergerak</Text>
                      </View>
                      <View style={{ flexDirection: 'row', paddingLeft: 7 }}>
                        <Text style={{ color: "white" }}>07.30 - 08.30</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.cardContainer} key={2}>
                    <View style={[styles.card, styles.cardCourses]}>
                      <View style={{ flexDirection: 'row', marginBottom: 5, paddingTop: 5 }}>
                        <Ionicons name="phone-portrait-outline" size={40} color={"white"} />
                      </View>
                      <View style={{ flexDirection: 'row', paddingLeft: 7 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: "white" }} >Lab Pemograman</Text>
                      </View>
                      <View style={{ flexDirection:'row', marginBottom: 5, paddingLeft: 7}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: "white" }} >Perangkat Bergerak</Text>
                      </View>
                      <View style={{ flexDirection: 'row', paddingLeft: 7 }}>
                        <Text style={{ color: "white" }}>08.30 - 09.30</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.cardContainer} key={3}>
                    <View style={[styles.card, styles.cardCourses]}>
                      <View style={{ flexDirection: 'row', marginBottom: 5, paddingTop: 5 }}>
                        <Ionicons name="globe-outline" size={40} color={"white"} />
                      </View>
                      <View style={{ flexDirection: 'row', paddingLeft: 7 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5,fontSize: 16, color: "white" }} >Pemograman Web</Text>
                      </View>
                      <View style={{ flexDirection: 'row', paddingLeft: 7 }}>
                        <Text style={{ color: "white" }}>10.00 - 11.00</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.cardContainer} key={4}>
                    <View style={[styles.card, styles.cardCourses]}>
                      <View style={{ flexDirection: 'row', marginBottom: 5, paddingTop: 5 }}>
                        <Ionicons name="globe-outline" size={40} color={"white"} />
                      </View>
                      <View style={{ flexDirection: 'row', paddingLeft: 7 }}>
                        <Text style={{ fontWeight: 'bold',fontSize: 16, color: "white" }} >Lab Pemograman</Text>
                      </View>
                      <View style={{ flexDirection: 'row', paddingLeft: 7 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5,fontSize: 16, color: "white" }} >Web</Text>
                      </View>
                      <View style={{ flexDirection: 'row', paddingLeft: 7 }}>
                        <Text style={{ color: "white" }}>11.00 - 13.00</Text>
                      </View>
                    </View>
                  </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.title}>Feeds</Text>
          </View>

          <View style={styles.row}>
            <View style={{flex:1}}>

              <View key={1} style={[styles.card, styles.cardFeeds]}>
                <View style={{flexDirection:'row'}}>
                  <Image
                    style={{ width: 80, height: 80 }}
                    source={require("../assets/logo-ibik-white.jpeg")}
                  />
                  <View
                    style={{ flex:1 }} >
                    <Text style={{ fontWeight: "bold", fontSize: 18, color:"purple" }}>Jadwal UTS 2022-2023</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18, color:"purple" }}>Genap</Text>
                    <Text style={{ fontSize: 14, color: 'grey',textAlign:'justify' }}>bla bla bla bla bla bla bla bla bla bla bla</Text>
                    <Text style={{ fontSize: 14, color: 'grey',textAlign:'justify' }}>bla bla bla bla. Read More...</Text>
                  </View>
                </View>
              </View>

              <View key={2} style={[styles.card, styles.cardFeeds]}>
                <View style={{flexDirection:'row'}}>
                  <Image
                    style={{ width: 80, height: 80 }}
                    source={require("../assets/logo-ibik-white.jpeg")}
                  />
                  <View
                    style={{ flex:1 }} >
                    <Text style={{ fontWeight: "bold", fontSize: 18, color:"purple" }}>Jadwal UAS 2022-2023</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18, color:"purple" }}>Genap</Text>
                    <Text style={{ fontSize: 14, color: 'grey',textAlign:'justify' }}>bla bla bla bla bla bla bla bla bla bla bla</Text>
                    <Text style={{ fontSize: 14, color: 'grey',textAlign:'justify' }}>bla bla bla bla. Read More...</Text>
                  </View>
                </View>
              </View>           

              <View key={3} style={[styles.card, styles.cardFeeds]}>
                <View style={{flexDirection:'row'}}>
                  <Image
                    style={{ width: 80, height: 80 }}
                    source={require("../assets/logo-ibik-white.jpeg")}
                  />
                  <View
                    style={{ flex:1 }} >
                    <Text style={{ fontWeight: "bold",marginBottom: 2, fontSize: 18, color:"purple" }}>Libur Semester Genap</Text>
                    <Text style={{ fontSize: 14, color: 'grey',textAlign:'justify' }}>bla bla bla bla bla bla bla bla bla bla bla</Text>
                    <Text style={{ fontSize: 14, color: 'grey',textAlign:'justify' }}>bla bla bla bla. Read More...</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
      </ScrollView>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4fcff",
    paddingTop: 40
  },
  row: {
    marginTop: 20,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  header: {
    flex:1,
    marginVertical:10
  },
  card: {
    backgroundColor: "purple",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    height: 150,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white"
  },
  indicatorContainer: {
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 10,
    marginTop: 25,
  },
  indicatorItem: {
    height: 12,
    width: '40%',
    borderRadius: 10,
    backgroundColor: 'aqua',
    marginHorizontal: 0,
  },
  indicatorLabel:{
    fontSize: 14,
    color: "white",
    marginTop: 10,
    marginLeft: 0,
  },
  cardContainer: {
    justifyContent: 'center'
  },
  cardCourses: { 
    justifyContent: 'center', 
    alignItems: 'baseline', 
    backgroundColor: 'lightsalmon', 
    width: 250, 
    marginRight:10,
  },
  cardFeeds:{
    backgroundColor:'white',
    borderWidth:1, 
    borderColor:'grey',
    padding:10,
    height:100,
    marginBottom:10
  }

});

export default HomeScreen;