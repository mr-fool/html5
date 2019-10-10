document.querySelector('select').addEventListener('change', event => 
    document.documentElement.style.setProperty(
      '--bg',
      event.target.value
    )
  )
