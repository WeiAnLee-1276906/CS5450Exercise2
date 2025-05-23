# Message Directory App

A simple React Native mobile application that allows users to organize and manage categorized messages. 

## 📱 Features

- Home screen with 4 message categories:
  - Lakehead U
  - Golf Links Apt
  - Family
  - Work
- Add, edit, and delete messages in each category
- Clean and modern user interface with smooth navigation
- Local state-based message handling (no backend required)

## 🧱 Tech Stack

- React Native (CLI)
- React Navigation
- Android Emulator

## 🚀 Setup Instructions

1. Clone the repo or create a new React Native CLI project:

   ```bash
   npx react-native init MessageDirectoryApp

## 2. Install navigation dependencies:

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

## 3. Create the following project structure:

```
/screens
  - HomeScreen.js
  - MessageScreen.js
/navigation
  - StackNavigator.js
App.tsx (or App.js)
```

## 4. Run the app:

```bash
npx react-native run-android
```
