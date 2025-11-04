// 获取URL参数
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 渲染员工详情页
function renderMemberDetail() {
    const memberId = parseInt(getUrlParameter('id'));
    if (!memberId) {
        document.body.innerHTML = '<div style="padding: 20px; text-align: center;">未找到员工信息</div>';
        return;
    }

    const member = teamMembers.find(m => m.id === memberId);
    if (!member) {
        document.body.innerHTML = '<div style="padding: 20px; text-align: center;">未找到员工信息</div>';
        return;
    }

    // 渲染个人信息卡片
    renderProfileCard(member);

    // 渲染基本信息
    if (member.basicInfo) {
        renderBasicInfo(member.basicInfo);
    }

    // 渲染自我介绍
    if (member.introduction) {
        renderIntroduction(member.introduction);
    }

    // 渲染工作生活照
    if (member.photos && member.photos.length > 0) {
        renderPhotos(member.photos);
    }

    // 渲染资格证照片
    if (member.certificates && member.certificates.length > 0) {
        renderCertificates(member.certificates);
    }
}

// 渲染个人信息卡片
function renderProfileCard(member) {
    const profileCard = document.getElementById('profileCard');
    if (!profileCard) return;

    profileCard.innerHTML = `
        <div class="profile-image">
            <img src="${member.avatar || 'images/default-avatar.jpg'}" alt="${member.name}" onerror="this.src='images/default-avatar.jpg'">
        </div>
        <div class="profile-info">
            <div class="profile-name">${member.name}</div>
            ${member.hometown ? `<div class="profile-meta">${member.hometown}人</div>` : ''}
            ${member.age && member.experience ? `<div class="profile-meta">${member.age}岁 | ${member.experience}</div>` : ''}
            ${member.status ? `<div class="profile-status">${member.status}</div>` : ''}
        </div>
    `;

    if (member.type) {
        const typeDiv = document.createElement('div');
        typeDiv.className = 'profile-type';
        typeDiv.textContent = `类型: ${member.type}`;
        profileCard.parentNode.insertBefore(typeDiv, profileCard.nextSibling);
    }
}

// 渲染基本信息
function renderBasicInfo(basicInfo) {
    const basicInfoDiv = document.getElementById('basicInfo');
    if (!basicInfoDiv) return;

    const infoItems = [
        { label: '学历', value: basicInfo.education },
        { label: '民族', value: basicInfo.ethnicity },
        { label: '属相', value: basicInfo.zodiac },
        { label: '星座', value: basicInfo.horoscope },
        { label: '性别', value: basicInfo.gender },
        { label: '婚姻状况', value: basicInfo.maritalStatus },
        { label: '语言', value: basicInfo.language },
        { label: '编号', value: basicInfo.id },
        { label: '住家情况', value: basicInfo.livingSituation },
        { label: '现住区域', value: basicInfo.currentArea }
    ];

    basicInfoDiv.innerHTML = '';
    infoItems.forEach(item => {
        if (item.value) {
            const infoItem = document.createElement('div');
            infoItem.className = 'info-item';
            infoItem.innerHTML = `
                <div class="info-label">${item.label}</div>
                <div class="info-value">${item.value}</div>
            `;
            basicInfoDiv.appendChild(infoItem);
        }
    });
}

// 渲染自我介绍
function renderIntroduction(intro) {
    const introText = document.getElementById('introText');
    if (!introText) return;
    introText.textContent = intro;
}

// 渲染工作生活照
function renderPhotos(photos) {
    const photoGrid = document.getElementById('photoGrid');
    const photoCount = document.getElementById('photoCount');
    if (!photoGrid) return;

    if (photoCount) {
        photoCount.textContent = photos.length;
    }

    photoGrid.innerHTML = '';
    photos.forEach((photo, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.onclick = () => {
            // 可以在这里添加图片预览功能
            window.open(photo, '_blank');
        };

        const img = document.createElement('img');
        img.src = photo;
        img.alt = `工作照 ${index + 1}`;
        img.onerror = function() {
            this.src = 'images/default-photo.jpg';
        };

        photoItem.appendChild(img);
        photoGrid.appendChild(photoItem);
    });
}

// 渲染资格证照片
function renderCertificates(certs) {
    const certGrid = document.getElementById('certGrid');
    const certCount = document.getElementById('certCount');
    if (!certGrid) return;

    if (certCount) {
        certCount.textContent = certs.length;
    }

    certGrid.innerHTML = '';
    certs.forEach((cert, index) => {
        const certItem = document.createElement('div');
        certItem.className = 'photo-item';
        certItem.onclick = () => {
            window.open(cert, '_blank');
        };

        const img = document.createElement('img');
        img.src = cert;
        img.alt = `资格证 ${index + 1}`;
        img.onerror = function() {
            this.src = 'images/default-cert.jpg';
        };

        certItem.appendChild(img);
        certGrid.appendChild(certItem);
    });
}

// 页面加载完成后渲染详情
document.addEventListener('DOMContentLoaded', () => {
    renderMemberDetail();
});

