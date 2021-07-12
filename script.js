// Ver cómo cambiar tiempo según vuelo... TODO ..some day, jajaja
var flights = [
{
  currency: "DOL",
  price: 128.67,
  carrier: "KL",
  time: "2h 30min",
  nodes: ["CDG 2017-05-30T09:35+02:00 AMS 2017-05-30T11:15+02:00"] },

{
  currency: "DOL",
  price: 138.70,
  carrier: "AF",
  time: "2h 30min",
  nodes: ["CDG 2017-05-30T12:35+02:00 AMS 2017-05-30T13:50+02:00"] },

{
  currency: "DOL",
  price: 151.41,
  carrier: "BA",
  time: "2h 30min",
  nodes: ["CDG 2017-05-30T11:40+02:00 AMS 2017-05-30T12:55+02:00"] },

{
  currency: "DOL",
  price: 174.70,
  carrier: "KL",
  time: "2h 30min",
  nodes: ["CDG 2017-05-30T18:35+02:00 AMS 2017-05-30T19:50+02:00"] },

{
  currency: "DOL",
  price: 204.70,
  carrier: "AF",
  time: "2h 30min",
  nodes: ["CDG 2017-05-30T11:40+02:00 AMS 2017-05-30T12:55+02:00"] }];



var carrier = {
  "AF": "Air France",
  "KL": "KLM Royal Dutch Airlines",
  "BA": "British Airways" };


