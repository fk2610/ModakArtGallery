# ModakArtGallery
### Requirements

[Setting up the development environment](https://reactnative.dev/docs/environment-setup)

### Installation

After having installed all the required packages and done all the `Environment Configuration`

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

