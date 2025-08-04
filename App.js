import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style={styles.imagem} source={require('./assets/Peter_Griffin.png')}></Image>
      <Text style={styles.texto1}>Hello World!!</Text>
      <Text style={styles.texto3}>Meu nome é Davi de Carvalho Blasioli, </Text>
      <Text style={styles.texto2}>tenho 17 anos e moro em Birigui-SP desde que nasci. Atualmente estou estudando na escola SESI Samir Nakad e também cursando o curso de T.I. no SENAI Avak Bedouian.</Text>
      <Text style={styles.texto1}>Minhas línguas são: Português Fluente e inglês intermediario</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  texto1:{
    color: 'red',
    fontSize: 20,
  },
  texto2:{
    color: 'green',
    fontSize: 20,
  },
  texto3:{
    color: 'blue',
    fontSize: 36,
  },
  imagem:{
    width: 250,
    height: 350,
  },
});
