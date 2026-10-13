import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { EPN_THEME } from '../theme/epnTheme';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.iconButton,
        pressed && styles.pressed,
      ]}
      onPress={onPress}>
      <MaterialIcons name={icon} size={30} color={EPN_THEME.colors.surface} />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    minWidth: 64,
    minHeight: 48,
    paddingHorizontal: EPN_THEME.spacing.sm,
    paddingVertical: EPN_THEME.spacing.xs,
    borderRadius: EPN_THEME.radius.md,
    backgroundColor: EPN_THEME.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
  iconButtonLabel: {
    color: EPN_THEME.colors.surface,
    marginTop: EPN_THEME.spacing.xs,
    fontSize: EPN_THEME.typography.small.fontSize,
    fontWeight: '600',
  },
});
