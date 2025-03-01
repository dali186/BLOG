package com.dali186.springblog.domain.article.repository;

import com.dali186.springblog.domain.article.model.Category;
import com.dali186.springblog.domain.article.model.QCategory;
import com.dali186.springblog.domain.article.model.QTag;
import com.dali186.springblog.domain.article.model.Tag;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ArticleRepositoryDSLImpl implements ArticleRepositoryDSL{

    private final JPAQueryFactory queryFactory;

    @Override
    public List<Category> findAllCategories() {
        QCategory category = QCategory.category;

        return queryFactory
                .selectFrom(category)
                .fetch();
    }

    @Override
    public List<Tag> findAllTagsById(Long categorySn) {
        QTag tag = QTag.tag;

        return queryFactory
                .selectFrom(tag)
                .where(tag.categorySn.eq(categorySn))
                .fetch();
    }
}
