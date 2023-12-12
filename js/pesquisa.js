document.addEventListener("DOMContentLoaded", function () {
    const searchbar = document.getElementById('searchbar');
  
    searchbar.addEventListener('input', function () {
      searchBooks();
    });
  });
  
  function searchBooks() {
    const input = document.getElementById('searchbar').value.trim().toLowerCase();
    const cardLivros = document.querySelectorAll('.card-livro');
    const invisibleCard = document.getElementById('invisibleCard');
    let livroEncontrado = false;
  
    cardLivros.forEach(cardLivro => {
      const tituloLivro = cardLivro.querySelector('.titulo-livro').textContent.trim().toLowerCase();
  
      if (tituloLivro.includes(input)) {
        cardLivro.style.display = "block";
        livroEncontrado = true;
      } else {
        cardLivro.style.display = "none";
      }
    });
  
    // Exibe o card invisível apenas se nenhum livro for encontrado
    invisibleCard.style.display = livroEncontrado ? "none" : "block";
  }