import React, { useState } from 'react';
import { View, Modal, TextInput, Button, StyleSheet } from 'react-native';

const PopupWithTextInput = ({ visible, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleSubmit = () => {
    // Xử lý giá trị đã nhập ở đây
    console.log('Input Value:', inputValue);

    // Đóng popup
    onClose();
    
    // Gọi hàm onSubmit với giá trị đã nhập
    onSubmit(inputValue);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="Enter something..."
            onChangeText={handleInputChange}
            value={inputValue}
          />

          <Button title="Submit" onPress={handleSubmit} />

          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default PopupWithTextInput;