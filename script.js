const botao = document.querySelector('.container__botao');
const res = document.querySelector('.container__resposta')

function mostrarTabuda() {
    
    const numero = document.querySelector('#txt_numero').value;
    
    if (numero > 0 && numero <= 10) {
        
        res.innerHTML = ""
        
        for (let contador = 1; contador <= 10; contador++) {
            
            res.innerHTML += `${numero} <strong class="resultado">X</strong> ${contador} = <strong class="resultado">${numero * contador}</strong> <br><br>`;
        }
        
    } else if (numero.length == 0 || numero > 10) {
        alert("ERRO!")
        res.innerHTML = `<p>Digite um número de <strong class="resultado">1 - 10</strong></p>`
    }
       
}

botao.onclick = mostrarTabuda;

