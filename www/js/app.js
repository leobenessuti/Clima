$('.mostrarPrev').on('click', function() {
	var idCidade = $('#selecao').val();
	$.ajax({
		url:'http://servicos.cptec.inpe.br/XML/cidade/'+idCidade+'/previsao.xml',
		error: function(erro) {
			alert(erro.responseText, 3000, 'redtext');
		},
		success: function(dados) {
			var contDiv =
			document.querySelector("#conteudo");
			$(dados).find('cidade').each(
				function() {

					var nomeCidade = $(this).find('nome');
					contDiv.innerHTML += "<h1> Cidade: " + nomeCidade.text() + " </h1><br />";

					$(dados).find('previsao').each(function() {
						var dia = $(this).find('dia');
						var min = $(this).find('minima');
						var max = $(this).find('maxima');
						contDiv.innerHTML += "Dia: " + dia.text() + 
											 " Min.: " + min.text() + 
											 " Max.: " + max.text() + "<br/>";
				});
			});
		}
	});
});