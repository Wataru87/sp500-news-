document.addEventListener('DOMContentLoaded', () => {
    // ニュースデータ（ダミーのURLを含めた例）
    const newsData = [
        { title: "米株大幅高、トランプ氏の大統領選勝利を好感", source: "CNN", time: "2024年11月7日 6:00", url: "https://example.com/1" },
        { title: "米株式市場、トランプ氏勝利で上昇 S&P500は0.67%高", source: "ロイター", time: "2024年11月7日 5:30", url: "https://example.com/2" },
        { title: "トランプ氏勝利でS&P500上昇、投資家は日本・インド株選好", source: "Bloomberg", time: "2024年11月7日 5:00", url: "https://example.com/3" },
        // 必要に応じて20件まで追加
    ];

    // 重複を排除し、最新順に20件のデータを取得
    const uniqueNews = {};
    newsData.forEach(news => {
        if (!uniqueNews[news.title] || uniqueNews[news.title].time < news.time) {
            uniqueNews[news.title] = news;
        }
    });

    const sortedNews = Object.values(uniqueNews)
        .sort((a, b) => new Date(b.time) - new Date(a.time)) // 新しい順にソート
        .slice(0, 20); // 最新20件を抽出

    // テーブルにニュースを表示
    const tableBody = document.getElementById("news-table");
    sortedNews.forEach(news => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${news.time}</td>
            <td>${news.source}</td>
            <td class="news-title"><a href="${news.url}" target="_blank">${news.title}</a></td>
        `;
        tableBody.appendChild(row);
    });
});
