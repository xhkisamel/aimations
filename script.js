const searchForm = document.querySelector('.search-bar form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    // Perform search action here
    console.log(`Searching for: ${searchTerm}`);
    // You can also redirect to a search results page or make an AJAX request
  }
});
