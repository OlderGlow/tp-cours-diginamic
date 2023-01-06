'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">projet documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AjouterCoursPageModule.html" data-type="entity-link" >AjouterCoursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AjouterCoursPageModule-b2d299912cfefd676440fb13c31183603fdab0acbb90dfb559d104e08aee94445a2e58af162bf50de0a5f2cf42841f4af3b4bdbe8290a0b9b7ea746104c52d15"' : 'data-target="#xs-components-links-module-AjouterCoursPageModule-b2d299912cfefd676440fb13c31183603fdab0acbb90dfb559d104e08aee94445a2e58af162bf50de0a5f2cf42841f4af3b4bdbe8290a0b9b7ea746104c52d15"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AjouterCoursPageModule-b2d299912cfefd676440fb13c31183603fdab0acbb90dfb559d104e08aee94445a2e58af162bf50de0a5f2cf42841f4af3b4bdbe8290a0b9b7ea746104c52d15"' :
                                            'id="xs-components-links-module-AjouterCoursPageModule-b2d299912cfefd676440fb13c31183603fdab0acbb90dfb559d104e08aee94445a2e58af162bf50de0a5f2cf42841f4af3b4bdbe8290a0b9b7ea746104c52d15"' }>
                                            <li class="link">
                                                <a href="components/AjouterCoursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AjouterCoursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AjouterCoursPageRoutingModule.html" data-type="entity-link" >AjouterCoursPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AjouterProfesseurPageModule.html" data-type="entity-link" >AjouterProfesseurPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AjouterProfesseurPageModule-08b1ee643d1072a3198ca7ecb4471faf1919387a2fdc24aa2daf95c64e229f31dfbf36d0f7c6dcf2a0dad5327ca7fc82501ee240b5c52f3ab405cd1e78382734"' : 'data-target="#xs-components-links-module-AjouterProfesseurPageModule-08b1ee643d1072a3198ca7ecb4471faf1919387a2fdc24aa2daf95c64e229f31dfbf36d0f7c6dcf2a0dad5327ca7fc82501ee240b5c52f3ab405cd1e78382734"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AjouterProfesseurPageModule-08b1ee643d1072a3198ca7ecb4471faf1919387a2fdc24aa2daf95c64e229f31dfbf36d0f7c6dcf2a0dad5327ca7fc82501ee240b5c52f3ab405cd1e78382734"' :
                                            'id="xs-components-links-module-AjouterProfesseurPageModule-08b1ee643d1072a3198ca7ecb4471faf1919387a2fdc24aa2daf95c64e229f31dfbf36d0f7c6dcf2a0dad5327ca7fc82501ee240b5c52f3ab405cd1e78382734"' }>
                                            <li class="link">
                                                <a href="components/AjouterProfesseurPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AjouterProfesseurPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AjouterProfesseurPageRoutingModule.html" data-type="entity-link" >AjouterProfesseurPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a362047d125b4e5fbfc04f0688bdda373d79c5c7fb2b78eafee142dcf954b6ce5ce66b6bf8aa6cd5c0d29f6629fe7a9e1bc3affa60d54d74bec989242d770966"' : 'data-target="#xs-components-links-module-AppModule-a362047d125b4e5fbfc04f0688bdda373d79c5c7fb2b78eafee142dcf954b6ce5ce66b6bf8aa6cd5c0d29f6629fe7a9e1bc3affa60d54d74bec989242d770966"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a362047d125b4e5fbfc04f0688bdda373d79c5c7fb2b78eafee142dcf954b6ce5ce66b6bf8aa6cd5c0d29f6629fe7a9e1bc3affa60d54d74bec989242d770966"' :
                                            'id="xs-components-links-module-AppModule-a362047d125b4e5fbfc04f0688bdda373d79c5c7fb2b78eafee142dcf954b6ce5ce66b6bf8aa6cd5c0d29f6629fe7a9e1bc3affa60d54d74bec989242d770966"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-68ca95e4cac66a96df15bec7d73d5edd5786385ce13d31be5c0f16e5b6f653237d6ae5e6a79e25d23f3738ee990435cfdfcdfc79b3a781c10ee6be394e38b592"' : 'data-target="#xs-components-links-module-HomePageModule-68ca95e4cac66a96df15bec7d73d5edd5786385ce13d31be5c0f16e5b6f653237d6ae5e6a79e25d23f3738ee990435cfdfcdfc79b3a781c10ee6be394e38b592"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-68ca95e4cac66a96df15bec7d73d5edd5786385ce13d31be5c0f16e5b6f653237d6ae5e6a79e25d23f3738ee990435cfdfcdfc79b3a781c10ee6be394e38b592"' :
                                            'id="xs-components-links-module-HomePageModule-68ca95e4cac66a96df15bec7d73d5edd5786385ce13d31be5c0f16e5b6f653237d6ae5e6a79e25d23f3738ee990435cfdfcdfc79b3a781c10ee6be394e38b592"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListerCoursPageModule.html" data-type="entity-link" >ListerCoursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListerCoursPageModule-42a0a47d9524554b48c84664f6d4abd0e0bfe46711a3ee3d8637262d42a790ca962d9200fae7a44f4fe309362cd5113915155f0da20fee8db221b9a4f1158e37"' : 'data-target="#xs-components-links-module-ListerCoursPageModule-42a0a47d9524554b48c84664f6d4abd0e0bfe46711a3ee3d8637262d42a790ca962d9200fae7a44f4fe309362cd5113915155f0da20fee8db221b9a4f1158e37"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListerCoursPageModule-42a0a47d9524554b48c84664f6d4abd0e0bfe46711a3ee3d8637262d42a790ca962d9200fae7a44f4fe309362cd5113915155f0da20fee8db221b9a4f1158e37"' :
                                            'id="xs-components-links-module-ListerCoursPageModule-42a0a47d9524554b48c84664f6d4abd0e0bfe46711a3ee3d8637262d42a790ca962d9200fae7a44f4fe309362cd5113915155f0da20fee8db221b9a4f1158e37"' }>
                                            <li class="link">
                                                <a href="components/ListerCoursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListerCoursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListerCoursPageRoutingModule.html" data-type="entity-link" >ListerCoursPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListerProfesseurPageModule.html" data-type="entity-link" >ListerProfesseurPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListerProfesseurPageModule-2ecc857e5d653aae8a9eef824f23313a5b16205b94dad8b1cca9088428d3b933a0be29f87c09bf78b1baea4441f47e340c86dd5756b2f7384a22f4860bcef5bf"' : 'data-target="#xs-components-links-module-ListerProfesseurPageModule-2ecc857e5d653aae8a9eef824f23313a5b16205b94dad8b1cca9088428d3b933a0be29f87c09bf78b1baea4441f47e340c86dd5756b2f7384a22f4860bcef5bf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListerProfesseurPageModule-2ecc857e5d653aae8a9eef824f23313a5b16205b94dad8b1cca9088428d3b933a0be29f87c09bf78b1baea4441f47e340c86dd5756b2f7384a22f4860bcef5bf"' :
                                            'id="xs-components-links-module-ListerProfesseurPageModule-2ecc857e5d653aae8a9eef824f23313a5b16205b94dad8b1cca9088428d3b933a0be29f87c09bf78b1baea4441f47e340c86dd5756b2f7384a22f4860bcef5bf"' }>
                                            <li class="link">
                                                <a href="components/ListerProfesseurPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListerProfesseurPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListerProfesseurPageRoutingModule.html" data-type="entity-link" >ListerProfesseurPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-635ace22d644d25d2548fd03e16f6a47669cf42203e650fe98b1bca139c6ade9fb742a83082f353280c7ba3d223a19529e16c992dc5b5d9a7cf042f1ad48217c"' : 'data-target="#xs-components-links-module-LoginPageModule-635ace22d644d25d2548fd03e16f6a47669cf42203e650fe98b1bca139c6ade9fb742a83082f353280c7ba3d223a19529e16c992dc5b5d9a7cf042f1ad48217c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-635ace22d644d25d2548fd03e16f6a47669cf42203e650fe98b1bca139c6ade9fb742a83082f353280c7ba3d223a19529e16c992dc5b5d9a7cf042f1ad48217c"' :
                                            'id="xs-components-links-module-LoginPageModule-635ace22d644d25d2548fd03e16f6a47669cf42203e650fe98b1bca139c6ade9fb742a83082f353280c7ba3d223a19529e16c992dc5b5d9a7cf042f1ad48217c"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RechercherCoursPageModule.html" data-type="entity-link" >RechercherCoursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RechercherCoursPageModule-b7ca1edafbf9750210dd7b8ac033ee42b306f32944d454564bdbb344d2b6b4c62ab7dff886bdfee26b705c320d1287f63b5d96f5f4edaa13f9b1e89fe44a2324"' : 'data-target="#xs-components-links-module-RechercherCoursPageModule-b7ca1edafbf9750210dd7b8ac033ee42b306f32944d454564bdbb344d2b6b4c62ab7dff886bdfee26b705c320d1287f63b5d96f5f4edaa13f9b1e89fe44a2324"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RechercherCoursPageModule-b7ca1edafbf9750210dd7b8ac033ee42b306f32944d454564bdbb344d2b6b4c62ab7dff886bdfee26b705c320d1287f63b5d96f5f4edaa13f9b1e89fe44a2324"' :
                                            'id="xs-components-links-module-RechercherCoursPageModule-b7ca1edafbf9750210dd7b8ac033ee42b306f32944d454564bdbb344d2b6b4c62ab7dff886bdfee26b705c320d1287f63b5d96f5f4edaa13f9b1e89fe44a2324"' }>
                                            <li class="link">
                                                <a href="components/RechercherCoursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RechercherCoursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RechercherCoursPageRoutingModule.html" data-type="entity-link" >RechercherCoursPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RechercherProfesseurPageModule.html" data-type="entity-link" >RechercherProfesseurPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RechercherProfesseurPageModule-fc5881e74877e48e4c2feb6f688d0cc65e8a96e3849056f30d2130aa52f4614d18591b809b1cc95c5605d00e5b25f1e2db98dec7af98848d4b88c9408b0eaf4e"' : 'data-target="#xs-components-links-module-RechercherProfesseurPageModule-fc5881e74877e48e4c2feb6f688d0cc65e8a96e3849056f30d2130aa52f4614d18591b809b1cc95c5605d00e5b25f1e2db98dec7af98848d4b88c9408b0eaf4e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RechercherProfesseurPageModule-fc5881e74877e48e4c2feb6f688d0cc65e8a96e3849056f30d2130aa52f4614d18591b809b1cc95c5605d00e5b25f1e2db98dec7af98848d4b88c9408b0eaf4e"' :
                                            'id="xs-components-links-module-RechercherProfesseurPageModule-fc5881e74877e48e4c2feb6f688d0cc65e8a96e3849056f30d2130aa52f4614d18591b809b1cc95c5605d00e5b25f1e2db98dec7af98848d4b88c9408b0eaf4e"' }>
                                            <li class="link">
                                                <a href="components/RechercherProfesseurPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RechercherProfesseurPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RechercherProfesseurPageRoutingModule.html" data-type="entity-link" >RechercherProfesseurPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoursServiceService.html" data-type="entity-link" >CoursServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PhotoService.html" data-type="entity-link" >PhotoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfesseurService.html" data-type="entity-link" >ProfesseurService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginGuard.html" data-type="entity-link" >LoginGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cours.html" data-type="entity-link" >Cours</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Photos.html" data-type="entity-link" >Photos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Professeur.html" data-type="entity-link" >Professeur</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});