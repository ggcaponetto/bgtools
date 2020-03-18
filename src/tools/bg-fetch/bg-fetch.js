const register = () => {
  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    // Register your service worker:
    navigator.serviceWorker.register('/dist/tools/bg-fetch/bg-fetch-sw.min.js', {})
      .then((reg) => {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope)
        return reg.sync.register('myFirstSync')
      }).catch((error) => {
      // registration failed
      console.log('Registration failed with ' + error)
    })
  } else {
    // serviceworker/sync not supported
    console.warn('service worker is not supported')
  }
}
register()
