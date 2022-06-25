import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock();
    renderSearchFormBlock();
    renderSearchStubBlock();
});
/* Для тестирования user из localStorage */
localStorage.setItem('user', JSON.stringify({ username: 'Wade Warren', avatarUrl: '/img/avatar.png' }));