var airports = [{ "name": "Aeropuerto Vichy-Charmeil", "city": "Vichy", "country": "Francia", "IATA": "VHY" }, { "name": "Aeropuerto Lyon-Bron", "city": "Lyon", "country": "Francia", "IATA": "LYN" }, { "name": "Aeropuerto Cannes-Mandelieu", "city": "Cannes", "country": "Francia", "IATA": "CEQ" }, { "name": "Aeropuerto Marseille Provence", "city": "Marseille", "country": "Francia", "IATA": "MRS" }, { "name": "Aeropuerto Internacional Charles de Gaulle", "city": "Paris", "country": "Francia", "IATA": "CDG" }, { "name": "Aeropuerto Toussus-le-Noble", "city": "Toussous-le-noble", "country": "Francia", "IATA": "TNF" }, { "name": "Aeropuerto Paris-Orly", "city": "Paris", "country": "Francia", "IATA": "ORY" }, { "name": "Aeropuerto Le Mans-Arnage", "city": "Le Mans", "country": "Francia", "IATA": "LME" }, { "name": "Aeropuerto Nantes Atlantique", "city": "Nantes", "country": "Francia", "IATA": "NTE" }, { "name": "Aeropuerto Nancy-Essey", "city": "Nancy", "country": "Francia", "IATA": "ENC" }, { "name": "Aeropuerto Internacional Frankfurt am Main", "city": "Frankfurt", "country": "Alemania", "IATA": "FRA" }, { "name": "Aeropuerto Hamburgo", "city": "Hamburgo", "country": "Alemania", "IATA": "HAM" }, { "name": "Aeropuerto Cologne Bonn", "city": "Cologne", "country": "Alemania", "IATA": "CGN" }, { "name": "Aeropuerto Internacional Munich", "city": "Munich", "country": "Alemania", "IATA": "MUC" }, { "name": "Aeropuerto Stuttgart", "city": "Stuttgart", "country": "Alemania", "IATA": "STR" }, { "name": "Aeropuerto Internacional Berlin-Tegel", "city": "Berlin", "country": "Alemania", "IATA": "TXL" }, { "name": "Aeropuerto Hannover", "city": "Hannover", "country": "Alemania", "IATA": "HAJ" }, { "name": "Aeropuerto Bremen", "city": "Bremen", "country": "Alemania", "IATA": "BRE" }, { "name": "Aeropuerto Frankfurt-Hahn", "city": "Hahn", "country": "Alemania", "IATA": "HHN" }, { "name": "Aeropuerto Dortmund", "city": "Dortmund", "country": "Alemania", "IATA": "DTM" }, { "name": "Aeropuerto Cork", "city": "Cork", "country": "Irlanda", "IATA": "ORK" }, { "name": "Aeropuerto Galway", "city": "Galway", "country": "Irlanda", "IATA": "GWY" }, { "name": "Aeropuerto Dublin", "city": "Dublin", "country": "Irlanda", "IATA": "DUB" }, { "name": "Aeropuerto Waterford", "city": "Waterford", "country": "Irlanda", "IATA": "WAT" }, { "name": "Amsterdam Airport Schiphol", "city": "Amsterdam", "country": "Holanda", "IATA": "AMS" }, { "name": "Aeropuerto Maastricht Aachen", "city": "Maastricht", "country": "Holanda", "IATA": "MST" }, { "name": "Aeropuerto Eindhoven", "city": "Eindhoven", "country": "Holanda", "IATA": "EIN" }, { "name": "Aeropuerto La Haya - Rotterdam", "city": "Rotterdam", "country": "Holanda", "IATA": "RTM" }, { "name": "Aeropuerto Internacional Belfast", "city": "Belfast", "country": "Reino Unido", "IATA": "BFS" }, { "name": "Aeropuerto Manchester", "city": "Manchester", "country": "Reino Unido", "IATA": "MAN" }, { "name": "Aeropuerto Southampton", "city": "Southampton", "country": "Reino Unido", "IATA": "SOU" }, { "name": "Aeropuerto London Heathrow", "city": "Londres", "country": "Reino Unido", "IATA": "LHR" }, { "name": "Aeropuerto Internacional Blackpool", "city": "Blackpool", "country": "Reino Unido", "IATA": "BLK" }, { "name": "Aeropuerto Newcastle", "city": "Newcastle", "country": "Reino Unido", "IATA": "NCL" }, { "name": "Aeropuerto London Stansted", "city": "Londres", "country": "Reino Unido", "IATA": "STN" }, { "name": "Aeropuerto Internacional Miami", "city": "Miami", "country": "USA", "IATA": "MIA" }, { "name": " Aeropuerto Internacional John F Kennedy", "city": "New York", "country": "USA", "IATA": "JFK" }, { "name": "Aeropuerto Internacional Piedmont Triad", "city": "Greensboro", "country": "USA", "IATA": "GSO" }, { "name": "Wings Field", "city": "Filadelfia", "country": "USA", "IATA": "BBX" }, { "name": "Hardwick Field", "city": "Cleveland", "country": "USA", "IATA": "HDI" }, { "name": "Warren Field", "city": "Washington", "country": "USA", "IATA": "OCW" }];

