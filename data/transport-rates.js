window.LifesTransport = {
  transportRates: {cancun:250,costa_mujeres_puerto_morelos:300,riviera_maya_norte:350,riviera_maya_sur:450},
  zoneLabels: {cancun:'Cancún',costa_mujeres_puerto_morelos:'Costa Mujeres y Puerto Morelos',riviera_maya_norte:'Riviera Maya Norte / Playa del Carmen',riviera_maya_sur:'Riviera Maya Sur / Tulum'},
  basePrices: {adult:850,child:450,infant:0},
  adultsPrice: 900,
  calculate(counts, zone, plan = 'family') {
    const rate = zone ? this.transportRates[zone] : 0;
    if (rate === undefined) throw new Error('Zona desconocida');
    const adult = counts.adult * ((plan === 'adults' ? this.adultsPrice : this.basePrices.adult) + rate);
    const child = (plan === 'adults' ? 0 : counts.child * (this.basePrices.child + rate));
    return {rate,adult,child,infant:0,total:adult+child};
  }
};
