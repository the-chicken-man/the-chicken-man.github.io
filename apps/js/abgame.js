
        const toggleCheckbox = document.getElementById('toggleablank');

 
        const links = document.querySelectorAll('.sigma-btn');

        links.forEach(link => {
            link.addEventListener('click', function(event) {
                if (toggleCheckbox.checked) {
                    event.preventDefault();
                    openInAboutBlank(this.href);
                }
            });
        });


        function openInAboutBlank(url) {
            let newTab = window.open('about:blank', '_blank');
            newTab.document.body.innerHTML = `
                <iframe src="${url}" width="100%" height="100%" style="border: none; margin: 0; padding: 0; overflow: hidden;"></iframe>
            `;
        }
   