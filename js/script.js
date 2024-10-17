// Funções da Aba Flutuante
function homebarConfigClick() {
    let abaFlutuante = document.getElementById('abaFlutuante');
    estadoAbaFlutuante = window.getComputedStyle(abaFlutuante).display;
    switch (estadoAbaFlutuante) {
        case 'none':
            abaFlutuante.style.display = 'block';
            break;
        case 'block':
            abaFlutuante.style.display = 'none';
            break;
        default:
            abaFlutuante.style.display = 'none';
            break;
    }

    document.getElementById('abaFlutuanteIdioma').style.display = 'none';
 }

// Funções do Alternar Visualização da Aba Flutuante
document.getElementById('alternarVisualização').onclick = function() {
    if (document.getElementById('buttonExplore').style.backgroundColor === 'black') {
        document.getElementById('buttonExplore').style.backgroundColor = 'white';
        document.getElementById('buttonExplore').style.color = 'black';

        document.getElementById('sobreBackgroundContainer').style.backgroundColor = 'white';
        document.getElementById('sobreMain').style.color = 'black';
        document.getElementById('sobreSub').style.color = 'black';
        document.getElementById('sobreBackgroundContainer').style.boxShadow = '0px 0px 10px 15px white';

        document.getElementById('contatoContainer').style.backgroundColor = 'white';
        document.getElementById('contatoTitle').style.color = 'black';

    } else {
        document.getElementById('buttonExplore').style.backgroundColor = 'black';
        document.getElementById('buttonExplore').style.color = 'white';

        document.getElementById('sobreBackgroundContainer').style.backgroundColor = 'black';
        document.getElementById('sobreMain').style.color = 'white';
        document.getElementById('sobreSub').style.color = 'white';
        document.getElementById('sobreBackgroundContainer').style.boxShadow = '0px 0px 10px 15px black';

        document.getElementById('contatoContainer').style.backgroundColor = 'black';
        document.getElementById('contatoTitle').style.color = 'white';

        let imagemSobre = document.getElementById('imagemSobre');
        if (imagemSobre.src.endsWith('sobrePlaceholder.png')) {
            imagemSobre.src = '/img/sobrePlaceholderWhite.png';
        } else {
            imagemSobre.src = '/img/sobrePlaceholder.png';
        }


    }
}

// Função da  Opção Idioma da Aba Flutuante da Homebar
document.getElementById('alterarIdioma').onclick = function() {
    let alterarIdioma = document.getElementById('abaFlutuanteIdioma');
    estadoIdioma = window.getComputedStyle(abaFlutuanteIdioma).display;
    switch (estadoIdioma) {
        case 'none':
            alterarIdioma.style.display = 'block';
            break;
        case 'block':
            alterarIdioma.style.display = 'none';
            break;
        default:
            alterarIdioma.style.display = 'none';
            break;
    }


}

// Funções da Barra de Pesquisa da Homebar
addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let homebarSearch = document.getElementById('homebarSearch').value.toLowerCase();
        if (homebarSearch === 'sobre') {
            location.href = '#sobreMain';
        } else if (homebarSearch === 'contato') {
            location.href = '#contatoContainer';
        } else if (homebarSearch === 'home') {
            location.href = '#homeMain';
        }
    }
});

// Funções Ocultar Barra de Buscar
document.getElementById('alterarBarraBusca').onclick = function() {
    let barraBusca = document.getElementById('homebarSearch');
    estadoBarraBusca = window.getComputedStyle(barraBusca).display;
    switch (estadoBarraBusca) {
        case 'block':
            barraBusca.style.display = 'none';
            break;
        case 'none':
            barraBusca.style.display = 'block';
        default:
            barraBusca.style.display = 'block';
            break;
    }
}

// Funções do Button Explore
document.getElementById('buttonExplore').onclick = function() {
    location.href = '#sobreMain'
}

// Debug Console
console.log('Script carregado com sucesso!');