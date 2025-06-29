$(document).ready(function () {
	/* 背番号*/
	const playerNumbers = ['4', '11', '13', '14', '15', '18', '19', '20', '24', '28', '30', '35', '37', '46', '50', '55', '56', '58', '61', '67', '68', '69', '91', '93', '96', '97', '0000', '0030'];

	playerNumbers.forEach(function (number) {
		const html = `
		<div class="col-md-2 text-center mb-5">
			<h3 class='border-white border-bottom pb-2'>${number}</h3>
			<img src="img/player/${number}.png" class="img-fluid" alt="Player ${number}">
		</div>
		`;
		$('#rowPlayerList').append(html);
	});

});