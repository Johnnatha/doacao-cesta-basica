export default {
  formatMoney: (int) => {
    if (!int) { return }
    const numero = int.toFixed(2).split('.');
    numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
  }
}