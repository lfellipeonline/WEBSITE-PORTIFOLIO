function homebarConfigClick() {
    let abaFlutuante = document.getElementById('abaFlutuante');
    if (abaFlutuante.style.display === 'none' || abaFlutuante.style.display === '') {
        abaFlutuante.style.display = 'block';
    } else {
        abaFlutuante.style.display = 'none';
    }
}

document.getElementById('buttonExplore').onclick = function() {
    location.href = '#sobreMain'
}

console.log('Script carregado com sucesso!');