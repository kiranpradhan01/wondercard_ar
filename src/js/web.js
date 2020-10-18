async function handleRequest(e) {
  formElement = document.getElementsByTagName("form")[0]

  let response = await fetch('https://console.echoAR.xyz/upload?key=ancient-limit-8533&target_type=0&hologram_type=0', {
    method: 'POST',
    body: new FormData(formElement)
  })
  .then((response) => {
    let result = response.json();
    console.log(result)
  })
  .catch((response) => {
    let result = response.json();
    window.alert("There was an error")
    console.log(result)
  })
}
