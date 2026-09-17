// =========================
// EVENTOS
// =========================

const eventos = [

    {
        nome: "Downtown Urban Club",
        categoria: "Festas",
        subcategoria: "Baladas",
        data: "Sextas e sábados",
        local: "Centro - Blumenau",
        imagem: "assets/festa.jpg",
        descricao: "Casa noturna com programação de festas e música.",
        recorrente: true
    },

    {
        nome: "Inside Club",
        categoria: "Festas",
        subcategoria: "Baladas",
        data: "Sextas e sábados",
        local: "Velha - Blumenau",
        imagem: "assets/festa.jpg",
        descricao: "Casa noturna com programação de festas e música.",
        recorrente: true
    },

    {
        nome: "The Garden Lounge",
        categoria: "Festas",
        subcategoria: "Baladas",
        data: "Quintas, sextas e sábados",
        local: "Velha - Blumenau",
        imagem: "assets/festa.jpg",
        descricao: "Bar e casa noturna com programação musical.",
        recorrente: true
    },

    {
        nome: "Alive Music Club",
        categoria: "Festas",
        subcategoria: "Música",
        data: "Conforme programação",
        local: "Salto Norte - Blumenau",
        imagem: "assets/show.jpg",
        descricao: "Casa com programação de música e eventos.",
        recorrente: true
    },

    {
        nome: "Septembierfest",
        categoria: "Festas",
        subcategoria: "Festa temática",
        data: "19/09/2026",
        local: "Rivage - Blumenau",
        imagem: "assets/festa.jpg",
        descricao: "Festa temática com open bar.",
        recorrente: false
    },

    {
        nome: "Lendas do Rock",
        categoria: "Shows",
        subcategoria: "Rock",
        data: "26/09/2026",
        local: "Teatro Carlos Gomes - Blumenau",
        imagem: "assets/show.jpg",
        descricao: "Edu Curti Banda & Orquestra.",
        recorrente: false
    },

    {
        nome: "Sunset Biergarten",
        categoria: "Shows",
        subcategoria: "Música",
        data: "26/09/2026",
        local: "Biergarten do Museu da Cerveja",
        imagem: "assets/show.jpg",
        descricao: "Evento com música, gastronomia e programação especial.",
        recorrente: false
    },

    {
        nome: "Feira da Estação",
        categoria: "Feiras",
        subcategoria: "Feira",
        data: "04/10/2026",
        local: "Estação Unifique - Blumenau",
        imagem: "assets/festa.jpg",
        descricao: "Feira com produtos, gastronomia e atrações.",
        recorrente: false
    },

    {
        nome: "Feira Brique",
        categoria: "Feiras",
        subcategoria: "Feira",
        data: "04/10/2026",
        local: "Rua XV de Novembro - Blumenau",
        imagem: "assets/festa.jpg",
        descricao: "Feira realizada na região central de Blumenau.",
        recorrente: false
    },

    {
        nome: "Oktoberfest Blumenau",
        categoria: "Festas",
        subcategoria: "Festa temática",
        data: "07/10 a 25/10/2026",
        local: "Parque Vila Germânica",
        imagem: "assets/oktoberfest.jpg",
        descricao: "41ª Oktoberfest de Blumenau.",
        recorrente: false
    },

    {
        nome: "Oktoberfest Run",
        categoria: "Esportes",
        subcategoria: "Corrida",
        data: "11/10/2026",
        local: "Blumenau",
        imagem: "assets/esporte.jpg",
        descricao: "Corrida com percursos de 3 km, 5 km e 10 km.",
        recorrente: false
    },

    {
        nome: "OktoberTech",
        categoria: "Palestras",
        subcategoria: "Tecnologia",
        data: "07/10/2026",
        local: "Centro de Inovação de Blumenau",
        imagem: "assets/show.jpg",
        descricao: "Abertura do OktoberTech com palestra sobre inovação.",
        recorrente: false
    }

];


