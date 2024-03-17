import React from 'react';
import "./Footer.css"; // Assicurati di avere un file CSS con lo stesso nome nella stessa directory

const Footer: React.FC = () => {
    return (
        <footer className="u-align-center u-clearfix u-footer u-hidden-lg u-hidden-md u-hidden-sm" id="sec-e962">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-expanded-width-xs u-list u-list-1">
                    <div className="u-repeater u-repeater-1">
                        {/* Elemento 1 */}
                        <div className="u-container-style u-grey-5 u-list-item u-radius u-repeater-item u-shape-round u-list-item-1" data-href="#">
                            <div className="u-container-layout u-similar-container u-valign-middle-xs u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-1">
                                <span className="u-custom-item u-file-icon u-hover-feature u-icon u-icon-1" data-href="PWRBALL.html">
                                    <img src="images/01.PWRBALL1.png" alt="" />
                                </span>
                            </div>
                        </div>
                        {/* Elemento 2 */}
                        <div className="u-container-style u-grey-5 u-list-item u-radius u-repeater-item u-shape-round u-list-item-2">
                            <div className="u-container-layout u-similar-container u-valign-middle-xs u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-2">
                                <span className="u-custom-item u-file-icon u-hover-feature u-icon u-icon-2" data-href="PWRTOKN.html">
                                    <img src="images/02.PWRTOKN1.png" alt="" />
                                </span>
                            </div>
                        </div>
                        {/* Ripeti per ogni altro elemento seguendo lo stesso schema */}
                        {/* Elemento 3 */}
                        <div className="u-container-style u-grey-5 u-list-item u-radius u-repeater-item u-shape-round u-list-item-3">
                            <div className="u-container-layout u-similar-container u-valign-middle-xs u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-3">
                                <span className="u-custom-item u-file-icon u-hover-feature u-icon u-icon-3" data-href="PWRPODS.html">
                                    <img src="images/03.PWRPODS1.png" alt="" />
                                </span>
                            </div>
                        </div>
                        {/* Elemento 4 */}
                        <div className="u-container-style u-grey-5 u-list-item u-radius u-repeater-item u-shape-round u-list-item-4">
                            <div className="u-container-layout u-similar-container u-valign-middle-xs u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-4">
                                <span className="u-custom-item u-file-icon u-hover-feature u-icon u-icon-4" data-href="PWRNFTS.html">
                                    <img src="images/04.PWRNFTS.png" alt="" />
                                </span>
                            </div>
                        </div>
                        {/* Elemento 5 */}
                        <div className="u-container-style u-grey-5 u-list-item u-radius u-repeater-item u-shape-round u-list-item-5">
                            <div className="u-container-layout u-similar-container u-valign-middle-xs u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-5">
                                <span className="u-custom-item u-file-icon u-hover-feature u-icon u-icon-5" data-href="PWRAI.html">
                                    <img src="images/05.PWRAi.png" alt="" />
                                </span>
                            </div>
                        </div>
                        {/* Elemento 6 */}
                        <div className="u-container-style u-grey-5 u-list-item u-radius u-repeater-item u-shape-round u-list-item-6">
                            <div className="u-container-layout u-similar-container u-valign-middle-xs u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-6">
                                <span className="u-custom-item u-file-icon u-hover-feature u-icon u-icon-6" data-href="PWRGAME.html">
                                    <img src="images/06.PWRGAME.png" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
