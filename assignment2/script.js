document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('book-form');
    const searchInput = document.getElementById('search');
    const bookList = document.getElementById('book-list');
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtn = document.getElementsByClassName('close')[0];
 
    let books = [];
 
    const renderBooks = (filteredBooks = books) => {
        bookList.innerHTML = '';
        filteredBooks.forEach((book, index) => {
            const card = document.createElement('li');
            card.classList.add('card');
            card.innerHTML = `
                <p><strong>Title:</strong> ${book.title}</p>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Year:</strong> ${book.year}</p>
                <button class="remove-button" onclick="removeBook(${index})">Remove</button>
            `;
            bookList.appendChild(card);
        });
    };
 
    const addBook = (title, author, genre, year) => {
        books.push({ title, author, genre, year });
        renderBooks();
    };
 
    window.removeBook = (index) => {
        books.splice(index, 1);
        renderBooks();
    };
 
    const searchBooks = (query) => {
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()) ||
            book.genre.toLowerCase().includes(query.toLowerCase()) ||
            book.year.toString().includes(query)
        );
        return filteredBooks;
    };
 
    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const genre = document.getElementById('genre').value;
        const year = document.getElementById('year').value;
        addBook(title, author, genre, year);
        bookForm.reset();
        modal.style.display = 'none';
    });
 
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        const filteredBooks = searchBooks(query);
        renderBooks(filteredBooks);
    });
 
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
 
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
 
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
 
    const fetchLatestBooks = async () => {
        try {
            const response = await fetch('https://openlibrary.org/subjects/fiction.json?limit=30');
            if (!response.ok) {
                throw new Error('Failed to fetch latest books');
            }
            const data = await response.json();
            books = data.works.map(work => ({
                title: work.title,
                author: work.authors[0]?.name || 'Unknown Author',
                genre: 'Fiction',
                year: new Date(work.first_publish_year).getFullYear()
            }));
            renderBooks();
        } catch (error) {
            console.error('Error fetching latest books:', error);
        }
    };
 
    setInterval(fetchLatestBooks, 10000);
    fetchLatestBooks();
});
