import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { EPN_THEME } from "../../theme/epnTheme";

export default function TabsLayout() {
  return <Tabs screenOptions={{
    tabBarActiveTintColor: EPN_THEME.colors.primary,
    tabBarInactiveTintColor: EPN_THEME.colors.muted,
    tabBarActiveBackgroundColor: EPN_THEME.colors.accent,
    headerStyle: {
      backgroundColor: EPN_THEME.colors.surface,
      borderBottomColor: EPN_THEME.colors.border,
    },
    headerTitleStyle: {
      color: EPN_THEME.colors.primary,
      fontWeight: EPN_THEME.typography.h3.fontWeight,
    },
    headerTintColor: EPN_THEME.colors.primary,
    headerShadowVisible: false,
    tabBarStyle: {
      backgroundColor: EPN_THEME.colors.surface,
      borderTopColor: EPN_THEME.colors.accent,
      borderTopWidth: 1,
    },
    tabBarLabelStyle: {
      fontWeight: EPN_THEME.typography.h3.fontWeight,
    },
    /*
    tabBarItemStyle: {
      paddingVertical: EPN_THEME.spacing.xs,
    },
    */
  }}>
    <Tabs.Screen
    name="index"
    options={{
      title: "Inicio",
      headerShown: true,
      headerTitle: "Sticker Smash",
      headerTitleAlign: "center",
      headerLeft: () => <></>,
      tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "home" : "home-outline"} size={20} color={color} />
    }}
    />
    <Tabs.Screen
    name="about"
    options={{
      title: "About",
      headerTitleAlign: "center",
      tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={20} color={color} />
    }}
    />
  </Tabs>;
}
