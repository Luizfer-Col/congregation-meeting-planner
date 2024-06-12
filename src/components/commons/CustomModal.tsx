import React from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

interface ModalProps {
  visible: boolean;
  title: string;
  body?: string;
  onClose: () => void;
  showMainButton?: boolean;
  mainButtonText?: string;
  mainButtonDisabled?: boolean;
  onMainButtonPress?: () => void;
  showSecondaryButton?: boolean;
  secondaryButtonText?: string;
  onSecondaryButtonPress?: () => void;
  children?: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({
  visible,
  title,
  body,
  onClose,
  showMainButton = true,
  mainButtonText = 'Ok',
  onMainButtonPress = onClose,
  mainButtonDisabled = false,
  showSecondaryButton = false,
  secondaryButtonText = 'Cancelar',
  onSecondaryButtonPress = onClose,
  children,
}) => {
  return (
    <Modal
      animationType="none"
      transparent
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{title}</Text>
              {/* <View style={styles.divider} /> */}

              <ScrollView
                keyboardShouldPersistTaps={'always'}
                overScrollMode="never"
                style={styles.modalBodyContainer}>
                <Text style={styles.modalBody}>{body}</Text>
                {children}
              </ScrollView>

              <View style={styles.footer}>
                <View style={styles.divider} />
                <View style={styles.footerButtons}>
                  {showSecondaryButton && (
                    <Pressable onPress={onSecondaryButtonPress}>
                      <Text style={styles.secondaryButton}>
                        {secondaryButtonText}
                      </Text>
                    </Pressable>
                  )}
                  {showMainButton && (
                    <Pressable onPress={onMainButtonPress}
                    disabled={mainButtonDisabled}
                    >
                      <Text style={styles.mainButton}>{mainButtonText}</Text>
                    </Pressable>
                  )}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    maxHeight: '90%',
  },
  modalTitle: {
    fontSize: 18,
    padding: hp(2),

    fontWeight: '500',
    color: 'white',
    backgroundColor: '#3C7F8B',
  },
  modalBodyContainer: {
    paddingHorizontal: hp(2),
  },
  modalBody: {
    marginHorizontal: hp(1.5),
    color: 'black',
  },
  footer: {
    paddingTop: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  mainButton: {
    color: 'white',
    fontWeight: 'bold',
    margin: hp(1),
    marginRight: hp(2),
    backgroundColor: '#3C7F8B',
    paddingHorizontal: hp(2),
    paddingVertical: hp(0.7),
    borderWidth: hp(0.05),
    borderColor: '#3C7F8B',
  },
  secondaryButton: {
    color: '#597476',
    margin: hp(1),
    marginRight: hp(2),
    paddingHorizontal: hp(2),
    paddingVertical: hp(0.7),
    borderColor: '#3C7F8B',
    borderWidth: hp(0.05),
  },
});
