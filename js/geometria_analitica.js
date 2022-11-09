let txtXa = document.querySelector('#xa');
let txtYa = document.querySelector('#ya');

let txtXb = document.querySelector('#xb');
let txtYb = document.querySelector('#yb');

let btnCalcula = document.querySelector('#btn-calcula');
let btnLimpa = document.querySelector('#btn-limpa');

//let resultado = document.querySelector('#resultado');

let resDistancia = document.querySelector('#distancia');
let resEquacao = document.querySelector('#equacao');
let resCirc = document.querySelector('#circunferencia');

function limpar() {
    alert('Limpando os dados');
    txtXa.value = '';
    txtYa.value = '';
    txtXb.value = '';
    txtYb.value = '';
}

btnLimpa.addEventListener('click', limpar);

function calcular() {

    if (txtXa.value == '' || txtXb.value == '' || txtYa.value == '' || txtYb.value == '') {
        alert('Complete os campos primeiro');
    }
    else {

        let xa = Number(txtXa.value);
        let ya = Number(txtYa.value);
        let xb = Number(txtXb.value);
        let yb = Number(txtYb.value);

        resDistancia.innerHTML = '<h4>Distância entre A e B</h4>';
        resDistancia.innerHTML += `d<sup>2</sup> = ((${xa})-(${xb}))<sup>2</sup> + ((${ya})-(${yb}))<sup>2</sup><br>`;
        resDistancia.innerHTML += `d<sup>2</sup> = (${xa - xb})<sup>2</sup> + (${ya - yb})<sup>2</sup><br>`;
        let quad_dif_x = Math.pow(xa - xb, 2);
        let quad_dif_y = Math.pow(ya - yb, 2);
        resDistancia.innerHTML += `d<sup>2</sup> = ${quad_dif_x} + ${quad_dif_y}<br>`;
        let somaQuadDif = quad_dif_x + quad_dif_y;
        resDistancia.innerHTML += `d<sup>2</sup> = ${somaQuadDif}<br>`;
        resDistancia.innerHTML += `d = √ (${somaQuadDif})<br>`;
        let d_ab = Math.sqrt(somaQuadDif);
        resDistancia.innerHTML += `d = ${d_ab}<br>`;

        resEquacao.innerHTML = '<h4>Equação geral da reta</h4>';
        resEquacao.innerHTML += `1 * (${ya}) * x = ${ya}*x<br>`;
        resEquacao.innerHTML += `1 * (${xa}) * (${yb}) = ${xa * yb}<br>`;
        resEquacao.innerHTML += `1 * (${xb}) * y = ${xb}*y<br>`;
        resEquacao.innerHTML += `-1 * (${xb}) * (${ya}) * x = ${-xb * ya}<br>`;
        resEquacao.innerHTML += `-1 * (${xa}) * y = ${-xa} * y<br>`;
        resEquacao.innerHTML += `-1 * (${yb}) * x = ${-yb} * x<br>`;
        resEquacao.innerHTML += `(${ya - yb}) * x + (${xb - xa}) * y +(${xa * yb - xb * ya}) = 0<br>`;

        resCirc.innerHTML = '<h4>Equação da circunferência</h4>';
        resCirc.innerHTML += `(x - (${xa}))<sup>2</sup> + (y - (${ya}))<sup>2</sup> = ${d_ab}<sup>2</sup> <br>`;

        let p1 = 2 * xa;
        let p2 = 2 * ya;
        let p3 = xa * xa + ya * ya;

        resCirc.innerHTML += `x<sup>2</sup> + y<sup>2</sup> -(${p1}) * x -(${p2}) * y + ${p3} = ${somaQuadDif}<br>`;
    }
}

btnCalcula.addEventListener('click', calcular);