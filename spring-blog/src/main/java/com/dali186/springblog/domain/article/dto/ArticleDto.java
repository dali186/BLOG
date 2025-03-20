package com.dali186.springblog.domain.article.dto;

import com.dali186.springblog.domain.article.model.Article;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ArticleDto {
    private Long articleSn;
    private Long memberSn;
    private String title;
    private String content;
    private Long categoryId;

    public Article toEntity() {

        return new Article(articleSn, memberSn, title, content, categoryId);
    }
}
