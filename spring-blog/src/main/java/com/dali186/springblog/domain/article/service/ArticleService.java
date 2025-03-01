package com.dali186.springblog.domain.article.service;

import com.dali186.springblog.domain.article.dto.ArticleDto;
import com.dali186.springblog.domain.article.model.Article;
import com.dali186.springblog.domain.article.model.Category;
import com.dali186.springblog.domain.article.model.Tag;
import com.dali186.springblog.domain.article.repository.ArticleRepository;
import com.dali186.springblog.global.common.util.constant.CommonString;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * The type Article service.
 */
@Log4j2
@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;

    /* Article CRUD START */
    /**
     * article 등록
     *
     * @param article article
     * @return article article
     */
    @Transactional
    public Article insertArticle(Article article) {

        return articleRepository.save(article);
    }

    /**
     * article 전체 조회
     *
     * @return List<article> articleList
     */
    @Transactional
    public List<Article> getAllArticles() {

        return articleRepository.findAllByOrderByCreatedAtDesc();
    }

    /**
     * article interested 조회
     *
     * @return Article articleList
     */
    @Transactional
    public List<Article> getTop5Article() {

        return articleRepository.findTop5ByOrderByCreatedAtDesc();
    }

    /**
     * article 상세 조회
     *
     * @param articleId Long
     * @return Article articleList
     */
    @Transactional
    public Article getArticleById(Long articleId) {

        return articleRepository.findById(articleId)
                .orElseThrow(() -> new EntityNotFoundException(CommonString.ARTICLE_NOT_FOUND));
    }

    /**
     * article 수정
     *
     * @param newArticleDto ArticleDto
     * @return Article articleList
     */
    @Transactional
    public Article updateArticle(ArticleDto newArticleDto) {
        Article oldArticle = this.getArticleById(newArticleDto.getArticleSn());
        oldArticle.updateArticleData(newArticleDto);

        return articleRepository.save(oldArticle);
    }

    /**
     * article 삭제
     *
     * @param articleId Long
     */
    @Transactional
    public void deleteArticle(Long articleId) {

        articleRepository.deleteById(articleId);
    }

    /* Article CRUD END */

    /* Main Page API START */
    /**
     * 전체 카테고리 조회
     *
     * @return List<article> articleList
     */
    @Transactional
    public List<Category> getAllCategories() {

        return articleRepository.findAllCategories();
    }

    /**
     * 태그 조회
     *
     * @param categorySn Long
     * @return List<article> articleList
     */
    @Transactional
    public List<Tag> getAllTagsById(Long categorySn) {

        return articleRepository.findAllTagsById(categorySn);
    }
    /* Main Page API END */
}
