import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Bateria = ({ name, voltage, status }) => {
  const statusColor = status === 'up' ? 'green' : status === 'down' ? 'red' : 'orange';

  return (
    <View style={styles.batteryContainer}>
      <View style={styles.batteryInfo}>
        <Ionicons name="battery-full" size={24} color="black" style={styles.batteryIcon} />
        <Text style={styles.batteryText}>{name}</Text>
      </View>
      <Text style={styles.voltageText}>{voltage}</Text>
      <Ionicons
        name={status === 'up' ? 'arrow-up' : status === 'down' ? 'arrow-down' : 'alert-circle'}
        size={24}
        color={statusColor}
        style={styles.statusIcon}
      />
    </View>
  );
};

const Monitoramento = () => {
  const batteries = [
    { name: 'Bateria 1', voltage: '12 V', status: 'up' },
    { name: 'Bateria 2', voltage: '10 V', status: 'down' },
    { name: 'Bateria 3', voltage: '9 V', status: 'attention' },
    { name: 'Bateria 4', voltage: '5 V', status: 'down' },
    { name: 'Bateria 5', voltage: '4 V', status: 'down' },
    { name: 'Bateria 6', voltage: '11 V', status: 'up' },
    { name: 'Bateria 7', voltage: '12 V', status: 'up' },
    { name: 'Bateria 8', voltage: '12 V', status: 'up' },
    { name: 'Bateria 9', voltage: '12 V', status: 'up' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MONITORAMENTO</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Positivo (+)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Negativo (-)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Atenção</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {batteries.map((battery, index) => (
          <Bateria key={index} name={battery.name} voltage={battery.voltage} status={battery.status} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="ios-eye" size={24} color="black" />
          <Text style={styles.footerButtonText}>Monitoramento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="ios-stats-chart" size={24} color="black" />
          <Text style={styles.footerButtonText}>Gráficos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="ios-location" size={24} color="black" />
          <Text style={styles.footerButtonText}>Localização</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="ios-document" size={24} color="black" />
          <Text style={styles.footerButtonText}>Relatórios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
  batteryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  batteryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryIcon: {
    marginRight: 10,
  },
  batteryText: {
    fontSize: 18,
    color: '#333',
  },
  voltageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statusIcon: {
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#333',
  },
});

export default Monitoramento;
