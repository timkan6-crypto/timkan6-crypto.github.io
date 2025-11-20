---
layout: category
title: "事业机会"
permalink: /business/
category: "事业机会"
---

<div class="hero-section">
    <div class="container">
        <h1 class="site-title">事业机会</h1>
        <p class="site-subtitle">创业平台 · 成就未来</p>
        
        <div class="search-section">
            <div class="search-container">
                <input type="text" id="search-input" placeholder="搜索事业机会" class="search-input">
                <button onclick="searchArticles()" class="search-btn">搜索</button>
            </div>
        </div>
    </div>
</div>

调试测试
<!-- 在business.md的调试区域添加 -->
<h4>所有文章详细列表:</h4>
<ul>
{% for post in site.posts %}
    <li>
        <strong>{{ post.date | date: "%Y-%m-%d" }}</strong> - 
        "{{ post.title }}" - 
        分类: [{{ post.categories | join: ", " }}] -
        路径: {{ post.path }}
    </li>
{% endfor %}
</ul>

<!-- 详细调试信息 -->
<div style="background: #e3f2fd; padding: 15px; margin: 20px 0; border-radius: 8px;">
    <h3>🔍 详细调试信息</h3>
    <p><strong>总文章:</strong> {{ site.posts | size }}</p>
    <p><strong>business分类文章:</strong> {{ site.categories.business | size }}</p>
    
    <h4>所有分类:</h4>
    <ul>
    {% for category in site.categories %}
        <li><strong>"{{ category[0] }}"</strong> - {{ category[1] | size }}篇文章</li>
    {% endfor %}
    </ul>
    
    <h4>business分类文章列表:</h4>
    <ul>
    {% for post in site.categories.business %}
        <li>{{ post.date | date: "%Y-%m-%d" }} - {{ post.title }}</li>
    {% else %}
        <li>没有找到business分类的文章</li>
    {% endfor %}
    </ul>
</div>

<div class="articles-section">
    <div class="container">
        <h2 class="section-title">事业机会文章</h2>
        <div class="articles-grid" id="articles-grid">
            {% for post in site.posts %}
                {% if post.categories contains '事业机会' %}
                <article class="article-card" data-category="{{ post.categories | first }}">
                    <div class="article-icon">
                        <i class="fas fa-briefcase"></i>
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
        
        {% assign business_posts = site.posts | where: "categories", "事业机会" %}
        {% if business_posts.size == 0 %}
        <div class="no-articles">
            <i class="fas fa-briefcase"></i>
            <h3>暂无事业机会文章</h3>
            <p>敬请期待更多事业机会相关内容</p>
        </div>
        {% endif %}
    </div>
</div>
