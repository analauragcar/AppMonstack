import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MonitoringScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Monitoramento</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>DADOS</Text>
      </View>
      <View style={styles.batteryContainer}>
        <Text style={styles.batteryText}>Bateria 1 (+)</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>19:05 | 05/07/2023</Text>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.dataBox}>
          <Icon name="thermometer" size={30} color="#FFA500" />
          <Text style={styles.dataLabel}>Temperatura</Text>
          <Text style={styles.dataValue}>23 °C</Text>
        </View>
        <View style={styles.dataBox}>
          <Icon name="flash" size={30} color="#FFA500" />
          <Text style={styles.dataLabel}>Tensão</Text>
          <Text style={styles.dataValue}>11 V</Text>
        </View>
        <View style={styles.dataBox}>
          <Icon name="flash-outline" size={30} color="#FFA500" />
          <Text style={styles.dataLabel}>Potência</Text>
          <Text style={styles.dataValue}>10 mW</Text>
        </View>
        <View style={styles.dataBox}>
          <Icon name="current-ac" size={30} color="#FFA500" />
          <Text style={styles.dataLabel}>Corrente</Text>
          <Text style={styles.dataValue}>10 mA</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  batteryContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  batteryText: {
    fontSize: 18,
    backgroundColor: '#003366',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  dateContainer: {
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    marginBottom: 20,
  },
  dataContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  dataBox: {
    width: '40%',
    margin: 10,
    padding: 15,
    backgroundColor: '#003366',
    borderRadius: 10,
    alignItems: 'center',
  },
  dataLabel: {
    color: '#FFA500',
    fontSize: 16,
    marginTop: 5,
  },
  dataValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default MonitoringScreen;
