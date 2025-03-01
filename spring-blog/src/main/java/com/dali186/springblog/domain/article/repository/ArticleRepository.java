package com.dali186.springblog.domain.article.repository;

import com.dali186.springblog.domain.article.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long>, ArticleRepositoryDSL {
}
