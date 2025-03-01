package com.dali186.springblog.global.common.util.exception;

import com.dali186.springblog.global.common.util.constant.CommonString;
import com.dali186.springblog.global.common.util.response.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalControllerAdvice {

    @ExceptionHandler(Exception.class)
    public ApiResponse<String> handleGlobalException(Exception ex) {

        return ApiResponse.error(CommonString.DEFAULT_EXCEPTION, HttpStatus.INTERNAL_SERVER_ERROR.value());
    }
}