(function () {

  var _airports = _.groupBy(airports, o => o.country),
  selectIndex = [],
  selectData = [];

  _.each(_airports, (countryList, countryName) => {
    var firstLeter = countryName.split('')[0];
    selectData.push(`<li class="sep" data-index="${firstLeter}">${countryName}</li>`);
    selectIndex.push(`<li>${firstLeter}</li>`);

    _.each(countryList, (airport, i) => {
      selectData.push(`<li data-iata="${airport.IATA}" data-city="${airport.city}">
				${airport.IATA}, ${airport.name}</li>`);
    });
  });

  $('.select ul.select-index').html(_.uniq(selectIndex).join(''));
  $('.select ul.select-data').html(selectData.join(''));


  // Días calendario
  var days = [30];
  for (var i = 0; i < 31; i++) {days.push(i);}

  var daysRender = _.map(days, function (i) {
    return `<span>${i + 1}</span>`;
  });

  $('.calendar .days').html(daysRender.join(''));
  $('.calendar .days span').eq(8).addClass('checked');

  // Resultados de vuelos
  doFlightsRender(true);


  // Eventos
  // Open inputs
  $('.control:not(.open) .control-head').on('click', function (evt) {
    $(evt.currentTarget).parent('.control').addClass('open');
  });

  $('.control .close').on('click', function (evt) {
    var z = $(evt.currentTarget).closest('.control');
    setTimeout(() => {z.removeClass('open');}, 50);
  });

  // SpinnerInput acción de sumar/restar action
  $('.spinner button').on('click', function (evt) {
    var isAdding = evt.currentTarget.getAttribute('data-action') == 'plus',
    $input = $('input[name="passengers"]:checked'),
    $control = $input.siblings('div').find('span'),
    value = parseInt($control.text());

    if (isAdding)
    value++;else
    if (value !== 0)
    value--;

    $control.text(value);
  });

  // SelectInput find index
  $('.select-index').on('click', 'li', function (evt) {
    var index = evt.currentTarget.textContent,
    $nano = $(evt.currentTarget).parent('.select-index').siblings('.nano'),
    el = $nano.find(`li.sep[data-index="${index}"]`)[0];

    $nano.find('.nano-content').animate({ scrollTop: el.offsetTop }, 600);
  });

  // SelectInput set data
  $('.select-data').on('click', 'li:not(.sep)', function (evt) {
    var text = evt.currentTarget.textContent,
    iata = evt.currentTarget.getAttribute('data-iata'),
    $select = $(evt.currentTarget).closest('.select'),
    $nameContainer = $select.find('.airport-name');

    if ($nameContainer.data('role') == 'from') {
      var _iata = iata.split('');
      var div = $('.header .fromPlace').addClass('rotate');
      var span = $('.header .fromPlace span');
      span.eq(0).text(_iata[0]);
      span.eq(1).text(_iata[1]);
      span.eq(2).text(_iata[2]);
      setTimeout(() => div.removeClass('rotate'), 900);
      //$('.xfrom').text(iata);
    } else
    {
      var _iata = iata.split('');
      var div = $('.header .toPlace').addClass('rotate');
      var span = $('.header .toPlace span');
      span.eq(0).text(_iata[0]);
      span.eq(1).text(_iata[1]);
      span.eq(2).text(_iata[2]);
      setTimeout(() => div.removeClass('rotate'), 900);
      //$('.xto').text(iata);
    }

    $nameContainer.text(text);
    $select.toggleClass('open');

    $(evt.currentTarget).addClass('selected').siblings('li').removeClass('selected');
  });

  // Ingreso de la fecha
  $('.calendar .days span').on('click', function (evt) {
    var $this = $(evt.currentTarget),
    day = evt.currentTarget.textContent;

    $this.addClass('checked').siblings('span').removeClass('checked');

    var date = new Date(`5/${day}/2017`);
    var [wd, m, d] = date.toDateString().split(' ');
    $('.dateinput .control-item span').eq(0).text(`${wd.toUpperCase()}, ${d} ${m}`);
  });


  $('.btnBack').on('click', function (evt) {
    var wrap = document.querySelector('.wrap'),
    index = parseInt(wrap.getAttribute('data-pos'));

    $('.ticket button.btnBook').text('Reserve Vuelo');
    wrap.setAttribute('data-pos', index - 1);
  });

  // Botón de búsqueda
  $('.btnSearch').on('click', function (evt) {
    doFlightsRender(false);
    setTimeout(() => {
      document.querySelector('.wrap').setAttribute('data-pos', 1);
    }, 50);
  });

  $('.ticket button').on('click', function (evt) {
    var $button = $(evt.currentTarget);
    var $loader = $('.loader').show();
    $button.text('Reservando...');

    setTimeout(() => {
      $loader.hide();
      $button.html('<i class="zmdi zmdi-check-circle"></i> Vuelo Reservado');
      $button.addClass('success');
    }, 1200);
  });

  // Seleccione vuelo
  $('.list').on('click', 'article', function (evt) {
    var index = parseInt(evt.currentTarget.getAttribute('data-index')),
    flight = flights[index];

    var [from, t1, to, t2] = flight.nodes[0].split(' ');

    var p = $('.radio.passengers label span'),
    peopleTotal = 0,
    people = _.map(p, function (el, i) {
      var v = parseInt(el.textContent),
      str = '';

      if (i == 0 && v)
      str = `${v} Adulto`;
      if (i == 1 && v)
      str = `${v} Niño`;
      if (i == 2 && v)
      str = `${v} Jubilado`;

      peopleTotal += v;

      return str;
    });

    from = $('.fromPlace span').text();
    to = $('.toPlace span').text();

    var time1 = new Date(t1),
    time2 = new Date(t2);

    var clase = $('input[name="seat"]:checked').val(),
    dates = $('.dateinput .control-item span'),
    place1 = _.findWhere(airports, { IATA: from }),
    place2 = _.findWhere(airports, { IATA: to });

    var flightRender = `
			<div class="title">
				<div>
					<small>${time1.toLocaleTimeString().replace(':00', '')}</small>
					<span>${from}</span>
					<small>${place1.city}</small>
				</div>
				<span class="separator"><i class="zmdi zmdi-airplane"></i></span>
				<div>
					<small>${time2.toLocaleTimeString().replace(':00', '')}</small>
					<span>${to}</span>
					<small>${place2.city}</small>
				</div>
			</div>
			<div class="row">
				<div class="cell">
					<small>Pasajeros</small><span>${_.compact(people).join(',')}</span>
				</div>
				<div class="cell">
					<small>Clase</small><span>${clase}</span>
				</div>
			</div>
			<div class="row">
				<div class="cell">
					<small>Salida</small><span>${dates[0].textContent}</span>
				</div>
				<div class="cell">
					<small>Regreso</small><span>${dates[1].textContent}</span>
				</div>
			</div>
			<div class="row">
				<div class="cell">
					<small>Aerolínea</small><span>${carrier[flight.carrier]}</span>
				</div>
				<div class="cell">
				</div>
			</div>
			<div class="total">
				<small>Total</small> <span>&dollar;${(flight.price * peopleTotal).toFixed(2)}</span>
			</div>
		`;

    $('.ticket section').html(flightRender);
    setTimeout(() => {
      document.querySelector('.wrap').setAttribute('data-pos', 2);
    }, 50);
  });

  // Init scroll
  $(".nano").nanoScroller();


  function doFlightsRender(isInit) {
    var flightsRender = _.map(flights, function (o, i) {
      var sumText = "";
      var [from, t1, to, t2] = o.nodes[0].split(' ');

      var d1 = new Date(t1),
      d2 = new Date(t2);

      if (!isInit) {
        var ppl = $('.radio.passengers label span'),
        sum = parseInt(ppl.eq(0).text()) + parseInt(ppl.eq(1).text()) + parseInt(ppl.eq(2).text());

        sumText = `${sum} pax &dollar;${(o.price * sum).toFixed(2)}`;
        from = $('.fromPlace span').text();
        to = $('.toPlace span').text();
      }

      var img;
      if (o.carrier == 'KL')
      img = 'KL.png';else
      if (o.carrier == 'BA')
      img = 'BA.png';else

      img = 'AF.png';

      return `<article data-index="${i}">
				<div class="img">
					<img src="${img}" alt="ualogo" />
				</div>
				<div class="info">
					<span class="time">${o.time}</span>
					<span class="airline">
						${d1.toLocaleTimeString().replace(':00', '')} - 
						${d2.toLocaleTimeString().replace(':00', '')}
					</span>
					<span>${carrier[o.carrier]} ${from} - ${to}</span>
					<span>Sin Escalas</span>

					<h5><small>${sumText}</small> &dollar;${o.price}</h5>
				</div>
			</article>`;
    });

    $('.list .nano-content').html(flightsRender.join(''));
  }

})();