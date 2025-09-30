import { useState } from "react";
import './BookForm.scss';

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && author) {
            console.log(title, author);
        }
        setTitle('');
        setAuthor('');
    }

    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} type="text" name="author" />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default BookForm;