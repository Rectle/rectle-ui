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
      },
      logs: {
        title: 'Logs',
        caption: 'Audit logs',
        icon: 'o_monitor_heart',
        link: 'logs',
      },
      competitions: {
        title: 'Competitions',
        caption: 'Competing in our competitions',
        icon: 'o_emoji_events',
        link: 'competitions',
      },
      codeEditor: {
        title: 'Code Editor',
        caption: 'Editor for code',
        icon: 'o_data_array',
        link: 'codeEditor',
      }
    },
    icons: {
      labels: {
        menu: 'Menu'
      }
    }
  },
  searchBar: {
    search: 'Search',
    filterBar: {
      sort: 'Sort by',
      filter: 'Filter by',
      date: 'Start date',
      active: 'Active',
      ended: 'Ended',
      toggleActive: 'Active',
      toggleEnd: 'Finished',
    },
  },
  projectCard:{
    author: 'Author: ',
    users: 'users',
    date: 'Date: '

  },
  codePage: {
    title: 'Code',
    uploadLabel: 'Upload file',
    emptyData: 'Submitted form contains empty formData!',
    successData: 'The file has been successfully uploaded',
    errorData: 'There was a problem uploading the file'
  },
  logsPage: {
    title: 'Logs'
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
