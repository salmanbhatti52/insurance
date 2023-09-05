import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cornerstone.insurance',
  appName: 'Cornerstone',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      backgroundColor: '#1E1244',
      launchAutoHide: false,
      showSpinner: false,
      androidScaleType: 'CENTER_CROP',
    },
  },
};

export default config;
