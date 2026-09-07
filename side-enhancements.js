const sideDetail={
1:{title:'スキルを売る',note:'提供内容・納期・修正回数を先に決める。',items:[
['ココナラ','coconala.com','知識・スキル・経験を出品',['出品ガイド','サービス内容','価格・手数料','納期・修正']],
['ランサーズ','lancers.jp','パッケージ・提案で受注',['パッケージ','提案','プロフィール','契約条件']],
['クラウドワークス','crowdworks.jp','案件へ応募して受注',['仕事を探す','応募','契約内容','納品・検収']]],check:['提供範囲','納期','修正回数','手数料']},
2:{title:'発信する',note:'実績・専門性・問い合わせ先を一つにまとめる。',items:[
['note','note.com','記事・作品を発信',['投稿する','プロフィール','有料記事','メンバーシップ']],
['ポートフォリオ','note.com','実績を見せる入口',['実績一覧','できること','料金目安','問い合わせ']],
['SNS・紹介','note.com','発信先からサービスへつなぐ',['プロフィール固定','実績紹介','リンク集','更新頻度']]],check:['誰向けか','実績・サンプル','連絡先','公開範囲']},
3:{title:'管理する',note:'受注・納品・入金を同じ記録で追う。',items:[
['案件台帳','coconala.com','依頼内容と進行を記録',['依頼日','納期','作業状況','納品日']],
['売上・経費','lancers.jp','入金と支出を記録',['売上日','手数料','経費','領収書']],
['契約・証跡','crowdworks.jp','条件とやり取りを保存',['契約条件','修正依頼','納品データ','入金確認']]],check:['納期','入金予定','手数料','証跡保存']}
};
function sideChips(a){return a.map(x=>`<a class="chip" href="#${x.includes('納期')?'side-deadline':x.includes('手数料')?'side-fee':x.includes('実績')?'side-portfolio':x.includes('入金')?'side-payment':x.toLowerCase()}">${x}</a>`).join('')}
function sideCard(x){return `<article class="broker"><div class="broker-top"><img src="https://www.google.com/s2/favicons?domain=${x[1]}&sz=128" alt="${x[0]} ロゴ"><div><b>${x[0]}</b><small>${x[2]}</small></div><a class="go" href="https://${x[1]}" target="_blank" rel="noopener" aria-label="${x[0]}公式サイト">↗</a></div><div class="broker-chips">${sideChips(x[3])}</div></article>`}
function showSideDetail(id){const d=sideDetail[id];document.querySelector('#panel').innerHTML=`<div class="tab-content"><div class="content-head"><h2>${d.title}</h2><p>${d.note}</p></div><div class="broker-grid">${d.items.map(sideCard).join('')}</div><div class="anchor-row" id="side-deadline"><b>始める前に確認</b>${sideChips(d.check)}</div></div>`}
document.addEventListener('click',e=>{const btn=e.target.closest('[data-sub]');if(!btn||document.querySelector('#main-title').textContent!=='副業'||!sideDetail[btn.dataset.sub])return;setTimeout(()=>showSideDetail(btn.dataset.sub),0)});
