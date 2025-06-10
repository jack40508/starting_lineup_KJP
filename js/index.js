let nowShowPlayer = 0;
let pNumber = '';

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

			if (position && number) {
				// 設定位置圖片
				$('#areaShowLineup #position_' + i).attr('src', 'img/position/' + position + '.png');

				// 設定球員圖片（需額外找到對應的 <img>，本範例假設為 id="player_X"）
				let playerImgPath = 'img/player/' + number + '.png';

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
		pNumber = $('#num_10').val(); // 背號
		let playerImgPath = 'img/player/' + pNumber + '.png';

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
			let target = $('#areaShowPlayer' + nowShowPlayer);
			target.removeClass('d-none').addClass('fade-drop-in');

			if(nowShowPlayer == 10 || (nowShowPlayer == 9 && pNumber == '')) {
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

		if (!position || !num ) {
			allFilled = false;
			break;
		}
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