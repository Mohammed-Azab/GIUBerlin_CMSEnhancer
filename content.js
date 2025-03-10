const cards = document.querySelectorAll('.card.mb-4');

cards.forEach(card => {
    const nameElement = card.querySelector('strong');
    const button = card.querySelector('a');
    
    let name = nameElement ? nameElement.innerText.replace(/^\d{1,2}\s-\s/, '') : '';
    const fileExtension = button.getAttribute('href').split('.').pop();

    name = name.trim() + '.' + fileExtension;
    button.setAttribute('download', name);
    button.style.display = 'block';  // Use block for visibility if needed
});
