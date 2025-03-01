package com.dali186.springblog.domain.article.service;

import com.dali186.springblog.domain.article.dto.ArticleDto;
import com.dali186.springblog.domain.article.model.Article;
import com.dali186.springblog.domain.article.model.Category;
import com.dali186.springblog.domain.article.model.Tag;
import com.dali186.springblog.domain.article.repository.ArticleRepository;
import com.dali186.springblog.global.common.util.CommonString;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * The type Article service.
 */
@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;


    /**
     * Insert article article.
     *
     * @param article article
     * @return saved article
     */
    @Transactional
    public Article insertArticle(Article article) {

        return articleRepository.save(article);
    }

    @Transactional
    public List<Article> getAllArticles() {

        return articleRepository.findAll();
    }

    @Transactional
    public Article getArticleById(Long articleId) {

        return articleRepository.findById(articleId)
                .orElseThrow(() -> new EntityNotFoundException(CommonString.ARTICLE_NOT_FOUND));
    }

    @Transactional
    public Article updateArticle(ArticleDto newArticleDto) {
        Article oldArticle = this.getArticleById(newArticleDto.getArticleSn());
        oldArticle.updateArticleData(newArticleDto);

        return articleRepository.save(oldArticle);
    }

    @Transactional
    public void deleteArticle(Long articleId) {

        articleRepository.deleteById(articleId);
    }

    @Transactional
    public List<Category> getAllCategories() {

        return articleRepository.findAllCategories();
    }

    @Transactional
    public List<Tag> getAllTagsById(Long categorySn) {

        return articleRepository.findAllTagsById(categorySn);
    }
}
