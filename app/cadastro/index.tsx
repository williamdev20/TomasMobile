import { StyleSheet, View, Text, Image } from 'react-native';
import Header from '../../components/autenticacao/Header';
import Input from '../../components/autenticacao/Input';
import Button from '../../components/autenticacao/Button';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <Input label="Nome" placeholder="Seu nome" />
        <Input label="Email" placeholder="seuemail@gmail.com" />
        <Input label="Senha" placeholder="*************" />
        <Input label="Confirmar senha" placeholder="*************" />
      </View>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  }
});
