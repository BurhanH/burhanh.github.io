document.addEventListener("DOMContentLoaded", () => {
    const isArchivePage = window.location.pathname.includes("episodes.html");
    const isConversationPage = window.location.pathname.includes("conversation.html");
    const isMusicPage = window.location.pathname.includes("music.html");
    const isAboutPage = window.location.pathname.includes("about.html");
    const player = document.getElementById("audio-player");
    const source = document.getElementById("audio-source");
    const title = document.getElementById("current-title");
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle.querySelector("i");
    const root = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    root.setAttribute("data-theme", savedTheme);
    themeIcon.className = savedTheme === "light" ? "fas fa-lightbulb" : "fas fa-moon";

    // Theme toggle
    themeToggle.addEventListener("click", () => {
        const currentTheme = root.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        root.setAttribute("data-theme", newTheme);
        themeIcon.className = newTheme === "light" ? "fas fa-lightbulb" : "fas fa-moon";
        localStorage.setItem("theme", newTheme);
    });

    // Page-specific logic
    if (isMusicPage) {
        fetch("data/music.json")
            .then((response) => response.json())
            .then((tracks) => {
                const musicList = document.getElementById("music-list");
                tracks.filter((track) => track.published)
                      .sort((a, b) => b.id - a.id)
                      .forEach((track) => {
                          const section = document.createElement("section");
                          section.className = "track";
                          section.setAttribute("data-src", track.audio);
                          section.setAttribute("data-title", track.title);
                          section.innerHTML = `
                              <img src="${track.artwork}" alt="${track.title} Artwork" class="artwork">
                              <h2>${track.title}</h2>
                              <p>${track.releaseDate}</p>
                              <p>${track.description}</p>
                          `;
                          section.addEventListener("click", () => {
                              source.src = track.audio;
                              title.textContent = track.title;
                              player.load();
                              player.play();
                          });
                          musicList.appendChild(section);
                      });
            })
            .catch((error) => console.error("Error loading music:", error)); // eslint-disable-line no-console
    } else if (isConversationPage) {
        fetch("data/conversation.json")
            .then((response) => response.json())
            .then((episodes) => {
                const conversationList = document.getElementById("conversation-list");
                episodes.filter(episode => episode.published)
                        .sort((a, b) => b.id - a.id)
                        .forEach((episode) => {
                            const section = document.createElement("section");
                            section.className = "episode";
                            section.setAttribute("data-src", episode.audio);
                            section.setAttribute("data-title", episode.title);
                            const langIcon = episode.language === "pt" ? "<i class=\"fas fa-globe-americas\" title=\"Portuguese\"></i>" :
                                             episode.language === "ru" ? "<i class=\"fas fa-globe-asia\" title=\"Russian\"></i>" :
                                             episode.language === "de" ? "<i class=\"fas fa-globe-europe\" title=\"German\"></i>" :
                                             episode.language === "fr" ? "<i class=\"fas fa-globe-europe\" title=\"French\"></i>" :
                                                                         "<i class=\"fas fa-globe-americas\" title=\"English\"></i>";
                            section.innerHTML = `
                                <h2>${episode.title} <span class="lang-icon">${langIcon}</span></h2>
                                <p>${episode.releaseDate}</p>
                                <p>${episode.description}</p>
                                <button class="transcript-toggle">Show Transcript</button>
                                <div class="transcript" style="display: none;"></div>
                            `;
                            section.addEventListener("click", () => {
                                source.src = episode.audio;
                                title.textContent = episode.title;
                                player.load();
                                player.play();
                            });

                            if (episode.transcript) {
                                const toggle = section.querySelector(".transcript-toggle");
                                const transcriptDiv = section.querySelector(".transcript");
                                fetch(episode.transcript)
                                    .then(response => response.json())
                                    .then((transcriptData) => {
                                        transcriptDiv.innerHTML = "<h3>Transcript</h3>";
                                        transcriptData.transcript.forEach((entry) => {
                                            const p = document.createElement("p");
                                            p.innerHTML = entry;
                                            transcriptDiv.appendChild(p);
                                        });
                                    })
                                    .catch((error) => console.error("Error loading transcript:", error)); // eslint-disable-line no-console

                                toggle.addEventListener("click", () => {
                                    const isHidden = transcriptDiv.style.display === "none" || transcriptDiv.style.display === "";
                                    transcriptDiv.style.display = isHidden ? "block" : "none";
                                    toggle.textContent = isHidden ? "Hide Transcript" : "Show Transcript";
                                });
                            } else {
                                section.querySelector(".transcript-toggle").style.display = "none";
                            }

                            conversationList.appendChild(section);
                        });
            })
            .catch((error) => console.error("Error loading conversations:", error)); // eslint-disable-line no-console
        }
    else if (isArchivePage || !isAboutPage) {
        fetch("data/episodes.json")
            .then(response => response.json())
            .then((episodes) => {
                const episodeList = document.getElementById("episode-list");
                let filteredEpisodes = episodes
                    .filter((episode) => episode.published)
                    .sort((a, b) => b.id - a.id);
                if (!isArchivePage) {
                    filteredEpisodes = filteredEpisodes.slice(0, 1);
                }
                filteredEpisodes.forEach((episode) => {
                    const section = document.createElement("section");
                    section.className = "episode";
                    section.setAttribute("data-src", episode.audio);
                    section.setAttribute("data-title", episode.title);
                    // Add language icon based on language field
                    const langIcon = episode.language === "pt" ? "<i class=\"fas fa-globe-americas\" title=\"Portuguese\"></i>" :
                                     episode.language === "ru" ? "<i class=\"fas fa-globe-asia\" title=\"Russian\"></i>" :
                                     episode.language === "de" ? "<i class=\"fas fa-globe-europe\" title=\"German\"></i>" :
                                     episode.language === "fr" ? "<i class=\"fas fa-globe-europe\" title=\"French\"></i>" :
                                                                 "<i class=\"fas fa-globe-americas\" title=\"English\"></i>";
                    section.innerHTML = `
                        <h2>${episode.title} <span class="lang-icon">${langIcon}</span></h2>
                        <p>${episode.releaseDate}</p>
                        <p>${episode.description}</p>
                        <button class="transcript-toggle">Show Transcript</button>
                        <div class="transcript" style="display: none;"></div>
                    `;
                    section.addEventListener("click", () => {
                        source.src = episode.audio;
                        title.textContent = episode.title;
                        player.load();
                        player.play();1
                    });

                    // Load transcript
                    if (episode.transcript) {
                        const toggle = section.querySelector(".transcript-toggle");
                        const transcriptDiv = section.querySelector(".transcript");
                        fetch(episode.transcript)
                            .then(response => response.json())
                            .then((transcriptData) => {
                                transcriptDiv.innerHTML = "<h3>Transcript</h3>";
                                transcriptData.transcript.forEach((entry) => {
                                    const p = document.createElement("p");
                                    p.innerHTML = entry;
                                    transcriptDiv.appendChild(p);
                                });
                            })
                            .catch((error) => console.error("Error loading transcript:", error)); // eslint-disable-line no-console

                        toggle.addEventListener("click", () => {
                            const isHidden = transcriptDiv.style.display === "none" || transcriptDiv.style.display === "";
                            transcriptDiv.style.display = isHidden ? "block" : "none";
                            toggle.textContent = isHidden ? "Hide Transcript" : "Show Transcript";
                        });
                    } else {
                        section.querySelector(".transcript-toggle").style.display = "none";
                    }

                    episodeList.appendChild(section);
                });
            })
            .catch((error) => console.error("Error loading episodes:", error)); // eslint-disable-line no-console
    }
});