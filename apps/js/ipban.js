const bannedIPs = [
            '73.14.78.150',
            //i will add more if you mean
        ];

        async function checkIP() {
            try {
                const response = await fetch('https://api64.ipify.org?format=json');
                const data = await response.json();
                const userIP = data.ip;

                if (bannedIPs.includes(userIP)) {
                    document.body.innerHTML = <embed src="./ipban.html" height="100%" width="100%"></embed>;
                }
            } catch (error) {
                console.error('Failed to get IP:', error);
            }
        }

        function showAppealForm() {
            document.getElementById('appealForm').style.display = 'block';
        }

        window.onload = checkIP;