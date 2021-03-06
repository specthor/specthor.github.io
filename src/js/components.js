class VanillaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <footer id="footer">
            <div class="footer-bot">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <p id="footer-made-with">
                                <i class="fab fa-html5" aria-hidden="true"></i> 
                                + <i class="fab fa-css3" aria-hidden="true"></i> 
                                + <i class="fab fa-js" aria-hidden="true"></i> <br />
                            </p>
                            <p>
                                Kein Framework. Kein Template. Vanilla JS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

class VanillaAboutBlock extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <div class="author-container clearfix">
            <div class="author-image-container">
                <img class="author-image" src="../src/img/thorsten-specht-foto.1024x1024.jpg">
            </div>
            <div class="author-description-container">
                <strong s>Thorsten Specht</strong>
                <p>Thorsten Specht ist Softwaretester und bloggt über Themen rund um's Testen, Entwickeln und Gestalten. Auf dieser Seite tobt er sich mit HTML, CSS und JavaScript aus, ohne auf Frameworks, Bibliotheken oder Templates zurückzugreifen.</p>
            </div>
        </div>       
        `;
    }
}

class VanillaHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <header>
            <nav>
                <div id="desktop-nav">
                    <div class="topnav">
                        <a href="index.html" class="topnav-left" id="desktop-nav-about">Über mich</a>
                        <a href="javascript.html" class="topnav-left" id="desktop-nav-vanilla">Vanilla JS</a>
                        <a href="blog.html" class="topnav-left" id="desktop-nav-blog">Blog</a>
                        <a href="impressum.html" class="topnav-left" id="desktop-nav-impressum">Impressum</a>                    
                        <a href="https://www.xing.com/profile/Thorsten_Specht6/cv" class="fab fa-xing topnav-right"></a>
                        <a href="https://github.com/specthor" class="fab fa-github topnav-right"></a>
                    </div>
                </div>

                <div id="mobile-nav">

                    <!-- sidebar navigation -->
                    <div id="mySidenav" class="sidenav">
                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                        <a href="index.html">Über mich</a>
                        <a href="javascript.html">Vanilla JS</a>
                        <a href="blog.html">Blog</a>
                        <a href="impressum.html">Impressum</a>    
                        
                        <div class="sidenav-social">
                            <a href="https://www.xing.com/profile/Thorsten_Specht6/cv" class="fab fa-xing"></a>
                            <a href="https://github.com/specthor" class="fab fa-github"></a>
                        </div>
                    </div>                

                    <!-- Use any element to open the sidenav -->
                    <span id="openMenuBtn" onclick="openNav()">&equiv;</span>
                </div>
                <div id="header-vanilla"></div>
            </nav>
        </header>
        `;
    }
}

class VanillaHeroBanner extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `

        `;
    }
}

customElements.define('vanilla-footer', VanillaFooter);
customElements.define('vanilla-header', VanillaHeader);
customElements.define('vanilla-about-block', VanillaAboutBlock);
customElements.define('vanilla-hero-banner', VanillaHeroBanner);