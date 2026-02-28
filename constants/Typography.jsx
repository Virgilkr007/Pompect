import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

/* ================================
   TYPE SCALE TOKENS
================================ */

export const typeScale = {
  xxl: 36,
  xl: 28,
  lg: 20,
  md: 16,
  sm: 14,
  xs: 12,
  monoSm: 13,
};


export const lineHeights = {
  xxl: 44,
  xl: 36,
  lg: 28,
  md: 24,
  sm: 20,
  xs: 16,
  monoSm: 18,
};

/* ================================
   FONT FAMILIES
================================ */

const fonts = {
  display: Platform.select({
    ios: "Playlist Script",
    android: "Playlist Script",
    default: "cursive",
  }),

  ui: Platform.select({
    ios: "SF Pro Text",
    android: "Inter",
    default: "system-ui",
  }),

  mono: Platform.select({
    ios: "SFMono-Regular",
    android: "RobotoMono",
    default: "monospace",
  }),
};
export default fonts;

/* ================================
   TELEPROMPTER PRESETS
================================ */

export const teleprompterPresets = {
  small: {
    fontSize: 22,
    lineHeight: Math.round(22 * 2.0),
  },
  medium: {
    fontSize: 28,
    lineHeight: Math.round(28 * 1.9),
  },
  large: {
    fontSize: 36,
    lineHeight: Math.round(36 * 1.9),
  },
};

/* ================================
   REUSABLE TYPOGRAPHY COMPONENT
================================ */

export const Typography = ({
  children,
  variant = "md",
  weight = "400",
  align = "left",
  style,
  mono = false,
  allowScaling = true,
}) => {
  const fontSize = typeScale[variant] || typeScale.md;
  const lineHeight = lineHeights[variant] || lineHeights.md;

  return (
    <Text
      allowFontScaling={allowScaling}
      style={[
        {
          fontFamily: mono ? fonts.mono : fonts.ui,
          fontSize,
          lineHeight,
          fontWeight: weight,
          textAlign: align,
          letterSpacing: 0,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

/* ================================
   SPECIALIZED COMPONENTS
================================ */

// Teleprompter playback text
export const TeleprompterText = ({
  children,
  size = "medium",
  style,
}) => {
  const preset = teleprompterPresets[size];

  return (
    <Text
      allowFontScaling={false}
      style={[
        styles.teleprompter,
        {
          fontSize: preset.fontSize,
          lineHeight: preset.lineHeight,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

// Editor Text (Distraction-Free)
export const EditorText = ({ children, style }) => {
  return (
    <Text
      allowFontScaling
      style={[styles.editor, style]}
    >
      {children}
    </Text>
  );
};

/* ================================
   BASE STYLES
================================ */

const styles = StyleSheet.create({
  teleprompter: {
    fontFamily: fonts.ui,
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: 0,
  },

  editor: {
    fontFamily: fonts.ui,
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "400",
    textAlignVertical: "top",
    letterSpacing: 0,
  },
});
