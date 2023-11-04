function formatarMoeda(numero) {
    return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calcular() {
    const D10 = parseFloat(document.getElementById('D10').textContent.replace('R$', '').replace(',', '.'));
    const B11 = parseFloat(document.getElementById('B11').textContent.replace('R$', '').replace(',', '.'));
    const D11 = parseFloat(document.getElementById('D11').textContent.replace('R$', '').replace(',', '.'));
    const B12 = parseFloat(document.getElementById('B12').textContent.replace('R$', '').replace(',', '.'));
    const B10 = parseFloat(document.getElementById('B10').textContent.replace('R$', '').replace(',', '.'));
    const B16 = parseFloat(document.getElementById('B16').textContent.replace('R$', '').replace(',', '.'));
    const B17 = parseFloat(document.getElementById('B17').textContent.replace('R$', '').replace(',', '.'));
    const B18 = parseFloat(document.getElementById('B18').textContent.replace('R$', '').replace(',', '.'));
    const B19 = parseFloat(document.getElementById('B19').textContent.replace('R$', '').replace(',', '.'));
    const B20 = parseFloat(document.getElementById('B20').textContent.replace('R$', '').replace(',', '.'));
    const B21 = parseFloat(document.getElementById('B21').textContent.replace('R$', '').replace(',', '.'));
    const B24 = parseFloat(document.getElementById('B24').textContent.replace('R$', '').replace(',', '.'));
    const B25 = parseFloat(document.getElementById('B25').textContent.replace('R$', '').replace(',', '.'));
    const B26 = parseFloat(document.getElementById('B26').textContent.replace('R$', '').replace(',', '.'));
    const B27 = parseFloat(document.getElementById('B27').textContent.replace('R$', '').replace(',', '.'));
    const C35 = parseFloat(document.getElementById('C35').textContent.replace('R$', '').replace(',', '.'));
    const B39 = parseFloat(document.getElementById('B39').textContent.replace('R$', '').replace(',', '.'));
    const B38 = parseFloat(document.getElementById('B38').textContent.replace('R$', '').replace(',', '.'));
    const A38 = parseFloat(document.getElementById('A38').textContent.replace('R$', '').replace(',', '.'));
    const A37 = parseFloat(document.getElementById('A37').textContent.replace('R$', '').replace(',', '.'));
    const B32 = parseFloat(document.getElementById('B32').textContent.replace('R$', '').replace(',', '.'));
    const A32 = parseFloat(document.getElementById('A32').textContent.replace('R$', '').replace(',', '.'));
    const A31 = parseFloat(document.getElementById('A31').textContent.replace('R$', '').replace(',', '.'));
    const D13 = parseFloat(document.getElementById('D13').textContent);
    const D14 = parseFloat(document.getElementById('D14').textContent);

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
    const C37 = B37 * A37;
    const C32 = B32 * A32;
    const C33 = B13 - B22 - B28 - A35 - C32;
    const B31 = C33 / A31;
    const C31 = B31 * A31;

    document.getElementById('D12').textContent = formatarMoeda(D12);
    document.getElementById('D13').textContent = D13.toFixed(2).replace('.', ',') + '%';
    document.getElementById('B13').textContent = formatarMoeda(B13);
    document.getElementById('C14').textContent = formatarMoeda(C14);
    document.getElementById('A15').textContent = formatarMoeda(A15);
    document.getElementById('B22').textContent = formatarMoeda(B22);
    document.getElementById('B28').textContent = formatarMoeda(B28);
    document.getElementById('C35').textContent = C35.toFixed(2).replace('.', ',') + '%';
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
