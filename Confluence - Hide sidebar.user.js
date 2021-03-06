// ==UserScript==
// @name        Confluence - Hide sidebar
// @namespace   https://github.com/adamhotep/userscripts
// @description Collapse the sidebar upon page load
// @include     https://confluence.*
// @include     http://confluence.*
// @grant       none
// @author      Adam Katz
// @version     1
// @copyright   2016+ by Adam Katz
// @license     GPL
// @licstart    The following is the entire license notice for this script.
/* 
 * Copyright (C) 2016  Adam Katz
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of version 3 of the GNU General Public License as published
 * by the Free Software Foundation. This program is distributed in the hope
 * that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * included LICENSE file or else http://www.gnu.org/licenses for more details.
 *
 * Beerware: If you think this is worth it, you are welcome to buy me a beer.
 */ 
// @licend      The above is the entire license notice for this script.
// ==/UserScript==

// more info at https://stackoverflow.com/a/35853814/519360
if (typeof AJS === 'function') {
  AJS.toInit(function(){
    if (AJS.$("div.ia-fixed-sidebar").width() > 55){
      AJS.Confluence.Sidebar.toggle();
    }
  });
}
