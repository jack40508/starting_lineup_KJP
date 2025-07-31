$(document).ready(function () {
	/* 背番号*/
	const playerNumbers = ['2', '4', '6', '7', '9', '10', '11', '13', '14', '15', '17', '18', '19', '20', '24', '28', '29', '30', '35', '37', '45', '46', '47', '50', '51', '52', '53', '55', '56', '58', '59', '61', '62', '65', '67', '68', '69', '77', '88', '90', '91', '93', '95', '96', '97', '98', '283', '0000', '0030'];

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