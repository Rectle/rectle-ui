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
      competitions: {
        title: 'Competitions',
        caption: 'Competing in our competitions',
        icon: 'o_emoji_events',
        link: 'competitions',
      },
      yourworkspace: {
        title: 'Your Workspace',
        caption: 'Yours projects',
        icon: 'o_workspaces',
        link: 'yourworkspace',
      },
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
      uploadDate: 'Date'
    },
  },
  tabs:{
    creator: 'Creator',
    participant: 'Participant'
  },
  projectCard:{
    author: 'Author: ',
    users: 'users',
    date: 'Date: '
  },
  projectTabs:{
    overview: 'Overview',
    code: 'Code',
    approaches: 'Your Approaches',
    leaderboard: 'Leaderboard'
  },
  codePage: {
    model: {
      title: 'Upload model',
      create: 'Create model',
      modelName: 'Model Name',
      errorName: 'First upload project!'
    },
    project: {
      title: 'Upload project'
    },
    title: 'Code',
    uploadLabel: 'Upload file',
    emptyData: 'Submitted form contains empty formData!',
    successData: 'The file has been successfully uploaded',
    errorData: 'There was a problem uploading the file'
  },
  approcheTab: {
    empty: "Project doesn't have any approches",
    details: {
      compileId : 'ID: ',
      status: 'Status: ',
      name: 'Name: '
    }
  },
  logsPage: {
    title: 'Logs',
    empty: 'Logs are not present yet!'
  },
  projectOverviewTitle:{
    author: 'Author: ',
    users: 'users',
    date: 'Date: '
  },
  approcheStatusTitle:{
    id: 'ID: ',
    score: 'Score: '
  },
  logs:{
    id: '#',
    name: 'Logs'
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
