package models;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class BookTest {

    private Book book;

    @Before
    public void setUp() throws Exception {
        book = new Book(1,"Title");
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void createBook() {
        //Book book = new Book(1,"Title");
        assertTrue(book.getId()==1);
        assertEquals("Title",book.getTitle());
    }
    @Test
    public void updateBook() {
        book.setTitle("New Title");
        assertEquals("New Title",book.getTitle());
    }
}