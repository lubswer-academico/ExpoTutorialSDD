import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { EPN_THEME } from '../theme/epnTheme';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose a sticker</Text>
            <Pressable
              style={({ pressed }) => [
                styles.closeButton,
                pressed && styles.pressed,
              ]}
              onPress={onClose}>
              <MaterialIcons
                name="close"
                color={EPN_THEME.colors.muted}
                size={22}
              />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: EPN_THEME.colors.surface,
    borderTopRightRadius: EPN_THEME.radius.md,
    borderTopLeftRadius: EPN_THEME.radius.md,
    borderWidth: 1,
    borderColor: EPN_THEME.colors.border,
    shadowColor: EPN_THEME.colors.primary,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    minHeight: 48,
    backgroundColor: EPN_THEME.colors.primary,
    borderTopRightRadius: EPN_THEME.radius.md,
    borderTopLeftRadius: EPN_THEME.radius.md,
    paddingHorizontal: EPN_THEME.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: EPN_THEME.colors.surface,
    fontSize: EPN_THEME.typography.h3.fontSize,
    fontWeight: EPN_THEME.typography.h3.fontWeight,
  },
  closeButton: {
    minWidth: 48,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: EPN_THEME.radius.md,
  },
  pressed: {
    opacity: 0.85,
  },
});
