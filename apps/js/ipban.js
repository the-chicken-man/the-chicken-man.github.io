
  const bannedIPs = ["73.14.78.150"];

  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      const userIP = data.ip;

      if (bannedIPs.includes(userIP)) {
        
        window.location.href = "ipban.html";

      
      }
    });

