async function handleRequest(e) {
  showLoader()
  formElement = document.getElementsByTagName("form")[0]

  let response = await fetch('https://console.echoAR.xyz/upload?key=ancient-limit-8533&target_type=0&hologram_type=0', {
    method: 'POST',
    body: new FormData(formElement)
  })
  .then((response) => {
    console.log(response)
    removeLoader()
  })
  .catch((response) => {
    removeLoader()
    window.alert("There was an error. Please try again.")
    console.log(response)
  })
}

function showLoader() {
  loader = document.getElementsByClassName("loader-background")[0]
  loader.classList.remove("hide")
}

function removeLoader() {
  loader = document.getElementsByClassName("loader-background")[0]
  loader.classList.add("hide")
}