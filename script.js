
    // Function to load the navbar.html into the page
    function loadNavbar() {
      fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
    }

    // Load navbar when the page loads
    loadNavbar();