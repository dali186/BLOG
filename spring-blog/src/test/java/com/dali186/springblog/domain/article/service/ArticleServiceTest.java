package com.dali186.springblog.domain.article.service;

import com.dali186.springblog.domain.article.dto.ArticleDto;
import com.dali186.springblog.domain.article.model.Article;
import com.dali186.springblog.domain.article.model.Category;
import com.dali186.springblog.domain.article.model.Tag;
import com.dali186.springblog.domain.article.repository.ArticleRepository;
import com.dali186.springblog.global.common.util.CommonString;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ArticleServiceTest {

    @InjectMocks
    private ArticleService articleService;

    @Mock
    private ArticleRepository articleRepository;

    private ArticleDto articleDto;
    private List<Category> categories;
    private List<Tag> tags;

    @BeforeEach
    public void setUp() {
        articleDto = ArticleDto.builder()
                .articleSn(1L)
                .memberSn(1L)
                .title("articleTitle")
                .content("articleContent")
                .categoryId(2L)
                .build();

        categories = new ArrayList<>();
        categories.add(new Category(1L, "프로그래밍 언어"));
        categories.add(new Category(2L, "웹 개발"));
        categories.add(new Category(3L, "프레임워크"));
        categories.add(new Category(4L, "라이브러리"));
        categories.add(new Category(5L, "데이터베이스"));
        categories.add(new Category(6L, "인프라"));
        categories.add(new Category(7L, "DevOps"));
        categories.add(new Category(8L, "알고리즘"));

        tags = new ArrayList<>();
        tags.add(new Tag(1L, 1L, "Java"));
        tags.add(new Tag(1L, 2L, "JavaScript"));
        tags.add(new Tag(1L, 3L, "Python"));
    }

    @Test
    @DisplayName("아티클 작성 테스트")
    void testInsertArticle() {
        // given
        /* Mock에서 반환될 값 미리 지정 (예상) */
        Article expectedArticle = articleDto.toEntity();
        when(articleRepository.save(any(Article.class))).thenReturn(expectedArticle);

        // when
        Article writtenArticle = articleService.insertArticle(articleDto.toEntity());

        // then
        assertEquals(expectedArticle.getTitle(), writtenArticle.getTitle());
        assertEquals(expectedArticle.getContent(), writtenArticle.getContent());
    }

    @Test
    @DisplayName("아티클 조회 테스트")
    void testSelectArticle() {
        //given
        Long articleId = 1L;
        when(articleRepository.findById(any(Long.class))).thenReturn(Optional.ofNullable(articleDto.toEntity()));
        //when
        Article selectedArticle = articleService.getArticleById(articleId);
        //then
        assertEquals(articleDto.toEntity().getArticleSn(), selectedArticle.getArticleSn());
        assertEquals(articleDto.toEntity().getMemberSn(), selectedArticle.getMemberSn());
    }

    @Test
    @DisplayName("아티클 조회 테스트: 데이터 Not Found")
    void testSelectArticle_NotFound() {
        //given
        Long articleId = 1L;
        when(articleRepository.findById(any(Long.class))).thenReturn(Optional.empty());
        //when
        EntityNotFoundException exception = assertThrows(EntityNotFoundException.class,
                () -> articleService.getArticleById(articleId));
        //then
        assertEquals(CommonString.ARTICLE_NOT_FOUND, exception.getMessage());
    }

    @Test
    @DisplayName("아티클 리스트 조회 테스트")
    void testSelectArticleList() {
        // given
        List<Article> mockArticles = Arrays.asList(articleDto.toEntity(), articleDto.toEntity());
        when(articleRepository.findAll()).thenReturn(mockArticles);
        // when
        List<Article> articles = articleService.getAllArticles();
        // then
        assertNotNull(articles);
        assertEquals(2, articles.size());
        assertEquals("articleTitle", articles.get(0).getTitle());
    }

    @Test
    @DisplayName("아티클 수정 테스트")
    void testUpdateArticle() {
        //TODO 계정에 따른
        // given
        ArticleDto oldArticleDto = articleDto;
        ArticleDto newArticleDto = ArticleDto.builder()
                .articleSn(1L)
                .memberSn(1L)
                .title("changed")
                .content("changed")
                .categoryId(3L)
                .build();
        when(articleRepository.findById(any(Long.class))).thenReturn(Optional.ofNullable(oldArticleDto.toEntity()));
        when(articleRepository.save(any(Article.class))).thenReturn(newArticleDto.toEntity());
        // when
        Article newArticle = articleService.updateArticle(newArticleDto);
        // then
        assertEquals("changed", newArticle.getTitle());
        assertEquals("changed", newArticle.getContent());
        assertEquals(articleDto.getArticleSn(), newArticle.getArticleSn());
    }

    @Test
    @DisplayName("아티클 삭제 테스트")
    void testDeleteArticle() {
        // given
        Long articleId = 1L;
        doNothing().when(articleRepository).deleteById(articleId);
        // when
        articleService.deleteArticle(articleId);
        // then
        verify(articleRepository).deleteById(articleId);
    }

    @Test
    @DisplayName("전체 카테고리 리스트 조회 테스트")
    void testSelectCategories() {
        // given
        when(articleRepository.findAllCategories()).thenReturn(categories);
        // when
        List<Category> selectedCategories = articleService.getAllCategories();
        // then
        assertEquals(selectedCategories.get(2).getCategorySn(), categories.get(2).getCategorySn());
    }

    @Test
    @DisplayName("카테고리 번호에 따른 태그 조회")
    void testSelectTagsByCategorySn() {
        // given
        Long categorySn = 1L;
        when(articleRepository.findAllTagsById(categorySn)).thenReturn(tags);
        // when
        List<Tag> selectedTags = articleService.getAllTagsById(categorySn);
        // then
        assertEquals(selectedTags.get(2).getCategorySn(), tags.get(2).getCategorySn());
    }
}