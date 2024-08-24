document.addEventListener('DOMContentLoaded', () => {
    // Resources
    const resources = ['Garden Tools', 'Compost', 'Seeds'];
    const resourcesList = document.getElementById('resourcesList');

    if (resourcesList) {
        resourcesList.innerHTML = resources.map(resource => `<p>${resource}</p>`).join('');
    }

    // Forum
    const posts = [
        { title: 'How to Start a Community Garden', content: 'Here are some tips...' },
        { title: 'Best Organic Fertilizers', content: 'Consider these options...' }
    ];
    const forumPosts = document.getElementById('forumPosts');

    if (forumPosts) {
        forumPosts.innerHTML = posts.map(post => `
            <div>
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            </div>
        `).join('');
    }

    // Event Form Submission
    document.getElementById('forumPostForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        forumPosts.innerHTML += `
            <div>
                <h3>${title}</h3>
                <p>${content}</p>
            </div>
        `;
        event.target.reset();
    });

    // Events
    const events = ['Community Gardening Workshop - August 30', 'Urban Farming Meetup - September 15'];
    const eventsList = document.getElementById('eventsList');

    if (eventsList) {
        eventsList.innerHTML = events.map(event => `<p>${event}</p>`).join('');
    }
});
