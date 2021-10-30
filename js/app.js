setTimeout(()=> {
    document.getElementById("loader-container").style.display = "none"
    document.getElementById("home").style.display = "block"
    document.querySelector("body").style.backgroundColor = "white"
  }, 2500)

if (window.screen.width < 720) {
    document.getElementById("quote").innerHTML = '<h1 id="quote">COMPRA <span class="text-color">ROPA</span> QUE DURE MÁS QUE LAS <span class="text-color">MODAS</span></h1>'
}

(function () {
  
  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()