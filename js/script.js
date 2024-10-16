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
    }
}


// Funções do Button Explore
document.getElementById('buttonExplore').onclick = function() {
    location.href = '#sobreMain'
}





// Debug Console
console.log('Script carregado com sucesso!');