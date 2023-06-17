# ModakArtGallery
### Requirements

[Setting up the development environment](https://reactnative.dev/docs/environment-setup)

### Environment Configuration

#### Step 1 - Firebase Config

You should ask for Firebase config files to your mobile team. These files should be placed under `src/config/firebase/development` and `src/config/firebase/production`.

Example of the expected file structure:

```js
.
├── src
│   ├── config
│            ├── firebase
│                       ├── development
│                                     ├── google-services.json
│                                     ├── GoogleService-Info.plist
│                       ├── production
│                                     ├── google-services.json
│                                     ├── GoogleService-Info.plist
```

Finally, run the script `firebase-dev` or `firebase-prod` depending on your environment, which will link the necessary files into the project. Rebuilding the project may be necessary.

You may need to give copy permissions for the script to run: `chmod +x ./src/scripts/firebaseSwitch.sh`.

Example:

```
yarn firebase-dev
```

### Installation

After having installed all the required packages mentioned on `Requirements` section and done all the `Environment Configuration`

- Run `yarn` or `yarn install` to install the dependencies

#### iOS

For iOS preferably, use the XCode IDE for better project control ( dependencies, info.plist edit, Launch Images, etc.). Either use the IDE run action or execute `react-native run-ios` script from the Terminal

Example of steps, being on the root folder:

- Run `cd ios && pod install && cd ..`
- Run `yarn ios`
- Run `yarn start --reset-cache` # in case it's necessary

### Android

On initial launch for Android once the emulator is up and running either run the app from Android Studio or run the command below:

```
yarn android
```

### How to commit
#### New Feature
[`release-version`/(`team`)-(`tk-number`)] brief description

e.x.: "[8.1.0/RIVEN-904] fixed padding of close button"
#### Bugfix
[`release-version`/(`team`)-(`tk-number`)] brief description
#### Release
[`release-version`] brief description
#### Hotfix
[`release-version`/(`team`)-(`tk-number`)] brief description

