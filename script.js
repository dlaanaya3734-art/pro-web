document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    
    if (btn) {
        btn.addEventListener('click', function() {
            this.style.backgroundColor = '#2c3e50'; 
            this.innerText = 'Merci de votre visite !';
            console.log('Le bouton a été cliqué avec succès !');
        });
    }
});