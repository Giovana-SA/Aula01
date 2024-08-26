import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default function App() {
  const [PickerVisible, setPickerVisible] = useState(false);
  const [dataFinal, setDataFinal] = useState('');


const showPicker = () => {
  setPickerVisible(true);

}
const hiderPicker = () => {
  setPickerVisible(false);
}

const handleConfirm = (date) => {
//console.warn("A data é ", date);

const dia = date.getDate();
const mes = date.getMonth();
const ano = date.getFullYear();
setDataFinal ( dia + "/" + mes + "/" + ano);

hiderPicker();
} 


  return (
    <View style={styles.container}>
      <Button title="selecionar data" onPress={showPicker} />
      <DateTimePicker 
        isVisible={PickerVisible}
        mode='datetime'
        onCancel={hiderPicker}
        onConfirm={handleConfirm}



      />
<Text>Data: {dataFinal}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
