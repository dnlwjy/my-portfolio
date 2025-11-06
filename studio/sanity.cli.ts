import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'irfb1i5g',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
    appId: 'kbbek686ln75yr1bvaxez4f6',
  }
})