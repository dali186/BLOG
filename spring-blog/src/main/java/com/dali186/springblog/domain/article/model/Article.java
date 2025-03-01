package com.dali186.springblog.domain.article.model;

import com.dali186.springblog.domain.article.dto.ArticleDto;
import com.dali186.springblog.global.common.util.domain.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Article extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long articleSn;

    @Column(length = 15, nullable = false)
    private Long memberSn;

    @Column(length = 30, nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(length = 2, nullable = false)
    private Long categoryId;

    @Column(length = 2, nullable = false)
    private Long tagSn;

    public void updateArticleData(ArticleDto updatedArticleDto) {
        this.title = updatedArticleDto.getTitle();
        this.content = updatedArticleDto.getContent();
        this.categoryId = updatedArticleDto.getCategoryId();
    }
}
