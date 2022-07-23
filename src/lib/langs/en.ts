export default {
  index: {
    title: 'Welcome to HomeDisk!',
    description: 'Fast and lightweight local cloud for your data written in Rust',
    cards: {
      login: {
        title: 'Sign in',
        description: 'Login to your account'
      },
      register: {
        title: 'Register',
        description: 'Create a new account'
      },
      dashboard: {
        title: 'Dashboard',
        description: 'Go to user dashboard'
      }
    }
  },
  auth: {
    input: {
      username: 'Username',
      password: 'Password'
    },
    notification: {
      emptyInput: 'At least one field is empty'
    },
    signin: {
      description: 'Sign in to your account.',
      link: 'Don\'t have an account? Sign up',
      button: 'Sign in'
    },
    register: {
      description: 'Create an account.',
      link: 'Do have an account? Sign in',
      button: 'Register'
    }
  },
  modal: {
    close: 'Close',
    uploadFile: {
      submit: 'Upload',
      selectFile: 'Select a file',
      selected: 'Selected: {}',
      uploaded: 'Uploaded!',
      noFileSelected: 'No file selected'
    }
  },
  dashboard: {
    table: {
      header: {
        name: 'Name',
        size: 'Size',
        modified: 'Modified'
      }
    },
    empty_directory: 'Empty directory',
    loading: 'Loading...'
  }
}
