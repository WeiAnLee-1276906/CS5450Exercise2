1. Configuration and Setup
This exercise is a simple messaging app built using React Native CLI. It allows users to switch between message categories (e.g., Lakehead U, Golf Links Apt, Family, Work), add new messages, edit or delete them, and display messages.

To set up and run this app:
1. Clone the repo or create the project using:
   npx react-native init MessageDirectoryApp
2. Navigate to the project folder:
   cd MessageDirectoryApp
3. Install required navigation dependencies:

npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context

4. Start the Android emulator and run the app:
   npx react-native run-android
2. Project Structure

/screens
  - HomeScreen.js
  - MessageScreen.js
/navigation
  - StackNavigator.js
App.tsx (or App.js)

3. Screenshots
Home Screen and Message Screen shown below:
 
Supports full CRUD functionality (Create, Read, Update, Delete). 
![image](https://github.com/user-attachments/assets/77ea156c-51df-4cee-8002-dc5bda49f175)
