package com.dali186.springblog.domain.article.repository;

import com.dali186.springblog.domain.article.model.Category;
import com.dali186.springblog.domain.article.model.Tag;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepositoryDSL {

    List<Category> findAllCategories();
    List<Tag> findAllTagsById(Long categorySn);
}
