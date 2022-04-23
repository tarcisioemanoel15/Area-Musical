

function alerta() {

  const nav = document.getElementById('nav');
  nav.addEventListener('click', e => {
    // e.preventDefault();

    inicia(e);
  })

}

function inicia(e) {
  const el = e.target


  if (el.classList.contains('alert1')) {
    alert('Trabalhando nisso !');
  }

  if (el.classList.contains('alert2')) {
    alert('Trabalhando nisso !!');
  }
  if (el.classList.contains('alert3')) {
    alert('Trabalhando nisso !!!');
  }
  if (el.classList.contains('alert4')) {
    alert('Trabalhando nisso !!!!');
  }



}

alerta();