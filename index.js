let cookie = {
  cps: 1,
  cpc: 1,
  cpsUpgradePrice: 1,
  cpcUpgradePrice: 1,
  cookies: 1
}

function refreshStats() {
  document.querySelector(".cookie-count").innerText = cookie.cookies;
  document.querySelector(".cps").innerText = cookie.cps;
  document.querySelector(".cpsPrice").innerText = cookie.cpsUpgradePrice;
  document.querySelector(".cpc").innerText = cookie.cpc;
  document.querySelector(".cpcPrice").innerText = cookie.cpcUpgradePrice;
}

refreshStats();

document.querySelector(".cookie").addEventListener("click", function() {
  cookie.cookies += cookie.cpc;
  console.log(cookie.cookies);
  refreshStats();
})

document.querySelector(".upgradeCPC").addEventListener("click", function() {
  if (checkBalance(cookie.cpcUpgradePrice) === true) {
    cookie.cookies -= cookie.cpcUpgradePrice;
    cookie.cpc++;
    cookie.cpcUpgradePrice = Math.round(cookie.cpcUpgradePrice * 1.5);
    refreshStats();
  }
})

document.querySelector(".upgradeCPS").addEventListener("click", function() {
  if (checkBalance(cookie.cpsUpgradePrice) === true) {
    cookie.cookies -= cookie.cpsUpgradePrice;
    cookie.cps++;
    cookie.cpsUpgradePrice = Math.round(cookie.cpsUpgradePrice * 1.5);
    refreshStats();
  }
})

function checkBalance(needed) {
  if (cookie.cookies > needed) {
    return true;
  } else {
    window.alert("Too low balance, sorry!")
    return false;
  }
}

function cookiesPerSecond() {
  cookie.cookies += cookie.cps;
  refreshStats();
}

setInterval(function () {
  cookiesPerSecond();
}, 1000);
