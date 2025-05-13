
  const bannedIPs = ["//nothing"];

  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      const userIP = data.ip;

      if (bannedIPs.includes(userIP)) {
        
        window.location.href = "ipban.html";

      
      }
    });

