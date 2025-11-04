// 渲染团队成员列表
function renderTeamMembers() {
    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid) return;

    teamGrid.innerHTML = '';

    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member';
        memberCard.onclick = () => {
            window.location.href = `detail.html?id=${member.id}`;
        };

        const avatar = document.createElement('div');
        avatar.className = 'member-avatar';
        const avatarImg = document.createElement('img');
        avatarImg.src = member.avatar || 'images/default-avatar.jpg';
        avatarImg.alt = member.name;
        avatarImg.onerror = function() {
            this.src = 'images/default-avatar.jpg';
        };
        avatar.appendChild(avatarImg);

        const name = document.createElement('div');
        name.className = 'member-name';
        name.textContent = member.name;

        const details = document.createElement('div');
        details.className = 'member-details';

        if (member.details) {
            member.details.forEach(detail => {
                const p = document.createElement('p');
                p.textContent = detail;
                details.appendChild(p);
            });
        } else if (member.description) {
            const p = document.createElement('p');
            p.textContent = member.description;
            details.appendChild(p);
        }

        memberCard.appendChild(avatar);
        memberCard.appendChild(name);
        memberCard.appendChild(details);

        teamGrid.appendChild(memberCard);
    });
}

// 页面加载完成后渲染
document.addEventListener('DOMContentLoaded', () => {
    renderTeamMembers();
});

