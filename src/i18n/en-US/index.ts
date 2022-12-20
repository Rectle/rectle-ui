// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Action failed',
  success: 'Action was successful',
  accountSettings: {
    title: 'Account',
    toggleJWT: {
      trueValue: 'JWT enable',
      falseValue: 'JWT disable',
    }
  },
  settingPage: {
    title: 'Settings',
    list: {
      account: {
        title: 'Account',
        icon: 'o_person'
      },
      notification: {
        title: 'Notification',
        icon: 'o_notifications'
      },
      privacy: {
        title: 'Privacy & Security',
        icon: 'o_lock'
      },
      help: {
        title: 'Help and Support',
        icon: 'o_headphones'
      },
      about: {
        title: 'About',
        icon: 'o_info'
      },
      logout: {
        title: 'Logout',
        icon: 'o_logout'
      }
    }
  },
  dashboard: {
    title: 'Links',
    setting: {
      title: 'Settings',
      darkmode: 'Darkmode'
    },
    links: {
      home: {
        title: 'Home',
        caption: 'home page',
        icon: 'o_home',
        link: 'home',
      },
      setting: {
        title: 'Setting',
        caption: 'more settigns',
        icon: 'o_settings',
        link: 'setting',
      },
      code: {
        title: 'Code',
        caption: 'Rectle IDE',
        icon: 'o_code',
        link: 'code',
      }
    },
    icons: {
      labels: {
        menu: 'Menu'
      }
    }
  },
  codePage: {
    title: 'Code',
    uploadLabel: 'Upload file',
    emptyData: 'Submitted form contains empty formData!',
    successData: 'The file has been successfully uploaded',
    errorData: 'There was a problem uploading the file'
  },
  auth: {
    signin: {
      title: 'Sign in',
      meta: {
        title: 'Login'
      }
    },
    signup: {
      title: 'Sign up',
      meta: {
        title: 'Register'
      }
    }
  }
};
