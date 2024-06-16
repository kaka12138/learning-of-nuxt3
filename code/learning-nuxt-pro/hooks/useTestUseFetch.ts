export function useTestUseFetch(request: any) {
  // debugger
  const _request = computed(() => request(), {
    onTrack(e) {
      console.log("Now in onTrack", e)
    },
    onTrigger(e) {
      console.log("Now in onTrigger", e)
    }
  })
  function getUrl() {
    console.log("Now in getUrl", _request.value)
  }
  return {
    getUrl,
    _request
  }
}
