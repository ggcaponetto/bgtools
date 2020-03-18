let doSomeStuff = async () => {
  console.log('doSomeStuff', { fetch })
  let iterations = 10;
  let responses = [];
  let delay = 1000;
  for (let i = 0; i < iterations; i++){
    let response = await new Promise(async (resolve, reject) => {
      setTimeout(async () => {
        await fetch(`http://127.0.0.1:8888/package.json?ts=${(performance.now())}&nr=${i}`)
          .then((response) => {
            console.log(`doSomeStuff - fetch response ${i}/${iterations}`, { response })
            resolve(response)
          })
          .catch((e) => {
            console.error(`doSomeStuff - fetch error ${i}/${iterations}`, { e })
            reject(e)
          })
      }, delay)
    })
    responses.push(response);
  }
  return responses;
}

self.addEventListener('install', function (event) {
  console.log('service worker intall')
})
self.addEventListener('activate', function (event) {
  console.log('service worker activate')
})
self.addEventListener('fetch', function (event) {
  console.log('fetch', event.request.url)
})
self.addEventListener('sync', function (event) {
  console.log('sync', event)
  if (event.tag == 'myFirstSync') {
    event.waitUntil(doSomeStuff())
  }
})
/*self.addEventListener('push', function(event) {
  console.log('push', event)
  event.waitUntil(doSomeStuff())
  if (!(self.Notification && self.Notification.permission === 'granted')) {
    console.warn('push - no permissions', event);
    return;
  }
});*/
