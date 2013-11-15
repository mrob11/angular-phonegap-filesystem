# angular-phonegap-filesystem

A Bower Component for accessing [PhoneGap's FileSystem API](http://docs.phonegap.com/en/3.1.0/cordova_file_file.md.html#FileSystem) from AngularJS.

## Usage

1. `$ bower install angular-phonegap-filesystem`
2. Make sure the `cordova-*.js` script is in your `.html` file.
3. Include the `filesystem.js` script and its dependencies in your app.
4. Add `mike360.phonegap.filesystem` as a module dependency in your app.
5. Add the FileSystem plugin: `$ cordova plugin add org.apache.cordova.file`

## Example

```javascript
'use strict';

angular.module('myApp', ['mike360.phonegap.filesystem'])
  .controller('MyCtrl', function ($scope, filesystem) {
    filesystem.requestFileSystem(
      function(fs) {
        console.log(fs.root.name);
      },
      function() {
        console.log('fail');
      }
    );
  });
```

## Thanks

Special thanks to @btford for his work on other AngularJS + PhoneGap components.

