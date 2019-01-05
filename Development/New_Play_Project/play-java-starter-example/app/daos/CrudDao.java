package daos;

import java.util.Collection;
import java.util.Optional;

public interface CrudDao< E, K> {
    E create(E Entity) throws IllegalAccessException;
    E update(E Entity) throws IllegalAccessException;
    E delete(K id) throws IllegalAccessException;
    Optional<E> read(K id);
    Collection<E> all();

}
