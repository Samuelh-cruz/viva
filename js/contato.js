enviarForm = (e) => {
  document.getElementById("enviar").disabled = true;
  setTimeout(function () {
    document.getElementById("enviar").disabled = false;
  }, 5000);
  e.preventDefault();
  axios
    .post("https://sites.relier.com.br/contato/enviar-formulario", {
      id_formulario: document.getElementById("id").value,
      nome_remetente: document.getElementById("nome_remetente").value,
      email_remetente: document.getElementById("email_remetente").value,
      assunto: document.getElementById("assunto").value,
      campo_customizado: [
        {
          key: "Telefone",
          value: document.getElementById("telefone_remetente").value,
        },
      ],
      corpo: document.getElementById("corpo").value,
    })
    .then(function (res) {
      document.getElementById("sucesso").style.display = "block";
      document.getElementById("form").style.display = "none";
    })
    .catch(function (err) {
      document.getElementById("erro").style.display = "block";
      document.getElementById("form").style.display = "none";
    });
};

enviarFormModal = (e) => {
  document.getElementById("enviar-modal").disabled = true;
  setTimeout(function () {
    document.getElementById("enviar-modal").disabled = false;
  }, 5000);
  e.preventDefault();
  axios
    .post("https://sites.relier.com.br/contato/enviar-formulario", {
      id_formulario: document.getElementById("id_modal").value,
      nome_remetente: document.getElementById("nome_remetente_modal").value,
      email_remetente: document.getElementById("email_remetente_modal").value,
      campo_customizado: [
        {
          key: "Telefone",
          value: document.getElementById("telefone_remetente_modal").value,
        },
      ],
      corpo: document.getElementById("corpo_modal").value,
      assunto: "Modal",
    })
    .then(function (res) {
      document.getElementById("sucesso-modal").style.display = "block";
      document.getElementById("modal").style.display = "none";
      document.getElementById("enviar-modal").style.display = "none";
      document.getElementById("fechar-modal").style.display = "block";
    })
    .catch(function (err) {
      document.getElementById("erro-modal").style.display = "block";
      document.getElementById("modal").style.display = "none";
    });
};

document.querySelectorAll(".telefone").forEach(function (el) {
  new Cleave(el, {
    phone: true,
    phoneRegionCode: "BR",
  });
});
