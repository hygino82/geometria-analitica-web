let txtXa = document.querySelector('#xa');
let txtYa = document.querySelector('#ya');

let txtXb = document.querySelector('#xb');
let txtYb = document.querySelector('#yb');

let btnCalcula = document.querySelector('#btn-calcula');
let btnLimpa = document.querySelector('#btn-limpa');

let resultado = document.querySelector('#resultado');

function limpar() {
    txtXa.value = '';
    txtYa.value = '';
    txtXb.value = '';
    txtYb.value = '';
}

btnLimpa.addEventListener('click', limpar);

function calcular() {
    let xa = Number(txtXa.value);
    let ya = Number(txtYa.value);
    let xb = Number(txtXb.value);
    let yb = Number(txtYb.value);

    resultado.innerHTML = '<h4>Distância entre A e B</h4>';
    resultado.innerHTML += `d<sup>2</sup> = ((${xa})-(${xb}))<sup>2</sup> + ((${ya})-(${yb}))<sup>2</sup><br>`;
    resultado.innerHTML += `d<sup>2</sup> = (${xa - xb})<sup>2</sup> + (${ya - yb})<sup>2</sup><br>`;
    let quad_dif_x = Math.pow(xa - xb, 2);
    let quad_dif_y = Math.pow(ya - yb, 2);
    resultado.innerHTML += `d<sup>2</sup> = ${quad_dif_x} + ${quad_dif_y}<br>`;
    let somaQuadDif = quad_dif_x + quad_dif_y;
    resultado.innerHTML += `d<sup>2</sup> = ${somaQuadDif}<br>`;
    resultado.innerHTML += `d = √ (${somaQuadDif})<br>`;
    let d_ab = Math.sqrt(somaQuadDif);
    resultado.innerHTML += `d = ${d_ab}<br>`;

    resultado.innerHTML += '<h4>Equação geral da reta</h4>';
    resultado.innerHTML += `1 * (${ya}) * x = ${ya}*x<br>`;
    resultado.innerHTML += `1 * (${xa}) * (${yb}) = ${xa * yb}<br>`;
    resultado.innerHTML += `1 * (${xb}) * y = ${xb}*y<br>`;
    resultado.innerHTML += `-1 * (${xb}) * (${ya}) * x = ${-xb * ya}<br>`;
    resultado.innerHTML += `-1 * (${xa}) * y = ${-xa} * y<br>`;
    resultado.innerHTML += `-1 * (${yb}) * x = ${-yb} * x<br>`;
    resultado.innerHTML += `(${ya - yb}) * x + (${xb - xa}) * y +(${xa * yb - xb * ya}) = 0<br>`;


}

btnCalcula.addEventListener('click', calcular);