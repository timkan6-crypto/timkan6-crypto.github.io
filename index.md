---
layout: category
title: "PM细胞营养 - 所有文章"
category: "all"
---

<div class="hero-section">
    <div class="container">
        <h1 class="site-title">PM细胞营养</h1>
        <p class="site-subtitle">科学健康 · 专业可信</p>
        
        <div class="search-section">
            <div class="search-container">
                <input type="text" id="search-input" placeholder="搜索" class="search-input">
                <button onclick="searchArticles()" class="search-btn">搜索</button>
            </div>
        </div>
    </div>
</div>

<div class="articles-section">
    <div class="container">
        <h2 class="section-title">所有文章</h2>
        <div class="articles-grid" id="articles-grid">
            {% for post in site.posts %}
            <article class="article-card" data-category="{{ post.categories | first }}">
                <div class="article-icon">
                    {% if post.categories contains '产品介绍' %}
                    <i class="fas fa-capsules"></i>
                    {% elsif post.categories contains '营养知识' %}
                    <i class="fas fa-apple-alt"></i>
                    {% elsif post.categories contains 'business' %}
                    <i class="fas fa-briefcase"></i>
                    {% else %}
                    <i class="fas fa-file-alt"></i>
                    {% endif %}
                </div>
                
                <div class="article-content">
                    <h2 class="article-title">
                        <a href="{{ post.url }}">{{ post.title }}</a>
                    </h2>
                    <p class="article-excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p>
                    
                    <div class="article-meta">
                        <span class="article-date">
                            <i class="far fa-calendar"></i>
                            {{ post.date | date: "%Y-%m-%d" }}
                        </span>
                        <span class="article-read-time">
                            <i class="far fa-clock"></i>
                            {{ post.content | number_of_words | divided_by: 200 | plus: 1 }}分钟阅读
                        </span>
                        <span class="article-category">
                            <i class="fas fa-tag"></i>
                            {{ post.categories | first }}
                        </span>
                    </div>
                </div>
            </article>
            {% endfor %}
        </div>
        
        {% if site.posts.size == 0 %}
        <div class="no-articles">
            <i class="fas fa-inbox"></i>
            <h3>暂无文章</h3>
            <p>敬请期待更多精彩内容</p>
        </div>
        {% endif %}
    </div>
</div>
