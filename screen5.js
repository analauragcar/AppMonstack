import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo, Octicons, Ionicons } from '@expo/vector-icons';

const BatteryScreen = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>DADOS</Text>
      <View style={styles.batteryContainer}>
      <Text style={styles.batteryTitle}>Bateria 1 (+)</Text>
        <View style={styles.dataContainer}>
          <Text style={styles.dateTime}>19:05 | 05/07/2023</Text>
          <View style={styles.dataBox}>
            <View style={styles.dataItem}>
              <Icon name="thermometer" size={30} color="#f58220" />
              <Text style={styles.dataLabel}>Temperatura</Text>
              <Text style={styles.dataValue}>23 °C</Text>
            </View>
            <View style={styles.dataItem}>
              <Icon name="flash" size={30} color="#f58220" />
              <Text style={styles.dataLabel}>Tensão</Text>
              <Text style={styles.dataValue}>11 V</Text>
            </View>
            <View style={styles.dataItem}>
              <Icon name="power-plug" size={30} color="#f58220" />
              <Text style={styles.dataLabel}>Potência</Text>
              <Text style={styles.dataValue}>10 mW</Text>
            </View>
            <View style={styles.dataItem}>
              <Icon name="current-ac" size={30} color="#f58220" />
              <Text style={styles.dataLabel}>Corrente</Text>
              <Text style={styles.dataValue}>10 mA</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Entypo name="battery" size={24} color="black" />
          <Text style={styles.footerText}>Monitoramento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
        <Octicons name="graph" size={24} color="black" />
          <Text style={styles.footerText}>Gráficos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
        <Ionicons name="location" size={24} color="black" />
          <Text style={styles.footerText}>Localização</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
        <Ionicons name="newspaper-outline" size={24} color="black" />
          <Text style={styles.footerText}>Relatórios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c4a82',
    marginBottom: 200,
    alignContent: 'center',
    alignItems: 'center'
  },
  batteryContainer: {
    backgroundColor: '#1c4a82',
    borderRadius: 10,
    padding: 20,
  },
  batteryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  dataContainer: {
    backgroundColor: '#1c4a82',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  dateTime: {
    color: '#ffffff',
    marginBottom: 10,
  },
  dataBox: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dataItem: {
    backgroundColor: '#ffffff',
    width: '48%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  dataLabel: {
    fontSize: 16,
    color: '#f58220',
    marginBottom: 5,
    textAlign: 'center',
  },
  dataValue: {
    fontSize: 16,
    color: '#1c4a82',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  footerItem: {
    alignItems: 'center',
    marginTop: 180
  },
  footerText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#333',
  },
});

export default BatteryScreen;
