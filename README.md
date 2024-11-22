# Welcome to TaskMan 2 👋

Another Task Management app created with [Expo](https://expo.dev) via [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) using a blank TypeSript template.

## Features

1. TaskList Screen

   - Display a list of tasks.
   - Each task has a title, description, and status (ToDo, InProgress, Done).
   - Allow the user to add a new task.
   - Allow the user to edit and delete tasks.
   - Allow the user to change the status of a task.

2. TaskDetails Screen

   - Display the details of a selected task.
   - Allow the user to edit the task details.

3. Create/Edit Task Screen
   - Allow the user to create a new task or edit an existing task.
   - Allow to enter fields: Title (required), Description (optional), Status (ToDo, InProgress, Done)

## What I use to build this app

- React Native with Expo framework
- React Navigator as a screen router
- React Context as a state management lib

## Pre-requisites

- Node.js v20+
- If you need to make a local development build on devices, you need:
  - For Android, needs Android studio
  - For Apple devices, needs Xcode
- Some code editors like VScode or IntelliJ Idea

## Get started

1. Once cloning the code successfuly, install all dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm start
   ```

3. You will see a QR code in the output, which will be used to open the app from [Expo Go app](https://expo.dev/go) on your device

4. After you installed Expo Go app on your device, use your phone camera to shoot the QR code and follow the link to open the app.

   - On Android device, you could open Expo Go app and scan QR code from the main menu manually.

5. Enjoy the app!

## Why start with version 2

Because there is a v1 with very little features using JavaScript. So this has to be v2.

## How I made this happens

- Spent 3 more days teaching myself how to write a mobile app with React Native by watching and following Maximillion'a React courses on Udemy.
- 1 day writing v1 with JS.
- 3 days to make v2 with TS.

## What I found out

- I like React Native more than any other things, at least in JS for now.
- Running Expo Go on some outdated mobile phones, will make your life sucks.
- There are so many RN courses on Youtube, but only a fews of them worth watching

## My gears

- ThinkPad P14s Gen 2, Ryzen 7 pro 5850U with 32GB ram and 512GB ssd
- Fully compatible phones: iPhone 12 Pro (ios 17) and Xiaomi 13T Pro (Android 14)
- Phones with Pressed Event issues: iPhone 10 (ios 16) and POCO phone (Android 13)

## Features not yet included

- Persistent storage (possibly with [LiveStore](https://livestore.dev/))
- Time tracking on each task
- Task assignment via email

## Want to contribute

- Propose your cool features by PR
- Optionally add more unit tests and make them passed by running

  ```bash
  npm run test
  ```

## More on React Native development

To learn more about developing your project with React Native, look at the following resources:

- [React Native documentation](https://reactnative.dev/docs/getting-started): Brings the best parts of developing with React to native development. It's a best-in-class JavaScript library for building user interfaces.
- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## More on Expo Go

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
