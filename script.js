function extrairNumeroDoElemento(id) {
    const texto = document.getElementById(id).textContent;
    const valorNumerico = texto.match(/[0-9,.]+/g).join(''); // Extrai os números, incluindo pontos e vírgulas
    return parseFloat(valorNumerico.replace(/\./g, '').replace(',', '.'));
}

function formatarMoeda(numero) {
    if (typeof numero === 'string') {
        const valorNumerico = numero.match(/[0-9,.]+/g).join(''); // Filtra números, incluindo pontos e vírgulas
        numero = parseFloat(valorNumerico.replace(/\./g, '').replace(',', '.'));
    }

    const formatoNumerico = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(numero);

    return formatoNumerico;
}

function formatarPorcentagem(D13) {
const formattedValue = (value * 100).toLocaleString(undefined, {style: 'percent'});
console.log(formattedValue); // Output: "75%"
  }

function calcular() {
    const D10 = extrairNumeroDoElemento('D10');
    const B11 = extrairNumeroDoElemento('B11');
    const D11 = extrairNumeroDoElemento('D11');
    const B12 = extrairNumeroDoElemento('B12');
    const B10 = extrairNumeroDoElemento('B10');
    const B16 = extrairNumeroDoElemento('B16');
    const B17 = extrairNumeroDoElemento('B17');
    const B18 = extrairNumeroDoElemento('B18');
    const B19 = extrairNumeroDoElemento('B19');
    const B20 = extrairNumeroDoElemento('B20');
    const B21 = extrairNumeroDoElemento('B21');
    const B24 = extrairNumeroDoElemento('B24');
    const B25 = extrairNumeroDoElemento('B25');
    const B26 = extrairNumeroDoElemento('B26');
    const B27 = extrairNumeroDoElemento('B27');
    const C35 = extrairNumeroDoElemento('C35');
    const B39 = extrairNumeroDoElemento('B39');
    const B38 = extrairNumeroDoElemento('B38');
    const A38 = extrairNumeroDoElemento('A38');
    const A37 = extrairNumeroDoElemento('A37');
    const B32 = extrairNumeroDoElemento('B32');
    const A32 = extrairNumeroDoElemento('A32');
    const A31 = extrairNumeroDoElemento('A31');
    const D13 = extrairNumeroDoElemento('D13');
    const D14 = extrairNumeroDoElemento('D14');

    const D12 = D10 + B11 + D11 + B12;
    const B13 = B10 - D12;
    const C14 = (D13 / 100) * B10;
    const B22 = B16 + B17 + B18 + B19 + B20 + B21;
    const A15 = (C14 - B16) / D14;
    const B28 = B24 + B25 + B26 + B27;
    const D35 = (B10 / 100) * C35;
    const A35 = D35 + B39;
    const C38 = B38 * A38;
    const B37 = (A35 - C38) / A37;
    const C37 = ((A35 - C38) / A37) * A37;
    const C32 = B32 * A32;
    const C33 = B13 - B22 - B28 - A35 - C32;
    const B31 = C33 / A31;
    const C31 = B31 * A31;

    document.getElementById('D12').textContent = formatarMoeda(D12);
    document.getElementById('B13').textContent = formatarMoeda(B13);
    document.getElementById('C14').textContent = formatarMoeda(C14);
    document.getElementById('A15').textContent = formatarMoeda(A15);
    document.getElementById('B22').textContent = formatarMoeda(B22);
    document.getElementById('B28').textContent = formatarMoeda(B28);
    document.getElementById('D35').textContent = formatarMoeda(D35);
    document.getElementById('A35').textContent = formatarMoeda(A35);
    document.getElementById('C38').textContent = formatarMoeda(C38);
    document.getElementById('B37').textContent = formatarMoeda(B37);
    document.getElementById('C39').textContent = formatarMoeda(C37 + C38);
    document.getElementById('C37').textContent = formatarMoeda(C37);
    document.getElementById('C32').textContent = formatarMoeda(C32);
    document.getElementById('C33').textContent = formatarMoeda(C33);
    document.getElementById('B31').textContent = formatarMoeda(B31);
    document.getElementById('C31').textContent = formatarMoeda(C31);
}

// Chame a função de cálculo quando a página carregar
window.onload = calcular;
