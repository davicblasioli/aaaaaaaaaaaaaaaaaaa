import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <ScrollView>
        <View style={styles.centralizar}>
          <Image style={styles.imagem} source={require('./assets/Peter_Griffin.png')} />
        </View>
        <Text style={styles.texto1}>
          Hello World!!
        </Text>
        <Text style={styles.texto3}>
          Meu nome é Davi de Carvalho Blasioli,
        </Text>
        <Text style={styles.texto2}>
          tenho 17 anos e moro em Birigui-SP desde que nasci.
          Atualmente estou estudando na escola SESI Samir Nakad e também cursando o curso de T.I. no SENAI Avak Bedouian.
        </Text>
        <Text style={styles.texto4}>
          Um curso muito importante que fiz foi o curso de soft skills onde eu aprendi a lidar com minhas emoções na hora de tomar decisões
        </Text>
        <Text style={styles.texto1}>
          Minhas línguas são: Português Fluente e inglês intermediário
        </Text>
        <Text style={styles.texto5}>
          uma experiencia que tenho foi desenvolver 1 milhão de sites sozinho
        </Text>
        <Text style={styles.tituloSecao}>
          Competências e habilidades
        </Text>
        <Text style={styles.textoHabilidades}>
          • Programação Web (HTML, CSS, JavaScript)
          {'\n'}• Desenvolvimento em React e React Native
          {'\n'}• Trabalho em equipe e comunicação eficaz
          {'\n'}• Resolução de problemas e pensamento lógico
          {'\n'}• Liderança em projetos de T.I.
          {'\n'}• Aprendizagem rápida de novas tecnologias
        </Text>
        <StatusBar style="auto" />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  centralizar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 40,
    paddingTop: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imagem: {
    width: 220,
    height: 300,
    borderRadius: 18,
    marginBottom: 24,
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#cacacb',
  },
  texto1: {
    color: '#e53935',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  texto2: {
    color: '#43a047',
    fontSize: 17,
    backgroundColor: '#e6fae6',
    marginHorizontal: 16,
    marginBottom: 16,
    textAlign: 'center',
    borderRadius: 18,
    padding: 10,
  },
  texto3: {
    color: '#1565c0',
    fontSize: 27,
    fontWeight: '600',
    marginVertical: 10,
    textAlign: 'center',
  },
  texto4: {
    color: '#ffd600',
    backgroundColor: '#213b4c',
    marginHorizontal: 23,
    borderRadius: 12,
    fontSize: 20,
    marginBottom: 18,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '500',
    padding: 10,
  },
  texto5: {
    color: '#fff',
    margin: 10,
    fontSize: 22,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '600',
    letterSpacing: 1,
    backgroundColor: 'darkgray',
    marginHorizontal: 23,
    borderRadius: 12,
    marginBottom: 18,
    marginTop: 5,

    padding: 10,
  },
  tituloSecao: {
    color: '#1565c0',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 1,
  },

  textoHabilidades: {
    color: '#333',
    fontSize: 18,
    backgroundColor: '#e3edf8',
    marginHorizontal: 18,
    marginBottom: 52,
    textAlign: 'left',
    borderRadius: 14,
    padding: 14,
    lineHeight: 26,
    fontWeight: '500',
  },

});
