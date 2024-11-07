document.addEventListener('DOMContentLoaded', () => {
    // ニュースデータを定義
    const newsData = [
        { title: "米株大幅高、トランプ氏の大統領選勝利を好感", source: "CNN", time: "2024年11月7日 6:00" },
        { title: "米株式市場、トランプ氏勝利で上昇 S&P500は0.67%高", source: "ロイター", time: "2024年11月7日 5:30" },
        { title: "トランプ氏勝利でS&P500上昇、投資家は日本・インド株選好", source: "Bloomberg", time: "2024年11月7日 5:00" },
        { title: "米株式市場、トランプ氏勝利で上昇 S&P500は0.67%高", source: "ロイター", time: "2024年11月7日 4:30" },
        { title: "トランプ氏勝利でS&P500上昇、投資家は日本・インド株選好", source: "Bloomberg", time: "2024年11月7日 4:00" }
    ];

    // 重複を排除して最新のデータを取得
    const uniqueNews = {};
    newsData.forEach(news => {
        // 既に存在するタイトルなら配信時間を比較して最新のものだけを保持
        if (!uniqueNews[news.title] || uniqueNews[news.title].time < news.time) {
            uniqueNews[news.title] = news;
        }
    });

    // テーブルにニュースを表示
    const tableBody = document.getElementById("news-table");
    Object.values(uniqueNews).forEach(news => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${news.title}</td>
            <td>${news.source}</td>
            <td>${news.time}</td>
        `;
        tableBody.appendChild(row);
    });
});
