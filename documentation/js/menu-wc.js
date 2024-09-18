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
                    <a href="index.html" data-type="index-link">appli-crm documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-cb0e56e82d9b261e1a69b205ea270e62c9a6af7eb843c5ed7c53343ae2fb45b59cbd61f409753d17e055b6cb71c48600751441f7b8c398457900e86b2700debc"' : 'data-bs-target="#xs-components-links-module-AppModule-cb0e56e82d9b261e1a69b205ea270e62c9a6af7eb843c5ed7c53343ae2fb45b59cbd61f409753d17e055b6cb71c48600751441f7b8c398457900e86b2700debc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cb0e56e82d9b261e1a69b205ea270e62c9a6af7eb843c5ed7c53343ae2fb45b59cbd61f409753d17e055b6cb71c48600751441f7b8c398457900e86b2700debc"' :
                                            'id="xs-components-links-module-AppModule-cb0e56e82d9b261e1a69b205ea270e62c9a6af7eb843c5ed7c53343ae2fb45b59cbd61f409753d17e055b6cb71c48600751441f7b8c398457900e86b2700debc"' }>
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
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ClientsModule-ff3eb49b0a6ba603e074bc2254ee0f549f331c621a12de8f87af2d72af7344d3f0eb702c644541ffee571e4a2bb6c583cbd1dceb831ce5923da40edc9da241e8"' : 'data-bs-target="#xs-components-links-module-ClientsModule-ff3eb49b0a6ba603e074bc2254ee0f549f331c621a12de8f87af2d72af7344d3f0eb702c644541ffee571e4a2bb6c583cbd1dceb831ce5923da40edc9da241e8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-ff3eb49b0a6ba603e074bc2254ee0f549f331c621a12de8f87af2d72af7344d3f0eb702c644541ffee571e4a2bb6c583cbd1dceb831ce5923da40edc9da241e8"' :
                                            'id="xs-components-links-module-ClientsModule-ff3eb49b0a6ba603e074bc2254ee0f549f331c621a12de8f87af2d72af7344d3f0eb702c644541ffee571e4a2bb6c583cbd1dceb831ce5923da40edc9da241e8"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link" >ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LoginModule-9161432cde945426d35801f098124a7b176cad653b23bd17f2e1abe9c9a0a256d1564b6e91172c7d668b1d11725bf9c9ac700e12b947e49f7c8d707283e5bd76"' : 'data-bs-target="#xs-components-links-module-LoginModule-9161432cde945426d35801f098124a7b176cad653b23bd17f2e1abe9c9a0a256d1564b6e91172c7d668b1d11725bf9c9ac700e12b947e49f7c8d707283e5bd76"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-9161432cde945426d35801f098124a7b176cad653b23bd17f2e1abe9c9a0a256d1564b6e91172c7d668b1d11725bf9c9ac700e12b947e49f7c8d707283e5bd76"' :
                                            'id="xs-components-links-module-LoginModule-9161432cde945426d35801f098124a7b176cad653b23bd17f2e1abe9c9a0a256d1564b6e91172c7d668b1d11725bf9c9ac700e12b947e49f7c8d707283e5bd76"' }>
                                            <li class="link">
                                                <a href="components/PageForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-OrdersModule-633d72bfac5e352fdcfcb94b36a08587ccc18022aadb9aa03c2e50ba3af4b25f89b08c82c1331641f4cfe13d4e6adc0be5b09693e0927f1da1468757da0bc88c"' : 'data-bs-target="#xs-components-links-module-OrdersModule-633d72bfac5e352fdcfcb94b36a08587ccc18022aadb9aa03c2e50ba3af4b25f89b08c82c1331641f4cfe13d4e6adc0be5b09693e0927f1da1468757da0bc88c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-633d72bfac5e352fdcfcb94b36a08587ccc18022aadb9aa03c2e50ba3af4b25f89b08c82c1331641f4cfe13d4e6adc0be5b09693e0927f1da1468757da0bc88c"' :
                                            'id="xs-components-links-module-OrdersModule-633d72bfac5e352fdcfcb94b36a08587ccc18022aadb9aa03c2e50ba3af4b25f89b08c82c1331641f4cfe13d4e6adc0be5b09693e0927f1da1468757da0bc88c"' }>
                                            <li class="link">
                                                <a href="components/PageAddOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});