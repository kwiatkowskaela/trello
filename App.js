var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': '2278',
	'X-Auth-Token': '5e4d75b8b68ece9337c32e4853727ef1'
};

$.ajaxSetup({
	headers: myHeaders
});
$.ajax({
	url: baseUrl + '/board',
	method: 'GET',
	success: function (response) {
		setupColumns(response.columns);
	}
});

function setupColumns(columns) {
	columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
		board.createColumn(col);
		setupCards(col, column.cards);
		//col.deleteColumn();
	});
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
		var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
		col.createCard(card);

		//col.deleteColumn();
	})
}
