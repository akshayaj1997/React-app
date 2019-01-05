package daos;

import models.Book;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.persistence.TypedQuery;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public class BookDaoImpl implements BookDao {

    private final JPAApi jpaApi;

    @Inject
    public BookDaoImpl(JPAApi jpaApi) {
        this.jpaApi = jpaApi;
    }
    public Book create(Book book) throws IllegalAccessException {
        if(null == book) {
            throw new IllegalAccessException("The book must be provided");
        }
        jpaApi.em().persist(book);
        return book;
    }

    public Book update(Book book) throws IllegalAccessException {
        if(null == book){
            throw new IllegalAccessException("The Book must be provided");
        }
        if(null == book.getId()) {
            throw new IllegalAccessException("The book must be provided");
        }
        final Book existingBook = jpaApi.em().find(Book.class,book.getId());
        if(null == existingBook) {
            return null;
        }
        existingBook.setTitle(book.getTitle());

        jpaApi.em().persist(existingBook);

        return existingBook;
    }

    public Book delete(Integer id) throws IllegalAccessException {
        if(null == id) {
            throw new IllegalAccessException("Book id must be provided");
        }
        final Book existingBook = jpaApi.em().find(Book.class,id);
        if (null == existingBook) {
            return null;
        }

        jpaApi.em().remove(existingBook);

        return existingBook;

    }

    public Optional<Book> read(Integer id) { if (null == id) {
        throw new IllegalArgumentException("Id must be provided");
    }

        final Book book = jpaApi.em().find(Book.class, id);
        return book != null ? Optional.of(book) : Optional.empty();}

    public Collection<Book> all() {
        TypedQuery<Book> query = jpaApi.em().createQuery("SELECT b FROM Book b", Book.class);
        List<Book> books = query.getResultList();

        return books;
    }
}
