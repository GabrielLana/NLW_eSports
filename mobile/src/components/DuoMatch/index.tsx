import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { CheckCircle } from 'phosphor-react-native';
import { Heading } from '../Heading/Index';
import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCoping, setIsCoping] = useState(false);

  async function handleCopyDiscordToClipboard() {
    setIsCoping(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord Copiado!',
     'Agora é só ir no seu App e adicionar seu novo Duo!');
     setIsCoping(false);
  }

  return (
    <Modal
        statusBarTranslucent
        transparent
        animationType='fade'
        {...rest}
    >
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity
                    onPress={onClose}
                    style={styles.closeIcon}
                >
                    <MaterialIcons 
                        name="close"
                        size={20}
                        color={THEME.COLORS.CAPTION_500}
                    />
                </TouchableOpacity>
                <CheckCircle 
                    size={64}
                    color={THEME.COLORS.SUCCESS}
                    weight="bold"
                />
                <Heading 
                    style={{ alignItems: 'center', marginTop: 24 }}
                    title='Lets play!'
                    subtitle='Agora é só começar a jogar!'
                />
                <Text style={styles.label}>
                    Adicione no Discord
                </Text>
                <TouchableOpacity 
                onPress={handleCopyDiscordToClipboard}
                style={styles.discordButton}
                disabled={isCoping}
                >
                <Text style={styles.discord}>
                    {isCoping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
                </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  );
}