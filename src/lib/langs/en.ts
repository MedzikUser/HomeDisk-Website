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
      title: 'Sign in',
      button: 'Sign in'
    },
    register: {
      title: 'Register',
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
  }
}
