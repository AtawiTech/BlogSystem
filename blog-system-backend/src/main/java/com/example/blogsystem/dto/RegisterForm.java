package com.example.blogsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@AllArgsConstructor @Data
public class RegisterForm {
    @NotEmpty(message = "Username can't be empty")
    private String username;
    @NotEmpty(message = "Password can't be empty")
    private String password;
    @Pattern(regexp = "(USER|ADMIN)")
    private String role;
    private String fullName;
    private String location;
    private Integer age;
}
