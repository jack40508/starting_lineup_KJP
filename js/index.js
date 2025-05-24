let nowShowPlayer = 0;

$(document).ready(function () {
	$('#areaShowLineup').hide();
	
	// 綁定監聽事件
	$('select, input').on('change keyup', function () {
		checkAllInputsFilled();
	});

	// 初始檢查一次
	checkAllInputsFilled();

	$('#btnStart').click(function () {

		// 1~9位選手設定
		for (let i = 1; i <= 9; i++) {
			let position = $('#position_' + i).val(); // 位置數字
			let number = $('#num_' + i).val(); // 背號
			let name = $('#name_' + i).val(); // 姓名

			if (position && number && name) {
				// 設定位置圖片
				$('#areaShowLineup #position_' + i).attr('src', 'img/position/' + position + '.png');

				// 設定球員圖片（需額外找到對應的 <img>，本範例假設為 id="player_X"）
				let playerImgPath = 'img/player/' + number + '_' + name + '.png';

				checkImageExists(playerImgPath, function(exists) {
					if (exists) {
						$('#player_' + i).attr('src', playerImgPath);
					} else {
						$('#player_' + i).attr('src', 'img/player/default.png');
					}
				});
			}
		}

		// 投手設定
		let number = $('#num_10').val(); // 背號
		let name = $('#name_10').val(); // 姓名
		let playerImgPath = 'img/player/' + number + '_' + name + '.png';

		checkImageExists(playerImgPath, function(exists) {
			if (exists) {
				$('#player_10').attr('src', playerImgPath);
			} else {
				$('#player_10').attr('src', 'img/player/default.png');
			}
		});

		// 先隱藏輸入區，顯示展示區
		$('#areaInputData').hide();
		$('html, body').scrollTop(0);
		$('body').css('overflow', 'hidden');
		$('#areaShowLineup').show();
	});

	$('#showPlayer').click(function () {
		if(nowShowPlayer != 10) {
			nowShowPlayer++;
			console.log(nowShowPlayer);
			let target = $('#areaShowPlayer' + nowShowPlayer);
			target.removeClass('d-none').addClass('fade-drop-in');

			if(nowShowPlayer == 10) {
				$(this).prop('disabled', true);
			}
		}
	});
});

function checkAllInputsFilled() {
	let allFilled = true;

	for (let i = 1; i <= 9; i++) {
		const position = $('#position_' + i).val();
		const num = $('#num_' + i).val();
		const name = $('#name_' + i).val();

		if (!position || !num || !name) {
			allFilled = false;
			break;
		}
 	}

	// 投手欄位（第10筆）只需要檢查號碼和姓名
	const num10 = $('#num_10').val();
	const name10 = $('#name_10').val();

	if (!num10 || !name10) {
		allFilled = false;
	}

	if (allFilled) {
		$('#btnStart').prop('disabled', false);
	} else {
		$('#btnStart').prop('disabled', true);
	}
}

function checkImageExists(url, callback) {
	const img = new Image();
	img.onload = () => callback(true);
	img.onerror = () => callback(false);
	img.src = url;
}