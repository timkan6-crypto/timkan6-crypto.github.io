---
layout: category
title: "营养学知识"
permalink: /nutrition/
category: "营养知识"
---

<div class="hero-section">
    <div class="container">
        <h1 class="site-title">营养学知识</h1>
        <p class="site-subtitle">科学健康 · 实用指南</p>
        
        <div class="search-section">
            <div class="search-container">
                <input type="text" id="search-input" placeholder="搜索营养知识" class="search-input">
                <button onclick="searchArticles()" class="search-btn">搜索</button>
            </div>
        </div>
    </div>
</div>

<div class="articles-section">
    <div class="container">
        <h2 class="section-title">营养知识文章</h2>
        <div class="articles-grid" id="articles-grid">
            {% for post in site.posts %}
                {% if post.categories contains '营养知识' %}
                <article class="article-card" data-category="{{ post.categories | first }}">
                    <div class="article-icon">
                        <i class="fas fa-apple-alt"></i>
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
                        </div>
                    </div>
                </article>
                {% endif %}
            {% endfor %}
        </div>
        
        {% assign nutrition_posts = site.posts | where: "categories", "营养知识" %}
        {% if nutrition_posts.size == 0 %}
        <div class="no-articles">
            <i class="fas fa-apple-alt"></i>
            <h3>暂无营养知识文章</h3>
            <p>敬请期待更多营养学相关内容</p>
        </div>
        {% endif %}
    </div>
</div>
