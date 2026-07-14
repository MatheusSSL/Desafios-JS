let contador = 0;
    const elementoContador = document.getElementById('contador-valor');
    const msgAlerta = document.getElementById('msg-alerta');
    const btnIncrementar = document.getElementById('btn-incrementar');
    const btnDecrementar = document.getElementById('btn-decrementar');

    function atualizarContador(Valor) {
        if (Valor < 0 || Valor > 10) {
            msgAlerta.textContent = "Limite atingido!";
        } else {
            contador = Valor;
            elementoContador.textContent = contador;
            msgAlerta.textContent = ""; 
        }
    }

    btnIncrementar.addEventListener('click', () => {
        atualizarContador(contador + 1);
    });

    btnDecrementar.addEventListener('click', () => {
        atualizarContador(contador - 1);
    });



    const tempInput = document.getElementById('temp-input');
    const tempResultado = document.getElementById('temp-resultado');

    tempInput.addEventListener('input', (e) => {
        const celsius = parseFloat(e.target.value);

        if (isNaN(celsius)) {
            tempResultado.textContent = "-";
            document.body.style.backgroundColor = "#f4f4f9";
            return;
        }

        const fahrenheit = (celsius * 9 / 5) + 32;
        tempResultado.textContent = `${fahrenheit.toFixed(1)} °F`;

        if (celsius > 30) {
            document.body.style.backgroundColor = "#f9c3c3"; 
        } else if (celsius < 15) {
            document.body.style.backgroundColor = "#c0deff"; 
        } else {
            document.body.style.backgroundColor = "#f4f4f9"; 
        }
    });





    const tarefaInput = document.getElementById('tarefa-input');
    const btnAdicionar = document.getElementById('btn-adicionar');
    const listaTarefas = document.getElementById('lista-tarefas');

    btnAdicionar.addEventListener('click', () => {
        const textoTarefa = tarefaInput.value.trim();

        if (textoTarefa === "") {
            alert("Por favor, digite uma tarefa!");
            return;
        }

        const novoItem = document.createElement('li');
        novoItem.textContent = textoTarefa;

        if (textoTarefa.toLowerCase() === 'estudar') {
            novoItem.classList.add('destaque-estudar');
        }

        listaTarefas.appendChild(novoItem);
        tarefaInput.value = "";
        tarefaInput.focus();
    });