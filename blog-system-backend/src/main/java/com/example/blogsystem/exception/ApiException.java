package com.example.blogsystem.exception;

public class ApiException extends RuntimeException{

    public ApiException(String message) {
        super(message);
    }
}
