package com.dali186.springblog.domain.article.controller;

import com.dali186.springblog.domain.article.service.ArticleService;
import com.dali186.springblog.global.common.util.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/vi/article")
public class ArticleController {

    private final ArticleService articleService;

    @GetMapping("/categories")
    public ApiResponse<?> getAllCategories() {

        return ApiResponse.success(articleService.getAllCategories());
    }

    @GetMapping("/tags/{categorySn}")
    public ApiResponse<?> getAllTags(@PathVariable Long categorySn) {

        return ApiResponse.success(articleService.getAllTagsById(categorySn));
    }

    @GetMapping("/interested")
    public ApiResponse<?> getInterestedArticles() {

        return ApiResponse.success(articleService.getTop5Article());
    }

    @GetMapping("/recently")
    public ApiResponse<?> getRecentArticles() {

        return ApiResponse.success(articleService.getAllArticles());
    }
}
