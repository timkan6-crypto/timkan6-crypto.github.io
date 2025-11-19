// 搜索功能
function searchArticles() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    const articlesGrid = document.getElementById('articles-grid');
    const articles = articlesGrid ? articlesGrid.querySelectorAll('.article-card') : document.querySelectorAll('.article-card');
    
    if (!searchTerm) {
        // 如果搜索框为空，显示所有文章
        articles.forEach(card => {
            card.style.display = 'flex';
        });
        return;
    }
    
    let foundResults = false;
    
    // 搜索文章
    articles.forEach(card => {
        const title = card.querySelector('.article-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.article-excerpt').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
            card.style.display = 'flex';
            foundResults = true;
        } else {
            card.style.display = 'none';
        }
    });
    
    // 显示无结果提示
    showNoResults(foundResults, searchTerm);
}

// 显示无结果提示
function showNoResults(foundResults, searchTerm) {
    // 移除现有的无结果提示
    const existingNoResults = document.querySelector('.no-results');
    if (existingNoResults) {
        existingNoResults.remove();
    }
    
    if (!foundResults) {
        const articlesSection = document.querySelector('.articles-section .container');
        const noResults = document.createElement('div');
        noResults.className = 'no-articles no-results';
        noResults.innerHTML = `
            <i class="fas fa-search"></i>
            <h3>未找到相关文章</h3>
            <p>没有找到包含"${searchTerm}"的文章</p>
        `;
        articlesSection.appendChild(noResults);
    }
}

// 回车键搜索
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchArticles();
            }
        });
        
        // 自动聚焦搜索框
        searchInput.focus();
    }
    
    // 添加加载动画
    const style = document.createElement('style');
    style.textContent = `
        .article-card {
            transition: all 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .article-card {
            animation: fadeIn 0.6s ease;
        }
        
        .no-results {
            animation: fadeIn 0.5s ease;
        }
    `;
    document.head.appendChild(style);
});
