import { StyleSheet, View, Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { EPN_THEME } from '../theme/epnTheme';

type tema = "primary"

type Props = {
  label: string;
  theme?: tema;
  onPress?: () => void
};

export default function Button({ label, theme, onPress }: Props) {

  if (theme === 'primary') {
  return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.primaryButton,
            pressed && styles.pressed,
          ]}
          onPress={onPress}>
          <FontAwesome
            name="picture-o"
            size={18}
            color={EPN_THEME.colors.primary}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, styles.primaryButtonLabel]}>{label}</Text>
        </Pressable>
      </View>
    );
  } 
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.secondaryButton,
          pressed && styles.pressed,
        ]}
        onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    minHeight: 48,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: EPN_THEME.radius.md,
    width: '100%',
    minHeight: 48,
    paddingHorizontal: EPN_THEME.spacing.md,
    paddingVertical: EPN_THEME.spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 5
  },
  primaryButton: {
    backgroundColor: EPN_THEME.colors.accent,
  },
  secondaryButton: {
    backgroundColor: EPN_THEME.colors.primary,
  },
  pressed: {
    opacity: 0.85,
  },
  buttonLabel: {
    color: EPN_THEME.colors.surface,
    fontSize: EPN_THEME.typography.body.fontSize,
    fontWeight: '700',
    textAlign: 'center',
  },
  primaryButtonLabel: {
    color: EPN_THEME.colors.primary,
  },
  buttonIcon: {
    marginRight: EPN_THEME.spacing.sm,
  },
});
