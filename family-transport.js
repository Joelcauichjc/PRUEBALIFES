(() => {
 const root=document.querySelector('#family-transport'); if(!root)return;
 const config=window.LifesTransport, hotels=window.LifesHotels;
 const money=n=>'$'+n.toLocaleString('es-MX')+' MXN';
 root.innerHTML=`<div class="family-quote"><fieldset><legend>Elige tu experiencia</legend><div class="transport-choice"><label><input type="radio" name="family-plan" value="family" checked> Familiar</label><label><input type="radio" name="family-plan" value="adults"> Solo adultos · 18+</label></div></fieldset><fieldset><legend>¿Necesitas transporte?</legend><div class="transport-choice"><label><input type="radio" name="family-transfer" value="no" checked> Sin transporte</label><label><input type="radio" name="family-transfer" value="yes"> Agregar transporte</label></div></fieldset><div class="family-passengers"><label>Adultos <small>12 años en adelante</small><input type="number" data-count="adult" min="0" max="99" value="2" step="1" required></label><label>Menores <small>5 a 11 años</small><input type="number" data-count="child" min="0" max="99" value="0" step="1" required></label><label>Infantes <small>0 a 4 años</small><input type="number" data-count="infant" min="0" max="99" value="0" step="1" required></label></div><div class="hotel-picker" hidden><label for="family-hotel">Selecciona tu hotel</label><div class="hotel-input-wrap"><input id="family-hotel" type="search" placeholder="Buscar hotel…" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="hotel-results"><button type="button" class="hotel-toggle" aria-label="Abrir listado de hoteles">⌄</button></div><div id="hotel-results" role="listbox" aria-label="Hoteles y puntos de recogida" hidden></div><p class="hotel-help">¿No encuentras tu hotel? Contáctanos por WhatsApp para confirmar disponibilidad y tarifa de transporte.</p><a class="text-link hotel-contact" href="https://wa.me/529982930766?text=Hola%2C%20quiero%20confirmar%20transporte%20para%20Isla%20Mujeres%20Familiar.%20Mi%20hotel%20es%3A" target="_blank" rel="noopener">Consultar mi hotel por WhatsApp ↗</a></div><p class="hotel-details" aria-live="polite"></p><div class="family-estimate" aria-live="polite"></div><p class="family-error" role="alert"></p><small>Marina: Hotel Imperial Las Perlas, km 2.5 aprox., Zona Hotelera de Cancún. Transporte redondo: hotel → marina → hotel.</small></div>`;
 const picker=root.querySelector('.hotel-picker'), input=root.querySelector('#family-hotel'),list=root.querySelector('#hotel-results'),toggle=root.querySelector('.hotel-toggle'),details=root.querySelector('.hotel-details'),estimate=root.querySelector('.family-estimate'),error=root.querySelector('.family-error'),link=document.querySelector('#plus-link');
 let selected=null,results=[],active=-1;
 const normalized=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const adultsOnly=()=>root.querySelector('[name="family-plan"]:checked').value==='adults';
 const needsTransfer=()=>root.querySelector('[name="family-transfer"]:checked').value==='yes';
 const counts=()=>Object.fromEntries([...root.querySelectorAll('[data-count]')].map(el=>[el.dataset.count,Number(el.value)]));
 const validCounts=()=>[...root.querySelectorAll('[data-count]')].every(el=>el.value!==''&&el.checkValidity())&&Object.values(counts()).reduce((a,b)=>a+b,0)>0;
 function close(){list.hidden=true;input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');active=-1;toggle.setAttribute('aria-label','Abrir listado de hoteles');}
 function update(){
  error.textContent='';const transfer=needsTransfer(),only=adultsOnly();picker.hidden=!transfer;
  root.querySelectorAll('[data-count="child"],[data-count="infant"]').forEach(el=>{el.disabled=only;el.closest('label').hidden=only;if(only)el.value='0';});
  root.querySelector('[data-count="adult"]').previousElementSibling.textContent=only?'18 años en adelante':'12 años en adelante';
  link.textContent=only?'Cotizar experiencia solo adultos':'Cotizar experiencia familiar';
  details.textContent=transfer&&selected?`Hotel seleccionado: ${selected.name} · Zona: ${config.zoneLabels[selected.zone]} · Transporte redondo: +${money(config.transportRates[selected.zone])} por persona`:transfer?'Selecciona un hotel de los resultados para calcular el transporte.':'Transporte: No requerido';
  const zone=transfer&&selected?selected.zone:null,c=counts(),price=config.calculate(c,zone,only?'adults':'family');
  estimate.replaceChildren();const title=document.createElement('strong');title.textContent=transfer&&!selected?'Precio sin transporte · falta seleccionar hotel':transfer?'Precio final con transporte':'Precio sin transporte';estimate.append(title);
  const per=document.createElement('p');per.textContent=only?`Adulto (18+): ${money(config.adultsPrice+price.rate)}`:`Adulto: ${money(config.basePrices.adult+price.rate)} · Menor: ${money(config.basePrices.child+price.rate)} · Infante: $0 MXN`;estimate.append(per);
  if(validCounts()){const total=document.createElement('strong');total.textContent=`Total estimado: ${money(price.total)}`;estimate.append(total);}
  const lines=[`Hola, quiero reservar el Catamarán Isla Mujeres ${only?'Solo Adultos':'Familiar'} con Life’s Tours.`,'',`Somos:\n${c.adult} adultos\n${c.child} menores\n${c.infant} infantes`,'',transfer&&selected?`Hotel: ${selected.name}\nZona: ${config.zoneLabels[selected.zone]}\nTransporte redondo: ${money(price.rate)} por persona`:'Transporte: No requerido','',`Precio estimado:\nAdultos: ${money(price.adult)}\nMenores: ${money(price.child)}\nInfantes: $0 MXN\nTotal estimado: ${money(price.total)}`,'','Quisiera confirmar disponibilidad.'];
  link.href='https://wa.me/529982930766?text='+encodeURIComponent(lines.join('\n'));link.target='_blank';link.rel='noopener';
 }
 function search(){
  results=hotels.filter(h=>normalized(h.name).includes(normalized(input.value.trim())));active=-1;list.replaceChildren();
  results.forEach((h,i)=>{const b=document.createElement('button');b.type='button';b.role='option';b.id='hotel-option-'+i;b.setAttribute('aria-selected','false');b.textContent=h.name;b.addEventListener('click',()=>choose(h));list.append(b);});
  if(!results.length){const p=document.createElement('p');p.textContent='No encontramos coincidencias. Consulta tu hotel por WhatsApp.';list.append(p);}
  list.hidden=false;input.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Cerrar listado de hoteles');
 }
 function choose(h){selected=h;input.value=h.name;update();input.focus();close();}
 input.addEventListener('input',()=>{selected=null;update();search();});input.addEventListener('focus',search);
 toggle.addEventListener('click',()=>{if(list.hidden)search();else close();});
 input.addEventListener('keydown',e=>{
  if(e.key==='Escape'){close();return;}
  if(e.key==='Tab'){close();return;}
  if(e.key==='Enter'){e.preventDefault();if(!list.hidden&&active>=0)choose(results[active]);return;}
  if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();if(list.hidden)search();if(!results.length)return;active=(active+(e.key==='ArrowDown'?1:-1)+results.length)%results.length;[...list.querySelectorAll('button')].forEach((b,i)=>b.setAttribute('aria-selected',String(i===active)));const b=list.children[active];input.setAttribute('aria-activedescendant',b.id);b.scrollIntoView({block:'nearest'});}
 });
 document.addEventListener('click',e=>{if(!picker.contains(e.target))close();});
 root.querySelectorAll('[name="family-transfer"],[name="family-plan"]').forEach(el=>el.addEventListener('change',()=>{close();update();}));root.querySelectorAll('[data-count]').forEach(el=>el.addEventListener('input',update));
 link.addEventListener('click',e=>{if(!validCounts()){e.preventDefault();error.textContent='Indica al menos un pasajero y cantidades enteras entre 0 y 99.';return;}if(needsTransfer()&&!selected){e.preventDefault();error.textContent='Selecciona tu hotel de la lista o consulta por WhatsApp para confirmar la tarifa.';input.focus();}});
 update();
})();
