function tabuada() {
  let num = document.getElementById('campo-numero')
  let tab = document.getElementById('sele-tabuada')

  if (num.value.length == 0) {
    window.alert('Digite um número válido')
  }else{

    let n = Number(num.value)
    tab.innerHTML=""

    for(let i = 1; i <= 10; n*i++){
      let item = document.createElement('option')
      item.text = `${n} x ${i} = ${n*i}` 
      tab.appendChild(item)
    }

  }
}

