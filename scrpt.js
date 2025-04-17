const envelopeContainer = document.getElementById('envelope-container');
const letter = document.getElementById('letter');

envelopeContainer.addEventListener('click', () => {
    envelopeContainer.classList.toggle('open');
});
