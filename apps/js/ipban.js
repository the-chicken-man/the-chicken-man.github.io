
  const bannedIPs = ["164.92.9.26"];

  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      const userIP = data.ip;

      if (bannedIPs.includes(userIP)) {
        
        window.location.href = "ipban.html";

      
      }
    });

