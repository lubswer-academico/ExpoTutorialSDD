import { StyleSheet, Text, View } from "react-native";
import { EPN_THEME } from "@/theme/epnTheme";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentCard}>
        <Text style={styles.text}> About Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: EPN_THEME.colors.background,
    padding: EPN_THEME.spacing.md,
  },
  contentCard: {
    width: "100%",
    padding: EPN_THEME.spacing.lg,
    backgroundColor: EPN_THEME.colors.surface,
    borderWidth: 1,
    borderColor: EPN_THEME.colors.border,
    borderRadius: EPN_THEME.radius.md,
    shadowColor: EPN_THEME.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    alignItems: "center",
  },
  text: {
    color: EPN_THEME.colors.primary,
    fontSize: EPN_THEME.typography.h2.fontSize,
    fontWeight: EPN_THEME.typography.h2.fontWeight,
  },
});

export default AboutScreen;
