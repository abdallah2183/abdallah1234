// script.js
// بيانات المباريات (يمكن استبدالها بAPI حقيقي)
const matches = [
    {
        id: 1,
        homeTeam: "الهلال",
        awayTeam: "النصر",
        homeScore: 2,
        awayScore: 1,
        time: "70'",
        isLive: true
    },
    {
        id: 2,
        homeTeam: "الاتحاد",
        awayTeam: "الأهلي",
        homeScore: 0,
        awayScore: 0,
        time: "21:00",
        isLive: false
    }
];

// عرض المباريات
function displayMatches(matches) {
    const container = document.getElementById('matchesContainer');
    container.innerHTML = '';

    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        
        matchCard.innerHTML = `
            ${match.isLive ? '<div class="live-badge">مباشر</div>' : ''}
            <div class="match-teams">
                <span>${match.homeTeam}</span>
                <div class="match-score">${match.homeScore} - ${match.awayScore}</div>
                <span>${match.awayTeam}</span>
            </div>
            <div class="match-time">${match.time}</div>
        `;

        container.appendChild(matchCard);
    });
}

// البحث في المباريات
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMatches = matches.filter(match => 
        match.homeTeam.toLowerCase().includes(searchTerm) ||
        match.awayTeam.toLowerCase().includes(searchTerm)
    );
    displayMatches(filteredMatches);
});

// عرض المباريات عند تحميل الصفحة
displayMatches(matches);

// تحديث النتائج كل 30 ثانية
setInterval(() => {
    // هنا يمكنك إضافة كود لجلب النتائج الجديدة من API
    displayMatches(matches);
}, 30000);
// script.js
const matches = [
    {
        id: 1,
        league: "الدوري السعودي",
        homeTeam: {
            name: "الهلال",
            logo: "hilal-logo.png",
            score: 2
        },
        awayTeam: {
            name: "النصر",
            logo: "nassr-logo.png",
            score: 1
        },
        time: "70'",
        isLive: true,
        stats: {
            possession: [60, 40],
            shots: [12, 8],
            shotsOnTarget: [5, 3],
            corners: [6, 4]
        }
    },
    // يمكن إضافة المزيد من المباريات
];

function createMatchCard(match) {
    return `
        <div class="match-card">
            ${match.isLive ? '<div class="live-badge"><i class="fas fa-circle"></i> مباشر</div>' : ''}
            <div class="league-name">
                <i class="fas fa-trophy"></i> ${match.league}
            </div>
            <div class="match-teams">
                <div class="team-info">
                    <img src="${match.homeTeam.logo}" alt="${match.homeTeam.name}" class="team-logo">
                    <span>${match.homeTeam.name}</span>
                </div>
                <div class="match-score">
                    ${match.homeTeam.score} - ${match.awayTeam.score}
                </div>
                <div class="team-info">
                    <img src="${match.awayTeam.logo}" alt="${match.awayTeam.name}" class="team-logo">
                    <span>${match.awayTeam.name}</span>
                </div>
            </div>
            <div class="match-time">
                <i class="far fa-clock"></i> ${match.time}
            </div>
            ${match.isLive ? createMatchStats(match.stats) : ''}
        </div>
    `;
}

function createMatchStats(stats) {
    return `
        <div class="match-stats">
            <div class="stat-item">
                <span>الاستحواذ</span>
                <div class="stat-bar">
                    <div class="stat-fill" style="width: ${stats.possession[0]}%"></div>
                </div>
                <div class="stat-numbers">${stats.possession[0]}% - ${stats.possession[1]}%</div>
            </div>
            <!-- يمكن إضافة المزيد من الإحصائيات -->
        </div>
    `;
}

function displayMatches(matches) {
    const container = document.getElementById('matchesContainer');
    container.innerHTML = matches.map(match => createMatchCard(match)).join('');
}

// تحديث المباريات كل 30 ثانية
setInterval(() => {
    // هنا يمكنك إضافة كود لجلب النتائج الجديدة من API
    displayMatches(matches);
}, 30000);

// تفعيل البحث
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMatches = matches.filter(match => 
        match.homeTeam.name.toLowerCase().includes(searchTerm) ||
        match.awayTeam.name.toLowerCase().includes(searchTerm) ||
        match.league.toLowerCase().includes(searchTerm)
    );
    displayMatches(filteredMatches);
});

// تفعيل فلتر الدوريات
document.querySelectorAll('.league-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.league-btn.active').classList.remove('active');
        btn.classList.add('active');
        const league = btn.textContent;
        const filteredMatches = league === 'الكل' 
            ? matches 
            : matches.filter(match => match.league === league);
        displayMatches(filteredMatches);
    });
});

