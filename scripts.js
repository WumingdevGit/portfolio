const projects = [
  {
    title: 'Discover Sudan — Tour Agency Web App',
    desc: 'A modern and visually appealing tour agency web application designed to showcase travel destinations across Sudan. Features clean layouts, responsive UI, and user-friendly navigation — ideal for promoting tours, packages, and customer experiences.',
    link: 'https://wumingdevgit.github.io/tour-agency/'
  },
  {
    title: 'Real Estate Property Management Website',
    desc: 'A functional real estate management platform where users can browse properties and apply multiple filters using JavaScript. Includes sorting by property type, price, and location, responsive layouts, and image galleries for a professional listings experience.',
    link: 'https://wumingdevgit.github.io/real-estate-webpage/'
  }
];

const projectsRoot = document.getElementById('projects');
projects.forEach(p => {
  const el = document.createElement('div');
  el.className = 'project';
  el.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><a href="${p.link}" target="_blank" rel="noopener">View on GitHub →</a>`;
  projectsRoot.appendChild(el);
});

document.getElementById('copyPortfolio').addEventListener('click', () => {
  const url = window.location.href.includes('file://') ? 'PASTE_YOUR_DEPLOYED_LINK_HERE' : window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('Portfolio link copied to clipboard. Paste it into WhatsApp!');
  });
});
