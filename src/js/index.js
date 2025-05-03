const idades = document.querySelectorAll(".idade");

idades.forEach((idade) => {
	const imagens = idade.querySelectorAll(".imagens img");
	const setaAvancar = idade.querySelector("#avancar");
	const setaRetroceder = idade.querySelector("#retroceder");
	let indexAtual = 0;

	// Função para atualizar quais imagens devem aparecer
	function atualizarImagem() {
		imagens.forEach((img, index) => {
			img.classList.remove("show");
			if (index === indexAtual) {
				img.classList.add("show");
			}
		});

		// Atualiza opacidade das setas
		if (indexAtual === 0) {
			setaRetroceder.classList.add("opaca");
		} else {
			setaRetroceder.classList.remove("opaca");
		}

		if (indexAtual === imagens.length - 1) {
			setaAvancar.classList.add("opaca");
		} else {
			setaAvancar.classList.remove("opaca");
		}
	}

	setaAvancar.addEventListener("click", () => {
		if (indexAtual < imagens.length - 1) {
			indexAtual++;
			atualizarImagem();
		}
	});

	setaRetroceder.addEventListener("click", () => {
		if (indexAtual > 0) {
			indexAtual--;
			atualizarImagem();
		}
	});

	atualizarImagem(); // Inicializa com a imagem correta
});
