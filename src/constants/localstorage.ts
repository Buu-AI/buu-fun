export const SETTINGS_STORAGE_KEY = "buu_fun:settings";

/**
 * List of new features that should trigger the "NEW" pill in settings.
 * To add a new feature notification:
 * 1. Add the feature name to this array
 * 2. Deploy - the pill will automatically show for users who haven't seen it yet
 */
export const NEW_FEATURES = ["gameReady", "showDown"] as const;

/**
 * Type definitions for settings storage in localStorage
 */
export type SettingsStorage = {
  /**
   * List of new features that should be announced to users
   */
  newFeatures: readonly string[];
  /**
   * List of features that the user has already seen
   */
  seenFeatures: string[];
};
