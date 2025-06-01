package aws_deploy_be.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import aws_deploy_be.web.dto.ResponseDto;
import aws_deploy_be.web.dto.UserDto;
import aws_deploy_be.web.entity.User;
import aws_deploy_be.web.repository.UserRepository;

@Controller
@RequestMapping(path="/user")
public class UserController {
  @Autowired
  private UserRepository userRepository;

  @PostMapping(path="/add")
  public ResponseEntity<ResponseDto> addNewUser(@RequestBody UserDto userDto) {
    User n = new User();
    n.setName(userDto.getName());
    n.setEmail(userDto.getEmail());
    userRepository.save(n);
    
    ResponseDto responseDto = new ResponseDto();
    responseDto.setMessage("Saved");
    
    return ResponseEntity.ok(responseDto);
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<User> getAllUsers() {
    return userRepository.findAll();
  }
}