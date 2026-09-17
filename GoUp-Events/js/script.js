// =========================
// LOGIN
// =========================

const btnEntrar = document.getElementById("btnEntrar");
const modalLogin = document.getElementById("modalLogin");
const fecharLogin = document.getElementById("fecharLogin");


// Abrir login
if (btnEntrar && modalLogin) {

    btnEntrar.addEventListener("click", function () {

        modalLogin.style.display = "flex";

    });

}


// Fechar login
if (fecharLogin && modalLogin) {

    fecharLogin.addEventListener("click", function () {

        modalLogin.style.display = "none";

    });

}


// =========================
// CADASTRO
// =========================

const abrirCadastro = document.getElementById("abrirCadastro");
const btnCadastro = document.getElementById("btnCadastro");
const modalCadastro = document.getElementById("modalCadastro");
const fecharCadastro = document.getElementById("fecharCadastro");
const voltarLogin = document.getElementById("voltarLogin");


// Abrir cadastro pelo cabeçalho
if (abrirCadastro && modalCadastro) {

    abrirCadastro.addEventListener("click", function (event) {

        event.preventDefault();

        modalCadastro.style.display = "flex";

    });

}


// Abrir cadastro pelo login
if (btnCadastro && modalLogin && modalCadastro) {

    btnCadastro.addEventListener("click", function (event) {

        event.preventDefault();

        modalLogin.style.display = "none";

        modalCadastro.style.display = "flex";

    });

}


// Fechar cadastro
if (fecharCadastro && modalCadastro) {

    fecharCadastro.addEventListener("click", function () {

        modalCadastro.style.display = "none";

    });

}


// Voltar para login
if (voltarLogin && modalLogin && modalCadastro) {

    voltarLogin.addEventListener("click", function (event) {

        event.preventDefault();

        modalCadastro.style.display = "none";

        modalLogin.style.display = "flex";

    });

}


// =========================
// CONFIRMAR CADASTRO
// =========================

const confirmarCadastro =
    document.getElementById("confirmarCadastro");

if (confirmarCadastro) {

    confirmarCadastro.addEventListener("click", function (event) {

        event.preventDefault();


        const nome =
            document.getElementById("nomeCadastro").value.trim();

        const email =
            document.getElementById("emailCadastro").value.trim();

        const senha =
            document.getElementById("senhaCadastro").value;

        const confirmarSenha =
            document.getElementById("confirmarSenha").value;


        // Verificar campos
        if (
            nome === "" ||
            email === "" ||
            senha === "" ||
            confirmarSenha === ""
        ) {

            alert("Preencha todos os campos!");

            return;

        }


        // Verificar senhas
        if (senha !== confirmarSenha) {

            alert("As senhas não coincidem!");

            return;

        }


        // =========================
// VERIFICAR SE O E-MAIL JÁ EXISTE
// =========================

const emailCadastrado =
localStorage.getItem("email");

if (emailCadastrado &&
email.toLowerCase() === emailCadastrado.toLowerCase()) {

alert("Este e-mail já está cadastrado!");

return;
}


// =========================
// SALVAR CADASTRO
// =========================

localStorage.setItem("nome", nome);

localStorage.setItem("email", email);

localStorage.setItem("senha", senha);

        // Mensagem
        alert("Cadastro realizado com sucesso!");


        // Fechar cadastro
        if (modalCadastro) {

            modalCadastro.style.display = "none";

        }


        // Abrir login
        if (modalLogin) {

            modalLogin.style.display = "flex";

        }


        // Preencher e-mail no login
        const emailLogin =
            document.getElementById("emailLogin");

        if (emailLogin) {

            emailLogin.value = email;

        }


        // Limpar campos do cadastro
        document.getElementById("nomeCadastro").value = "";

        document.getElementById("emailCadastro").value = "";

        document.getElementById("senhaCadastro").value = "";

        document.getElementById("confirmarSenha").value = "";

    });

}


// =========================
// CONFIRMAR LOGIN
// =========================

const confirmarLogin =
    document.getElementById("confirmarLogin");

if (confirmarLogin) {

    confirmarLogin.addEventListener("click", function (event) {

        event.preventDefault();


        const email =
            document.getElementById("emailLogin").value.trim();

        const senha =
            document.getElementById("senhaLogin").value;


        // Buscar cadastro salvo
        const emailCadastrado =
            localStorage.getItem("email");

        const senhaCadastrada =
            localStorage.getItem("senha");


        // Verificar login
        if (
            email === emailCadastrado &&
            senha === senhaCadastrada
        ) {

            alert("Login realizado com sucesso!");

            window.location.href = "home.html";

        } else {

            alert("E-mail ou senha incorretos!");

        }

    });

}
// =========================
// LOGIN COM ENTER
// =========================

const emailLoginInput = document.getElementById("emailLogin");
const senhaLoginInput = document.getElementById("senhaLogin");

if (emailLoginInput && senhaLoginInput) {

    senhaLoginInput.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            confirmarLogin.click();

        }

    });

}