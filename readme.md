## Getting Started

Before you proceed, ensure that your computer has Node.js installed. If not, you can download and install it from [here](https://nodejs.org/).

To set up the environment for Ionic, please refer to the official guide [here](https://ionicframework.com/docs/intro/environment).

### Installing Dependencies

1. Install the Ionic CLI using npm:

    ```bash
    npm install -g @ionic/cli
    ```

2. Install the Angular CLI using npm:

    ```bash
    npm install -g @angular/cli
    ```

3. Install Capacitor using npm:

    ```bash
    npm install @capacitor/core @capacitor/cli
    ```

4. Open the app folder in your command prompt (Windows) or terminal (macOS/Linux), and install node dependencies for your project:

    ```bash
    npm install
    ```

### Building and Running the App

1. After successfully installing the dependencies, build your Ionic project:

    ```bash
    ionic build
    ```

2. Synchronize the build with Capacitor by running:

    ```bash
    ionic cap sync
    ```

3. To test the app in a web browser, you can run:

    ```bash
    ng serve
    ```

4. To further test and deploy the app, open your project in the standard IDEs (Xcode for iOS and Android Studio for Android):

    For iOS:

    ```bash
    npx cap open ios
    ```

    For Android:

    ```bash
    npx cap open android
    ```

5. Use the standard IDEs to run and deploy your app on respective platforms.

Please note that these instructions assume you have the necessary platform-specific tools (Xcode for iOS and Android Studio for Android) installed for running and deploying your app on devices.
