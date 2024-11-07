document.getElementById('hotel-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const dataChegada = document.getElementById('data-chegada').value;
    const dataSaida = document.getElementById('data-saida').value;
    const quarto = document.getElementById('quarto').value;
  
    // Validação de campos
    if (!nome || !email || !dataChegada || !dataSaida || !quarto) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Validação da data de chegada e saída
    if (new Date(dataChegada) >= new Date(dataSaida)) {
      alert('A data de chegada deve ser anterior à data de saída.');
      return;
    }
  
    // Exibe mensagem de sucesso
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Reserva realizada com sucesso!</p>
                           <p><strong>Nome:</strong> ${nome}</p>
                           <p><strong>E-mail:</strong> ${email}</p>
                           <p><strong>Data de Chegada:</strong> ${dataChegada}</p>
                           <p><strong>Data de Saída:</strong> ${dataSaida}</p>
                           <p><strong>Tipo de Quarto:</strong> ${quarto}</p>`;
  });
  