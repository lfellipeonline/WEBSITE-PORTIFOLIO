// Funções da Aba Flutuante
function homebarConfigClick() {
     let abaFlutuante = document.getElementById('abaFlutuante');
     if (abaFlutuante.style.display === 'none' || abaFlutuante.style.display === '') {
         abaFlutuante.style.display = 'block';
     } else {
         abaFlutuante.style.display = 'none';
     }
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

// Funções do Button Explore
document.getElementById('buttonExplore').onclick = function() {
    location.href = '#sobreMain'
}

// Debug Console
console.log('Script carregado com sucesso!');