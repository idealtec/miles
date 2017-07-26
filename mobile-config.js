// This section sets up some basic app metadata, the entire section is optional.
App.info({
  id: 'com.its.miles',
  name: 'Its-Miles',
  description: 'First Its project',
  author: 'ITS Development Group',
  email: 'yvelkuri@idealtechnosoft.com',
  website: 'http://idealtechnosoft.com.com'
});
// Set up resources such as icons and launch screens.
App.icons({
//   'iphone': 'icons/icon-60.png',
//   'iphone_2x': 'icons/icon-60@2x.png',
  // More screen sizes and platforms...
});
App.launchScreens({
//   'iphone': 'splash/Default~iphone.png',
//   'iphone_2x': 'splash/Default@2x~iphone.png',
  // More screen sizes and platforms...
});
// Set PhoneGap/Cordova preferences.
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
App.setPreference('KeychainAccessibility', 'WhenUnlocked', 'ios');
// Pass preferences for a particular PhoneGap/Cordova plugin.
App.configurePlugin('cordova-plugin-googleplus', {
    REVERSED_CLIENT_ID: 'com.googleusercontent.apps.64918082612-d8fdkcjiohiuj7t1hfur79tdoc7ncfuf'
});
// Add custom tags for a particular PhoneGap/Cordova plugin to the end of the
// generated config.xml. 'Universal Links' is shown as an example here.
App.appendToConfig(`
  <universal-links>
    <host name="localhost:3000" />
  </universal-links>
`);