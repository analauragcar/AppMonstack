import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChartsScreen = () => {
  const handleDownload = () => {
    // Função para baixar o gráfico
    alert('Função para baixar o gráfico');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>GRÁFICOS</Text>
      <View style={styles.chartContainer}>
        <Image 
          source={{uri: 'https://via.placeholder.com/300x200?text=Gráfico+Imaginário'}} 
          style={styles.chartImage} 
        />
        <Text style={styles.chartText}>Nenhum gráfico gerado.</Text>
        <Text style={styles.chartSubText}>Para criar um gráfico selecione os opções abaixo!</Text>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.optionTitle}>Grandeza Elétrica</Text>
        <View style={styles.buttonGroup}>
          <Button mode="outlined" style={styles.button}>Tensão</Button>
          <Button mode="outlined" style={styles.button}>Corrente</Button>
          <Button mode="outlined" style={styles.button}>Temperatura</Button>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.optionTitle}>Baterias</Text>
        <View style={styles.buttonGroup}>
          <Button mode="outlined" style={styles.button}>Bateria 1 (+)</Button>
          <Button mode="outlined" style={styles.button}>Bateria 1 (-)</Button>
          <Button mode="outlined" style={styles.button}>Bateria 2 (+)</Button>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.optionTitle}>Período</Text>
        <View style={styles.dateGroup}>
          <TouchableOpacity style={styles.dateButton}>
            <Text style={styles.dateText}>Início</Text>
            <Text style={styles.dateText}>Mês Ano</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dateButton}>
            <Text style={styles.dateText}>Final</Text>
            <Text style={styles.dateText}>Mês Ano</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button mode="contained" style={styles.generateButton} onPress={() => alert('Gerar Gráfico')}>
        Gerar Gráfico
      </Button>
      <Button mode="contained" style={styles.downloadButton} onPress={handleDownload}>
        Baixar Gráfico
      </Button>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="monitor" size={24} color="#1c4a82" />
          <Text style={styles.footerText}>Monitoramento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="chart-line" size={24} color="#1c4a82" />
          <Text style={styles.footerText}>Gráficos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="map-marker" size={24} color="#1c4a82" />
          <Text style={styles.footerText}>Localização</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="file-document" size={24} color="#1c4a82" />
          <Text style={styles.footerText}>Relatórios</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c4a82',
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  chartImage: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  chartText: {
    fontSize: 18,
    color: '#1c4a82',
    marginBottom: 5,
    textAlign: 'center',
  },
  chartSubText: {
    fontSize: 14,
    color: '#1c4a82',
    textAlign: 'center',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c4a82',
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    margin: 5,
  },
  dateGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  dateText: {
    color: '#1c4a82',
  },
  generateButton: {
    backgroundColor: '#1c4a82',
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: '#f58220',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#1c4a82',
    marginTop: 5,
  },
});

export default ChartsScreen;