// عرض المباريات عند تحميل الصفحة
displayMatches(matches);
// script.js
document.addEventListener('DOMContentLoaded', () => {
    // إضافة تأثيرات التمرير السلس
    AOS.init();

    // تحديث المباريات المباشرة
    setInterval(updateLiveMatches, 30000);

    // إضافة تأثيرات التحميل
    const matchCards = document.querySelectorAll('.match-card');
    matchCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// تأثيرات إضافية للتفاعل
const searchInput = document.querySelector('#searchInput');
searchInput.addEventListener('focus', () => {
    searchInput.parentElement.classList.add('focused');
});

searchInput.addEventListener('blur', () => {
    searchInput.parentElement.classList.remove('focused');
});
// script.js
// بيانات الدوريات في مصفوفة واحدة
const leagues = [
    {
        id: 1,
        name: "الدوري السعودي",
        logo: "https://assets.laliga.com/assets/logos/laliga-v/laliga-v-1200x1200.png",
        matchesCount: 12
    },
    {
        id: 2,
        name: "دوري أبطال آسيا",
        logo: "https://assets.laliga.com/assets/logos/laliga-v/laliga-v-1200x1200.png",
        matchesCount: 8
    },
    {
        id: 3,
        name: "الدوري الإنجليزي",
        logo: "https://assets.laliga.com/assets/logos/laliga-v/laliga-v-1200x1200.png",
        matchesCount: 6
    },
    {
        id: 4,
        name: "دوري أبطال أوروبا",
        logo: "https://assets.laliga.com/assets/logos/laliga-v/laliga-v-1200x1200.png",
        matchesCount: 4
    },
    {
        id: 5,
        name: "الدوري الإسباني",
        logo: "https://assets.laliga.com/assets/logos/laliga-v/laliga-v-1200x1200.png",
        matchesCount: 5
    },
    {
        id: 6,
        name: "الدوري الإيطالي",
        logo: "https://assets.laliga.com/assets/logos/laliga-v/laliga-v-1200x1200.png",
        matchesCount: 3
    }
];

// دالة لإنشاء بطاقة دوري
function createLeagueCard(league) {
    return `
        <div class="league-card" data-league-id="${league.id}">
            <div class="league-logo">
                <img src="${league.logo}" alt="${league.name}">
            </div>
            <h3>${league.name}</h3>
            <span class="matches-count">${league.matchesCount} مباراة اليوم</span>
        </div>
    `;
}

// دالة لعرض جميع الدوريات
function displayLeagues() {
    const leaguesGrid = document.getElementById('leaguesGrid');
    leaguesGrid.innerHTML = leagues.map(league => createLeagueCard(league)).join('');
}

// تشغيل العرض عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayLeagues);

// إضافة التفاعلات
document.getElementById('leaguesGrid').addEventListener('click', (e) => {
    const leagueCard = e.target.closest('.league-card');
    if (leagueCard) {
        const leagueId = leagueCard.dataset.leagueId;
        const league = leagues.find(l => l.id === parseInt(leagueId));
        if (league) {
            // يمكنك إضافة أي إجراء عند النقر على الدوري
            console.log(`تم اختيار ${league.name}`);
        }
    }
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    // إضافة الخلفية المتحركة
    const background = document.createElement('div');
    background.className = 'animated-background';
    document.body.prepend(background);

    // تحميل الدوريات
    loadLeagues();

    // تحميل المباريات المباشرة
    loadLiveMatches();

    // تحميل الأخبار
    loadNews();
});

// تحميل الدوريات
function loadLeagues() {
    const leagues = [
        {
            name: "الدوري السعودي",
            logo: "path/to/logo.png",
            matches: 12
        },
        // ... باقي الدوريات
    ];

    const leaguesGrid = document.getElementById('leaguesGrid');
    leagues.forEach(league => {
        const card = createLeagueCard(league);
        leaguesGrid.appendChild(card);
    });
}

// إنشاء بطاقة دوري
function createLeagueCard(league) {
    const card = document.createElement('div');
    card.className = 'league-card';
    card.innerHTML = `
        <img src="${league.logo}" alt="${league.name}" class="league-logo">
        <h3>${league.name}</h3>
        <span class="matches-count">${league.matches} مباراة اليوم</span>
    `;
    return card;
}

// تحميل الأخبار
function loadNews() {
    const news = [
        "عاجل: نتيجة مباراة القمة بين الهلال والنصر",
        "تشكيلة المنتخب السعودي للمباراة القادمة",
        "انتقالات جديدة في الدوري السعودي"
    ];

    const newsContent = document.querySelector('.news-content');
    newsContent.textContent = news.join(' | ');
}