// =========================
// ELEMENTOS DA PÁGINA
// =========================

const listaEventos = document.getElementById("listaEventos");

const filtros = document.querySelectorAll(".filtro");


// =========================
// ELEMENTOS DO MODAL
// =========================

const modalEvento = document.getElementById("modalEvento");

const fecharModal = document.getElementById("fecharModal");

const modalImagem = document.getElementById("modalImagem");

const modalCategoria = document.getElementById("modalCategoria");

const modalNome = document.getElementById("modalNome");

const modalData = document.getElementById("modalData");

const modalLocal = document.getElementById("modalLocal");

const modalDescricao = document.getElementById("modalDescricao");

const btnComoChegar = document.getElementById("btnComoChegar");


// =========================
// MOSTRAR EVENTOS
// =========================

function mostrarEventos(lista) {

    listaEventos.innerHTML = "";


    if (lista.length === 0) {

        listaEventos.innerHTML = `
            <p class="nenhum-evento">
                😕 Nenhum evento encontrado.
            </p>
        `;

        return;
    }


    lista.forEach((evento) => {

        const card = document.createElement("div");

        card.classList.add("evento-card");


        card.innerHTML = `

            <img
                src="${evento.imagem}"
                alt="${evento.nome}">

            <div class="evento-info">

                <span class="evento-categoria">
                    ${evento.categoria}
                </span>

                <h3>
                    ${evento.nome}
                </h3>

                <p>
                    📅 ${evento.data}
                </p>

                <p>
                    📍 ${evento.local}
                </p>

                <p>
                    ${evento.descricao}
                </p>

                <button class="btn-detalhes">
                    Ver detalhes
                </button>

            </div>

        `;


        listaEventos.appendChild(card);


        // =========================
        // BOTÃO VER DETALHES
        // =========================

        const botaoDetalhes =
            card.querySelector(".btn-detalhes");


        botaoDetalhes.addEventListener("click", function() {

            abrirDetalhes(evento);

        });

    });

}


// =========================
// ABRIR DETALHES
// =========================

function abrirDetalhes(evento) {

    modalImagem.src = evento.imagem;

    modalImagem.alt = evento.nome;

    modalCategoria.textContent =
        evento.categoria;

    modalNome.textContent =
        evento.nome;

    modalData.textContent =
        "📅 " + evento.data;

    modalLocal.textContent =
        "📍 " + evento.local;

    modalDescricao.textContent =
        evento.descricao;


    modalEvento.classList.add("ativo");


    // =========================
    // COMO CHEGAR
    // =========================

    btnComoChegar.onclick = function() {

        const endereco =
            encodeURIComponent(evento.local + ", Blumenau, SC");


        const mapa =
            "https://www.google.com/maps/search/?api=1&query="
            + endereco;


        window.open(mapa, "_blank");

    };

}


// =========================
// FECHAR MODAL
// =========================

fecharModal.addEventListener("click", function() {

    modalEvento.classList.remove("ativo");

});


// =========================
// CLICAR FORA DO MODAL
// =========================

modalEvento.addEventListener("click", function(event) {

    if (event.target === modalEvento) {

        modalEvento.classList.remove("ativo");

    }

});


// =========================
// TECLA ESC
// =========================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        modalEvento.classList.remove("ativo");

    }

});


// =========================
// FILTROS
// =========================

filtros.forEach(filtro => {

    filtro.addEventListener("click", function() {


        // Remove o ativo

        filtros.forEach(f => {

            f.classList.remove("ativo");

        });


        // Ativa o clicado

        this.classList.add("ativo");


        const categoria =
            this.dataset.categoria;


        if (categoria === "Todos") {

            mostrarEventos(eventos);

            return;

        }


        const eventosFiltrados =
            eventos.filter(evento => {

                return evento.categoria === categoria;

            });


        mostrarEventos(eventosFiltrados);

    });

});


// =========================
// INICIAR
// =========================

mostrarEventos(eventos);