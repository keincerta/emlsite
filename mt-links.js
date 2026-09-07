const mtDownloadLinks={
  XMTrading:{MT4:'https://xem.fxsignup.com/trading-tool/install-flow.html',MT5:'https://xem.fxsignup.com/trading-tool/install-flow.html'},
  Exness:{MT4:'https://www.exness.com/metatrader-4/',MT5:'https://www.exness.com/metatrader-5/'},
  HFM:{MT4:'https://www.hfm.com/int/en/platforms/mt4-terminal',MT5:'https://www.hfm.com/int/en/platforms/mt5-terminal'}
};
function setMtDownloadLinks(){document.querySelectorAll('.broker').forEach(card=>{const name=card.querySelector('b')?.textContent.trim(),links=mtDownloadLinks[name];if(!links)return;card.querySelectorAll('.chip').forEach(link=>{const url=links[link.textContent.trim()];if(!url)return;link.href=url;link.target='_blank';link.rel='noopener';link.setAttribute('aria-label',`${name} ${link.textContent.trim()}のダウンロード案内`);});});}
new MutationObserver(setMtDownloadLinks).observe(document.querySelector('#panel'),{childList:true,subtree:true});
setMtDownloadLinks();
