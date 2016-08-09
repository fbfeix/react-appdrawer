# react-appdrawer [![Build Status](https://travis-ci.org/fbfeix/react-appdrawer.svg?branch=master)](https://travis-ci.org/fbfeix/react-appdrawer)[![codecov](https://codecov.io/gh/fbfeix/react-appdrawer/branch/master/graph/badge.svg)](https://codecov.io/gh/fbfeix/react-appdrawer)
> A simple react component which acts as application container with sidebar

__Please be aware of the fact that this component isn't finished yet.__

## Install
```sh
$ npm install react-appdrawer
```

## Usage
```jsx
import AppDrawer from 'react-appdrawer';

let app = <AppDrawer title="My App" >Content</AppDrawer>;
```

The AppDrawer depends on styles provided in style/AppDrawer.scss to allow toggling the sidebar, so add it to your application too or provide your own style.

### Sidebar Orientation
Provide (custom) classes to determine the orientation of your sidebar:

```css
/* provided by style/AppDrawer.scss */
sidebar-left {
    /*...*/
}

/* provided by style/AppDrawer.scss */
sidebar-right {
    /*...*/
}

/* custom direction */
sidebar-top {
    /*...*/
}
```

Please also be aware of the fact that you have to provide the class "sidebar-item" in your custom sidebar styles if you want any animation.

## License
MIT © Felix Astner <me@felixastner.com> (http://felixastner.com)