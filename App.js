import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import concert from './assets/concert.png';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default class App extends Component {

  state = {

    price: 99,
    numTickets: 0,
    ticketPrice: "",
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Ticket Vault</Text>
        <TextInput style={styles.numOfTicketsInput}
          keyboardType="phone-pad"
          placeholder='Number of Tickets'
          onChangeText={numTickets => this.setState({ numTickets })}

        />
        <TouchableOpacity style={styles.findCostButton}
          onPress={() => {
            const total = this.state.numTickets * this.state.price

            this.setState({
              total: this.state.numTickets * this.state.price
            })

            this.setState({
              ticketPrice: "Ticket Cost: $" + total
            })

          }}>
          <Text style={styles.buttonText}>
            Find The Cost
          </Text>
        </TouchableOpacity>
        <Text style={styles.costText}>{this.state.ticketPrice}</Text>

        <Image source={concert} style={styles.concert}></Image>



        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: "70px",
    position: "absolute",
    top: 100
  },
  numOfTicketsInput: {
    height: 50,
    fontSize: "40px",
    borderColor: "grey",
    borderWidth: 1,
    position: "absolute",
    top: 200
  },
  findCostButton: {
    position: "absolute",
    height: 50,
    backgroundColor: "#f98b88",
    top: 275,
    textAlign: "center"
  },
  buttonText: {
    fontSize: "35px"
  },
  costText: {
    fontSize: "35px",
    position: "absolute",
    top: 350
  },
  concert: {
    position: "absolute",
    top: 425
  },
});
