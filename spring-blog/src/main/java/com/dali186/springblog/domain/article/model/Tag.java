package com.dali186.springblog.domain.article.model;

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
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagSn;

    @Column(length = 3, nullable = false)
    private Long categorySn;

    @Column(length = 20, nullable = false)
    private String name;
}
