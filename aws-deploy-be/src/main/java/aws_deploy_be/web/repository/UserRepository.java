package aws_deploy_be.web.repository;

import org.springframework.data.repository.CrudRepository;
import aws_deploy_be.web.entity.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}